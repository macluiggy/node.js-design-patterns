class Process {
  state: string;
  constructor(state: string) {
    this.state = state;
  }
}

const Singleton = (function () {
  class ProcessManager {
    numProcesses: number;
    constructor() {
      this.numProcesses = 0;
    }
    pManager = new ProcessManager();

    createProcessManager() {
      this.pManager = new ProcessManager();
      return this.pManager;
    }

    getManager() {
      return this.pManager;
    }
  }
  let pManager: ProcessManager = new ProcessManager().getManager();
  console.log(pManager);
  
  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = new ProcessManager().getManager();
        return pManager;
      }
    },
  };
})();

const pManagerDoesNotExist = Singleton.getProcessManager();
const pManagerExists = Singleton.getProcessManager();
console.log(pManagerDoesNotExist === pManagerExists);


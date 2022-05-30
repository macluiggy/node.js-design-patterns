function Subject(this) {
  this.observers = [];
}

Subject.prototype = {
  ...Subject.prototype,
  subscribe: function (addObserver) {
    this.observers.push(addObserver);
  },
  unsubscribe: function (removeObserver) {
    this.observers = this.observers.filter(
      (observer) => observer !== removeObserver
    );
  },
  fire: function () {
    this.observers.forEach((observer) => observer.call());
  },
};

const subject = new Subject();

const observer1 = () => console.log("Observer 1 firing");
const observer2 = () => console.log("Observer 2 firing");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.fire()

subject.unsubscribe(observer2);

subject.fire();
class Fedex {
  calculate: (pacakage) => number;
  constructor() {
    this.calculate = (packages) => 2.45;
  }
}

class UPS {
  calculate: (pacakage) => number;
  constructor() {
    this.calculate = (packages) => 1.56;
  }
}

class USPS {
  calculate: (pacakage) => number;
  constructor() {
    this.calculate = (packages) => 4.5;
  }
}
type Company = Fedex | UPS | USPS;

class Shipping {
  
  company: Company
  total: number;
  constructor(company: Company) {
    this.company = company;
    this.total = 0;
  }

  setStrategy(company: Company) {
    this.company = company;
  }

  calculate(packages) {
    this.total = this.company.calculate(packages);
  }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const packages = { from: "Ala", to: "Georgia", weight: 1.56 };

const shipping = new Shipping(fedex);
shipping.calculate(packages);
console.log(shipping.total);
shipping.setStrategy(ups);
console.log(shipping.total);
shipping.calculate(packages);
console.log(shipping.total);
shipping.setStrategy(usps);
console.log(shipping.total);
shipping.calculate(packages);

console.log(shipping.total);

import { Calculator } from './calculator';
import moment from 'moment';

describe("Calculator", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();
    const fee = calc.getFee({
      userType: 0,
      itemType: 0,
      price: 10,
      endDate: moment().format("YYYY-MM-DD")
    });

    expect(fee).toBe(25);
  });
});

describe("testCompanyAuctionNow", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();  
    const fee = calc.getFee({
      userType: 1,
      itemType: 0,
      price: 101,
      endDate: moment().format("YYYY-MM-DD")
    });

    expect(fee).toBe(111);
  });
});

describe("testCompanyAuctionNotNow", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();
    const fee = calc.getFee({
      userType: 1,       
      itemType: 0,
      price: 101,
      endDate: moment().subtract(1, "days").format("YYYY-MM-DD")
    });

    expect(fee).toBe(121);
  });
});

describe("testCompanyBuyItNow", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();
    const fee = calc.getFee({
      userType: 1,
      itemType: 1,
      price: 101,
      endDate: moment().format("YYYY-MM-DD")
    });

    expect(fee).toBe(121);
  });
});

describe("testNormalAuctionNow", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();
    const fee = calc.getFee({
      userType: 0,
      itemType: 0,
      price: 101,
      endDate: moment().format("YYYY-MM-DD")
    });

    expect(fee).toBe(116);
  });
});

describe("testNormalAuctionNotNow", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();
    const fee = calc.getFee({
      userType: 0,
      itemType: 0,
      price: 101,
      endDate: moment().subtract(1, "days").format("YYYY-MM-DD")
    });

    expect(fee).toBe(126);
  });
});

describe("testNormalBuyItNow", () => {
  it('Can calculate fee', () => {
    const calc = new Calculator();
    const fee = calc.getFee({
      userType: 0,
      itemType: 1,
      price: 101,
      endDate: moment().format("YYYY-MM-DD")
    });

    expect(fee).toBe(126);
  });
});


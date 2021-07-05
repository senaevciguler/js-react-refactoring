import moment from 'moment';

export class Calculator {
  getFee({userType, itemType, price, endDate}) { 
    //Added because it acts like String if the value is something like 101
    const priceVal = Number.parseInt(price) 
    switch (userType) {
      case 0: //Normal
        return this.normalFee(itemType, priceVal, endDate);
      case 1: //Company
        return this.companyFee(itemType, priceVal, endDate);
      default:
        throw new Error('Unknown user type');
    }
  }

  normalFee(itemType, price, endDate) {
    if (itemType === 0) {
      //Auction
      let endDateDiscount = 0;
      const isToday = moment(endDate).isSame(moment(), 'day');
      if (isToday) {
        endDateDiscount = 10;
        return price + 25 - endDateDiscount;
      }
      return price + 25 // There is no any discount
    } else if (itemType === 1) {
      let buyItNowDiscount = 10;
      //BuyItNow
      return price + 35 - buyItNowDiscount;
    }
  } 
  
  companyFee(itemType, price, endDate) {
    if (itemType === 0) {
      //Auction
      const isToday = moment(endDate).isSame(moment(), 'day');
      if (isToday) {
        return price + 25 - 15; // Enddate discount and company discount
      }
  
      return price + 25 - 5; // Only company discount
    } else if (itemType === 1) {
      let buyItNowDiscount = 10;
      //BuyItNow
      return price + 35 - (buyItNowDiscount + 5);
    }
  }
}
export function makeDate(input){
  if(isNaN(input) || input<0){
    input = "Invalid Input";
  } else if(Math.ceil(input)-input !== 0){
    input = "Invalid Input"
  }else{
      input = parseInt(input);
    }return input;
  }

export function dayValue (input){
  if(input >31){
    input = "Day value exceeds maximum number of days within a month";
  } return input;
}

export function monthValue (input){
  if(input > 12){
    input = "Month value exceeds maximum number of months within a year";
  } return input;
}

export class dateCalc {
  constructor (month, day, year){
    this.then = {
      month: month - 1,
      day: day,
      year: year
    }
    this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.numberDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    const date = new Date();
    this.now = {
      fullDay: date,
      day: date.getDate(),
      month: date.getMonth(), //getMonth returns 0-11
      year: date.getFullYear(),
      dayOfWeek: date.getDay() // returns 0-6, starts at Sunday
    },
    this.isFutureThen()

  }

  isFutureThen(){
    let isFuture = false;
    debugger;
    this.then.monthDelta = this.now.month - this.then.month;
    this.then.yearDelta = this.now.year -this.then.year;
    this.then.dayDelta = this.now.day - this.then.day;
    if(this.then.yearDelta < 0){
      isFuture = true;
    } else if (this.then.yearDelta === 0 && this.then.monthDelta < 0){
      isFuture = true;
    } else if (this.then.yearDelta === 0 && this.then.monthDelta === 0 && this.then.dayDelta < 0){
      isFuture = true;
    }
    this.then.isFuture = isFuture;

  }

  dayOfWeek(){
    debugger;
    const isFutureDate = this.then.isFuture;
    let modDayOfWeek;
    // if(this.monthDelta === 0 && this.yearDelta === 0){
    //   modDayOfWeek = (this.now.dayOfWeek - this.dayDelta) % 7;
    // } else if(this.yearDelta === 0) {
    let dayCount = 0;
    if(this.then.monthDelta === 0){
      if(this.then.dayDelta > 0){
        dayCount = daysSameMonth(this.now.day, this.then.day);
      } else {
        dayCount = daysSameMonth(this.then.day, this.now.day);
      }
    } else {
      if(this.then.monthDelta > 0){
        dayCount = daysDiffMonth(this.now, this.then, this.numberDays);
      } else {
        dayCount = daysDiffMonth(this.then, this.now, this.numberDays);
      }
    }

      if(isFutureDate){
        modDayOfWeek = (this.now.dayOfWeek + (daysMonth(this.then, this.now, this.numberDays)+dayCount)) % 7;
      } else {
        modDayOfWeek = (this.now.dayOfWeek - (daysMonth(this.now, this.then, this.numberDays)+dayCount)) % 7;
      }
    // }
    if(modDayOfWeek < 0){
      modDayOfWeek = 7 + modDayOfWeek;
    }
    return this.daysOfWeek[modDayOfWeek];
  }

  dayYear(){
    let highYear;
    let lowYear;
    let leapYearCount = 0;
    let dayCount = 0;
    let isFuture = true;

    if(this.yearDelta > 0){
      lowYear = this.year;
      highYear = this.now.year;
    } else {
      highYear = this.year;
      lowYear = this.now.year;
    }
    for(let i = lowYear + 1; i < highYear; i++){
      leapYearCount += isLeapYear(i);
    }


  }
}

function isLeapYear(year){
  let isLY = 0;
  if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    isLY = 1;
  }
  return isLY;
}

function daysDiffMonth(highDate, lowDate, monthArray){
  let dayCount = 0;

  dayCount += highDate.day;
  dayCount += (monthArray[lowDate.month] - lowDate.day);

  return dayCount;
}

function daysSameMonth(highDay, lowDay){
  const dayCount = highDay - lowDay;

  return dayCount;
}

function daysMonth(highDate, lowDate, monthArray){
  let dayCount = 0;
  let lowMonth = lowDate.month;
  let highMonth = highDate.month;

  for(let i=lowMonth + 1; i<highMonth; i++){
    dayCount += monthArray[i];
  }

  return dayCount;
}

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
    this.month = month - 1,
    this.day = day,
    this.year = year
    this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.numberDays = [31,28,31,30,31,30,31,31,30,31,30,31];


    const date = new Date();
    this.now = {
      fullDay: date,
      day: date.getDate(),
      month: date.getMonth(), //getMonth returns 0-11
      year: date.getFullYear(),
      dayOfWeek: date.getDay() // returns 0-6, starts at Sunday
    };
    this.monthDelta = this.now.month - this.month;
    this.yearDelta = this.now.year -this.year;
    this.dayDelta = this.now.day - this.day;
  }

  dayOfWeek(){
    debugger;
    const month = this.month;
    const day = this.day;
    const year = this.year;
    let modDayOfWeek;
    if(this.monthDelta === 0 && this.yearDelta === 0){
      modDayOfWeek = (this.now.dayOfWeek - this.dayDelta) % 7;
    } else if(this.yearDelta === 0) {
      let dayDelta = this.dayMonth()
      dayDelta += this.now.day;
      dayDelta += (this.numberDays[this.month] - this.day);
      modDayOfWeek = (this.now.dayOfWeek - dayDelta) % 7;
    }
    if(modDayOfWeek < 0){
      modDayOfWeek = 7 + modDayOfWeek;
    }
    return this.daysOfWeek[modDayOfWeek];
  }

  dayMonth(){
    let lowMonth;
    let highMonth;
    if(this.monthDelta>0){
      highMonth = this.now.month;
      lowMonth = this.month;
    } else {
      highMonth = this.month;
      lowMonth = this.now.month;
    }
    let dayCount = 0;
    for(let i=lowMonth + 1; i<highMonth; i++){
      dayCount += this.numberDays[i];
    } return dayCount;
  }
}

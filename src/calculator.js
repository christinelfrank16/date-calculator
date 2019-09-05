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
    this.month = month,
    this.day = day,
    this.year = year
  }

  dayOfWeek(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = this.month;
    const day = this.day;
    const year = this.year;
    const date = new Date();

    let now = {
      fullDay: date,
      day: date.getDate(),
      month: date.getMonth() + 1, //getMonth returns 0-11
      year: date.getYear(),
      dayOfWeek: date.getDay() // returns 0-6, starts at Sunday
    };

    const dayDelta = now.day - day;

    return daysOfWeek[(now.dayOfWeek - dayDelta) % 7];
  }
}

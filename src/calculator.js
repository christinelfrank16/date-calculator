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
// class dateCalc {
//   constructor (month, day, year){
//     this.month = month,
//     this.day = day,
//     this.year = year
//   }
// }

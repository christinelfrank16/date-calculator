import {makeDate, dayValue, monthValue} from './../src/calculator.js';
describe ('userInput', function(){
  it ('should refuse non-numeric input', function(){
    const input = "8%$$";
    expect (makeDate(input)).toEqual("Invalid Input");
  });
  it('should only accept positive numbers', function(){
    const input = -30;
    expect(makeDate(input)).toEqual("Invalid Input");
  });
  it('should only accept integers', function(){
    const input = .5;
    expect(makeDate(input)).toEqual("Invalid Input");
  });
  it('should only accept integers', function(){
    const input = 10;
    expect(makeDate(input)).toEqual(10);
  });
  it('should disregard day values that are over 31', function(){
    const input = 32;
    expect(dayValue(input)).toEqual("Day value exceeds maximum number of days within a month");
  });
  it('should disregard month values that are over 12', function(){
    const input = 13;
    expect(monthValue(input)).toEqual("Month value exceeds maximum number of months within a year");
    
  });
});

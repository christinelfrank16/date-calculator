import {makeDate} from './../src/calculator.js'
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
});

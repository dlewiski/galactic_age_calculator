import { AgeCalc } from './date.js';
import { dateSpan } from './date.js';

describe('yearsToSeconds', function() {
  it('Take a person’s age in years and convert it into seconds', function(){
    let testAge = new AgeCalc(44);

    expect(testAge.yearsToSeconds()).toEqual(1387584000);
  });
});

describe('dateSpan', function() {
  it('Take two dates and determine the difference, in seconds, between the two.', function(){

    const testDate = new Date(1989, 2, 9);
    const earlierDate = new Date(1984, 10, 24);

    expect(dateSpan(earlierDate, testDate)).toEqual(135302400);
  });
});

describe('mercuryAgeCalc', function() {
  it('Return the age of a human in Mercury years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.mercuryAgeCalc()).toEqual(183);
  });
});

describe('venusAgeCalc', function() {
  it('Return the age of a human in Venus years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.venusAgeCalc()).toEqual(71);
  });
});

describe('marsAgeCalc', function() {
  it('Return the age of a human in Mars years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.marsAgeCalc()).toEqual(23);
  });
});

describe('jupiterAgeCalc', function() {
  it('Return the age of a human in Jupiter years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.jupiterAgeCalc()).toEqual(4);
  });
});

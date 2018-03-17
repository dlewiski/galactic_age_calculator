import { AgeCalc } from './date.js';
import { dateSpan } from './date.js';

describe('yearsToSeconds', function() {
  it('should take a person’s age in years and convert it into seconds', function(){
    let testAge = new AgeCalc(44);

    expect(testAge.yearsToSeconds()).toEqual(1387584000);
  });
});

describe('dateSpan', function() {
  it('should take two dates and determine the difference, in seconds, between the two.', function(){

    const testDate = new Date(1989, 2, 9);
    const earlierDate = new Date(1984, 10, 24);

    expect(dateSpan(earlierDate, testDate)).toEqual(135302400);
  });
});

describe('mercuryAgeCalc', function() {
  it('should return the age of a human in Mercury years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.mercuryAgeCalc()).toEqual(183);
  });
});

describe('venusAgeCalc', function() {
  it('should return the age of a human in Venus years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.venusAgeCalc()).toEqual(71);
  });
});

describe('marsAgeCalc', function() {
  it('should return the age of a human in Mars years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.marsAgeCalc()).toEqual(23);
  });
});

describe('jupiterAgeCalc', function() {
  it('should return the age of a human in Jupiter years.', function(){

    let testAge = new AgeCalc(44);

    expect(testAge.jupiterAgeCalc()).toEqual(4);
  });
});

describe('yearsLeftMerc', function() {
  it('should determine how many years a user has left to live on Mercury', function(){

    let testAge = new AgeCalc(44);
    const lifeExpectancy = 80;

    expect(testAge.yearsLeftMerc(lifeExpectancy)).toEqual(150);
  });
});

describe('yearsLeftVenus', function() {
  it('should determine how many years a user has left to live on Venus', function(){

    let testAge = new AgeCalc(44);
    const lifeExpectancy = 80;

    expect(testAge.yearsLeftVenus(lifeExpectancy)).toEqual(58);
  });
});

describe('yearsLeftMars', function() {
  it('should determine how many years a user has left to live on Mars', function(){

    let testAge = new AgeCalc(44);
    const lifeExpectancy = 80;

    expect(testAge.yearsLeftMars(lifeExpectancy)).toEqual(20);
  });
});

describe('yearsLeftJupiter', function() {
  it('should determine how many years a user has left to live on Jupiter', function(){

    let testAge = new AgeCalc(44);
    const lifeExpectancy = 80;

    expect(testAge.yearsLeftJupiter(lifeExpectancy)).toEqual(3);
  });
});

describe('yearsPastExpectationMerc', function() {
  it('should determine if a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Mercury', function(){

    let testAge = new AgeCalc(88);
    const lifeExpectancy = 80;

    expect(testAge.yearsPastExpectationMerc(lifeExpectancy)).toEqual(34);
  });
});

describe('yearsPastExpectationVenus', function() {
  it('should determine if a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Mercury', function(){

    let testAge = new AgeCalc(88);
    const lifeExpectancy = 80;

    expect(testAge.yearsPastExpectationVenus(lifeExpectancy)).toEqual(13);
  });
});

describe('yearsPastExpectationMars', function() {
  it('should determine if a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Mercury', function(){

    let testAge = new AgeCalc(88);
    const lifeExpectancy = 80;

    expect(testAge.yearsPastExpectationMars(lifeExpectancy)).toEqual(4);
  });
});

describe('yearsPastExpectationJupiter', function() {
  it('should determine if a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Mercury', function(){

    let testAge = new AgeCalc(88);
    const lifeExpectancy = 80;

    expect(testAge.yearsPastExpectationJupiter(lifeExpectancy)).toEqual(1);
  });
});

import { Date } from './date.js';
import { yearsToSeconds } from './date.js';

describe('yearsToSeconds', function() {
  it('Take a person’s age in years and convert it into seconds', function(){
    let testAge = 44;

    expect(yearsToSeconds(testAge)).toEqual(1387584000);
  });
});

describe('dateSpan', function() {
  it('Take two dates and determine the difference, in seconds, between the two.', function(){
    const testDate = new Date(1989, 2, 9);
    const earlierDate = new Date(1984, 10, 24);

    expect(earlierDate.dateSpan(testDate)).toEqual(1387584000);
  });
});

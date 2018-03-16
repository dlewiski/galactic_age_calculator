import { yearsToSeconds } from './date.js';

describe('yearsToSeconds', function() {
  it('Take a person’s age in years and convert it into seconds', function(){
    let testAge = 44;

    expect(yearsToSeconds(testAge)).toEqual(1388000000);
  });
});

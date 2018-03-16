export class AgeCalc {
  constructor(age) {
    this.age = age;
  }

  mercuryAgeCalc() {
    let mercuryAge = Math.round(this.age / 0.24);
    return mercuryAge;
  }

  yearsToSeconds() {
    let seconds = ((((this.age * 365) * 24) * 60) * 60);
    return seconds;
  }
}


export function dateSpan(earlierDate, laterDate) {
  let milliseconds = laterDate - earlierDate;
  let seconds = milliseconds / 1000;
  return seconds;
}

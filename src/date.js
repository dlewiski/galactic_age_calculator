export class AgeCalc {
  constructor(age) {
    this.age = age;
  }

  yearsToSeconds() {
    let seconds = ((((this.age * 365) * 24) * 60) * 60);
    return seconds;
  }

  mercuryAgeCalc() {
    let mercuryAge = Math.round(this.age / 0.24);
    return mercuryAge;
  }

  venusAgeCalc() {
    let venusAge = Math.round(this.age / 0.62);
    return venusAge;
  }

  marsAgeCalc() {
    let marsAge = Math.round(this.age / 1.88);
    return marsAge;
  }

  jupiterAgeCalc() {
    let jupiterAge = Math.round(this.age / 11.86);
    return jupiterAge;
  }
}


export function dateSpan(earlierDate, laterDate) {
  let milliseconds = laterDate - earlierDate;
  let seconds = milliseconds / 1000;
  return seconds;
}

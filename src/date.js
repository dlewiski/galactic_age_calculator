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

  yearsLeftMerc(lifeExpectancy) {
    const mercLife = Math.round(lifeExpectancy / 0.24);
    let mercuryAge = Math.round(this.age / 0.24);
    let yearsLeft = mercLife - mercuryAge;
    return yearsLeft;
  }

  yearsLeftVenus(lifeExpectancy) {
    const venusLife = Math.round(lifeExpectancy / 0.62);
    let venusAge = Math.round(this.age / 0.62);
    let yearsLeft = venusLife - venusAge;
    return yearsLeft;
  }

  yearsLeftMars(lifeExpectancy) {
    const marsLife = Math.round(lifeExpectancy / 1.88);
    let marsAge = Math.round(this.age / 1.88);
    let yearsLeft = marsLife - marsAge;
    return yearsLeft;
  }

  yearsLeftJupiter(lifeExpectancy) {
    const jupiterLife = Math.round(lifeExpectancy / 11.86);
    let jupiterAge = Math.round(this.age / 11.86);
    let yearsLeft = jupiterLife - jupiterAge;
    return yearsLeft;
  }

  yearsPastExpectationMerc(lifeExpectancy) {
    const mercLife = Math.round(lifeExpectancy / 0.24);
    let mercAge = Math.round(this.age / 0.24);
    let yearsPast = mercAge - mercLife;
    return yearsPast;
  }

  yearsPastExpectationVenus(lifeExpectancy) {
    const venusLife = Math.round(lifeExpectancy / 0.62);
    let venusAge = Math.round(this.age / 0.62);
    let yearsPast = venusAge - venusLife;
    return yearsPast;
  }

  yearsPastExpectationMars(lifeExpectancy) {
    const marsLife = Math.round(lifeExpectancy / 1.88);
    let marsAge = Math.round(this.age / 1.88);
    let yearsPast = marsAge - marsLife;
    return yearsPast;
  }

  yearsPastExpectationJupiter(lifeExpectancy) {
    const jupiterLife = Math.round(lifeExpectancy / 11.86);
    let jupiterAge = Math.round(this.age / 11.86);
    let yearsPast = jupiterAge - jupiterLife;
    return yearsPast;
  }
}


export function dateSpan(earlierDate, laterDate) {
  let milliseconds = laterDate - earlierDate;
  let seconds = milliseconds / 1000;
  return seconds;
}

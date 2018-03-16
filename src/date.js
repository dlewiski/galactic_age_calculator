
export function yearsToSeconds(years) {
  let seconds = ((((years * 365) * 24) * 60) * 60);
  return seconds;
}

export function dateSpan(earlierDate, laterDate) {
  let milliseconds = laterDate - earlierDate;
  let seconds = milliseconds / 1000;
  return seconds;
}

export function mercuryAgeCalc(years) {
  let mercuryAge = years  ;
  return mercuryAge;
}

export class Date {
  constructor(year, month, day) {
  this.year = year;
  this.month = month - 1;
  this.day = day;
  }

  dateSpan(date) {
  let milliseconds = this.date - date;
  let seconds = milliseconds / 1000;
  return seconds;
  }
}

export function yearsToSeconds(years) {
  let seconds = ((((years * 365) * 24) * 60) * 60);
  return seconds;
}

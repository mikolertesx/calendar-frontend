export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getWeekday = (day, month, year) => {
  const date = new Date(year, month, day);
  return date.getDay();
}

export const getWeekdayString = (day, month, year) => {
  const currentWeekday = getWeekday(day, month, year);
  return weekdays[currentWeekday];
}

export default weekdays;
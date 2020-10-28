export default [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const getFirstDayOfMonth = (month, year) => {
  const date = new Date(year, month);
  return date.getDay();
};

export const getDaysInMonth = (month, year) => {
  if (year && year % 4 === 0 && month === 1) {
    return 29;
  }
  return Days[month];
};

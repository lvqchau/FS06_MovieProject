const getFormattedDay = (isDay, isDOW, index) => {
  let curDay = new Date();
  let date = curDay.getDate();
  let month = curDay.getMonth();
  let year = curYear.getYear();
  let DOW = curDay.getDayOfWeek();
  console.log("date", date, "month ", month, "year ", year, "DOW ", DOW);
  // if (isDay) { //lấy 22/12/2019

  // } else if (isDOW) { //lấy Thứ hai

  // }
}

export { getFormattedDay }
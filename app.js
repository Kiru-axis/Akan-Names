let days_of_week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let male_names = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
//global variables
let female_names = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let gender;
let raw_year, CC, MM, DD, YY, day_of_week;
let result_data = document.getElementById("result");
//get input function
function getInput() {
  raw_year = document.getElementById("year").value;
  YY = raw_year.slice(0, 2);
  CC = raw_year.slice(2, 4);
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("day_of_month").value);

  console.log(`${CC}`);
  console.log(`${YY}`);
  console.log(`${MM}`);
  console.log(`${DD}`);
}

let days_of_week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let male_names = [ "Kwasi","Kwadwo","Kwabena", "Kwaku","Yaw", "Kofi","Kwame",];
let female_names = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let gender;
let raw_year, CC, MM, DD, YY, day_of_week;

let result_data = document.getElementById("result");

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

function calculateBirthday() {
  getInput();
  day_of_week =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  day_of_week = Math.floor(day_of_week);
  console.log(`Day of the week: ${day_of_week}`);
  checkGender();
}

function checkGender() {
  let radios = document.getElementsByName("radio");
  if (radios[0].checked == true) {
    gender = "Male";
  } else if (radios[1].checked == true) {
    gender = "Female";
  } else {
    console.log("click on your gender");
  }

  switch (gender == "Male") {
    case  (day_of_week == 0):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[0]} and your Akan name is ${male_names[0]}`);
    case (day_of_week == 1 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[1]} and your Akan name is ${male_names[1]}`);
      break;
    case (day_of_week == 2 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[2]} and your Akan name is ${male_names[2]}`);
      break;
    case (day_of_week == 3 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[3]} and your Akan name is ${male_names[3]}`);
      break;
    case (day_of_week == 4 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[4]} and your Akan name is ${male_names[4]}`);
      break;
    case (day_of_week == 5 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[5]} and your Akan name is ${male_names[5]}`);
      break;
    case (day_of_week == 6 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[6]} and your Akan name is ${male_names[6]}`);
      break;
    case (day_of_week == 7 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[7]} and your Akan name is ${male_names[7]}`);
  };
  console.log(result_data = document.getElementById("result"));

  switch (gender == "Female") {
    case (day_of_week == 0):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[0]} and your Akan name is ${female_names[0]}`);
    case (day_of_week == 1 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[1]} and your Akan name is ${female_names[1]}`);
      break;
    case (day_of_week == 2 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[2]} and your Akan name is ${female_names[2]}`);
      break;
    case (day_of_week == 3 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[3]} and your Akan name is ${female_names[3]}`);
      break;
    case (day_of_week == 4 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[4]} and your Akan name is ${female_names[4]}`);
      break;
    case (day_of_week == 5 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[5]} and your Akan name is ${female_names[5]}`);
      break;
    case (day_of_week == 6 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[6]} and your Akan name is ${female_names[6]}`);
      break;
    case (day_of_week == 7 ):
      return (result_data.innerHTML = `The day of the week is ${days_of_week[7]} and your Akan name is ${female_names[7]}`);
  }
  console.log(result_data = document.getElementById("result"));
}
// console.log(result_data = document.getElementById("result"));

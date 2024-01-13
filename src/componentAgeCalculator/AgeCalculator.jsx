import React from 'react';
import DateObject from "react-date-object";
import "./AgeCalculatorCSS.css"

function AgeCalculator() {
  function ageCalc() {
    //~collect input from HTML form and convert into date format
    let userinput = document.getElementById("DOB").value;

    //~check user provide input or not
    if (userinput === null || userinput === '') {
      document.getElementById("message").innerHTML = "**Choose a date please!";
      return false;
    }

    //~execute if the user entered a date 
    else {
      //~extract the year, month, and date from user date input
      let dobYear = parseInt(userinput.slice(0, 4));
      let dobMonth = parseInt(userinput.slice(5, 7));
      let dobDate = parseInt(userinput.slice(8, 11));

      //~get the current date from the system
      let now = new DateObject();
      //~extract the year, month, and date from current date
      let currentYear = parseInt(now.format().slice(0, 4));
      let currentMonth = parseInt(now.format().slice(5, 7));
      let currentDate = parseInt(now.format().slice(8, 11));
      //~declare a letiable to collect the age in year, month, and days
      let age = {};
      let ageString = "";



      // ^ calculate total days
      let dobTemp = new Date(userinput).getTime();
      let currTemp = new Date().getTime();
      let time_difference = currTemp - dobTemp;
      let days_difference = time_difference / (1000 * 60 * 60 * 24);
      days_difference = Math.trunc(days_difference)
      document.getElementById("totalDays").innerHTML = "Total : " + days_difference + " Days";

      //^ get years
      let yearAge = currentYear - dobYear;

      //^ get months
      let monthAge = "";
      if (currentMonth >= dobMonth) {
        //~get months when current month is greater
        monthAge = currentMonth - dobMonth;
      }
      else {
        yearAge--;
        monthAge = 12 + currentMonth - dobMonth;
      }

      //^ get days
      let dateAge = "";
      if (currentDate >= dobDate) {
        //~get days when the current date is greater
        dateAge = currentDate - dobDate;
      }
      else {
        monthAge--;
        dateAge = 31 + currentDate - dobDate;
        if (monthAge < 0) {
          monthAge = 11;
          yearAge--;
        }
      }
      //~group the age in a single letiable
      age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
      };

      if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
      else if ((age.years === 0) && (age.months === 0) && (age.days > 0))
        ageString = "Only " + age.days + " days old!";
      //when current month and date is same as birth date and month
      else if ((age.years > 0) && (age.months === 0) && (age.days === 0))
        ageString = age.years + ` years old. <span style="color : blue">Happy Birthday!!</span>`;
      else if ((age.years > 0) && (age.months > 0) && (age.days === 0))
        ageString = age.years + " years and " + age.months + " months old.";
      else if ((age.years === 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + " months and " + age.days + " days old.";
      else if ((age.years > 0) && (age.months === 0) && (age.days > 0))
        ageString = age.years + " years, and " + age.days + " days old.";
      else if ((age.years === 0) && (age.months > 0) && (age.days === 0))
        ageString = age.months + " months old.";
      //~when current date is same as dob(date of birth)
      else ageString = "Welcome to Earth! <br> It's first day on Earth!";

      //~display the calculated age
      return document.getElementById("result").innerHTML = ageString;
    }
  }
  return (
    <section id="secm">
      <br />
      <h2> Calculate Age from Date of Birth <br /><br /></h2>
      <div>
        <b> Enter Date of Birth: <input type="date" id="DOB" /></b>
        <span id="message"></span><br /><br />
      </div>
      <button type="submit" onClick={() => { ageCalc() }} id="submitBtn"> Calculate age </button> <br /><br />
      <p id="result"></p><br />
      <p id="totalDays"></p><br />
    </section>
  )
}

export default AgeCalculator

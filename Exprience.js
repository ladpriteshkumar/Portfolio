function calculateDuration(startDateInput) {
          const startDate = new Date(startDateInput);
          const currentDate = new Date();

          let years = currentDate.getFullYear() - startDate.getFullYear();
          let months = currentDate.getMonth() - startDate.getMonth();

          if (months < 0) {
            years--;
            months += 12;
          }

          var Exprience ={
          years: years,
          months: months
          }
          return Exprience;
       }


document.addEventListener("DOMContentLoaded", function () {
  const startDate = "2013-08-01"; //start date of first job
  const duration = calculateDuration(startDate);
  document.getElementById("experienceDuration").innerHTML = duration.years + " years and "+ duration.months + " months";
});
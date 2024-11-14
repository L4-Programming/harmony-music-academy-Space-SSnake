let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userEmail = document.querySelector("#email").value;
  let userLevel = document.querySelector("#level").value;
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userEmail, userLevel, userHours });
});
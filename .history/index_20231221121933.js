const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function(e) {
  e.preventDefault;
  console.log(form.elements);
  const firstName = document.getElementById("first-Name");
  const lastName = document.getElementById("last-Name");
  const country = document.getElementById("country");
  const weekReportChecked = document.getElementById("weekChecked");
  const pullRequestChecked = document.getElementById("pullChecked");
  const deploymentChecked = document.getElementById("deploymentChecked");
  const security = document.getElementById("check");
  const range = document.getElementById("range");
  const button = document.getElementById("save");

  if(firstName.value !== "" && lastName.value !== "" && country.value !== ""){
    confirm("Are you sure you want to submit the form");
    firstName.value = "",
    lastName.value = "",
    country.value,
    "Weekly Report: ", weekReportChecked.checked,
    "Pull Request: ", pullRequestChecked.checked,
    "Deployment: ", deploymentChecked.checked,
    "security: ", security.checked,
    "Range: ", range.value
  } 



  console.log(
    "First Name: ", firstName.value,
    "Last Name: ", lastName.value,
    "Country: ", country.value,
    "Weekly Report: ", weekReportChecked.checked,
    "Pull Request: ", pullRequestChecked.checked,
    "Deployment: ", deploymentChecked.checked,
    "security: ", security.checked,
    "Range: ", range.value
  ) } );




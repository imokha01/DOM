const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function (e) {
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
  if(firt)
  console.log(
    firstName.value,
    lastName.value,
    country.value,
    weekReportChecked.checked,
    pullRequestChecked.checked,
    deploymentChecked.checked,
    security.checked,
    range.value
  );
});

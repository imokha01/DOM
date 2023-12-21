const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault;
    console.log(form.elements);
    const firstName = document.getElementById("first-Name");
    const lastName = document.getElementById("last-Name");
    const country = document.getElementById("country");
    const weekReportChecked = document.getElementById("checked")
    console.log(firstName.value, lastName.value, country.value, weekReportChecked);
    c
})

const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault;
    console.log(form.elements);
    const firstName = document.g("first-Name");
    const lastName = document.getElementsById("lastName");
    console.log(firstName.value, lastName.value);
})
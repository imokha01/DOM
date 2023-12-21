const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault;
    console.log(form.elements);
    const firstName = document.getElementsByClassName("firstName");
    const lastName = document.getElementsByClassName("lastName");
    console.log(firstName.value, lastName.val);
})
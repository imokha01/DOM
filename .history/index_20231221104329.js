const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function(e){
    console.log(form.elements);
    const firstName = document.getElementsByClassName("firstName");
    const lastName = document.getElementsByClassName("lastName");
})
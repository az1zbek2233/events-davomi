let id = document.querySelector(".id");
let password = document.querySelector(".password");
let button = document.querySelector("button")

button.addEventListener("click", function (event) {
    event.preventDefault();

    if (id.value === "846261" && password.value === "23642") {
        alert("siz muafaqatli kirdingiz");
    } else{
        alert("id yoki xato")
    }
});
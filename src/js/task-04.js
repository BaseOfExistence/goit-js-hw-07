'use strict';

const submit = document.querySelector(".login-form");
const data = {};
submit.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target.elements.email.value === "" ||
        event.target.elements.password.value === "") {
        alert('All form fields must be filled in');
    } else {
        data.email = event.target.elements.email.value.trim();
        data.password = event.target.elements.password.value.trim();
        console.log(data);
        submit.reset();
    }
});

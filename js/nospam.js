var encEmail = "bG1iQGFsdW0ubWl0LmVkdQ==";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
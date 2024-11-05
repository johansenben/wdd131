
//current year in copyright text in the footer
const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

//last modified on the bottom of the footer
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const form = document.getElementById("form");
const mail = document.getElementById("mail");
const enquiry = document.getElementById("enquiry");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitted = document.createElement("div");
  submitted.className = "alert alert-success";
  submitted.role = "alert";
  submitted.innerText = "Successfully Registered!";
  form.appendChild(submitted);
  mail.value = "";
  enquiry.value = "";
});

const form = document.getElementById("form");
const fName = document.getElementById("firstname");
const lName = document.getElementById("lastname");
const city = document.getElementById("city");
const pincode = document.getElementById("pincode");
const district = document.getElementById("district");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(pincode.value);
  if (!Number.isInteger(parseInt(pincode.value))) {
    const submitted = document.createElement("div");
    submitted.className = "alert alert-warning";
    submitted.role = "alert";
    submitted.innerText = "Invalid Pincode";
    form.appendChild(submitted);
    fName.value = "";
    lName.value = "";
    city.value = "";
    pincode.value = "";
    district.value = "";
    email.value = "";
    phone.value = "";
    return;
  } else {
    const submitted = document.createElement("div");
    submitted.className = "alert alert-success";
    submitted.role = "alert";
    submitted.innerText = "Successfully Registered!";
    form.appendChild(submitted);
    fName.value = "";
    lName.value = "";
    city.value = "";
    pincode.value = "";
    district.value = "";
    email.value = "";
    phone.value = "";
  }
});

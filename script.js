let selectedCar = "";

function scrollCars() {

document
.getElementById("cars")
.scrollIntoView({
behavior: "smooth"
});

}

function openForm(car) {

selectedCar = car;

document
.getElementById("popup")
.style.display = "flex";

document
.getElementById("carTitle")
.innerHTML =
"Booking : " + car;

}

function closeForm() {

document
.getElementById("popup")
.style.display = "none";

}

function confirmBooking() {

let name =
document.getElementById(
"customerName"
).value;

let mobile =
document.getElementById(
"mobileNo"
).value;

if(name === "" || mobile === "") {

alert(
"Please Fill All Details"
);

return;

}

document
.getElementById("popup")
.style.display = "none";

let success =
document.getElementById(
"successMessage"
);

success.innerHTML =
"🎉 Booking Confirmed<br><br>" +
selectedCar +
"<br><br>Customer : " +
name +
"<br>Mobile : " +
mobile;

success.style.display = "block";

setTimeout(() => {

success.style.display =
"none";

},3000);

}
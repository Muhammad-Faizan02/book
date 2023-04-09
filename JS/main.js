
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('act')
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeout();
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeout(){
    setTimeout(loader, 2000);
}

const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
// For opening popup
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
//For closing popup using "X" sign 
close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
//After opening popup, if you click outside the popup, it will close. 
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};
//Contact form validation
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;


    if (name.length < 3) {
        text = "Please Enter Valid Name (Minimum 3 characters)";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject (Minimum 10 characters)";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 11) {
        text = "Please Enter Valid Phone Number (11-digit)";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length <= 140) {
        text = "Please enter more than 140 characters";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length >= 500) {
        text = "Please enter less than 500 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form submitted successfully! Thank you for contacting us");
    return false;
}

//Search functionally

function filter() {
    var filterValue, input, ProductList, ProductName, h4, i;
    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");

    for (i = 0; i < ProductName.length; i++) {
        h4 = ProductName[i].getElementsByTagName("h4")[0];
        if (h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            ProductName[i].style.display = "";
        }
        else {
            ProductName[i].style.display = "none";
        }
    }
}

//Sort product by price
function sortList() {
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list"); 
    ProductName = ProductList.getElementsByClassName("col-4");

switching=true; //boolean true


    while (switching) {

        switching = false;

        for (i=0; i < (ProductName.length - 1); i++) {
            shouldSwitch = false
            b = ProductName[i].getElementsByTagName("span")[0].innerHTML; 
            c = ProductName[i + 1].getElementsByTagName("span")[0].innerHTML;

            if (Number(b) > Number(c)) { 
                shouldSwitch= true;
                break;

            }

        }


        if (shouldSwitch) {

            ProductName[i].parentNode.insertBefore(ProductName[i + 1], ProductName[i]);

switching=true;

        }

    }
}
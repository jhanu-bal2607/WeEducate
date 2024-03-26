burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

function openPopup() {
    if (document.getElementById("name").checkValidity() && document.getElementById("phone").checkValidity() && document.getElementById("email").checkValidity() && document.getElementById("text").checkValidity()) {
        document.getElementById("overlay").style.display = "flex";
        return false;
    } else {
        alert("Please fill in all required fields.");
        return false;
    }
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("closeBtn").addEventListener("click", function (){
        resetForm();
    });    
}
function resetForm() {
    document.getElementById("form").reset();
}


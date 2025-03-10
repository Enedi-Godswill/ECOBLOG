
function navbar(){
    const navbarEl = document.querySelector(".navbar");
    navbarEl.innerHTML =
    `
        <h2 class="logo">
            <a href="./index.html">EcoBloom</a>
        </h2>
        <ul class="menu">
            <li class="nav-link">
                <a href="./index.html">home</a>
            </li>
            <li class="nav-link">
                <a href="#">about us</a>
            </li>
            <li class="nav-link">
                <a href="#">resources</a>
            </li>
            <li class="nav-link">
                <a href="#">contacts</a>
            </li>
            <li class="nav-link">
                <a href="#">news & stories</a>
            </li>
            <li class="nav-link screen-lg-hidden">
                <a href="#">sign up</a>
            </li>
        </ul>
        <div class="all-buttons">
            <!-- sign up -->
            <div class="signup">
                <p><a href="#">sign up</a></p>
            </div>
            <!-- menu btn -->
            <button class="menu-btn">
                <img class="open-btn" src="./icons/menu.svg" alt="">
                <img class="close-btn" src="./icons/close.svg" alt="">
            </button>
            <!-- light and dark mode -->
            <button class="light-btn">
                <img class="sunny" src="./icons/light.svg" alt="">
                <img class="dark" src="./icons/dark.svg" alt="">
            </button>
         </div>
    `;
}

navbar();

// navbar blurry background
const blurryBg = () => {
    const navbarEl = document.querySelector(".navbar");
    if(this.window.scrollY >= 50){
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active")
    }
}

window.addEventListener("scroll", blurryBg);

// navbar menu button styling
const menuBtnEl = document.querySelector(".menu-btn");
const menuEl = document.querySelector(".menu");

function toggleBtn(){
    menuEl.classList.toggle("active");
    menuBtnEl.classList.toggle("active");
}

menuBtnEl.addEventListener("click", toggleBtn);

// navbar light mode
const lightBtnEl = document.querySelector(".light-btn");
const bodyEl = document.body;

function lightBg(){
    lightBtnEl.classList.toggle("active");
    bodyEl.classList.toggle("active");
}
lightBtnEl.addEventListener("click", lightBg);



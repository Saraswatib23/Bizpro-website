const themeToggle = document.getElementById("themetoggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme == "light"){
    document.body.classList.add("light-theme");

}

themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        localStorage.setItem("theme", "light");

    } else {
        localStorage.setItem("theme", "dark");
    }
});

const serviceBtn = document.getElementById("Service");
const services =  document.getElementById("services");

serviceBtn.addEventListener("click", function(){
    services.scrollIntoView({
        behavior : "smooth"
    });
});

const contactBtn = document.getElementById("Contact");
const contact = document.getElementById("contact");

contactBtn.addEventListener("click", function(){
    contact.scrollIntoView({
        behavior:"smooth"
    });
});

const learnBtn = document.getElementById("learn");
const projects = document.getElementById("projects");

learnBtn.addEventListener("click", function(){
    projects.scrollIntoView({
        behavior: "smooth"
    });
});

const viewPortfolio = document.getElementById("viewPortfolio");
viewPortfolio.addEventListener("click", function(){
    window.open("https://saraswatib23.github.io/Saraswati-s-portfolio/", "_blank");
});

const viewEcommerce = document.getElementById("viewEcommerce");
viewEcommerce.addEventListener("click", function(){
    window.open("coming.html", "_blank");
});
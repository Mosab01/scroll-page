const home_btn = document.getElementById("home-btn");
const about_btn = document.getElementById("about-btn");
const services_btn = document.getElementById("services-btn");
const tours_btn = document.getElementById("tours-btn");
const tours2_btn = document.getElementById("explore-tours");
const about_sec = document.getElementsByClassName("about-sec");
const services_sec = document.getElementsByClassName("services-sec");
const tours_sec = document.getElementsByClassName("tours-sec");


home_btn.onclick = function(){goTo_home_section()};
about_btn.onclick = function(){goTo_about_section()};
services_btn.onclick = function(){goTo_services_section()};
tours_btn.onclick = function(){goTo_tours_section()};
tours2_btn.onclick = function(){goTo_tours_section()};

function goTo_home_section(){
    console.log("Home Section");
    window.scrollTo(0, 0);
}

function goTo_about_section(){
    console.log("About Section");
    about_sec[0].scrollIntoView({behavior: 'smooth'});
}

function goTo_services_section(){
    console.log("Services Section");
    services_sec[0].scrollIntoView({behavior: 'smooth'});
}

function goTo_tours_section(){
    console.log("Tours Section");
    tours_sec[0].scrollIntoView({behavior: 'smooth'});

}


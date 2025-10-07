let main_window = document.getElementById("main_window");
let main_window_inner = document.getElementById("main_window_inner");
let sidebar_window = document.getElementById("sidebar_window");

function adjustWindows() {
    const width = window.innerWidth;
    if (width < 480) {
        main_window.style.width = "100%";
        sidebar_window.style.width = "80%";
        sidebar_window.style.transform = "translateX(-100%)";
        main_window_inner.style.margin = "0";
        main_window.style.backgroundColor = "black";
        sidebar_window.style.backgroundColor = "rgba(30,30,30)";
    } else if (width >= 480 && width < 940) {
        main_window.style.width = "100%";
        sidebar_window.style.width = "60%";
        sidebar_window.style.transform = "translateX(-100%)";
        main_window_inner.style.margin = "0";
        main_window.style.backgroundColor = "black";
        sidebar_window.style.backgroundColor = "rgba(30,30,30)";
    } else {
        main_window.style.width = "84%";
        sidebar_window.style.width = "16%";
        sidebar_window.style.transform = "translateX(0%)";
        main_window_inner.style.margin = "0";
        main_window.style.backgroundColor = "white";
        sidebar_window.style.backgroundColor = "white";
    }
}

let touchStartX = null;

window.addEventListener("touchstart", function(e) {
    if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
    }
});

window.addEventListener("touchend", function(e) {
    if (touchStartX === null) return;
    let touchEndX = e.changedTouches[0].clientX;
    let diffX = touchEndX - touchStartX;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Swipe right
            // sidebar_window.style.transform = "translateX(0)";
        } else {
            // Swipe left
            sidebar_window.style.transform = "translateX(-100%)";
        }
    }
    touchStartX = null;
});

let menu_button = document.getElementById("menu_button");

function updateMenuButtonDisplay() {
    if (window.innerWidth < 940) {
        menu_button.style.display = "flex";
    } else {
        menu_button.style.display = "none";
    }
}

window.addEventListener("resize", updateMenuButtonDisplay);
updateMenuButtonDisplay();
menu_button.addEventListener("click", function() {
    if (sidebar_window.style.transform === "translateX(0px)") {
        sidebar_window.style.transform = "translateX(-100%)";
    } else {
        sidebar_window.style.transform = "translateX(0)";
    }
});



const hero_section = document.getElementById("hero_section");
const work_section = document.getElementById("work_section");
const resume_section = document.getElementById("resume_section");
const services_section = document.getElementById("services_section");
const testimonies_section = document.getElementById("testimonies_section");

const home_link = document.getElementById("home_link");
const work_link = document.getElementById("work_link");
const resume_link = document.getElementById("resume_link");
const services_link = document.getElementById("services_link");
const testimonies_link = document.getElementById("testimonies_link");


function scrollToHero() {

    if (main_window_inner && hero_section) {
        main_window_inner.scrollTo({
            top: hero_section.offsetTop,
            behavior: "smooth"
        });
    }
}

function scrollToWork() {

    if (main_window_inner && work_section) {
        main_window_inner.scrollTo({
            top: work_section.offsetTop,
            behavior: "smooth"
        });
    }
}

function scrollToResume() {
    
    if (main_window_inner && resume_section) {
        main_window_inner.scrollTo({
            top: resume_section.offsetTop,
            behavior: "smooth"
        });
    }
}

function scrollToServices() {
    
    if (main_window_inner && services_section) {
        main_window_inner.scrollTo({
            top: services_section.offsetTop,
            behavior: "smooth"
        });
        
    }
}

function scrollToTestimonies() {
    
    if (main_window_inner && testimonies_section) {
        main_window_inner.scrollTo({
            top: testimonies_section.offsetTop,
            behavior: "smooth"
        });
    }
}

home_link.addEventListener("click", scrollToHero);
work_link.addEventListener("click", scrollToWork);
resume_link.addEventListener("click", scrollToResume);
services_link.addEventListener("click", scrollToServices);
testimonies_link.addEventListener("click", scrollToTestimonies);

function addLinkActive(activeLink) {
    if (!activeLink.classList.contains("link_active")) {
        activeLink.classList.add("link_active");
    }
}

function removeLinkActive(inactiveLink) {
    if (inactiveLink.classList.contains("link_active")) {
        inactiveLink.classList.remove("link_active");
    }
}

function updateActiveLink() {
    const container = main_window_inner;
    const scrollPosition = container.scrollTop;
    const halfWindow = container.clientHeight / 2;

    // Calculate each section's distance from the top of the container
    const heroTop = hero_section.offsetTop - scrollPosition;
    const workTop = work_section.offsetTop - scrollPosition;
    const resumeTop = resume_section.offsetTop - scrollPosition;
    const servicesTop = services_section.offsetTop - scrollPosition;
    const testimoniesTop = testimonies_section.offsetTop - scrollPosition;

    // Reset all first
    removeLinkActive(home_link);
    removeLinkActive(work_link);
    removeLinkActive(resume_link);
    removeLinkActive(services_link);
    removeLinkActive(testimonies_link); 

    // Now pick whichever section's top is the last one above halfway
    if (testimoniesTop <= halfWindow) {
        addLinkActive(testimonies_link);
    } else if (servicesTop <= halfWindow) {
        addLinkActive(services_link);
    } else if (resumeTop <= halfWindow) {
        addLinkActive(resume_link);
    } else if (workTop <= halfWindow) {
        addLinkActive(work_link);
    } else {
        addLinkActive(home_link);
    }
}

home_link.click();

function ExploreProjects() {
    work_link.click();
}


main_window_inner.addEventListener("scroll", updateActiveLink);


window.addEventListener("resize", adjustWindows);
adjustWindows();



function openLink(url) {
  if (url && typeof url === "string") {
    window.open(url, "_blank");
  }
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "File/resume.pdf";
  link.download = "Abdul Ahad - Game Engineer - 6+ YOE.pdf"; // name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

let section_contact = document.getElementById("contact_section");

function showContact() {
    if (section_contact) {
        section_contact.style.display = "flex";
        section_contact.scrollIntoView({ behavior: "smooth" });
    }
}

function hideContact() {
    if (section_contact) {
        section_contact.style.display = "none";
    }
}

section_contact.addEventListener("click", function(e) {
    if (e.target === section_contact) {
        hideContact();
    }
});

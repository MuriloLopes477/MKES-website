//email code 
var name = document.getElementById('userName');
var email = document.getElementById('userEmail');
var message = document.getElementById('userMessage');



//Carousel wrapper code
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//header controls
// let header = document.getElementById("header");
// window.addEventListener("scroll", function() {
// if (window.scrollY > 750) {
//     header.classList.add("lightMode");
//     header.classList.remove("darkMode");
// } else {
//     header.classList.add("darkMode");
//     header.classList.remove("lightMode");
// }
// });
//menu control section
let menuButton = document.getElementById("menuButton");

let smallDeviceMenu = document.getElementById("smallDeviceMenu");

let servicesButton = document.getElementById("servicesButton");
let aboutButton = document.getElementById("aboutButton");
let homeButton = document.getElementById("homeButton");
let contactButton = document.getElementById("contactButton");

let arrow = document.getElementById("arrow");
let serviceOptions = document.getElementById("optionsMenu");

menuButton.addEventListener("click", function() {
    if (menuButton.classList.contains("menuButtonOff")) {
        menuButton.classList.add("menuButtonOn");
        menuButton.classList.remove("menuButtonOff");
        smallDeviceMenu.classList.add("smallDeviceMenuOn");
        smallDeviceMenu.classList.remove("smallDeviceMenuOff"); 
    } else {
        menuButton.classList.remove("menuButtonOn");
        menuButton.classList.add("menuButtonOff");
        smallDeviceMenu.classList.remove("smallDeviceMenuOn");
        smallDeviceMenu.classList.add("smallDeviceMenuOff"); 
    }
});

homeButton.addEventListener("click", function() {
    menuButton.classList.remove("menuButtonOn");
    menuButton.classList.add("menuButtonOff");
    smallDeviceMenu.classList.remove("smallDeviceMenuOn");
    smallDeviceMenu.classList.add("smallDeviceMenuOff"); 
    window.scrollTo(0,0);
});
aboutButton.addEventListener("click", function() {
    menuButton.classList.remove("menuButtonOn");
    menuButton.classList.add("menuButtonOff");
    smallDeviceMenu.classList.remove("smallDeviceMenuOn");
    smallDeviceMenu.classList.add("smallDeviceMenuOff"); 
    window.scrollTo(0,250);
});
contactButton.addEventListener("click", function() {
    menuButton.classList.remove("menuButtonOn");
    menuButton.classList.add("menuButtonOff");
    smallDeviceMenu.classList.remove("smallDeviceMenuOn");
    smallDeviceMenu.classList.add("smallDeviceMenuOff"); 
    window.scrollTo(0,800);
});

servicesButton.addEventListener("click", function() {
    
    menuButton.classList.remove("menuButtonOn");
    menuButton.classList.add("menuButtonOff");
    smallDeviceMenu.classList.remove("smallDeviceMenuOn");
    smallDeviceMenu.classList.add("smallDeviceMenuOff"); 
    window.scrollTo(0,600);
});




// Fade-in animation for sections

const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2,
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});

// // Service page content population
// const serviceTitle = document.getElementById('service-title');
// const serviceContent = document.getElementById('service-content');

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const serviceId = urlParams.get('id');

// // Service data
// const services = [
//     {
//         id: 'power-washing',
//         title: 'Power Washing',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     },
//     {
//         id: 'window-cleaning',
//         title: 'Window Cleaning',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     },
//     {
//         id: 'gutter-cleaning',
//         title: 'Gutter Cleaning',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     },
//     {
//         id: 'painting',
//         title: 'Painting',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     },
//     {
//         id: 'christmas-lights',
//         title: 'Christmas Lights Installation',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     },
//     {
//         id: 'other-handyman-services',
//         title: 'Other Handyman Services',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
//     },
// ];

// // Find service by ID
// const selectedService = services.find((service) => service.id === serviceId);

// // Populate service page content
// if (selectedService) {
//     serviceTitle.textContent = selectedService.title;
//     serviceContent.textContent = selectedService.content;
// } else {
//     serviceTitle.textContent = 'Service Not Found';
//     serviceContent.textContent = 'Sorry, the requested service was not found.';
// }

// header menu
const handelClick = () => {
    document.body.classList.toggle("overflow-hidden");
    document.getElementById("menu").classList.toggle("max-sm:!top-0");
    document.getElementById("nav-line-1").classList.toggle("translate-x-10");
    document.getElementById("nav-line-2").classList.toggle("after:rotate-90");
    document.getElementById("nav-line-2").classList.toggle("rotate-45");
    document.getElementById("nav-line-3").classList.toggle("-translate-x-10");
};

// handle close
const handelClose = () => {
    document.body.classList.remove("overflow-hidden");
    document.getElementById("menu").classList.remove("max-sm:!top-0");
    document.getElementById("nav-line-1").classList.remove("translate-x-10");
    document.getElementById("nav-line-2").classList.remove("after:rotate-90");
    document.getElementById("nav-line-2").classList.remove("rotate-45");
    document.getElementById("nav-line-3").classList.remove("-translate-x-10");
}

// count down
const counter = document.querySelector('.counter');
const countDownDate = new Date("May 4, 2025, 3:12:10").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    counter.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);
        counter.textContent = "00:00:00:00";
    }
}, 1000);
document.querySelectorAll('.accordion-item').forEach(item => {
    const accBtn = item.querySelector('.accordion-btn');
    accBtn.addEventListener('click', () => toggleAccordion(item));
});

// faq
function toggleAccordion(button) {
    const allAccordions = document.querySelectorAll(".accordin-data");
    const allIcons = document.querySelectorAll(".accordin-button span:last-child");
    const paragraph = button.nextElementSibling;
    const icon = button.querySelector("span:last-child");
    allAccordions.forEach((otherParagraph) => {
        if (otherParagraph !== paragraph) {
            otherParagraph.style.maxHeight = null;
        }
    });
    allIcons.forEach((otherIcon) => {
        if (otherIcon !== icon) {
            otherIcon.classList.add("after:rotate-90");
        }
    });
    if (paragraph.style.maxHeight) {
        paragraph.style.maxHeight = null
        icon.classList.add("after:rotate-90");
    } else {
        paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        icon.classList.remove("after:rotate-90");
    }
}

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".latest-next",
        prevEl: ".latest-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});

// team slider
$('.team-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    prevArrow: '.team-left-arrow',
    nextArrow: '.team-right-arrow',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// add and subtract button
const decrementButton = document.getElementById("reduce-button");
const incrementButton = document.getElementById("increase-button");
const valueDisplay = document.getElementById("output");

let value = 100;
decrementButton.addEventListener("click", () => {
    value -= 1;
    valueDisplay.textContent = value;
});
incrementButton.addEventListener("click", () => {
    value += 1;
    valueDisplay.textContent = value;
});

// copy right year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// back to top
const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
};
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
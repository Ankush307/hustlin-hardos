const handelClick = () => {
    document.body.classList.toggle("overflow-hidden");
    document.getElementById("menu").classList.toggle("max-sm:!left-0");
    document.getElementById("menu").classList.toggle("max-sm:!top-0");
    document.getElementById("nav-line-1").classList.toggle("translate-x-10");
    document.getElementById("nav-line-2").classList.toggle("after:rotate-90");
    document.getElementById("nav-line-2").classList.toggle("rotate-45");
    document.getElementById("nav-line-3").classList.toggle("-translate-x-10");
};

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

function toggleAccordion(button) {
    const allAccordions = document.querySelectorAll(".accordin-data");
    const allIcons = document.querySelectorAll(
        ".accordin-button span:last-child"
    );

    const paragraph = button.nextElementSibling;
    const icon = button.querySelector("span:last-child");

    allAccordions.forEach((otherParagraph) => {
        if (otherParagraph !== paragraph) {
            otherParagraph.style.maxHeight = null;
        }
    });

    allIcons.forEach((otherIcon) => {
        if (otherIcon !== icon) {
            otherIcon.classList.add("after:opacity-100");
        }
    });

    if (paragraph.style.maxHeight) {
        paragraph.style.maxHeight = null;
        icon.classList.add("after:opacity-100");
    } else {
        paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        icon.classList.remove("after:opacity-100");
    }
}



$('.tweet-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.left-arrow',
    nextArrow: '.right-arrow',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.7,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
$('.team-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    // autoplay: true,
    prevArrow: '.team-left-arrow',
    nextArrow: '.team-right-arrow',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
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
// year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
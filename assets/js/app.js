// add and subtract button
const totalValue = document.querySelector('.total-value');
const subtractBtn = document.querySelector('.subtract-btn');
const plusBtn = document.querySelector('.plus-btn');
const mintBtn = document.querySelector('.mint-btn');
let count = 0;
subtractBtn.addEventListener('click', () => {
    count--;
    totalValue.textContent = count;
    if (count < 0) { count = 0; totalValue.textContent = count; }
});
plusBtn.addEventListener('click', () => {
    count++;
    totalValue.textContent = count;
});
mintBtn.addEventListener('click', () => {
    if (count > 0) {
        alert('Minting successful');
        count = 0;
        totalValue.textContent = count;
    }

});
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
    counter.textContent = days + ":" + hours + ":" + minutes + ":" + seconds + ":";
    if (distance < 0) {
        clearInterval(x);
        counter.textContent = "00:00:00:00";
    }
}, 1000);
document.querySelectorAll('.accordion-item').forEach(item => {
    const accBtn = item.querySelector('.accordion-btn');
    accBtn.addEventListener('click', () => toggleAccordion(item));
});

function toggleAccordion(activeItem) {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const content = item.querySelector('.accordion-text');
        const arrow = item.querySelector('img');

        if (item === activeItem) {
            item.classList.toggle('active');
            content.classList.toggle('-mt-56');
         
            arrow.classList.toggle('rotate-180');
            arrow.src = item.classList.contains('active') 
                ? './assets/images/svg/open-acc.svg' 
                : './assets/images/svg/plus.svg';
        } else {
            item.classList.remove('active');
            content.classList.add('-mt-56');
           
            arrow.classList.remove('rotate-180');
            arrow.src = './assets/images/svg/plus.svg';
        }
    });
}

$('.tweet-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '.right-arrow',
    nextArrow: '.left-arrow',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// accordian

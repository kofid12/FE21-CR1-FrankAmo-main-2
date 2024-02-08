var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Add slides dynamically
var slidesData = [
    { image: 'koko.jpg', title: 'Koko', subtitle: 'Description for Koko' },
    { image: 'ee.jpg', title: 'Egusi', subtitle: 'Description for Egusi' },
    { image: 'meatpie.jpg', title: 'Meat Pie', subtitle: 'Description for Meat Pie' },

    { image: 'spaghetti.jpg', title: 'Spaghetti bolognese', subtitle: 'Description for spaghetti' },
    { image: 'chickenwings.jpg', title: 'Chicken wings', subtitle: 'spicey' },
    { image: 'fu.jpg', title: 'fufu with light soup', subtitle: 'African special' },
    { image: 'images.jpg', title: 'Burger', subtitle: 'burger' },
    { image: 'frie.jpg', title: 'Fried Rice', subtitle: 'Asian DelicacyS' },
    // Add more slides...
];

var swiperWrapper = document.querySelector('.swiper-wrapper');
slidesData.forEach(function(slide) {
    var slideDiv = document.createElement('div');
    slideDiv.classList.add('swiper-slide', 'animate__animated', 'animate__fadeInUp');

    var image = document.createElement('img');
    image.src = slide.image;

    var title = document.createElement('h3');
    title.textContent = slide.title;

    var subtitle = document.createElement('p');
    subtitle.textContent = slide.subtitle;

    slideDiv.appendChild(image);
    slideDiv.appendChild(title);
    slideDiv.appendChild(subtitle);

    swiperWrapper.appendChild(slideDiv);
});
new Swiper ('.slider',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 1000,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})

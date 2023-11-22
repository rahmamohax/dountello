
        let navbar = document.querySelector('.navbar');
        document.querySelector('#menu').onclick=() =>{
                navbar.classList.toggle('active');
        }

        var swiper = new Swiper(".product-row", {
        spaceBetween: 20,
        // navigation: true,
        loop: true,
        centeredSlides: true,
        hashNavigation: {
                watchState: true,
        },
        autoplay:{
                delay:9500,
                disableOnInteraction: false,
        },
        // pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        // },
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        breakpoints: {
                0: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
        },
        });

        var swiper = new Swiper(".blogs-row", {
        spaceBetween: 20,
        // navigation: true,
        loop: true,
        // centeredSlides: true,
        hashNavigation: {
                watchState: true,
        },
        autoplay:{
                delay:9500,
                disableOnInteraction: false,
        },
        // pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        // },
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        breakpoints: {
                0: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 1,
                },
                1024: {
                slidesPerView: 1,
                },
        },
        });

        var swiper = new Swiper(".review-row", {
        spaceBetween: 30,
        // navigation: true,
        loop: true,
        centeredSlides: true,
        autoplay:{
                delay:9500,
                disableOnInteraction: false,
        },
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
        breakpoints: {
                0: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
        },
        });
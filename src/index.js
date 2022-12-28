window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const navbar = document.querySelector('.navbar');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');
    const sliderImages = document.querySelectorAll('.sliderImage');

    addEventListener("scroll", () => {
        if (window.window.scrollY > 200) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
        } else if (window.window.scrollY < 200) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        }
    });

    btnRight.addEventListener('click', () => {
        for (let i = 0; i < sliderImages.length; i++) {
            if (sliderImages[i].className == 'sliderImage active' && i != sliderImages.length-1) {
                sliderImages[i].classList.remove('active');
                sliderImages[i+1].classList.add('active');
                break;
            } else if (sliderImages[i].className == 'sliderImage active' && i == sliderImages.length-1) {
                sliderImages[i].classList.remove('active');
                sliderImages[0].classList.add('active');
                break;
            }

        }
    });

    btnLeft.addEventListener('click', () => {
        for (let i = 0; i < sliderImages.length; i++) {
            if (sliderImages[i].className == 'sliderImage active' && i != 0) {
                sliderImages[i].classList.remove('active');
                sliderImages[i-1].classList.add('active');
                break;
            }

        }
    });

    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].addEventListener('click', () => {
            sliderImages[i].classList.add('active');
            for (let j = 0; j < sliderImages.length; j++) {
                if (j != i) {
                    sliderImages[j].classList.remove('active');
                }
            }
            
        })
    }


}) ;
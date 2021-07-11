window.addEventListener('DOMContentLoaded', () => {
    const btnTextTabs = document.querySelectorAll('#btnTextTabs button'),
        otherTextH2 = document.querySelectorAll('#otherText h2'),
        otherTextP = document.querySelectorAll('#otherText p'),
        img = document.querySelectorAll('.hideImgMobile'),
        imgMobile = document.querySelectorAll('.ImgMobile'),
        sliderMobile = document.querySelectorAll('.sliderMobile');

    function clearBtn() {
        btnTextTabs.forEach(btn => {
            btn.classList.remove('btnShow');
        });
    }

    function hideTextTabs() {

        sliderMobile.forEach(img => {
            img.style.display = 'none';
        });
    }

    function showID(i) {
        sliderMobile[i].style.display = '';
    }

    btnTextTabs.forEach((btn, i) => {


        btn.addEventListener('click', () => {
            clearBtn();
            btn.classList.add('btnShow');

            hideTextTabs();
            showID(i);
        });
    });
});
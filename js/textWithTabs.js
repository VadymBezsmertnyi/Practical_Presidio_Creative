window.addEventListener('DOMContentLoaded', () => {
    const btnTextTabs = document.querySelectorAll('#btnTextTabs button'),
        img = document.querySelectorAll('.hideImgMobile'),
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
        img.forEach(img => {
            img.style.display = 'none';
        });
    }

    function showID(i) {
        sliderMobile[i].style.display = '';
        img[i].style.display = '';
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
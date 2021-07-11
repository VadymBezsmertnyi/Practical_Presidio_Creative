window.addEventListener('DOMContentLoaded', () => {
    const faqTextButton = document.querySelectorAll('.otherTextFaq h2'),
        faqImgButton = document.querySelectorAll('.otherTextFaq h2 img'),
        otherTextFaq = document.querySelectorAll('.otherTextFaq p'),
        faqImg = document.querySelectorAll('#imgFaq img'),
        imgMobileFaq = document.querySelectorAll('.imgMobileFaq');

    function hideAll() {
        faqTextButton.forEach(h2 => {
            h2.classList.add('hideColor');
        });
        faqImgButton.forEach(img => {
            img.classList.add('imgHideColor');
        });
        otherTextFaq.forEach(p => {
            p.classList.add('hide');
        });
        faqImg.forEach(imgMain => {
            imgMain.classList.add('hide');
        });
        imgMobileFaq.forEach(imgFaqMobile => {
            imgFaqMobile.classList.add('hide');
        });
    }

    faqTextButton.forEach((click, i) => {
        click.addEventListener('click', () => {
            hideAll();
            faqTextButton[i].classList.remove('hideColor');
            faqImgButton[i].classList.remove('imgHideColor');
            otherTextFaq[i].classList.remove('hide');
            faqImg[i].classList.remove('hide');
            imgMobileFaq[i].classList.remove('hide');
        });
    });
});
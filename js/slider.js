const sliderMobile = document.querySelectorAll('.sliderMobile'),
    sliderBtn = document.querySelectorAll('#sliderBtn'),
    left = document.querySelector('#left'),
    right = document.querySelector('#right'),
    otherTextTabs = document.querySelector('#otherTextTabs');

if (sliderMobile[0]) {
    left.style.display = "none";
    right.style.display = "";
    otherTextTabs.classList.add('idStart');
    otherTextTabs.classList.remove('idEnd');
}

function btnHide() {
    sliderBtn.forEach(btn => {
        btn.classList.add('off');
    });
    sliderMobile.forEach(slide => {
        slide.style.display = "none";
    });
}
let idSlide = 0;

sliderBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btnHide();
        sliderBtn[i].classList.remove('off');
        sliderBtn[i].classList.add('on');
        sliderMobile[i].style.display = "";
        console.log(i);

        idSlide = i;

        if (i == 1) {
            left.style.display = "";
            right.style.display = "";
            otherTextTabs.classList.remove('idStart');
            otherTextTabs.classList.remove('idEnd');
        }
        else if (i == 2) {
            right.style.display = "none";
            left.style.display = "";
            otherTextTabs.classList.add('idEnd');
            otherTextTabs.classList.remove('idStart');
        } else if (i == 0) {
            left.style.display = "none";
            right.style.display = "";
            otherTextTabs.classList.add('idStart');
            otherTextTabs.classList.remove('idEnd');
        }
    });
});


right.addEventListener('click', () => {
    btnHide();
    idSlide++;
    if(idSlide>2){
        idSlide=0;
    }
    sliderBtn[idSlide].classList.remove('off');
    sliderBtn[idSlide].classList.add('on');
    sliderMobile[idSlide].style.display = "";

    if (idSlide == 1) {
        left.style.display = "";
        right.style.display = "";
        otherTextTabs.classList.remove('idStart');
        otherTextTabs.classList.remove('idEnd');
    }
    else if (idSlide == 2) {
        right.style.display = "none";
        left.style.display = "";
        otherTextTabs.classList.add('idEnd');
        otherTextTabs.classList.remove('idStart');
    } else if (idSlide == 0) {
        left.style.display = "none";
        right.style.display = "";
        otherTextTabs.classList.add('idStart');
        otherTextTabs.classList.remove('idEnd');
    }
});

left.addEventListener('click', () => {
    btnHide();
    idSlide--;
    if(idSlide<0){
        idSlide=2;
    }
    console.log(idSlide);
    sliderBtn[idSlide].classList.remove('off');
    sliderBtn[idSlide].classList.add('on');
    sliderMobile[idSlide].style.display = "";

    if (idSlide == 1) {
        left.style.display = "";
        right.style.display = "";
        otherTextTabs.classList.remove('idStart');
        otherTextTabs.classList.remove('idEnd');
    }
    else if (idSlide == 2) {
        right.style.display = "none";
        left.style.display = "";
        otherTextTabs.classList.add('idEnd');
        otherTextTabs.classList.remove('idStart');
    } else if (idSlide == 0) {
        left.style.display = "none";
        right.style.display = "";
        otherTextTabs.classList.add('idStart');
        otherTextTabs.classList.remove('idEnd');
    }
});


var initialPoint;
var finalPoint;

sliderMobile.forEach((slider, i) => {

    slider.addEventListener('touchstart', function (event) {
        event.preventDefault();
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    }, false);
    slider.addEventListener('touchend', function (event) {
        event.preventDefault();
        event.stopPropagation();
        finalPoint = event.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX) {
                    if (i < sliderMobile.length - 1) {
                        if (i < i + 1) {
                            sliderMobile[i].style.display = "none";
                            sliderMobile[i + 1].style.display = "";
                            sliderBtn[i].classList.remove('on');
                            sliderBtn[i].classList.add('off');
                            sliderBtn[i + 1].classList.remove('off');
                            sliderBtn[i + 1].classList.add('on');
                            if (i == 0) {
                                left.style.display = "";
                                right.style.display = "";
                                otherTextTabs.classList.remove('idStart');
                                otherTextTabs.classList.remove('idEnd');
                            }
                            else if (i == 1) {
                                right.style.display = "none";
                                left.style.display = "";
                                otherTextTabs.classList.add('idEnd');
                                otherTextTabs.classList.remove('idStart');
                            }
                        }
                    }
                    else {
                        sliderMobile[2].style.display = "none";
                        sliderMobile[0].style.display = "";
                        sliderBtn[2].classList.remove('on');
                        sliderBtn[2].classList.add('off');
                        sliderBtn[0].classList.remove('off');
                        sliderBtn[0].classList.add('on');
                        if (i == 2) {
                            left.style.display = "none";
                            right.style.display = "";
                            otherTextTabs.classList.add('idStart');
                            otherTextTabs.classList.remove('idEnd');
                        }
                    }
                }
                else {
                    if (i > 0) {
                        if (i > i - 1) {
                            sliderMobile[i].style.display = "none";
                            sliderMobile[i - 1].style.display = "";
                            sliderBtn[i].classList.remove('on');
                            sliderBtn[i].classList.add('off');
                            sliderBtn[i - 1].classList.remove('off');
                            sliderBtn[i - 1].classList.add('on');
                            if (i == 2) {
                                left.style.display = "";
                                right.style.display = "";
                                otherTextTabs.classList.remove('idStart');
                                otherTextTabs.classList.remove('idEnd');
                            }
                            else if (i == 1) {
                                left.style.display = "none";
                                right.style.display = "";
                                otherTextTabs.classList.add('idStart');
                                otherTextTabs.classList.remove('idEnd');
                            }
                        }
                    }
                    else {
                        sliderMobile[0].style.display = "none";
                        sliderMobile[2].style.display = "";
                        sliderBtn[0].classList.remove('on');
                        sliderBtn[0].classList.add('off');
                        sliderBtn[2].classList.remove('off');
                        sliderBtn[2].classList.add('on');
                        if (i == 0) {
                            right.style.display = "none";
                            left.style.display = "";
                            otherTextTabs.classList.add('idEnd');
                            otherTextTabs.classList.remove('idStart');
                        }
                    }
                }
            }
        }
    }, false);
});
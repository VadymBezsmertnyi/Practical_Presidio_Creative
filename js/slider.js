const sliderMobile = document.querySelectorAll('.sliderMobile'),
    sliderBtn = document.querySelectorAll('#sliderBtn'),
    left = document.querySelector('#left'),
    right = document.querySelector('#right'),
    otherTextTabs = document.querySelector('#otherTextTabs'),
    img = document.querySelectorAll('.hideImgMobile'),
    btnTextTabs = document.querySelectorAll('#btnTextTabs button');

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
    img.forEach(slide => {
        slide.style.display = "none";
    });
}
let idSlide = 0;

btnTextTabs.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        idSlide = i;
        console.log(idSlide);
        btnHide();
        sliderBtn[i].classList.remove('off');
        sliderBtn[i].classList.add('on');

        if (i == 1) {
            left.style.display = "";
            right.style.display = "";
            otherTextTabs.classList.remove('idStart');
            otherTextTabs.classList.remove('idEnd');
            clearBtn();
            showBtn(i);
        }
        else if (i == 2) {
            right.style.display = "none";
            left.style.display = "";
            otherTextTabs.classList.add('idEnd');
            otherTextTabs.classList.remove('idStart');
            clearBtn();
            showBtn(i);
        } else if (i == 0) {
            left.style.display = "none";
            right.style.display = "";
            otherTextTabs.classList.add('idStart');
            otherTextTabs.classList.remove('idEnd');
            clearBtn();
            showBtn(i);
        }
    });
});



function clearBtn() {
    btnTextTabs.forEach(btn => {
        btn.classList.remove('btnShow');
    });
    img.forEach(slide => {
        slide.style.display = "none";
    });
}
function showBtn(i) {
    btnTextTabs[i].classList.add('btnShow');
    img[i].style.display = "";
}

sliderBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btnHide();
        sliderBtn[i].classList.remove('off');
        sliderBtn[i].classList.add('on');
        sliderMobile[i].style.display = "";
        console.log(i);

        idSlide = i;
        clearBtn();
        showBtn(i);

        if (i == 1) {
            left.style.display = "";
            right.style.display = "";
            otherTextTabs.classList.remove('idStart');
            otherTextTabs.classList.remove('idEnd');
            clearBtn();
            showBtn(i);
        }
        else if (i == 2) {
            right.style.display = "none";
            left.style.display = "";
            otherTextTabs.classList.add('idEnd');
            otherTextTabs.classList.remove('idStart');
            clearBtn();
            showBtn(i);
        } else if (i == 0) {
            left.style.display = "none";
            right.style.display = "";
            otherTextTabs.classList.add('idStart');
            otherTextTabs.classList.remove('idEnd');
            clearBtn();
            showBtn(i);
        }
    });
});


right.addEventListener('click', () => {
    btnHide();
    idSlide++;
    if (idSlide > 2) {
        idSlide = 0;
        clearBtn();
        showBtn(idSlide);
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
    clearBtn();
    showBtn(idSlide);
});

left.addEventListener('click', () => {
    btnHide();
    idSlide--;
    if (idSlide < 0) {
        idSlide = 2;
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
    clearBtn();
    showBtn(idSlide);
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
                                console.log(i);
                                idSlide = 1;
                                clearBtn();
                                showBtn(idSlide);
                            }
                            else if (i == 1) {
                                idSlide = i;
                                right.style.display = "none";
                                left.style.display = "";
                                otherTextTabs.classList.add('idEnd');
                                otherTextTabs.classList.remove('idStart');
                                console.log(i);
                                idSlide = 2;
                                clearBtn();
                                showBtn(idSlide);
                            }
                        }
                    }
                    else {
                        idSlide = i;
                        sliderMobile[2].style.display = "none";
                        sliderMobile[0].style.display = "";
                        sliderBtn[2].classList.remove('on');
                        sliderBtn[2].classList.add('off');
                        sliderBtn[0].classList.remove('off');
                        sliderBtn[0].classList.add('on');
                        idSlide = 0;
                        clearBtn();
                        showBtn(idSlide);
                        if (i == 2) {
                            idSlide = i;
                            left.style.display = "none";
                            right.style.display = "";
                            otherTextTabs.classList.add('idStart');
                            otherTextTabs.classList.remove('idEnd');
                            idSlide = 0;
                            clearBtn();
                            showBtn(idSlide);
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
                                idSlide = 1;
                                clearBtn();
                                showBtn(idSlide);
                            }
                            else if (i == 1) {
                                left.style.display = "none";
                                right.style.display = "";
                                otherTextTabs.classList.add('idStart');
                                otherTextTabs.classList.remove('idEnd');
                                idSlide = 0;
                                clearBtn();
                                showBtn(idSlide);
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
                        idSlide = 0;
                        clearBtn();
                        showBtn(idSlide);
                        if (i == 0) {
                            right.style.display = "none";
                            left.style.display = "";
                            otherTextTabs.classList.add('idEnd');
                            otherTextTabs.classList.remove('idStart');
                            idSlide = 0;
                            clearBtn();
                            showBtn(idSlide);
                        }
                    }
                }
            }
        }
    }, false);
});
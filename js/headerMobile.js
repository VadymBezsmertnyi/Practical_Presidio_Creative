window.addEventListener('DOMContentLoaded', () => {

    const navBtn = document.querySelector('#nav-btn'),
        logo = document.querySelector('.logo'),
        logoNavigation = document.querySelector('.logoNavigation'),
        mainNavigation = document.querySelector('#mainNavigation'),
        navigation = document.querySelector('#navigation'),
        body = document.querySelector('body'),
        headerID = document.querySelector('#mainTextTabs'),
        faq = document.querySelector('#faq');

    navBtn.addEventListener('click', () => {
        navBtn.classList.add('hide');
        logo.classList.add('logoJS');
        logoNavigation.classList.add('logoNavigationJS');
        mainNavigation.classList.remove('mainNavigation');
        mainNavigation.classList.add('mainNavigationJS');
        navigation.style.display = "flex";
    });

    function hideMunuNavigation(){
        navBtn.classList.remove('hide');
        logo.classList.remove('logoJS');
        logoNavigation.classList.remove('logoNavigationJS');
        mainNavigation.classList.remove('mainNavigationJS');
        mainNavigation.classList.add('mainNavigation');
        navigation.style.display = "";
    }

    body.addEventListener('click', (e) => {
        if (e.target === body) {
            hideMunuNavigation();
        }
    });

    headerID.addEventListener('click', (e) => {
        if (e.target !== headerID) {
            hideMunuNavigation();
        }
    });

    faq.addEventListener('click', (e) => {
        if (e.target !== faq) {
            hideMunuNavigation();
        }
    });
});
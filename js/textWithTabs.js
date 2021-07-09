window.addEventListener('DOMContentLoaded', () => {
    const btnTextTabs = document.querySelectorAll('#btnTextTabs button'),
              otherTextH2 = document.querySelectorAll('#otherText h2'),
              otherTextP = document.querySelectorAll('#otherText p'),
              img = document.querySelectorAll('.hideImgMobile'),
              imgMobile = document.querySelectorAll('.ImgMobile');

    console.log(otherTextH2);
    console.log(otherTextP);
    console.log(img);

    function clearBtn(){
        btnTextTabs.forEach(btn =>{
            btn.classList.remove('btnShow');
        });
    }

    function hideTextTabs(){
        otherTextH2.forEach(h2 =>{
            h2.style.display = 'none';
        });
        otherTextP.forEach(p =>{
            p.style.display = 'none';
        });
        img.forEach(im =>{
            im.style.display = 'none';
        });
        imgMobile.forEach(imM =>{
            imM.style.display = 'none';
        });
    }

    function showID(i){
        otherTextH2[i].style.display = '';
        otherTextP[i].style.display = '';
        img[i].style.display = '';
        imgMobile[i].style.display = '';
    }

    btnTextTabs.forEach((btn, i) =>{
        

        btn.addEventListener('click', ()=>{
            clearBtn();
            btn.classList.add('btnShow');

            hideTextTabs();
            showID(i);
        });
    });
});
const openAddData = document.querySelectorAll(".button");
for (let i = 0; i < openAddData.length; i++) {
    openAddData[i].addEventListener("click", function () {
        document.querySelector('.popup').style.display = 'flex';

        if(document.querySelector('.popup').style.display === 'flex') {
            document.querySelector('body').style.overflow = 'hidden';
        }
    });
}

const closeAddData = document.querySelectorAll(".close-button");
for (let i = 0; i < closeAddData.length; i++) {
    closeAddData[i].addEventListener("click", function () {
        const popup = document.querySelector('.popup').style.display = 'none';
        const popupEdit = document.querySelector('.popupEdit').style.display = 'none';
        
        if(popup === 'none' || popupEdit === 'none') {
            document.querySelector('body').style.overflow = 'auto';
        }
    });
}
// document.getElementById('close-button').addEventListener('click', function() {
//     document.querySelector('.popup').style.display = 'none';

//     if(document.querySelector('.popup').style.display === 'none') {
//         document.querySelector('body').style.overflow = 'auto';

//         document.getElementById('nama').value = '';
//         document.getElementById('kecamatan').value = '';
//         document.getElementById('pelatihan').value = '';
//         document.getElementById('keterangan').value = '';
//     }
// });

// document.getElementById('close-button').addEventListener('click', function() {
//     document.querySelector('.popupEdit').style.display = 'none';

//     if(document.querySelector('.popupEdit').style.display === 'none') {
//         document.querySelector('body').style.overflow = 'auto';

//         document.getElementById('nama').value = '';
//         document.getElementById('kecamatan').value = '';
//         document.getElementById('pelatihan').value = '';
//         document.getElementById('keterangan').value = '';
//     }
// });

const accordionItemHeaders = document.querySelectorAll(".acc-header");
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
        accordionItemBody.style.maxHeight = 0;
    }
    
    });
});
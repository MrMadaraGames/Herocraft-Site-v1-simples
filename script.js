function showPage(page) {
   const pages = document.querySelectorAll('.home-page, .about-page, .support-page');
   pages.forEach(function (item) {
       item.style.display = 'none';
   });

   document.querySelector(page).style.display = 'flex';
}

function showAddress() {
   document.querySelector('.server-address').style.display = 'none'
   document.querySelector('.server-address-full').style.display = 'flex';
}

function hideAddress() {
   document.querySelector('.server-address-full').style.display = 'none'
   document.querySelector('.server-address').style.display = 'flex';
}
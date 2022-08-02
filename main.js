//  function dropFeatures () {
//     document.getElementsByClassName('features').classList.toggle('features');
//  }

//  window.onclick = function (e) {
//     if(!e.target.matches('.dropbtn')) {
//         let drop = document.getElementById('drop');
//         if(drop.classList.contains('show')) {
//             drop.classList.remove('show')
//         }
//     }
//  }

// window.onload =  () => {
//     const hamburger_menu = document.querySelector('#menu').src;
//     const mobile_menu = document.querySelector('.mobile-nav');

//     function toggleImg () {
//         if(hamburger_menu.indexOf("./images/icon-menu.svg") != -1){
//             document.querySelector("#menu").src = "./images/icon-close-menu.svg"
//         }
//         else{
//             document.querySelector("#menu").src="./images/icon-menu.svg"
//         }
//         // hamburger_menu.src="./images/icon-close-menu.svg";
//         mobile_menu.classList.toggle('is-active');
//     };


// }


window.onload =  () => {
    const hamb_menu = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    hamb_menu.addEventListener('click', () => {
        hamb_menu.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}
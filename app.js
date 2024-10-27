
// const hamburger = document.getElementById("hamburger").addEventListener("click" ,
//      function () {
// const hamburgermenu = document.getElementsByClassName("hamburger-menu");

// if(hamburgermenu.style.diplay ==="none") {
//     hamburgermenu.style.display = "block";
// } else {
//     hamburgermenu.style.display = "none"
// }

// } )



// const heartIcon = document.getElementById('heart-icon');

//     heartIcon.addEventListener('click', function() {

//         const currentSrc = heartIcon.getAttribute('src');

//         if (currentSrc === 'images/heart1.svg') {

//             heartIcon.setAttribute('src', 'images/heart2.svg');
//         } else {
//             heartIcon.setAttribute('src', 'images/heart1.svg');
//         }
//     })



// sans compteur ------------>
// const heartIconSvg = document.getElementById('heart-icon');


// heartIconSvg.addEventListener ('click', function() {
//     const path = heartIconSvg.querySelector('path');
//     const currentFill = path.getAttribute('fill');

    
//     if (currentFill === 'gray') {
//         path.setAttribute('fill', 'red'); 
//     } else {
//         path.setAttribute('fill', 'gray'); 
//     }
// });


// Sélectionne l'élément SVG

// const heartIcons = document.querySelectorAll('.heart-icon');

// heartIcons.forEach(function(heartIconSvg) {

//     heartIconSvg.addEventListener('click', function() {
       
//         const path = heartIconSvg.querySelector('path');
//         const currentFill = path.getAttribute('fill');

//         if (currentFill === 'gray') {
//             path.setAttribute('fill', 'red'); 
//         } else {
//             path.setAttribute('fill', 'gray');
//         }
//     });
// });




// compteur ------------>

// const heartIcons = document.querySelectorAll('.heart-icon');

// const heartCounter = document.getElementById('heart-counter');

// let totalLikes = 0;

// heartIcons.forEach(function(heartIconSvg) {
//     heartIconSvg.addEventListener('click', function() {
       
//         const path = heartIconSvg.querySelector('path');
//         const currentFill = path.getAttribute('fill');

        
//         if (currentFill === 'gray') {
            
//             path.setAttribute('fill', 'red'); 
//             totalLikes++; 
//         } else {
            
//             path.setAttribute('fill', 'gray'); 
//             if (totalLikes > 0) {
//                 totalLikes--; 
//             }
//         }

//         heartCounter.textContent = totalLikes;
//     });
// });



// compteur & notification red------------>

const heartIcons = document.querySelectorAll('.heart-icon');

const heartCounter = document.getElementById('heart-counter');
const navbarHeartIcon = document.getElementById('navbar-heart-icon'); 

let totalLikes = 0;


function updateNavbarHeart() {
    if (totalLikes > 0) {
        navbarHeartIcon.setAttribute('fill', 'red');
    } else {
        navbarHeartIcon.setAttribute('fill', 'gray');
    }
}

heartIcons.forEach(function(heartIconSvg) {
    heartIconSvg.addEventListener('click', function() {
        const path = heartIconSvg.querySelector('path');
        const currentFill = path.getAttribute('fill');

        
        if (currentFill === 'gray') {
            path.setAttribute('fill', 'red'); 
            totalLikes++; 
        } else {
            path.setAttribute('fill', 'gray'); 
            if (totalLikes > 0) {
                totalLikes--; 
            }
        }

        heartCounter.textContent = totalLikes;
        updateNavbarHeart();
    });
});




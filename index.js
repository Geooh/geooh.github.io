
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block", 
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

// initalize page change with scroll wheel
// var winHeight = window.innerHeight;
//     pages = document.getElementsByClassName('page'),
//     navLinks = document.querySelectorAll('#menu-nav a'),
//     currentPage = 0;

// window.addEventListener('mousewheel', function(e) {
//     scrollPages(e.wheelDelta);
// });
// window.addEventListener('DOMMouseSCroll', function(e) {
//     scrollPages(-1 * e.detail);
// });

// function scrollPages(delta) {
//     var direction =(delta > 0) ? 'up' : 'down',
//     currentPageOffset = currentPage + winHeight;

//     if(direction == 'down' && currentPage <= pages.length - 2) {
//         window.scrollTo(0, currentPageOffset + winHeight);
//         currentPage++;
//     } else if (direction == 'up' && currentPage > 0) {
//         window.scrollTo(0, currentPageOffset - winHeight);
//         currentPage--;
//     }
// }

// for (var i=0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', updateNav(i));
// }

// function updateNav(i) {
//     return function() {
//         for (var j=0; j < navLinks.length; j++) {
//             navLinks[j].parentNode.classList.remove('current');
//         }
//         navLinks[i].parentNode.classList.add('current');
//         currentPage = 1;
//     }
// }

/* Slick Carousel by Ken Wheeler */
// $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });
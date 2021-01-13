"use strict";

//////////////////////////////////////
//////////////////////////////////////
// // Animation with Gsap the main content

// gsap.from(".about__image", { opacity: 0, duration: 1, y: -50, delay: 0.5, stragger: 0.6 })
// gsap.from('.btn-main', { duration: 1, delay: 2.6, y: 30, opacity: 0 })
// gsap.from('.about__text_big', { duration: 1, delay: 1.4,  opacity: 0,marginLeft:"200px"  })
// gsap.from('.about__text_small', { duration: 1, delay: 2.2,  opacity: 0,marginRight:"200px"  })

///////////////////////////////////////
// Event Propagation in Practice

document.querySelector('.nav__list').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
  
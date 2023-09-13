/*
Author: Widly Delone
File Name: button.js
Date: 04/28/2023
*/

/*Scroll Button Feature*/

$('.scroll-top-btn').click(function() {
  console.log('Scroll to top button clicked');
  $('html, body').animate({scrollTop: 0}, 'slow');
});



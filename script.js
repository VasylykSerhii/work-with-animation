
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  var burger = document.querySelector('.burger');

  burger.onclick = function() {
    this.classList.toggle("active");
  };

});
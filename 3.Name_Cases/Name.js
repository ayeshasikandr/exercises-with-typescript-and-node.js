"use strict";
let personName = 'ayesha sikander';
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let titleCase = personName.split('  ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(lowerCase);
console.log(upperCase);
console.log(titleCase);

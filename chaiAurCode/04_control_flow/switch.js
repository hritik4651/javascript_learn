//// # Switch case
let myDate = new Date();

let day = myDate.getDay()
// console.log(day);

switch (day) {
     case 0:
          console.log('SunDay');
          break;
     case 1:
          console.log('ManDay');
          break;
     case 2:
          console.log('TuesDay');
          break;
     case 3:
          console.log('WednesDay');
          break;
     case 4:
          console.log('ThursDay');
          break;
     case 5:
          console.log('FriDay');
          break;
     case 6:
          console.log('SaturDay');
          break;

     default:
          console.log('Wrong');
          break;
}
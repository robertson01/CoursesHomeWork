let enterNumber = prompt ("Enter your name: ");
let result ="";
let resulting = "";


if (enterNumber.match(/\d/g)) {

  // не совсем понял задание, сделал 2 варината. тут выдоит если есть цифра в имени, все буквы в Верхнем регистреж
// for (let j = 0; j < enterNumber.length; j++) {
//       resulting += enterNumber.charAt(j).toUpperCase();
//   }
//   alert(resulting);

// если есть цифра в нике, то меняет места регист букв с большого на маленький и на оборот.
  for (let j = 0; j < enterNumber.length; j++) {
    if(enterNumber.charAt(j) == enterNumber.charAt(j).toLowerCase()){
      resulting += enterNumber.charAt(j).toUpperCase();
    }
    else if (enterNumber.charAt(j) == enterNumber.charAt(j).toUpperCase()) {
    resulting += enterNumber.charAt(j).toLowerCase();
    }
  }
  alert(resulting);
}
else{
  // alert(enterNumber.split("").reverse().join("")); // один из варинтов решения.
  for (let i = enterNumber.length -1; i >= 0; i--) {
    result += enterNumber.charAt(i);
  }
  alert(result);
}

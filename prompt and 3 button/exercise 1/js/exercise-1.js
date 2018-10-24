let enterNumber = prompt ("Enter your name: ");
let result ="";
let resulting = "";


if (enterNumber.match(/\d/g)) {
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
  // alert(enterNumber.split("").reverse().join(""));
  for (let i = enterNumber.length -1; i >= 0; i--) {
    result += enterNumber.charAt(i);
  }
  alert(result);
}

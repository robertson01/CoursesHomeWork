// link for new page
document.getElementById("newPage").onclick = function () {
  window.location.href = "https://www.freecodecamp.org";
};

//update css style
document.getElementById("newStyle").onclick = function () {
  let arrId = ["newPage", "newStyle", "newLayout"];
  //add style for buttons
  for (let i = 0; i < arrId.length; i++) {
    document.getElementById(arrId[i]).style.cssText = "color: #123343; width: 300px;";
  }
  document.getElementById("newPage").style.backgroundColor = "#f441eb";
  document.getElementById("newStyle").style.backgroundColor = "#53f442";
  document.getElementById("newLayout").style.backgroundColor = "#f49b41";

  // create button back and validate for create
  if (!(document.getElementById("back"))) {
    let btnBack;
    btnBack = document.createElement("button");
    btnBack.className = "btn btn-dark";
    btnBack.id = "back";
    btnBack.innerHTML = "you can back";
    wrap.appendChild(btnBack);

    // back time;
    document.getElementById("back").onclick = function () {
      document.getElementById("newPage").removeAttribute("style");
      document.getElementById("newStyle").removeAttribute("style");
      document.getElementById("newLayout").removeAttribute("style");
      document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
    };
  }
};

document.getElementById("newLayout").onclick = function () {

  // delete 3 button
  document.body.innerHTML = '';

  let newDiv = document.createElement("div");
  newDiv.id = "navigation";
  document.body.appendChild(newDiv);

  let newUl = document.createElement("ul");
  newUl.id = "menu";
  newDiv.appendChild(newUl);

  let newLi;
  let arrayLi = ["Home", "About", "Contact", "News", "Gallery"];

  let newDiv2 = document.createElement("div");
  newDiv2.id = "wrapper-img";
  document.body.appendChild(newDiv2);
  newDiv2.innerHTML = '<img id="set-img" src="images/pic1.jpg"> \ <img id="set-img" src="images/pic2.jpg"> \ <img id="set-img" src="images/pic3.jpg"> \ <img id="set-img" src="images/pic4.jpg"> \ <img id="set-img" src="images/pic5.jpeg"> \ <img id="set-img"src="images/pic6.jpg">';

  let newFooter = document.createElement("footer");
  newFooter.id = "set-footer";
  document.body.appendChild(newFooter);
  newFooter.innerHTML = '<h2>Здесь могла быть ваша реклама</h2>';

  // Create tag <li>
  for (let k = 0; k < arrayLi.length; k++) {
    newLi = document.createElement("li");
    newUl.appendChild(newLi);
    newLi.id = "item";
    newLi.innerHTML = newLi.innerHTML + arrayLi[k];
  }
document.body.style.cssText = "margin:0 auto; width: 1170px;";
document.getElementById("navigation").style.cssText = "background-color: lightgrey; ";
document.getElementById("menu").style.cssText = "display:flex; justify-content:space-around; list-style-type: none; padding:10px 0; ";

document.getElementById("wrapper-img").style.cssText = "margin-top:50px; display:flex; flex-flow: row wrap; justify-content:center";

document.getElementById("set-footer").style.cssText = "background-color: lightgrey; padding:10px 0; text-align:center;";

};
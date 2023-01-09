import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



function changeTitle() {
  let title = document.getElementById("welcome");
  title.innerHTML = "HEHEHEHE THIS IS NOT A REAL WEBISTE <br> AND THE BUTTON IS NOT FUN";
  title.style.color = "black";
}

function changeText(){
 let texts =  Array.from(document.getElementsByClassName("morfi"))
  texts.forEach(element => { 
      element.textContent = "You did this to me"
      element.style.color= "purple"
      element.style.fontSize= "90px"
      
  });
}

function noTrump(){
  let body = document.getElementsByTagName("body")
  body[0].style.backgroundImage = "url('https://i.ytimg.com/vi/gsIxP-c83ok/maxresdefault.jpg')"

}
ReactDOM.render(document.getElementById('root'));

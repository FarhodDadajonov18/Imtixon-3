let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".select");
let elinputRadio = document.querySelector(".input-radio");
let elInputCheck = document.querySelectorAll(".input-check");
let elText = document.querySelector(".span");
let elText2 = document.querySelector(".span2")
let elResult = document.querySelectorAll(".list-group");
let elRadio = document.querySelector(".input-radio");

elRadio.addEventListener("change", function(event){
  elText2.textContent = event.target.value
})

elResult[0].style.height = "330px";
elResult[1].style.height = "110px";
let selectArray = ["Yupqa","Qalin","Orta"];

for(let i=0; i < selectArray.length; i++){
  let elOption = document.createElement("option");
  elOption.textContent = selectArray[i];
  elOption.value = selectArray[i];
  elSelect.appendChild(elOption);
}

let radioArray = ["25cm", "30cm", "35cm"];
for(let i=0; i < radioArray.length; i++){
  let radioBox = document.createElement("label");
  let radioInput = document.createElement("input");
  
  radioBox.setAttribute("class" ,"text-center");
  radioInput.setAttribute("name", "Kattaligi");
  radioInput.setAttribute("type", "radio");

  radioInput.value = radioArray[i];
  radioBox.textContent = radioArray[i];
  
  elinputRadio.appendChild(radioBox);
  radioBox.appendChild(radioInput);

  radioBox.style.border = "3px solid #494744"; 
  radioBox.style.fontWeight = "bold"; 
  radioBox.style.padding = "10px";
  radioBox.style.paddingTop ="20px"; 
  radioBox.style.margin = "10px"; 
  radioBox.style.width = "70px"; 
  radioBox.style.cursor = "pointer";
  radioBox.style.borderRadius = "50%"; 
  radioInput.style.opacity = "0"; 

}


let checkArray =[ "Pomidor", "Kurka go'shti", " Zaytun", "Tuzlangan Bodring", "Qo'ziqorin" , "Qazi"];
for(let i=0; i < checkArray.length; i++){
 
  let elFormInput = document.createElement("input");
  let elFormCheck = document.createElement("label");

  elFormCheck.setAttribute("class", "text-center ");
  elFormInput.setAttribute("class", "input-checked ");
  elFormInput.setAttribute("type", "checkbox");
  elFormInput.setAttribute("name", "Upper of pizza");
  elFormInput.value = checkArray[i];
  elFormCheck.textContent = checkArray[i];
  elInputCheck[0].appendChild(elFormCheck);
  elFormCheck.prepend(elFormInput);
   
  elFormCheck.style.display = "flex";
  elFormCheck.style.alignItems = "center";
  elFormCheck.style.paddingBottom = "10px";

  elFormInput.style.marginRight ="10px";
  elFormInput.style.width ="30px";

}

let extraArray =["Achchiq", "Sosiskali"];
for(let i=0; i < extraArray.length; i++){
  let finalInput = document.createElement("input");
  let finalCheck = document.createElement("label");

  finalCheck.setAttribute("class", "text-center2");
  finalInput.setAttribute("type", "checkbox");
  finalInput.setAttribute("class", "input-checked2");
  finalInput.setAttribute("name", "Extra Type");

  finalCheck.textContent = extraArray[i];
  finalInput.value = extraArray[i];
  elInputCheck[1].appendChild(finalCheck);
  finalCheck.prepend(finalInput);

 finalCheck.style.display = "flex";
 finalCheck.style.alignItems= "center";
 finalCheck.style.paddingBottom = "10px";
 finalCheck.style.width = "30px"
 finalInput.style.marginRight = "15px";
}




elSelect.addEventListener("change", function(evt){
  elText.textContent = elSelect.value;
})

let inputCheckeds = document.querySelectorAll(".input-checked");
let answers = [];
for(let element = 0; element < inputCheckeds.length; element++) {
  let listItem = document.createElement("li"); 

  inputCheckeds[element].addEventListener("change", function() {

    if(inputCheckeds[element].checked) {
      answers.push(inputCheckeds[element].value)

      for(let i = 0; i < answers.length; i++) {
        listItem.textContent = answers[i];
        
        elResult[0].appendChild(listItem)
      }
    }
    else{
      elResult[0].removeChild(listItem)
    }
   
  })

  listItem.style.backgroundColor = "green";
  listItem.style.color = "#fff";
  listItem.style.marginBottom= "10px";
  listItem.style.padding= "10px";

}

let inputCheckeds2 = document.querySelectorAll(".input-checked2");
let answers2 = [];
for(let element = 0; element < inputCheckeds2.length; element++) {
  let listItem = document.createElement("li"); 

  inputCheckeds2[element].addEventListener("change", function() {

    if(inputCheckeds2[element].checked) {
      answers2.push(inputCheckeds2[element].value)

      for(let i = 0; i < answers2.length; i++) {
        listItem.textContent = answers2[i];
        
        elResult[1].appendChild(listItem)
      }
    }
    else{
      elResult[1].removeChild(listItem)
    }
   
  })

  listItem.style.backgroundColor = "green";
  listItem.style.color = "#fff";
  listItem.style.marginBottom= "10px";
  listItem.style.padding= "10px";

}



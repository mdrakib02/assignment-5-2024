
// Get Input with Value of Numbers
function inputValueById(id) {
   const inputValue = document.getElementById(id).value;
   const inputValueNumber = parseFloat(inputValue);
   return inputValueNumber;

}

// get field value of numbers
function fieldValueById(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
 
 }
  
// Validation input Id
function invalidInput(id){
    const inputValueForValid = inputValueById(id);
    if(inputValueForValid <= 0 || isNaN(inputValueForValid)){
        alert("Invalid Donation Amount")
        return false;
    }
    return true;
    
}

// get text Content 

function getTextContent(id){
    const textContent = document.getElementById(id).textContent
    return textContent;
}


// Get received fresh id

function getFreshField(id){
  const idField =  document.getElementById(id);
  return idField;
}

function tabSwitch(tab){
    const donateBtn = document.getElementById("donate");
    const historyBtn = document.getElementById("history");
    const historyPlace = document.getElementById("history-place");
    const donateCard = document.getElementById("donate-card")

    if(tab === "donate-button"){
        donateBtn.classList.add("bg-lime-300", "brightness-10");
        historyBtn.classList.remove("bg-lime-300", "brightness-10");

        historyPlace.classList.add("hidden")
        donateCard.classList.remove("hidden");

    }
    else if (tab === "history-button"){
        historyBtn.classList.add("bg-lime-300", "brightness-10");
        donateBtn.classList.remove("bg-lime-300", "brightness-10");

        historyPlace.classList.remove("hidden");
        donateCard.classList.add("hidden");
    }
}

document.getElementById("home-btn").addEventListener("click", function(){
    window.location.href = "index.html";

})
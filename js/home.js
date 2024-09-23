

document.getElementById("donate-button-one").addEventListener("click", function (){

   const inputOne = inputValueById("input-one");
    const isValid = invalidInput("input-one");
    if(!isValid ){
        document.getElementById("input-one").value = "";
        return
    }
    else{
        document.getElementById("input-one").value = "";
    }
 

    const totalBalanceOne = fieldValueById("total-balance");
    const currentTotalBalance = totalBalanceOne - inputOne;
    document.getElementById("total-balance").innerText = currentTotalBalance;

    const totalDonateBalance = fieldValueById("total-donate-balance");
    const currentDonateBalance = totalDonateBalance + inputOne;
    getFreshField("total-donate-balance").innerText = currentDonateBalance;

    const noaKhaliDonate = getTextContent("npakhali-donate");
    const newDiv = document.createElement("div");
    newDiv.classList.add("p-8", "border-[1px]", "border-gray-200", "shadow-sm", "rounded-md", "mb-3", "shadow-md");
    newDiv.innerHTML = `
        <p class="text-xs md:text-xl font-bold">${inputOne} TK is ${noaKhaliDonate}</p>
        <p> ${new Date().toLocaleDateString("en-US" , {
            
            timeZone: "Asia/Dhaka",
            weekday:"short",
            year:"numeric",
            month:"short",
            day:"numeric",
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            timeZoneName:"long"

            })}</p>
    `;
     getFreshField("history-place").appendChild(newDiv);
     document.getElementById('my_modal_5').showModal();
});

// Second Button
document.getElementById("donate-button-two").addEventListener("click", function (){

   const inputTwo = inputValueById("input-two");
   const isValid = invalidInput("input-two");
   if(!isValid ){
       document.getElementById("input-two").value = "";
       return
   }
   else{
        document.getElementById("input-two").value = "";
    }

    const totalBalanceOne = fieldValueById("total-balance");
    const currentTotalBalance = totalBalanceOne - inputTwo;
    document.getElementById("total-balance").innerText = currentTotalBalance;

    const totalDonateBalance = fieldValueById("total-donate-balance-two");
    const currentDonateBalance = totalDonateBalance + inputTwo;
    getFreshField("total-donate-balance-two").innerText = currentDonateBalance;

    const donatePlace = getTextContent("donate-feni");
    const newDiv = document.createElement("div");
    newDiv.classList.add("p-8", "border-[1px]", "border-gray-200", "shadow-sm", "rounded-md", "mb-3", "shadow-md");
    newDiv.innerHTML = `
        <p class="text-xs md:text-xl font-bold">${inputTwo} TK is ${donatePlace}</p>
        <p> ${new Date().toLocaleDateString("en-US" , {
            
            timeZone: "Asia/Dhaka",
            weekday:"short",
            year:"numeric",
            month:"short",
            day:"numeric",
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            timeZoneName:"long"

            })}</p>
    `;
     getFreshField("history-place").appendChild(newDiv);

  document.getElementById("input-two").value = "";
  document.getElementById('my_modal_5').showModal();
});

// Button Three
document.getElementById("donate-button-three").addEventListener("click", function (){

   const inputThree = inputValueById("input-three");
   const isValid = invalidInput("input-three");
   if(!isValid ){
       document.getElementById("input-three").value = "";
       return
   }else{
        document.getElementById("input-three").value = "";
    }

    const totalBalanceOne = fieldValueById("total-balance");
    const currentTotalBalance = totalBalanceOne - inputThree;
    document.getElementById("total-balance").innerText = currentTotalBalance;

    const totalDonateBalance = fieldValueById("total-donate-balance-three");
    const currentDonateBalance = totalDonateBalance + inputThree;
    getFreshField("total-donate-balance-three").innerText = currentDonateBalance;

    const donatePlace = getTextContent("quota-movement");
    const newDiv = document.createElement("div");
    newDiv.classList.add("p-8", "border-[1px]", "border-gray-200", "shadow-sm", "rounded-md", "mb-3", "shadow-md");
    newDiv.innerHTML = `
        <p class="text-xs md:text-xl font-bold">${inputThree} TK is ${donatePlace}</p>
        <p> ${new Date().toLocaleDateString("en-US" , {
            
            timeZone: "Asia/Dhaka",
            weekday:"short",
            year:"numeric",
            month:"short",
            day:"numeric",
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            timeZoneName:"long"

            })}</p>
    `;
     getFreshField("history-place").appendChild(newDiv);

  document.getElementById("input-two").value = "";
  document.getElementById('my_modal_5').showModal();
});

document.getElementById("donate").addEventListener("click", function(){
    tabSwitch("donate-button")
});
document.getElementById("history").addEventListener("click", function(){
    tabSwitch("history-button")
});

document.getElementById("blog-button").addEventListener("click", function() {
    window.location.href = "faq-section.html"
});

document.getElementById("donate-bd").addEventListener("click", function() {
    window.location.href = "index.html";
})




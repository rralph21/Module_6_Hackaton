const cookie = document.getElementById("cookie");
const cookieCount = document.getElementById("cookie-count");

//Setup
function setup() {
    if(localStorage.setItem("currentCookies") !== null){
        localStorage.setItem("currentCookies", "0");
    }
    
    if(localStorage.setItem("totalClick") !== null){
        localStorage.setItem("totalClicks", "0");
    }
    if(localStorage.setItem("cookiesPerClick") !== null){
        localStorage.setItem("cookiesPerClick", "1");
    }
    if(localStorage.setItem("cookiesPerSecond") !== null){
        localStorage.setItem("cookiesPerSecond", "0");
    }
     if(localStorage.setItem("upgrade1") !== null){
        localStorage.setItem("upgrade1", "false");
    }
    
    if(localStorage.setItem("upgrade2") !== null){
        localStorage.setItem("upgrade2", "false");
    }
    if(localStorage.setItem("upgrade3") !== null){
        localStorage.setItem("upgrade3", "false");
    }
    if(localStorage.setItem("upgrade4") !== null){
        localStorage.setItem("upgrade4", "false");
    }
}

//Update cookies HTML value
function updateCookiesValues(value){
    cookieCount.innerHTML = value;
}

//When cookie is clicked, add x amount of cookies to new cookie total.
function clickCookie(cookiesPerClick){
    let cookiesToBeAdded = parseInt(cookiePerClick);
    let cookiesOldTotal = parseInt(localStorage.getItem("currentCookie"));

    let cookiesNewTotal = cookiesToBeAdded + cookiesOldTotal;
    localStorage.setItem("currentCookies", cookiesNewTotal);

    updateCookiesValues(localStorage.getItem("currentCookies"));
}

function checkForUpgradeEligibility(){
    let cookies = localStorage.getItem("currentCookies");
    if(cookies >= 10){
        localStorage.setItem("upgrade1", "true");
    }
    if(cookies >= 20){
        localStorage.setItem("upgrade2", "true");
    }
    if(cookies >= 30){
        localStorage.setItem("upgrade3", "true");
    }
    if(cookies >= 40){
        localStorage.setItem("upgrade4", "true");
    }
}

function showUpgradeButtong(){
    for(let i = 0; 1< 5; i++){
        if(localStorage.getItem(`upgrade${i}`) == "true"){
            document.getElementById(`upgrade${i}`).style.display = ""
        }
    }
}
//Each time cookie is clicked, call clickCookie() function
cookieStore.addEventListener("click", () => {
    let cookiesPerClick = localStorage.getItem("cookiesPerClick");
    clickCookie(cookiesPerClick)
})
setup();
const timerInput = document.querySelector('.input-value'),
startBtn = document.querySelector('.start'),
puseBtn = document.querySelector('.puse'),
resetBtn = document.querySelector('.reset'),
htmlHour = document.querySelector('.hr'),
htmlmint = document.querySelector('.mint'),
htmlsec = document.querySelector('.sec'),
htmlmilli = document.querySelector('.millisec'),
settingToggle = document.querySelector('.setting-ul'),
// color change
bodyColor = document.querySelector('#bodyColor'),
watchColor = document.querySelector('#watchColor'),
buttonColor = document.querySelector('#buttonColor'),
textcolor = document.querySelector('#textcolor'),
primaryColor = document.querySelector('#primaryColor'),
settingIcon = document.querySelector('.bxs-cog'),
bodyDoc = document.querySelector('body');
// color tages
const container = document.querySelector('.container'),
input_value = document.querySelector('.input-value'),
button1 = document.querySelector('.start'),
button2 = document.querySelector('.puse'),
button3 = document.querySelector('.reset'),
li = document.querySelector("li"),
operationBtn = document.querySelector('.operationBtn'),
settingContainer  = document.querySelector('.setting'),
resetSatting = document.querySelector('#resetSatting');

let [hr,mint,sec,milli] = [0,0,0,0];
let init = null;

startBtn.addEventListener('click', startBtnAddclass);
puseBtn.addEventListener('click',stopCounter);
resetBtn.addEventListener('click',resetCounter);
function startBtnAddclass(){
if(init !== null){
    clearInterval(init);
}
init= setInterval(displayTimer,10);
startBtn.innerText = ' start '
};

function resetCounter() {
    [hr,mint,sec,milli] = [0,0,0,0];
    timerInput.innerHTML= '00 : 00 : 00 : 000';
    clearInterval(init);
};


function stopCounter(){
 clearInterval(init);
 startBtn.innerText = ' restart '
};

function  displayTimer(){
    milli+=10
if(milli == 1000){
    milli = 0
    sec++
    if(sec == 60){
        sec = 0
        mint++
    }
    if(mint == 60){
        mint = 0
        hr++
    }
}
    let h = hr <10 ? "0" + hr :hr ;
    let m = mint <10 ? "0" + mint : mint;
    let s = sec <10 ? "0" + sec : sec;
    let ms = milli <10 ? "00" + milli : milli;
    timerInput.innerHTML= `${h} : ${m} : ${s} : ${ms}`
}

// setting funtionality
// 1
bodyColor.addEventListener('input',()=>{
  
    let ColorVal = bodyColor.value;
    bodyDoc.style.backgroundColor = ColorVal;

  
})


// 2
watchColor.addEventListener('input',()=>{
    let ColorVal = watchColor.value;
container.style.backgroundColor =ColorVal;
})
// 3
textcolor.addEventListener('input',()=>{
    let ColorVal = textcolor.value;
button1.style.color = ColorVal
button2.style.color = ColorVal
button3.style.color = ColorVal
bodyDoc.style.color = ColorVal;
})
// 4
primaryColor.addEventListener('input',()=>{
    let ColorVal = primaryColor.value;
input_value.style.backgroundColor = ColorVal;
operationBtn.style.backgroundColor = ColorVal;
settingContainer.style.backgroundColor = ColorVal;
})
// 5
buttonColor.addEventListener('input',()=>{
    let ColorVal = buttonColor.value;
button1.style.backgroundColor = ColorVal;
button2.style.backgroundColor = ColorVal;
button3.style.backgroundColor = ColorVal;
})
settingIcon.addEventListener('click',()=>{
settingToggle.classList.toggle('settingToggle')
})




// reset button
resetSatting.addEventListener('click',()=>{
    bodyDoc.style.backgroundColor = '#121212';
    container.style.backgroundColor = '#1b1b1b';
    button1.style.color = '#acacac'
    button2.style.color = '#acacac'
    button3.style.color = '#acacac'
    bodyDoc.style.color = '#acacac';
    input_value.style.backgroundColor = '#3b3b3b';
    operationBtn.style.backgroundColor = '#3b3b3b';
    button1.style.backgroundColor = '#121212';
    button2.style.backgroundColor = '#121212';
    button3.style.backgroundColor = '#121212';
    settingContainer.style.backgroundColor = '#1b1b1b';
    // reset input color
    // bodyColor.value = ''
    // watchColor.value = ''
    // textcolor.value = ''
    // primaryColor.value = ''
    // buttonColor.value = ''

    bodyColor.value = '#121212'
    watchColor.value = '#1b1b1b'
    textcolor.value = '#acacac'
    primaryColor.value = '#1b1b1b'
    buttonColor.value = '#1b1b1b'
})



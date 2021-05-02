const load = document.getElementById('loader');
function loadingfun() {
    load.style.display = 'none';
}


const react = document.getElementById('react');
const node = document.getElementById('node');
const raspi = document.getElementById('raspi');
const mcu = document.getElementById('mcu');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateAns();
})

const sendAlert = (sRate,count) => {
    if(sRate === count){
        swal(`Good job !`, "You have answered correctly", "success");
        form.reset();
    }
}


const successMsg = () => {
    let formCon = document.getElementsByClassName('ques_wrapper');
    var count = formCon.length - 1
    for(let i=1;i<=formCon.length;i++){
        if(formCon[i].className === "ques_wrapper success"){
            var sRate = 0 + i;
            sendAlert(sRate,count);
        }else{
            return false
        }
    }
}

const validateAns = () => {
    const reactVal = react.value.trim();
    const nodeVal = node.value.trim();
    const raspiVal = raspi.value.trim();
    const mcuVal = mcu.value.trim();

    if(reactVal === ""){
        setError(react);
    }else if (reactVal.toLowerCase() === 'reactjs') {
        setSuccess(react);
    } else {
        setError(react);
    }

    if(nodeVal === ""){
        setError(node);
    }else if (nodeVal.toLowerCase() === 'nodejs') {
        setSuccess(node);
    } else {
        setError(node);
    }

    if(raspiVal === ""){
        setError(raspi);
    }else if (raspiVal.toLowerCase() === 'raspberry pi') {
        setSuccess(raspi);
    } else {
        setError(raspi);
    }

    if(mcuVal === ""){
        setError(mcu);
    }else if (mcuVal.toLowerCase() === 'node mcu') {
        setSuccess(mcu);
    } else {
        setError(mcu);
    }
      
    successMsg();
}

const setSuccess = (ele) => {
    const fieldParent = ele.parentElement;
    const grandParent = fieldParent.parentElement;
    grandParent.className = "ques_wrapper success";
}
const setError = (ele) => {
    const fieldParent = ele.parentElement;
    const grandParent = fieldParent.parentElement;
    grandParent.className = "ques_wrapper error";
}


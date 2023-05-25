const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");
const pop = document.querySelector("#popup");

const txt1 = document.querySelector("#name");
const txt2 = document.querySelector("#mail");
const txt3 = document.querySelector("#comment");

btnOpen.disabled = true;

txt1.addEventListener('change', stateHandle);

function stateHandle() {
    if (txt1.value === "" && txt2.value === "" && txt3.value === "") {
        btnOpen.disabled = true; //btnOpen remains disabled
    } else {
        btnOpen.disabled = false; //button is enabled
    }
}

btnOpen.addEventListener('click', () => {
    document.querySelector("#name-out").innerHTML = txt1.value;
    document.querySelector("#mail-out").innerHTML = txt2.value;
    document.querySelector("#comment-out").innerHTML = txt3.value;
    
    pop.show();
    document.querySelector("body").style.overflow = 'hidden';

    txt1.value = '';
    txt2.value = '';
    txt3.value = '';
    alert("Your response has been submited");
})

btnClose.addEventListener('click', () => {
    pop.close();
    document.querySelector("body").style.overflowY = 'scroll';
})

const btnCalculate = document.querySelector("#btn-calculate");
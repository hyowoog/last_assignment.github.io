
const frm = document.querySelector("#frm");
const inputName = document.querySelector("#frm #username");
const h2 = document.querySelector("H2");
const uname = localStorage.getItem('uname');
const HIDDEN_CLASSNAME = 'hidden';
const WELCOME_MSG = `Hello, ${uname}, You just logined `;


function submitHandler(event){
    const username = inputName.value;
    event.preventDefault();
    if (username === ''){
        alert("Please enter a username");
        inputName.focus();
    } else {
        localStorage.setItem('uname', username);
        h2.innerHTML = WELCOME_MSG;
        h2.classList.remove('hidden');
        frm.classList.add(HIDDEN_CLASSNAME);
        inputName.value='';        
    }

}
if (uname === null){
    h2.innetText = '';
    frm.classList.remove(HIDDEN_CLASSNAME);
} else {
    h2.innerText = WELCOME_MSG;
    frm.classList.add(HIDDEN_CLASSNAME);
    h2.classList.remove(HIDDEN_CLASSNAME);
}

frm.addEventListener("submit", submitHandler);

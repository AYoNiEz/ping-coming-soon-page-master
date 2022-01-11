const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();

    const email = form['email'].value

    if(email === ''){
        addErrorTo('email','Email is empty');
    } else if(!isValid(email)){
        addErrorTo('email','Please provide a valid email address');
    }
    else{
        removeError('email');
    }
});
function addErrorTo(field, massage) {
        const formControl = form[field].parentNode;
        formControl.classList.add('error');

        const small = form[field].parentNode.querySelector('small');
        small.innerText = massage;
        small.style.opacity= '1';
}

function removeError(field) {
        const formControl = form[field].parentNode;
        formControl.classList.remove('error');

        const small = formControl.querySelector('small');
        small.style.opacity= '0';
}

const isValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
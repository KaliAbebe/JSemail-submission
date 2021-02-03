// const items = document.querySelectorAll('.item'); 
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();

// ul.firstElementChild.textContent ='Hello';
// ul.children[1].innerText ='Brad';
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'gray';

// btn.addEventListener('click', (kali) => {
//   kali.preventDefault();

//   //Kali.preventDefault(); This method will stop the submit button from flashing quick and disappearing meaning it will not submit.

//   // console.log('click');
//   // console.log(kali);
//   // console.log(kali.target.className);
//   document.querySelector('#my-form').style.background ='#ccd';

//   document.querySelector('body').classList.add('bg-dark');
//   document.querrySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// //Single element
// // console.log(document.getElementById('my-form'));
// // console.log(document.querySelector('my-form'));

// //Multiple selector frst querySelectorAll is suggested to use at all times

// // console.log(document.querySelectorAll('.item')); 
// //console.log(document.getElementsByClassName('item'));

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(kali) {
    kali.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 2000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clearfields
        nameInput.value = '';
        emailInput.value = '';
    }
}
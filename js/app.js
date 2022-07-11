// UI 

const background = document.getElementById('background');
const password = document.getElementById('password');
const eye = document.getElementById('icon');

// console.log(eye);

password.addEventListener('input',(e)=>{
    // e.target;
    // e.target.value;
    // e.target.value.length;
    // console.log(e.target.value.length);

    const passlength = e.target.value.length;
    const blurvalue = 20 - passlength * 2;

    background.style.filter = `blur(${blurvalue}px)`;
});

eye.addEventListener('click',()=>{

    if(eye.classList.contains('fa-eye')){

        eye.classList.replace('fa-eye','fa-eye-slash');
        password.setAttribute('type','text');

    }else{

        eye.classList.replace('fa-eye-slash','fa-eye');
        password.setAttribute('type','password');

    }
})

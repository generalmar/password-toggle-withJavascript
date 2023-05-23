
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');


// togglePassword.addEventListener('click', toggleFunc)
// function toggleFunc(){
//     if(password.type === 'password'){
//         password.type = 'text'
//     }else{
//         password.type = 'password'
//     }
// }

togglePassword.addEventListener('click', () =>{
    password.type === 'password' 
    ? password.type = 'text' 
    : password.type = 'password'

})

alert("done");



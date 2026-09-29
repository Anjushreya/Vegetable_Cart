let myForm=document.querySelector('form')
console.log(myForm);

myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("form Submitted");

    let input=document.querySelectorAll('input')
    console.log(input);

    let email=input[0].value;
    let password=input[1].value;

    console.log(email,password ,"User EnteredData");

    let storedData=JSON.parse(localStorage.getItem('A13UserData'))
    console.log(storedData, "LocalStorage Data");

    if(storedData){
        if(email===storedData.Email && password===storedData.Password){
            alert("Login Successfull")
            window.location.href="./HomePage.html"
        }else{
            alert("Mismatch Data")
        }
    }

})
let myForm = document.querySelector("form");
console.log(myForm);

myForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("my form ");

  let inputBox = document.querySelectorAll("input");
  console.log(inputBox);

  let formData = {};
  inputBox.forEach((input) => {
    if (input.type === "radio") {
      if (input.checked === true) {
        formData[input.name] = input.value;
      }
    } else {
      formData[input.name] = input.value;
    }
  });
  console.log(formData);

  let jsonObj = JSON.stringify(formData);
  console.log(jsonObj);

  localStorage.setItem("A13UserData", jsonObj);
  alert("User Registeration Success");

  window.location.href = "./Login.html";
};
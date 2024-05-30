const name = document.querySelector(".input_box input[placeholder='Name']");
const birth_year = document.querySelector(".input_box input[placeholder='Birth Year']");
const submit = document.querySelector(".input_box input[type='submit']");
const message = document.querySelector(".input_box h1");

const selectElement = document.getElementById("mySelect");










submit.addEventListener("click", () => {
  if (!name.value || !birth_year.value) {
    message.innerHTML = `<span style="color:red;">All fields are required!</span>`;
  } else {
    let age = new Date().getFullYear() - Number(birth_year.value);


    let selectedOption = selectElement.value;

    if (selectedOption == "Male") {
          if (age >= 21) {
            message.innerHTML = `
                ${name.value}, you can go ahead for marry, you are adult.
                <img src="https://www.gifimages.pics/images/quotes/english/general/gif-for-confetti-multi-colored-52650-166764.gif"/>`;
          } else {
            message.innerHTML = `
                ${name.value}, Sorry you can't do it now, you are not adult.
                <img src="https://media1.tenor.com/m/N6hA2Al9eM4AAAAC/byuntear-baby-cry.gif"/>`;
          }
    } else {
          if (age >= 18) {
            message.innerHTML = `
                ${name.value}, you can go ahead for marry, you are adult.
                <img src="https://www.gifimages.pics/images/quotes/english/general/gif-for-confetti-multi-colored-52650-166764.gif"/>`;
          } else {
            message.innerHTML = `
                ${name.value}, Sorry you can't do it now, you are not adult.
                <img src="https://media1.tenor.com/m/N6hA2Al9eM4AAAAC/byuntear-baby-cry.gif"/>`;
          }
    }








  }
});

const email = document.querySelector("#email_sign");
const user = document.querySelector("#user_sign");
const pass = document.querySelector("#password_sign");
const confirm_pass = document.querySelector("#confirm_pass");
const btn_signup = document.querySelector("#form-signup");

let acount = localStorage.getItem("acount")?JSON.parse(localStorage.getItem("acount")):[];
btn_signup.onsubmit = (event) => {
  event.preventDefault();
  const emailval = email.value;
  const userval = user.value;
  const passval = pass.value;
  const confirmval = confirm_pass.value;

  if (
    passval === confirmval &&
    emailval !== "" &&
    userval !== "" &&
    passval !== "" &&
    confirmval != ""
  ) {
    acount.push({ userval, passval });
    //const obj=JSON.parse(localStorage.getItem(‘key’));
    const setjson = JSON.stringify(acount);
    localStorage.setItem("acount", setjson);
    window.location="./login.html"
  } else if (
    passval !== confirmval &&
    emailval !== "" &&
    userval !== "" &&
    passval !== "" &&
    confirmval !== ""
  ) {
    document.querySelector(".alert__err-pass").style.display = "block";
    document.querySelector(".alert__err-pass").style.opacity = 1;
  } else {
    document.querySelector(".alert__empty").style.display = "block";
    document.querySelector(".alert__empty").style.opacity = 1;
  }
};

// alert mes
const closet = document.querySelectorAll(".closebtn");
closet.forEach((elm) => {
  elm.onclick = () => {
    const div = elm.parentElement;
    div.style.opacity = "0";
    setTimeout(() => {
      div.style.display = "none";
    }, 600);
  };
});

//onmouseup alert none
const input_form = document.querySelectorAll(".input-form");
input_form.forEach((elminput) => {
  elminput.onmouseup = () => {
    document.querySelector(".alert__empty").style.display = "none";
    document.querySelector(".alert__err-pass").style.display = "none";
  };
});

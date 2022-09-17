const userlogin = document.querySelector("#user");
const passlogin = document.querySelector("#password");
const input_form = document.querySelectorAll(".input-form");
const submit = document.querySelector("#form-login");
const arr = JSON.parse(localStorage.getItem("acount"));
if (arr) {
  const newacount=arr[arr.length-1]
  userlogin.value = newacount.userval;
  passlogin.value = newacount.passval;
  checkacount(arr);
}

function checkacount(acount) {
  submit.onsubmit = (event) => {
    event.preventDefault();
    let random = Math.floor(Math.random() * 100);

    const userval = userlogin.value;
    const passval = passlogin.value;
    function checkacount(acount){
      return (acount.userval== userval && acount.passval == passval);
    }
    const filter = acount.findIndex(checkacount);
    if (filter!=-1) {

        window.location.assign(`./index.html?success&id=${filter}`);
    } else if (userval === "" || passval === "") {
      document.querySelector(".alert__empty").style.display = "block";
      document.querySelector(".alert__empty").style.opacity = 1;
    } else {
      document.querySelector(".alert__err-user-pass").style.display = "block";
      document.querySelector(".alert__err-user-pass").style.opacity = 1;
    }
  };
}

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

//
input_form.forEach((elminput) => {
  elminput.onmouseup = () => {
    document.querySelector(".alert__empty").style.display = "none";
    document.querySelector(".alert__err-user-pass").style.display = "none";
  };
});

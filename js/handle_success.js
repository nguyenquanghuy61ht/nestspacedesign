const logout = document.querySelector(".logout");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const logo = document.querySelector(".header__navleft-logo");


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const id = getParameterByName("id");
const arr = JSON.parse(localStorage.getItem("acount"));
if (id) {
  const name=arr[id].userval
  console.log(name)
  logout.style.display = "block";
  login.style.display = "none";
  signup.style.display = "none";
  document.querySelector(".name_user").innerHTML = `Chào mừng Admin ${name}`;
  document.querySelector(".alert__success").style.display = "block";
  document.querySelector(".alert__success").style.opacity = 1;
  setTimeout(() => {
    closet.click();
  }, 3000);
} else {
  logout.style.display = "none";
  login.style.display = "block";
  signup.style.display = "block";
}

logo.onclick = () => {
  window.location.assign(`./index.html?success&id=${id}`);
};

// alert mes
const closet = document.querySelector(".closebtn");

closet.onclick = () => {
  const div = closet.parentElement;
  div.style.opacity = "0";
  setTimeout(() => {
    div.style.display = "none";
  }, 600);
};

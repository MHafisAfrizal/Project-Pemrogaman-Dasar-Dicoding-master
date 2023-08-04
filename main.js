//animasi text jumbotron
var animation = document.getElementById("home");

setInterval(function () {
    animation.style.color = "#140352";

    setTimeout(function () {
        animation.style.color = "white";
    }, 500);
}, 1000);

//alert web
alert("Selamat Datang di Blog Citra Mirna, klik OK untuk tetap tinggal");

//color text content
var textContent = document.getElementById("text");
var konten = document.getElementById("text2");

textContent.style.color = "#140352";
konten.style.color = "#140352";

//background body
var boxStyle = document.getElementById("elemen");
boxStyle.style.background = "#d0d8fa";

function send() {
    var storage = document.getElementsByClassName('contact-form1').value;
    var textText = document.getElementsByClassName('contact-form2').value;
    var docText = document.getElementById('text-area').value;
    localStorage.setItem('Text', storage);
    localStorage.setItem('Text', textText);
    localStorage.setItem('Text', docText);
}
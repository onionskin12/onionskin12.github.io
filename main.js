var pw = document.getElementById("password");
var btn = document.getElementById("btn");

btn.onclick = function() {
  if (pw.value === "1337") {
    window.location = "https://docs.google.com/document/d/1V0mJcpBtra6AjezoDGmD9coh95KgD61Xrf35pkRRakY/edit?usp=sharing";
  }
}

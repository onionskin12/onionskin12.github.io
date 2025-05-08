var pw = document.getElementById("password");
var btn = document.getElementById("btn");

btn.onclick = function() {
  if (pw.value === "test") {
    window.location = "https://google.com";
  }
}

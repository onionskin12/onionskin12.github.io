var pw = document.getElementById("password");
var btn = document.getElementById("btn");

btn.onclick = function() {
  if (pw.value === "test") {
    document.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;
    }
}

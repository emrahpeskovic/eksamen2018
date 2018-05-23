var attempt = 3;

function LogMeIn() {
  var username = document.getElementById("UserId").value;
  var password = document.getElementById("Password").value;
  if (username == "admin" && password == "1234") {
    alert("You are now logged in!");
    window.location = "index.html";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) {
      document.getElementById("UserId").disabled = true;
      document.getElementById("Password").disabled = true;
      document.getElementById("Submit").disabled = true;
      return false;
    }
  }
}

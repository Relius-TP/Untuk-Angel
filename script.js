function showMessage() {
  document.getElementById("yesMessage").style.display = "block";
  document.getElementById("noBtn").style.display = "none";
  document.getElementById("noMessage").style.display = "none";
}

function hideNo() {
  document.getElementById("noBtn").style.display = "none";
  document.getElementById("noMessage").style.display = "block";
}

function updateClock() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}
setInterval(updateClock, 1000);

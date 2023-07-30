var countDownDate = new Date("Apr 01, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  var x = document.getElementById("countdown");
    x.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    x.innerHTML = "THE FUN BEGINS NOW!!";
  }
}, 1000);
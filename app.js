function calculateTip() {
  var billAmount = document.getElementById("billamount").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamount").value;

  
  if (billAmount === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  if (billamount = "uwu") {
    document.body.style.backgroundImage = "url('Weeb/tenor.gif')"
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmount) * (serviceQual) / (numOfPeople);

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
 
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
 

document.getElementById("calculate").onclick = function() {
  calculateTip();
};

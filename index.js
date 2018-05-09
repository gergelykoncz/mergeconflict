function calculate(){
  // Beolvasas
  var amountControl = document.getElementById('amountControl');
  var amount = parseInt(amountControl.value);
  
  var interestRateControl = document.getElementById('interestRateControl');
  var interestRate = parseFloat(interestRateControl.value);

  var yearsControl = document.getElementById('yearsControl');
  var years = parseFloat(yearsControl.value);
  
  // Szamitas
  var subresult = (100 + interestRate) / 100;
  var result = amount * Math.pow(subresult, years);

  // Kiiras
  var message = years +
   ' ev mulva ' +
    result.toFixed(2) +
     'Ft-od lesz' 
  
     document.getElementById('calcResult').innerHTML = message;
}
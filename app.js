//listen to the submit button

document.getElementById("loan-form").addEventListener('submit', function (e) {

  //hide results
  document.getElementById("results").style.display = "none";
  //show loader
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 1000)

  e.preventDefault()
});

function calculateResults () {

  document.getElementById("loading").style.display = "none"
  const amount = document.getElementById("amount")
  const interest = document.getElementById("interest")
  const years = document.getElementById("years")
  const monthlyPayment = document.getElementById("monthly-payment")
  const totalPayment = document.getElementById("total-payment")
  const totalInterest = document.getElementById("total-invest")

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value)
  const calculatedPayment = parseFloat(years.value) * 12

  const x = Math.pow(1+calculatedInterest, calculatedPayment)
  const monthly = (principal*x*calculatedInterest)/(x-1)

  if(isFinite(monthly)) {
    document.getElementById("results").style.display = "block"
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly* calculatedPayment).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2)
  } else {
    showError('Please check your numbers')
  }
}


function showError(message) {
  const errDiv = document.createElement("div")

  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')
  errDiv.className = 'alert alert-danger'
  errDiv.append(document.createTextNode(message))

  //insert error above heading
  card.insertBefore(errDiv, heading)
  setTimeout(clearError, 1000)
}


function clearError() {
  document.querySelector('.alert').remove()
}

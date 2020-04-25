// Selecting form
let loanForm = document.querySelector("#loan-form");

// Adding event listener
loanForm.addEventListener("submit", calculateResults);

// calculteResults() function
function calculateResults(e) {

    // Defining UI variables
    let amount, interest, years, monthlyPayment, totalPayment, totalInterest;
    amount = document.querySelector("#amount");
    interest = document.querySelector("#interest");
    years = document.querySelector("#years");
    monthlyPayment = document.querySelector("#monthly-payment");
    totalPayment = document.querySelector("#total-payment");
    totalInterest = document.querySelector("#total-interest");

    //  Formu;as
    let principal = parseFloat(amount.value);
    let calculatedInterest = parseFloat(interest.value) / 100 / 12;
    let calculatedPayments = parseFloat(years.value) * 12;

    // Calculating monthly payment
    let x = Math.pow(1 + calculatedInterest, calculatedPayments);
    let monthly = (principal * x * calculatedInterest) / (x - 1);
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    }
    else {
        showError("Please fill in your form!")
    }

    
    // Preventing default behaviour
    e.preventDefault();
}

// Show error
function showError(error) {
    // Creating new div showing error message
    let errorMsg = document.createElement("div");
    
    // Selecting card and heading - error message will be placed in between these two
    let card = document.querySelector(".card");
    let heading = document.querySelector(".heading");
    
    // Add class
    errorMsg.className = "alert alert-danger";
    // Creating text node and append
    errorMsg.appendChild(document.createTextNode(error));
    
    // Insert error message before heading
    card.insertBefore(errorMsg, heading);

    // Clear error after 2.5 seconds
    setTimeout(clearError, 2500);
}

// Clear error function
function clearError() {
    document.querySelector(".alert").remove();
}
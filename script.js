// Function to update the labels and slider values
function updateInputValues() {
    document.getElementById('investmentAmountLabel').innerText = document.getElementById('investmentAmount').value;
    document.getElementById('sipDurationLabel').innerText = document.getElementById('sipDuration').value;
    document.getElementById('annualReturnLabel').innerText = document.getElementById('annualReturn').value;

    document.getElementById('investmentAmountSlider').value = document.getElementById('investmentAmount').value;
    document.getElementById('sipDurationSlider').value = document.getElementById('sipDuration').value;
    document.getElementById('annualReturnSlider').value = document.getElementById('annualReturn').value;
}

// Attach the function to the input and slider events
document.getElementById('investmentAmount').addEventListener('input', updateInputValues);
document.getElementById('sipDuration').addEventListener('input', updateInputValues);
document.getElementById('annualReturn').addEventListener('input', updateInputValues);
document.getElementById('investmentAmountSlider').addEventListener('input', updateInputValues);
document.getElementById('sipDurationSlider').addEventListener('input', updateInputValues);
document.getElementById('annualReturnSlider').addEventListener('input', updateInputValues);

// Function to calculate SIP
function calculateSIP() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const sipDuration = parseInt(document.getElementById('sipDuration').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100; // convert percentage to decimal

    const totalMonths = sipDuration * 12;
    const monthlyReturn = (1 + annualReturn) ** (1 / 12) - 1;

    // Calculate future value of SIP
    const futureValue = investmentAmount * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));

    // Display results
    document.getElementById('totalInvestment').innerText = investmentAmount.toFixed(2);
    document.getElementById('wealthGain').innerText = (futureValue - investmentAmount).toFixed(2);
    document.getElementById('totalReturn').innerText = futureValue.toFixed(2);

    // Display chart (you can implement the chart logic here)
    displayChart(futureValue, investmentAmount);
}

// Function to display a simple chart
function displayChart(futureValue, investmentAmount) {
    // This is a basic example, you might want to use a chart library for more advanced charts
    const ctx = document.getElementById('chart').getContext('2d');
    
    // Clear previous chart
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw a simple bar chart
    const barWidth = 50;
    ctx.fillStyle = '#4caf50'; // green color
    ctx.fillRect(20, ctx.canvas.height - futureValue / 10000, barWidth, futureValue / 10000);

    ctx.fillStyle = '#ff5722'; // orange color
    ctx.fillRect(90, ctx.canvas.height - investmentAmount / 10000, barWidth, investmentAmount / 10000);
}

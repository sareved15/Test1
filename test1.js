function calculateSIP() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const sipDuration = parseInt(document.getElementById('sipDuration').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100; // convert percentage to decimal

    const totalMonths = sipDuration * 12;
    const monthlyReturn = (1 + annualReturn) ** (1 / 12) - 1;

    // Calculate future value and wealth gain
    const futureValue = investmentAmount * (((1 + monthlyReturn) ** totalMonths - 1) / monthlyReturn) * (1 + monthlyReturn);
    const totalInvestment = investmentAmount * totalMonths;
    const wealthGain = futureValue - totalInvestment;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Total Investment: $<span id="totalInvestment">${totalInvestment.toFixed(2)}</span></p>
                               <p>Wealth Gain: $<span id="wealthGain">${wealthGain.toFixed(2)}</span></p>
                               <p>Total Return: $<span id="totalReturn">${futureValue.toFixed(2)}</span></p>
                               <canvas id="chart" width="400" height="400"></canvas>`;

    // Update pie chart
    updatePieChart(totalInvestment, wealthGain, futureValue);
}

function updatePieChart(totalInvestment, wealthGain, totalReturn) {
    const chartCanvas = document.getElementById('chart');
    const chartContext = chartCanvas.getContext('2d');

    new Chart(chartContext, {
        type: 'pie',
        data: {
            labels: ['Total Investment', 'Wealth Gain', 'Total Return'],
            datasets: [{
                data: [totalInvestment, wealthGain, totalReturn],
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
            }],
        },
    });
}

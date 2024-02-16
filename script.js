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
}

function calculateSIP() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const sipDuration = parseInt(document.getElementById('sipDuration').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100; // convert percentage to decimal
    const sipFrequency = parseInt(document.getElementById('sipFrequency').value);

    const monthlyReturn = Math.pow(1 + annualReturn, 1 / 12) - 1;
    const totalMonths = sipDuration * 12;
    const futureValue = investmentAmount * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Future Value of SIP: $${futureValue.toFixed(2)}`;
}

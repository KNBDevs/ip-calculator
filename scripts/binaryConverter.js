document.getElementById('toDecimal').addEventListener('click', () => {
    const binary = document.getElementById('binary').value;
    if (!/^[01]+$/.test(binary)) {
        return;
    }
    const decimal = parseInt(binary, 2);
    document.getElementById('decimalResult').innerText = `Decimal: ${decimal}`;
});

document.getElementById('toBinary').addEventListener('click', () => {
    const decimal = document.getElementById('decimal').value;
    if (!/^\d+$/.test(decimal) || decimal > 255) {
        return;
    }
    const binary = parseInt(decimal).toString(2).padStart(8, '0');
    document.getElementById('binaryResult').innerText = `Binario: ${binary}`;
});

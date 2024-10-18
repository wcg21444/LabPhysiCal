function calculate() {
    const xLeft = document.querySelectorAll('.x-left');
    const xRight = document.querySelectorAll('.x-right');
    const d = document.querySelectorAll('.d');
    const dSquared = document.querySelectorAll('.d-squared');

    for (let i = 0; i < xLeft.length; i++) {
        const left = parseFloat(xLeft[i].value) || 0;
        const right = parseFloat(xRight[i].value) || 0;
        const difference = Math.abs(left - right);
        d[i].value = difference.toFixed(5);
        dSquared[i].value = (difference ** 2).toFixed(5);
    }
}

function calculateA() {
    const dSquared = document.querySelectorAll('.d-squared');
    const aCells = document.querySelectorAll('.a');

    // 计算 a = D_{m+n}^2 - D_m^2
    const pairs = [
        [dSquared[0].value, dSquared[3].value], // D_40^2 - D_25^2
        [dSquared[1].value, dSquared[4].value], // D_35^2 - D_20^2
        [dSquared[2].value, dSquared[5].value]  // D_30^2 - D_15^2
    ];

    pairs.forEach((pair, index) => {
        const dMPlusN = parseFloat(pair[0]) || 0;
        const dM = parseFloat(pair[1]) || 0;
        const aValue = dMPlusN - dM;
        aCells[index].value = aValue.toFixed(5);
    });
}

function calculateStats() {
    const aCells = document.querySelectorAll('.a');
    const values = Array.from(aCells).map(cell => parseFloat(cell.value) || 0);
    
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const stdDev = Math.sqrt(values.reduce((sum, val) => sum + (val - mean) ** 2, 0) /( values.length-1));
    const DeltaDSquare = 2.5*stdDev;
    const n = 15;
    const lbd = 589.3e-3;
    const R_avg = mean/(4*n*lbd)
    const uncertainRatio = DeltaDSquare/mean;

    document.getElementById('mean').textContent = mean.toFixed(5);
    document.getElementById('stdDev').textContent = stdDev.toFixed(5);
    document.getElementById('DeltaD^2').textContent = DeltaDSquare.toFixed(5);
    document.getElementById('R_avg').textContent = R_avg.toFixed(5);
    document.getElementById('DeltaR').textContent = uncertainRatio.toFixed(5);
}
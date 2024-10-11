//计算调用
document.getElementById('standwaveCalculate').addEventListener('click', function() {
    const n = parseFloat(document.getElementById('n波节数').value) || 0;
    const T = parseFloat(document.getElementById('T张力').value) || 0;
    const f = parseFloat(document.getElementById('f频率').value) || 0;
    const L = parseFloat(document.getElementById('L弦长').value) || 0;

    const result = LinearDensity_StWave(n,T,f,L);
    document.getElementById('result').innerText = '线密度: ' + result+'(10^(-3)kg/m)';
});

//驻波实验,求线密度
function LinearDensity_StWave(n,T,f,L)
{
    return sigma = (n-1)**2*T/(f**2*L**2)/4*1000
}


function getAverage(data)
{
    sum = 0
    for(num of data)
    {
        sum+=parseFloat(num)
    }
    return sum/data.length
}
//无tp因子修正,ΔA = S
function getDeltaA(data,average)
{
    squreSumAveSqrt = 0
    squreSum = 0
    for(num of data)
    {
        squreSum += (parseFloat(num)-average)**2
    }
    squreSumAveSqrt = Math.sqrt(squreSum/(data.length-1))
    return squreSumAveSqrt
}
function getDelta(deltaA,deltaB)
{
    return Math.sqrt(deltaA**2+deltaB**2)
}
//计算相对不确定度E
function getE(delta,average)
{
    return delta/average
}


//计算调用
document.getElementById('calculateButton').addEventListener('click', function() {
    const input = document.getElementById('dataInput').value; // 获取输入值
    const dataArray = input.split(' '); // 以空格分割

    // 过滤出有效的数字（整数和浮点数）
    const validNumbers = dataArray.filter(item => {
        return !isNaN(item) && item.trim() !== ''; // 检查是否为数字
    });
    
    average = getAverage(validNumbers)
    deltaA = getDeltaA(validNumbers,average)
    deltaB = parseFloat(document.getElementById('deltaBInput').value)
    delta = getDelta(deltaA,deltaB)
    E = getE(delta,average)
    //html显示结果
    document.getElementById('calculationResult').innerText = `平均值: ${average.toFixed(6)}\n ΔA(A类不确定度): ${deltaA.toFixed(6)}\nΔ(不确定度): ${delta.toFixed(6)}\nE(相对不确定度):${E.toFixed(6)}\n`;
});

function loadCommonContent() {
    fetch('nav.html')  // 请求导航页html
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应不正确');
            }
            return response.text();  // 将响应转换为文本
        })
        .then(data => {
            // 将获取到的内容插入到指定的 div 中
            document.getElementById('nav-content').innerHTML = data;
        })
        .catch(error => {
            console.error('加载导航页出错:', error);
        });
}

window.onload = loadCommonContent;
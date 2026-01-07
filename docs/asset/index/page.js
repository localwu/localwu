(function () {
    function placeThoughtBubble() {
        const logo = document.getElementById('main-logo');
        const bubble = document.getElementById('thought-bubble');
        if (!logo || !bubble) return;

        // 获取 logo 右上角坐标
        const logoRect = logo.getBoundingClientRect();
        const x = logoRect.right;
        const y = logoRect.top;

        // bubble 左上角落在该点
        bubble.style.position = 'absolute';
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';

        // 包含 transform 后的尺寸
        const bubbleHeight = bubble.getBoundingClientRect().height;
        const bubbleWidth = bubble.getBoundingClientRect().width;
        bubble.style.top = (y - bubbleHeight) + 'px';
        bubble.style.left = (x - bubbleWidth / 2) + 'px';
    }

    window.addEventListener('resize', placeThoughtBubble);
    placeThoughtBubble(); // 初调
})();
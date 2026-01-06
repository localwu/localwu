(function () {
    const copyBtn = document.getElementById('copyBtn');
    const emailElement = document.getElementById('mail-addr');

    if (!copyBtn || !emailElement) return;

    const originalText = copyBtn.textContent;

    copyBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        const email = emailElement.textContent;

        try {
            await navigator.clipboard.writeText(email);

            // 成功状态
            copyBtn.textContent = '已复制';
            copyBtn.classList.add('success');

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('success');
            }, 2000);

        } catch (err) {
            // console.error('复制失败', err);

            // 失败状态
            copyBtn.textContent = '复制失败';
            copyBtn.classList.add('error');

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('error');
            }, 2000);
        }
    });
})();
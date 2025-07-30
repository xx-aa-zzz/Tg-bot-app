
const tg = window.Telegram.WebApp;
tg.ready();
tg.setHeaderColor('#52a0e1');
document.addEventListener('DOMContentLoaded', () => {
    const resultContainer = document.getElementById('result-container');
    document.getElementById('reportBtn').addEventListener('click', () => {
        resultContainer.style.display = 'block';
        resultContainer.innerText = 'جاري طلب تقرير المبيعات...';
    });
});
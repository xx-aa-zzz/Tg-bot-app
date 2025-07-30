const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyorwUsD4hIwKQZTvkGAnDYjFgI0JQWq-cwkD3oUs-079Q4SAkiZkmi4KP_KGkkNZQUsg/exec"; 

function showLoading(message) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.color = 'var(--tg-theme-text-color)';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `<div class="loader"></div><p>${message || 'جاري التحميل...'}</p>`;
}

function showResult(title, period, summary) {
    const resultContainer = document.getElementById('result-container');
    const periodText = period.replace(/للفترة من|لليوم|ليوم/g, '').replace(/إلى/g, '-').trim();
    resultContainer.innerHTML = `<h3>${title}</h3><p class="period">${periodText}</p><pre>${summary}</pre>`;
}

function showError(error) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.color = 'red';
    resultContainer.innerText = `حدث خطأ: ${error}`;
}

function fetchData(action, args = 'report,today') {
    showLoading(`جاري طلب البيانات...`);

    fetch(`${SCRIPT_URL}?action=${action}&args=${encodeURIComponent(args)}`)
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(`Network response error: ${text}`); });
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                showError(data.error);
            } else {
                showResult(data.title, data.period, data.summary);
            }
        })
        .catch(error => {
            showError(error.toString());
        });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reportBtn').addEventListener('click', () => {
        fetchData('getSalesReport', 'report,today'); 
    });

    document.getElementById('staffBtn').addEventListener('click', () => {
        fetchData('getStaffReport', 'report,today');
    });

    // Add other buttons here
});

// تهيئة تطبيق تليجرام
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand(); // توسيع التطبيق لملء الشاشة

// 🔴 تم وضع الرابط الصحيح هنا 🔴
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxVJx24Dhwx9cFyzo52B0w8zOCWDiAKg3KSznceLFUYvpO6ROtM4zIk9bw-sXZ_NlBO7w/exec"; 

// دالة لإظهار رسالة التحميل
function showLoading(message) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.color = 'var(--tg-theme-text-color)'; // إعادة اللون الافتراضي
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `<div class="loader"></div><p>${message || 'جاري التحميل...'}</p>`;
}

// دالة لعرض النتائج
function showResult(title, period, summary) {
    const resultContainer = document.getElementById('result-container');
    const periodText = period.replace(/للفترة من|لليوم|ليوم/g, '').trim(); // تنظيف العنوان
    resultContainer.innerHTML = `<h3>${title}</h3><p class="period">${periodText}</p><pre>${summary}</pre>`;
}

// دالة للتعامل مع الأخطاء
function showError(error) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.color = 'red';
    resultContainer.innerText = `حدث خطأ: ${error}`;
}

// دالة لجلب البيانات من Google Apps Script
function fetchData(action, args = 'report,today') {
    showLoading(`جاري طلب البيانات...`);

    // إرسال الطلب إلى الرابط مع تحديد نوع التقرير والوسائط
    fetch(`${SCRIPT_URL}?action=${action}&args=${encodeURIComponent(args)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
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

// ربط الأزرار بالدوال
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('reportBtn').addEventListener('click', () => {
        // كمثال، نطلب تقرير اليوم عند الضغط
        fetchData('getSalesReport', 'report,today'); 
    });

    document.getElementById('staffBtn').addEventListener('click', () => {
        // كمثال، نطلب تقرير اليوم عند الضغط
        fetchData('getStaffReport', 'report,today');
    });

    // يمكنك إضافة بقية الأزرار هنا بنفس الطريقة
});

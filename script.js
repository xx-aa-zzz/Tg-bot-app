// تهيئة تطبيق تليجرام
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxVJx24Dhwx9cFyzo52B0w8zOCWDiAKg3KSznceLFUYvpO6ROtM4zIk9bw-sXZ_NlBO7w/exec"; // 🔴 تأكد أن هذا هو الرابط الصحيح

const resultContainer = document.getElementById('result-container');

function testConnection() {
    resultContainer.style.display = 'block';
    resultContainer.innerText = 'جاري الاتصال بالخادم...';

    fetch(SCRIPT_URL)
        .then(response => {
            if (!response.ok) {
                // إذا كان هناك خطأ، حاول قراءة الرد كنص عادي
                return response.text().then(text => {
                   throw new Error(`خطأ في الشبكة: ${response.status} - ${text}`);
                });
            }
            // إذا نجح، اقرأه كـ JSON
            return response.json();
        })
        .then(data => {
            // اعرض البيانات المستلمة كما هي
            resultContainer.innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // اعرض رسالة الخطأ بالتفصيل
            resultContainer.style.color = 'red';
            resultContainer.innerText = `فشل الاتصال:\n${error.toString()}`;
        });
}

// ربط كل الأزرار بنفس دالة الاختبار
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-button').forEach(button => {
        button.addEventListener('click', testConnection);
    });
});

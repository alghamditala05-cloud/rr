document.addEventListener('DOMContentLoaded', function() {
    // تفعيل القائمة المنسدلة
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.onclick = function() {
        navLinks.classList.toggle('show');
    };

    // تفعيل الزر والعبارة التفاعلية
    const welcomeBtn = document.getElementById('welcomeBtn');
    const displayMessage = document.getElementById('displayMessage');

    welcomeBtn.onclick = function() {
        // العبارة المطلوبة بالضبط
        displayMessage.innerHTML = "تبوك ترسم ملامح المستقبل في نيوم وذلاين🚀";
        
        // تغيير شكل الزر للتأكيد
        welcomeBtn.style.backgroundColor = "#1a5276";
        welcomeBtn.innerText = "تم الاستكشاف";
        
        alert("مرحباً بكِ في مستقبل تبوك الرقمي!");
    };
});
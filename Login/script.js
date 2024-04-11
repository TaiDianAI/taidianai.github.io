// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // 选择登录按钮并绑定点击事件
    const loginButton = document.querySelector('.login-btn'); // 通过类名选择按钮

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止按钮默认的提交行为
        // 这里可以添加登录验证逻辑
        // 假设验证通过，跳转到reminder.html页面
        window.location.href = '../reminder.html';
    });
});
(function () {
    document.getElementById('message-form').addEventListener('submit', function (e) {
        // prevent deault action
        e.preventDefault();
        // getting value
        const message = document.getElementById('message');
        const value = message.value;
        // check if empty
        if (value === '') {
            const feedback = document.querySelector('.feedback');
            feedback.classList.add('show');
            setTimeout(function () {
                feedback.classList.remove('show');
            }, 2000);
        }
        //change value
        document.querySelector('.message-content').textContent = value;
        message.value = '';
    });
})();
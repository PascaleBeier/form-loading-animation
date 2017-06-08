module.exports = () => {
    document.querySelectorAll('[data-form-loading-animation]').forEach(button => {
        button.form.addEventListener('submit', event => {
            if (button.querySelector('i')) {
                button.querySelector('i').setAttribute('class', '');
                button.querySelector('i').classList.add('fa', 'fa-circle-o-notch', 'fa-spin');
            } else {
                button.innerHTML = `<i class="fa fa-circle-o-notch fa-spin"></i> ${button.textContent}`;
            }
        });
    });
};
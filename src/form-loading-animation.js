module.exports = () => {
    const animate = element => {
        if (element.querySelector('i')) {
            element.querySelector('i').setAttribute('class', '');
            element.querySelector('i').classList.add('fa', 'fa-circle-o-notch', 'fa-spin');
        } else {
            element.innerHTML = `<i class="fa fa-circle-o-notch fa-spin"></i> ${button.textContent}`;
        }
    };

    document.querySelectorAll('[data-form-loading-animation]').forEach(button => {
        if (button.form) {
            button.form.addEventListener('submit', event => {
                animate(button);
            })
        } else {
            button.addEventListener('click', event => {
                animate(button);
            })
        }
    });
};
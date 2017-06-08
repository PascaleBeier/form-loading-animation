const addAnimation = form => {
    form.addEventListener('submit', (event) => {
        let submit = event.target.querySelector('[type=submit]');
        if (submit.querySelector('i')) {
            submit.querySelector('i').setAttribute('class', '');
            submit.querySelector('i').classList.add('fa', 'fa-circle-o-notch', 'fa-spin');
        } else {
            submit.innerHTML = `<i class="fa fa-circle-o-notch fa-spin"></i> ${submit.textContent}`;
        }
    });
};

document.querySelectorAll('form').forEach(form => addAnimation(form));

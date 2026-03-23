document.querySelectorAll('.bio-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('target') === '_blank') return;

        e.preventDefault();
        const url = this.getAttribute('href');
        this.classList.add('warp-active');

        const flash = document.createElement('div');
        flash.className = 'screen-flash';
        document.body.appendChild(flash);

        setTimeout(() => { window.location.href = url; }, 400);
    });
});
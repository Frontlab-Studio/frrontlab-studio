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
const cookieDialog = document.getElementById('cookie-consent');

// Verifica se já aceitou anteriormente
if (!localStorage.getItem('cookies-accepted')) {
    // Abre o dialog com um leve delay para não impactar o LCP
    setTimeout(() => {
        cookieDialog.show();
    }, 2000);
}

function acceptCookies() {
    localStorage.setItem('cookies-accepted', 'true');
    cookieDialog.close();
}
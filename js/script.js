// Countdown e redirecionamento para página inicial
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    let seconds = 3;

    const interval = setInterval(function() {
        seconds--;
        countdownElement.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(interval);
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000);
        }
    }, 1000);
});


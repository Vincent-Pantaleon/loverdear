document.addEventListener("DOMContentLoaded", function() {
    const letter = document.querySelector('.letter');
    const envelope = document.querySelector('.envelope');
    const wrapper = document.querySelector('.wrapper');

    letter.addEventListener('click', function() {
        envelope.classList.toggle('hidden'); // Toggles the hidden class of the envelope
        this.classList.toggle('open');
        if (this.classList.contains('open')) {
            wrapper.classList.add('letter-opened');
        } else {
            wrapper.classList.remove('letter-opened');
        }
    });

    envelope.addEventListener('click', function() {
        if (letter.classList.contains('open')) {
            this.classList.toggle('hidden');
            letter.classList.toggle('open');
            wrapper.classList.remove('letter-opened');
        }
    });
});

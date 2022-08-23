document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const word = document.querySelector('#wrd').ariaValueText;
        alert(word)
    }
});
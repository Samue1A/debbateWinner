document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const word = document.querySelector('#wrd').value;
        const header = document.querySelector('h1');
        document.querySelector('h1').innerHTML = word;


    }
});
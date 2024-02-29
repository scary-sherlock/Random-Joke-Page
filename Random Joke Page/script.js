let spin = document.getElementById('spinner');
document.getElementById('jokeBtn').addEventListener('click', function() {
    spin.classList.toggle('d-none');
    let options = {
        method: 'GET'
    };
    fetch('https://apis.ccbp.in/jokes/random', options)
        .then(responce => {
            return responce.json();
        })
        .then(data => {
            spin.classList.toggle('d-none');
            document.getElementById('jokeText').textContent = data.value;
        });
});
document.querySelector('input[name=my-input]')
    .addEventListener('input', function(e) {
        document.getElementById('my-current').innerText = e.target.value;
    });

function handleSubmit(e) {
    e.preventDefault();
    var input = this.querySelector('input');

    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    li.classList.add('my-class');

    document.getElementById('my-list').appendChild(li);

    this.reset();
}

document.getElementById('my-form').addEventListener('submit', handleSubmit);
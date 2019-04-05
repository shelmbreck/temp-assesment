var value = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add').addEventListener('click', function() {
        positive()
    })
    document.getElementById('subtract').addEventListener('click', function() {
        negative()
    })
})

function positive() {
    var positiveValue = parseInt(document.getElementById('display').textContent.value); {
        value++;
        document.getElementById('number').textContent.value = positiveValue;
    }
}

function negative() {
    var negativeValue = parseInt(document.getElementById('display').textContent.value); {
        value--;
        document.getElementById('number').textContent.value = negativeValue;
    }
}

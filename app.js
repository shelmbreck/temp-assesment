document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add').addEventListener('click', function() {
        positive()
    })
    document.getElementById('subtract').addEventListener('click', function() {
        negative()
    })
})

function positive() {
    var positiveValue = parseInt(document.getElementById('number').value, 1); {
        positiveValue.textContext
        value = 0;
        value++;
        document.getElementById('add').value = positiveValue;
    }
}

function negative() {
    var negativeValue = parseInt(document.getElementById('number').value, 1); {
        negativeValue.textContent
        value = 0;
        value--;
        document.getElementById('subtract').value = negativeValue;
    }
}

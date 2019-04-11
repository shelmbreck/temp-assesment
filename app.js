var value = document.getElementById('display').textContent

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add').addEventListener('click', function() {
        positive()
    })
    document.getElementById('subtract').addEventListener('click', function() {
        negative()
    })
})

function positive() {
    var positiveValue = parseInt(document.getElementById('number').value)
    positiveValue += value
    document.getElementById('display').textContent = positiveValue;
}

function negative() {
    var negativeValue = parseInt(document.getElementById('number').value)
    negativeValue -= value
    document.getElementById('display').textContent = negativeValue;
}

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

function updateValue() {
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
});

updateValue();

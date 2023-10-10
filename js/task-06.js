const input = document.getElementById("validation-input");
const validLength = parseInt(input.getAttribute("data-length"), 10);

function checkInputLength() {
    if (input.value.length === validLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

input.addEventListener("blur", checkInputLength);
// set initial count
let count = 0;

// Select the values and buttons

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
    item.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count === 0) value.style.color = "#222";
        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";

        value.textContent = count;
    });
});

AOS.init();

const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

window.addEventListener("load", () => {
    const savedReflection = localStorage.getItem("reflection");

    if (savedReflection) {
        textarea.value = savedReflection;
    }
});

button.addEventListener("click", () => {
    const reflection = textarea.value.trim();

    if (reflection === "") {
        alert("Please write a reflection before submitting.");
        return;
    }

    localStorage.setItem("reflection", reflection);

    alert("Thank you for sharing your reflection!");
});
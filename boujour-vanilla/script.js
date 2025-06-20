function sayHello() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    if (name.trim()) {
        greeting.textContent = `Bonjour, ${name} !`;
    } else {
        greeting.textContent = "Tu n'as pas entré de prénom 😢";
    }
}

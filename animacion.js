function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.remove("active"); // Quita la visibilidad
    });

    const activeSection = document.getElementById(id);
    activeSection.classList.add("active"); // Aplica la animación
}


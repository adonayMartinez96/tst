document.addEventListener("DOMContentLoaded", async () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && closeMenu && mobileMenu) {
    menuBtn.onclick = () => mobileMenu.classList.remove("hidden");
    closeMenu.onclick = () => mobileMenu.classList.add("hidden");
  }

  // Cargar datos desde data.json
  try {
    const res = await fetch("data.json");
    const data = await res.json();

    document.getElementById("site-title").innerText = data.marca;
    document.getElementById("marca").innerText = data.marca;
    document.getElementById("footer-marca").innerText = data.marca;
    document.getElementById("titulo-hero").innerText = data.titulo;
    document.getElementById("descripcion-hero").innerText = data.descripcion;

    if (data.logo) {
      document.getElementById("logo").src = data.logo;
    }

    if (data.form_action) {
      document.getElementById("form-contacto").action = data.form_action;
    }
  } catch (err) {
    console.error("Error al cargar data.json:", err);
  }
});

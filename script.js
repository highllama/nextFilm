const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const carousel = document.querySelector(".carousel");
const carouselFilms = document.querySelectorAll(".carouselFilm");

// --------------------- PAGINACION CAROUSEL ----------------------
const numeroPaginas = Math.ceil(carouselFilms.length / 5);

for (let i = 0; i < numeroPaginas; i++) {
  const indicadores = document.createElement("button");

  if (i === 0) {
    indicadores.classList.toggle("active");
  } else {
    indicadores.classList.remove("active");
  }

  document.querySelector(".suggestIndicators").appendChild(indicadores);
  indicadores.addEventListener("click", (e) => {
    carousel.scrollLeft = i * carousel.offsetWidth;

    document
      .querySelector(".suggestIndicators .active")
      .classList.remove("active");
    e.target.classList.add("active");
  });
}

// ---------------------FLECHAS CAROUSEL ----------------------

rightArrow.addEventListener("click", () => {
  carousel.scrollLeft += carousel.scrollWidth;

  const indicadorActivo = document.querySelector(".suggestIndicators .active");

  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
});

leftArrow.addEventListener("click", () => {
  carousel.scrollLeft -= carousel.scrollWidth;

  const indicadorActivo = document.querySelector(".suggestIndicators .active");

  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
});

// ---------------------PELICULAS ----------------------

carouselFilms.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget
    setTimeout(() => {
      carouselFilms.forEach(pelicula => pelicula.classList.remove('hover'))
      elemento.classList.add('hover')
    },250)
  });
});

carousel.addEventListener('mouseleave', () => {
  carouselFilms.forEach(pelicula => pelicula.classList.remove('hover'))
})
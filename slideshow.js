class Slideshow {
  /**
   * @type {HTMLElement} The container element for the slideshow
   */
  container;

  /**
   * @type {number} The current slide index
   */
  current;

  /**
   *
   * @param {HTMLElement} container The container element for the slideshow
   */
  constructor(container) {
    this.container = container;
    this.current = 0;
    this.showSlide(this.current);

    const prev = container.querySelector(".prev");
    const next = container.querySelector(".next");
    if (prev) prev.addEventListener("click", () => this.moveSlide(-1));
    if (next) next.addEventListener("click", () => this.moveSlide(1));
  }

  /**
   *
   * @param {number} n The number of slides to move (positive or negative)
   */
  moveSlide(n) {
    const slides = this.container.getElementsByClassName("slide");

    this.current = (this.current + n + slides.length) % slides.length;
    this.showSlide(this.current);
  }

  /**
   *
   * @param {number} index The index of the slide to show
   */
  showSlide(index) {
    const slides = this.container.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
  }
}

document.querySelectorAll(".slideshow").forEach((container) => new Slideshow(container));

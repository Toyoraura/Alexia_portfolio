export default class Skillbar {
  constructor(element) {
    this.element = element;
    this.skillBars = this.element.querySelectorAll(".skill-bar-fill");
    this.init();
  }

  init() {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.3, // Trigger when at least 30% of the element is visible
    };

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      observerOptions
    );

    this.observer.observe(this.element);
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateBars();
        this.observer.unobserve(this.element); // Stop observing after animation to avoid re-triggering
      }
    });
  }

  animateBars() {
    this.skillBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = percentage; // Set the width to the desired percentage
    });
  }
}
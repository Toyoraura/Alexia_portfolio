export default class SkillAnimation {
  constructor() {
    this.skillBars = document.querySelectorAll(".js-skill-bar");
    this.init();
  }

  init() {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      this.skillBars.forEach((bar) => observer.observe(bar));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      this.skillBars.forEach((bar) => this.animateSkill(bar));
    }
  }

  handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateSkill(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }

  animateSkill(bar) {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = `${percentage}%`;
  }
}

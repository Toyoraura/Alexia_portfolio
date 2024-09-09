export default class Scrolly {
  constructor(element) {
    this.element = element;
    this.options = {
      rootmargin: '0px 0px 0px 0px',
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );
    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item);
    }
  }

  watch(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
      } else if (target.dataset.noRepeat != '') {
        target.classList.remove('is-active');
      }
    }
  }
}

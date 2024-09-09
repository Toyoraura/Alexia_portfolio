export default class Accordion {

    /**
     * construtor a des variables
     * @param {this} element - contient un element html
     * @param {this} elements - contient des elements html qui représentent la question 
     * 
     */
  constructor(element) {
    this.element = element;
    this.elements = this.element.querySelectorAll('.js-header');

    this.init();
  }

    /**
     * init permet les options et ajoute un event click sur la fenetre de la question
     */
  init() {
    this.setOptions();

    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];

      element.addEventListener('click', this.toggleAccordion.bind(this));
    }
  }

    /**
     * setOptions permet d ajouter des options a l accordion comme de ne pas ferme certain element ou d avoir des element ouvert par defaut
     * @param {const} element - va chercher tout les elements avec js-header puis les envoie dans la boucle
     */
  setOptions() {
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];

      if ('autoOpen' in element.dataset) {
        element.classList.add('is-active');
      }
    }
  }


    /**
     * toggleAccordion ouvre et ferme les fenetres de question lors d un click
     * @param {const} element - contient l element choisi 
     * @param {const} isActive - permet de verifier si il est actif ou non 
     * 
     */
  toggleAccordion(event) {
    const element = event.currentTarget;
    const isActive = element.classList.contains('is-active');

    for (let i = 0; i < this.elements.length; i++) {
      const elementSelectionner = this.elements[i];

      if (elementSelectionner === element) {
        if (!isActive) {
          elementSelectionner.classList.add('is-active');
        } else{
            elementSelectionner.classList.remove('is-active');
        }
      } else if ('notClosing' in this.element.dataset) {
        
      }else{
        elementSelectionner.classList.remove('is-active');
      }
    }
  }
}

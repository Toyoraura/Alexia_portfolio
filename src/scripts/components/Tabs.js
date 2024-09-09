export default class Tabs {
      /**
       * Méthode constructeur
       * @param {HTMLelement} element - Element sur lequel la composante est instancié
       */

    constructor(element) {
        this.element = element;
        this.tabButtons = element.querySelectorAll('.js-tab'); //Variable avec tous les boutons aillant la classe js-tab
        // console.log(this.tabs);
        this.tabContents = element.querySelectorAll('.tab__content'); //Variable avec tous les éléments de contenu aillant la classe tab__content
        this.init();
    }

  /** Initialise la composante Tabs en ajoutant des events listeners aux boutons */
    
    init() {
        //Ajoute un Event Listener à chaque élément avec la classe js-tab, donc les boutons
        this.tabButtons.forEach(button => {         //Pour chaque button dans la variable this.tabButtons, paramètre du bouton cliqué
          button.addEventListener('click', () => {  //Ajoute un Event Listener de type click à chaque bouton
            const tabId = button.dataset.tabId;     //Va chercher le dataset dans le HTML aillant pour nom tab-id
            this.openTab(tabId);                    //Exécute la fonction pour chaque tab qui est cliqué
          });
        });
      }
    
  /**
   * Methode pour ouvrir un tab et afficher son contenu
   * @param {string} tabId - le ID du tab qui est actif
   */
    openTab(tabId) {
        this.closeTabs();                           //Ferme toute les tabs-contents lorsqu'on clique sur un bouton sauf celui cliqué

        //classe d'état pour le bouton
        this.tabButtons.forEach(button => {         
            if (button.dataset.tabId === tabId) {   //si le bouton cliqué est strictement égal a la valeur de tabId
                button.classList.add('is-active');  //ajoute la classe is-active et ses propriétés au bouton qui est cliqué
            }
        });
        
        //classe d'état pour le content associé au bouton cliqué
        this.tabContents.forEach(content => {
            if (content.dataset.tabContentId === tabId) {
                content.classList.add('is-active');
            }
        });
    }

      /**
       * Methode pour fermer le dernier tab actif et son contenu
       */
    closeTabs() {

        //enlève la classe d'état is-active sur les boutons et les contents
        this.tabButtons.forEach(button => {
            button.classList.remove('is-active');
        });

        this.tabContents.forEach(content => {
            content.classList.remove('is-active');
        });
    }

    // Méthode qui permet de cliquer sur le tab actif et fermer le contenu
    closeActiveTab() {
        //Variables pour le bouton et le contenu actifs
        //Enlever la classe is-active des éléments
        const activeButton = this.element.querySelector('.js-tab.is-active');
        const activeContent = this.element.querySelector('.tab__content.is-active');
    
        if (activeButton && activeContent) {
            //activeButton.classList.remove('is-active');
            //activecontent.classList.remove('is-active');
        }
    }
}

//créer une classe Tabs et l'exporter
//Variables pour element, les boutons et le contenu a afficher
//boutons pour ouvrir les tabs
//methode pour ouvrir la tab
//methode pour fermer la tab
//methode pour fermer la tab active
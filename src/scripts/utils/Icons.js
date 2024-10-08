export default class Icons {
  static load(path) {
    window.iconsPath = window.iconsPath || "";
    path = path || window.iconsPath + "assets/icons.svg";
    fetch(path)
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Le fichier icons est introuvable.");
        }
      })
      .then((data) => {
        const svg = document.createElement("div");
        svg.style.display = "none";
        svg.innerHTML = data;
        document.body.appendChild(svg);
      })
      .catch((error) => {
        console.log(`Une erreur est survenur : ${error.message}`);
      });
  }
}

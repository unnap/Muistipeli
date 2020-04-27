var korttiLista = [
  {tyyppi: 'A', kuva: 'img/card_dog'},
  {tyyppi: 'A', kuva: 'img/card_dog'},
  {tyyppi: 'B', kuva: 'img/card_cat'},
  {tyyppi: 'B', kuva: 'img/card_cat'},
  {tyyppi: 'C', kuva: 'img/card_goat'},
  {tyyppi: 'C', kuva: 'img/card_goat'},
  {tyyppi: 'D', kuva: 'img/card_octo'},
  {tyyppi: 'D', kuva: 'img/card_octo'}
];

//tähän pitäisi tulla koodia joka tuo kuvat peli diviin
function peliLauta() {

}

function testi() {
console.log('toimii');
var img = document.createElement("img");

img.src = "img/card_octo.jpg";
var src = document.getElementById("peli");

src.appendChild(img);
}

//ei tunnu toimivan ainakaan taulukoissa joissa on objekteja
//jätän sen silti tähän for now
/*function shuffle(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j] = [lista[j], lista[i]]];
  }
  console.log(korttiLista);
}*/

//opettajan antama koodi joka sekoittaa pakan
//ainakin toimii toisin kuin tuo edellinen
function sekoita(taulukko){
      taulukko.sort(function(a, b){return 0.5 - Math.random()});
      return taulukko;
}

//ihan vaan testausta varten
//voisi varmaan järkevämminkin tehdä?
function konsoliAuta() {
  console.log(korttiLista);
}
//shuffle(korttiLista);

//opettajan antama ajastin koodi
//en ole testannut vielä
function odota() {
  setTimeout(function() {
    console.log('tähän mitä haluun tehä?');
  }, 1000);
}
console.log(korttiLista);

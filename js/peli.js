var korttiLista = [
  {pari: 'A', kuva: 'img/card_dog.jpg'},
  {pari: 'A', kuva: 'img/card_dog.jpg'},
  {pari: 'B', kuva: 'img/card_cat.jpg'},
  {pari: 'B', kuva: 'img/card_cat.jpg'},
  {pari: 'C', kuva: 'img/card_goat.jpg'},
  {pari: 'C', kuva: 'img/card_goat.jpg'},
  {pari: 'D', kuva: 'img/card_octo.jpg'},
  {pari: 'D', kuva: 'img/card_octo.jpg'}
];
var valinta = [];
var klikkaukset = [];
//tähän pitäisi tulla koodia joka tuo kuvat peli diviin
function peliLauta() {

}

function testi() {
console.log('toimii');
sekoita(korttiLista);
for(var i = 0; i < korttiLista.length; i++) {
  //luodaan divi
  var card = document.createElement('div');
  card.classList.add('kortti');
  document.getElementById("peli").appendChild(card);
  //luodaan kortin etupuoli ja lisätään se diviin
  var front = document.createElement('img');
  front.src = korttiLista[i].kuva;
  front.className = 'selka';
  card.appendChild(front);
  //luodaan kortin selkä ja lisätään se diviin
  var back = document.createElement('img');
  back.src = 'img/card_back.jpg';
  back.className = korttiLista[i].pari;
  card.appendChild(back);
  //lisätään kortin selkään event listener
  back.addEventListener('click', function() {
    var kortti = this.className;
    this.classList.toggle('flip');
    console.log('klikkaus')
    valinta.push(kortti);
    console.log(valinta);
    //console.log(this.alt);
    if (valinta.length === 1) {
      console.log('pöö');
    }
    if (valinta[0] === valinta[1]) {
      console.log('tööt');
      console.log(valinta);
      valinta == [];
    }
    if (valinta.length === 2) {
      valinta = [];
    }

  });
  //var lauta = document.getElementById("peli");


  }
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


//testi();
//ihan vaan testausta varten
//voisi varmaan järkevämminkin tehdä?
function konsoliAuta() {
  console.log(korttiLista);
  console.log(korttiLista[0].kuva)
  console.log(korttiLista.length)
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

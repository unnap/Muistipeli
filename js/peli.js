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
//taulukko parin vertausta varten
var valinta = [];
//taulukko korteista jotka on käännetty
var flipatut = [];

function sekoita(pakka) {
  pakka.sort(function(a, b) {return 0.5 - Math.random()});
  return pakka;
}

function ajastin(x) {
  setTimeout(function() {
    document.getElementById(x[0]).childNodes[1].style.visibility = 'visible'
    document.getElementById(x[1]).childNodes[1].style.visibility = 'visible'
    flipatut = [];
    valinta = [];
  }, 1000)
}

//kortin kääntö funktio
function flippaa() {
  var selkaFlip = this.childNodes;
  var flipattuKortti = this.getAttribute('id');
  //piilottaa selän
  selkaFlip[1].style.visibility = 'hidden';
  //lisää taulukkoon kortin pari-tunnisteen
  valinta.push(this.getAttribute('data-pari'));
  //lisää taulukkoon kortin id:n
  flipatut.push(flipattuKortti);
  console.log(valinta);
  console.log(flipatut);



  if (valinta.length === 2) {

    //jos löytyy pari
    if (valinta[0] === valinta[1]) {
      console.log('tööt');
      console.log(valinta);

      //poistaa kortin valinta funktion
      document.getElementById(flipatut[0]).removeEventListener('click', flippaa);
      document.getElementById(flipatut[1]).removeEventListener('click', flippaa);
      valinta = [];
      flipatut = [];
    } else {
      //jos ei löytynyt paria, kääntää kortit nurin vähän ajan päästä
      ajastin(flipatut);
      console.log('ajastin');
    }
  }
}

//pelin luonti
function peliLauta() {
  sekoita(korttiLista);
  for(var i = 0; i < korttiLista.length; i++) {
    //luodaan divi jonka sisään tulee kortti
    var kortti = document.createElement('div');
    kortti.classList.add('kortti');
    kortti.setAttribute('id', i);
    kortti.dataset.pari = korttiLista[i].pari;
    document.getElementById('peli').appendChild(kortti);

    //lisätään kortin kääntö funktio
    kortti.addEventListener('click', flippaa);

    //luodaan kortin etupuoli
    var naama = document.createElement('img');
    naama.src = korttiLista[i].kuva;
    naama.className = 'naama';
    kortti.appendChild(naama);

    //luodaan kortin selkä
    var selka = document.createElement('img');
    selka.src = 'img/card_back.jpg';
    selka.className = 'selka';
    kortti.appendChild(selka);
  }
}

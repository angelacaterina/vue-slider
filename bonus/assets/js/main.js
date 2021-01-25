// Bonus ufficiale:
// Facciamo in modo che il nostro slider scorra automaticamente in avanti, e ogni 3 secondi visualizzi un immagine differente.
// Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata.
let app = new Vue({
  el: '#app',
  data:{
    counter :0,
    images: [
      "./assets/img/IMG_3739.JPG",
      "./assets/img/IMG_3471.JPG",
      "./assets/img/IMG_3515.JPG",
      "./assets/img/IMG_3616.JPG"
    ]
  },
  created: function(){
    setInterval(this.nextImages, 5000);
  },
  methods:{
    nextImages(){
      this.counter ++;
      if (this.counter === this.images.length){
        this.counter = 0;
      }
    },
    prevImages(){
      if (this.counter > 0){
        this.counter --;
      }else{
        this.counter = this.images.length -1;
      }
    }
  }
});


// Possibili extra Bonus:
// 1. cliccando sui pallini visualizzeremo l'immagine corrispondente

// 2. cliccando sulle frecce della tastiera sinista e destra scorriamo tra le immagini
// L'evento onkeydown si verifica quando l'utente preme un tasto
// $(function() {
//   onkeydown = function(e) {
//     switch (e.keyCode) {
//       case 37: //arrow left
//         prevImages();
//         break;
//       case 39: //arrow right
//         nextImages();
//         break;
//     }
//   };
// });

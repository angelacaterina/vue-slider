// Ricreare lo slider di immagini ma questa volta con Vue
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

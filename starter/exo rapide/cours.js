class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  incScore() {
    this.score++;
  }
}

const game = {
  players : [
    new Player('kevin'),
    new Player('Paul')
  ],
  btns : document.getElementsByClassName('play'),

  init(){
    for (const btn of this.btns) {
      btn.addEventListener('click', (event) => {
        const idx = parseInt(event.currentTarget.dataset.play);
        this.players[idx].incScore();
        event.currentTarget.textContent = `${this.players[idx].name} : ${this.players[idx].score}`;
      });
    }
  }
}

game.init();

// items = document.getElementById('items');
//
// for (let i = 1; i <= 1000; i++) {
//   items.insertAdjacentHTML('beforeend', `<li> ${i}</li>`);
// }

// console.log(window.innerHeight); //la taille de la fenetre
//
// window.addEventListener('scroll', (e)=>{
//   console.log(window.scrollY) //la quantité de scroll
// })
//
// console.log(document.body.scrollHeight); //la taille de la page
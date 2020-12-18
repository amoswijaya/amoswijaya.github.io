const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementsByClassName('modal__keymap')[0];
modal.classList.toggle('toggle-modal')
openBtn.addEventListener('click', () => {
    modal.classList.toggle('hilang')
    modal.classList.toggle('toggle-modal');
});
closeBtn.addEventListener('click', () => {
    modal.classList.toggle('datang')
    modal.classList.toggle('toggle-modal');
});

window.addEventListener('keydown', function(e){
    const audioSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);

    if(!audioSound) return;


    audioSound.currentTime = 0;
    audioSound.play();

    key.classList.add('playing');

    function removeTransition(e) {
     console.log(e.propertyName); 
        if (e.propertyName !== 'transform'){
            this.classList.remove('playing')
        }  return;

    }

    const keys = document.querySelectorAll('.key');
    for (i = 0; i < keys.length; i++) {
        
        key.addEventListener('transitionend', removeTransition);
    }
});
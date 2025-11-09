const audio = document.getElementById('music');
audio.volume = 0.2;

window.addEventListener('click', () => {
    audio.play()
});

const toggleSoundIcon = document.getElementById('soundIcon');
let audioMuted = false;

toggleSoundIcon.addEventListener('click', () => {
    audio.muted = !audio.muted;

    if(audioMuted) {
        toggleSoundIcon.textContent = 'volume_up'
    }else {
        toggleSoundIcon.textContent = 'volume_off'
    }
    
    audioMuted = !audioMuted;
})

function switchTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

    audio.src = `assets/musics/${music}`
}
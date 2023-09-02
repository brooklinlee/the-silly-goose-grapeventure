// PSEUDO-CODE
/* Create let variables that hold audio files
create functions for each audio file to play
 */

const DuckQuack = new Audio('assets/Audio/duck_quack.mp3')
const ManSaysHey = new Audio('assets/Audio/man_hey.mp3')
const SadTrombone = new Audio('assets/Audio/sad_trombone.wav')

function playduckQuack() {
    DuckQuack.volume = 0.25
    DuckQuack.play()
}

function playManSaysHey() {
    ManSaysHey.volume = 0.25
    ManSaysHey.play()
}

function playSadTrombone(){
    SadTrombone.volume = 0.25
    SadTrombone.play()
}

export {
    playduckQuack,
    playManSaysHey,
    playSadTrombone,
}

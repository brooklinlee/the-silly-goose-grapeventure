const DuckQuack = new Audio('assets/Audio/duck_quack.mp3')
const ManSaysHey = new Audio('assets/Audio/man_hey.mp3')
const SadTrombone = new Audio('assets/Audio/sad_trombone.wav')
const ElevatorMusic = new Audio('assets/Audio/elevator_music.wav')

function playduckQuack() {
    DuckQuack.currentTime = 0
    DuckQuack.volume = 0.25
    DuckQuack.play()
    setTimeout(() => {
        DuckQuack.pause()}, 1000)
}

function playManSaysHey() {
    ManSaysHey.volume = 0.25
    ManSaysHey.play()
}

function playSadTrombone(){
    SadTrombone.volume = 0.25
    SadTrombone.play()
}

function playElevatorMusic(){
    ElevatorMusic.currentTime = 0
    ElevatorMusic.volume = 0.25
    ElevatorMusic.play()
    setTimeout(() => {
        ElevatorMusic.pause()}, 5000)
}

export {
    playduckQuack,
    playManSaysHey,
    playSadTrombone,
    playElevatorMusic,
}
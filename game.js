// Game loop - Function that repeats itself over and over on a set interval 

function main(currentTime) {
    window.requestAnimationFrame(main)
    console.log(currentTime)
}

window.requestAnimationFrame(main)
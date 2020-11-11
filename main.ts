input.onButtonPressed(Button.A, function () {
    basic.showNumber(product)
    questions += 1
})
input.onGesture(Gesture.TiltLeft, function () {
    questions = 0
    score = 0
    game.startCountdown(20000)
    if (game.isGameOver()) {
        basic.showNumber(score)
        basic.showString("/")
        basic.showNumber(questions)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(score)
    basic.showString("/")
    basic.showNumber(questions)
    basic.pause(1000)
    basic.clearScreen()
    questions = 0
    score = 0
})
input.onButtonPressed(Button.B, function () {
    score += 1
})
input.onGesture(Gesture.Shake, function () {
    first = randint(2, 12)
    second = randint(2, 12)
    product = first * second
    basic.showNumber(first)
    basic.pause(1000)
    basic.showString("x")
    basic.pause(1000)
    basic.showNumber(second)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
})
let second = 0
let first = 0
let product = 0
let questions = 0
let score = 0
score = 0
questions = 0

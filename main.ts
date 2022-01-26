radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Ezkerreko_intermitentea()
    }
    if (receivedNumber == 2) {
        Eskuineko_intermitentea()
    }
    if (receivedNumber == 3) {
        Limpiaparabrisas()
    }
})
function Limpiaparabrisas () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
function Ezkerreko_intermitentea () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
function Eskuineko_intermitentea () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # #
        . . . # #
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
radio.setGroup(2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
})

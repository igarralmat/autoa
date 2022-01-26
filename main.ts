function Limpiaparabrisas () {
	
}
function Ezkerreko_intermitentea () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
}
function Eskuineko_intermitentea () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
}
radio.setGroup(2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Eskuineko_intermitentea()
    }
    if (input.buttonIsPressed(Button.B)) {
        Ezkerreko_intermitentea()
    }
    if (input.logoIsPressed()) {
        Limpiaparabrisas()
    }
})

function ezkuineko_interbitentea () {
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
function ezkerreko_interbitentea () {
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
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ezkerreko_interbitentea()
    }
    if (receivedNumber == 2) {
        ezkuineko_interbitentea()
    }
    if (receivedNumber == 3) {
        limpiaparabrisas()
    }
})
function limpiaparabrisas () {
    pins.servoWritePin(AnalogPin.P0, 180)
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

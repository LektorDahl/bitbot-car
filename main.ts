radio.onReceivedString(function (receivedString) {
    if (receivedString == "Frem") {
        bitbot.ledRainbow()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        bitbot.goms(BBDirection.Forward, 40, 3000)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Tilbake") {
        bitbot.ledRainbow()
        basic.showLeds(`
            . . . . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        bitbot.goms(BBDirection.Reverse, 40, 3000)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Venstre") {
        bitbot.ledRainbow()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        bitbot.rotatems(BBRobotDirection.Left, 40, 3000)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Høyre") {
        bitbot.ledRainbow()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        bitbot.rotatems(BBRobotDirection.Right, 40, 3000)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Stopp") {
        bitbot.stop(BBStopMode.Brake)
        for (let index = 0; index < 4; index++) {
            bitbot.ledRainbow()
            basic.showIcon(IconNames.No)
            bitbot.setLedColor(0xFF0000)
        }
        bitbot.ledClear()
        basic.clearScreen()
    }
})
bitbot.select_model(BBModel.XL)
radio.setGroup(1)

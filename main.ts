radio.onReceivedString(function (receivedString) {
    if (receivedString == "Frem") {
        bitbot.goms(BBDirection.Forward, 40, 3000)
        bitbot.ledRainbow()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Tilbake") {
        bitbot.goms(BBDirection.Reverse, 40, 3000)
    }
    if (receivedString == "Venstre") {
        bitbot.rotatems(BBRobotDirection.Left, 40, 3000)
        bitbot.ledRainbow()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Høyre") {
        bitbot.rotatems(BBRobotDirection.Right, 40, 3000)
        bitbot.ledRainbow()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        bitbot.ledClear()
        basic.clearScreen()
    }
    if (receivedString == "Stopp") {
        bitbot.stop(BBStopMode.Brake)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
        }
    }
})
bitbot.select_model(BBModel.XL)
radio.setGroup(1)

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.clearScreen()
        green()
        basic.showIcon(IconNames.StickFigure)
    }
})
function crosswalk () {
    basic.pause(6000)
    green()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(20000)
    countdown()
    basic.clearScreen()
    basic.showIcon(IconNames.No)
    yellow()
}
function green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function countdown () {
    count_2 = 20
    count = 20
    if (count_3 == 0) {
        for (let index = 0; index < 20; index++) {
            basic.showNumber(count)
            count += -1
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    } else if (count_3 == 1) {
        for (let index = 0; index < 20; index++) {
            basic.showNumber(count_2)
            music.playTone(659, music.beat(BeatFraction.Half))
            count_2 += -1
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        count_3 += -1
    }
}
input.onButtonPressed(Button.A, function () {
    walking = 1
})
function CENSOR () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
}
input.onButtonPressed(Button.B, function () {
    walking = 2
    count_3 = 1
})
function crosswalk2 () {
    basic.pause(1000)
    green()
    for (let index = 0; index < 10; index++) {
        music.playTone(659, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.StickFigure)
    }
    countdown()
    basic.clearScreen()
    basic.showIcon(IconNames.No)
    yellow()
}
function yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function red_light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let censor = 0
let distance = 0
let count = 0
let count_2 = 0
let range: neopixel.Strip = null
let walking = 0
let count_3 = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
radio.setGroup(20)
count_3 = 0
walking = 0
basic.forever(function () {
    if (walking == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        red_light()
    } else if (walking == 1) {
        crosswalk()
        walking = 0
    } else if (walking == 2) {
        crosswalk2()
        walking = 0
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        CENSOR()
        if (distance <= 5) {
            censor += 1
        }
        if (censor == 4) {
            walking = 1
            censor = 0
        }
    }
    censor = 0
})

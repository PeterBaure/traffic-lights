function crosswalk () {
    red_light()
    basic.pause(5000)
    basic.showIcon(IconNames.StickFigure)
    green()
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
    count = 20
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
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    crosswalk()
})
input.onButtonPressed(Button.B, function () {
    crosswalk2()
})
function crosswalk2 () {
    red_light()
    basic.pause(1000)
    basic.showIcon(IconNames.StickFigure)
    green()
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
let distance = 0
let count = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(4)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(4)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (true) {
    	
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    red_light()
    basic.pause(40000)
    green()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(20000)
    countdown()
    basic.clearScreen()
    yellow()
    basic.showIcon(IconNames.No)
})

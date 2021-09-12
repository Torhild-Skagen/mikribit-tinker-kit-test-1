basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P2)) {
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2)) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2)) {
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2)) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
})

let puntos = 0
input.onButtonPressed(Button.A, function () {
    puntos += 1
    if (puntos == 10) {
        basic.showIcon(IconNames.Happy)
        puntos = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (puntos > 5) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})

input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number > 0) {
        basic.showString("P")
    } else if (number < 0) {
        basic.showString("N")
    } else {
        basic.showString("z")
    }
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
number = 4
basic.forever(function () {
	
})

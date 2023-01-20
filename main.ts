input.onButtonPressed(Button.A, function () {
    count = 0
    for (let index = 0; index < recover; index++) {
        count += 1
        basic.showNumber(count)
        basic.pause(200)
    }
    basic.showIcon(IconNames.Heart)
})
let count = 0
let work = 25
let recover = 5
let action = "work"


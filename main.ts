function turnLeft () {
    wuKong.setAllMotor(0, 80)
}
function turnRight () {
    wuKong.setAllMotor(80, 0)
}
function straight () {
    wuKong.setAllMotor(100, 100)
}
basic.showIcon(IconNames.Yes)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        straight()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        turnRight()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        turnLeft()
    }
})

makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
    basic.pause(500)
    led.stopAnimation()
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    basic.pause(500)
    led.stopAnimation()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
    basic.pause(500)
    led.stopAnimation()
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    basic.pause(500)
    led.stopAnimation()
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    basic.pause(500)
    led.stopAnimation()
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    Tinybit.Music_Car(Tinybit.enMusic.birthday)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    basic.pause(500)
    led.stopAnimation()
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    makerbit.connectIrReceiver(DigitalPin.P8)
})

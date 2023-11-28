function menu(): number {
    let user_option = game.askForNumber("7 per passar de °C a °F  8 per passar de °F a °C ", 1)
    return user_option
}

function menu2(option: number): number {
    let a: string;
    if (option == 7) {
        a = " a °F"
    }
    
    if (option == 8) {
        a = " a °C"
    }
    
    let user_value = game.askForNumber("Introdueix el número per convertir" + a)
    return user_value
}

function main() {
    let initial_value: number;
    let option = menu()
    if (option == 7) {
        initial_value = menu2(option)
        game.showLongText("" + initial_value + " °C = " + ("" + Math.roundWithPrecision(celsius_to_fahrenheit(initial_value), 2)) + " °F ", DialogLayout.Bottom)
    } else if (option == 8) {
        initial_value = menu2(option)
        game.showLongText("" + initial_value + " °F = " + ("" + Math.roundWithPrecision(fahrenheit_to_celsius(initial_value), 2)) + " °C ", DialogLayout.Bottom)
    } else if (option == 9) {
        game.showLongText("Has seleccionat sortir", DialogLayout.Top)
        game.gameOver(false)
    }
    
}

while (true) {
    main()
}
function celsius_to_fahrenheit(celsius: number): number {
    let fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit
}

function fahrenheit_to_celsius(fahrenheit: number): number {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}


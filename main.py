def menu():
    user_option = game.ask_for_number("""7 per passar de °C a °F  8 per passar de °F a °C """, 1)
    return user_option

def menu2(option : int):
    if (option == 7): 
        a = " a °F"
    if (option == 8):
        a = " a °C"
    user_value = game.ask_for_number("Introdueix el número per convertir" + a) 
    return user_value

def main():
    option = menu()
    if(option == 7):
        initial_value = menu2(option)
        game.show_long_text(str(initial_value)+" °C = " + str(Math.round_with_precision(celsius_to_fahrenheit(initial_value), 2) ) + " °F ", DialogLayout.BOTTOM)
    elif(option == 8):
        initial_value = menu2(option)
        game.show_long_text(str(initial_value)+" °F = " + str(Math.round_with_precision(fahrenheit_to_celsius(initial_value), 2 ) ) +  " °C ", DialogLayout.BOTTOM)
    elif(option == 9):
        game.show_long_text("Has seleccionat sortir", DialogLayout.TOP)
        game.game_over(False)


while(True):
    main()

def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

import random


def choice_player():
    choice_p = input("Escolja Pedra, Papel ou Tesoura: ").lower()
    if choice_p in ['Pedra', 'Papel', 'Tesoura']:
        return choice_p
    else:
        print("Escolha inválida. Tente novamente!")
        return choice_player()


def choice_computer():
    choice_c = ['Pedra', 'Papel', 'Tesoura']
    return random.choice(choice_c)


def player_win(player, computer):
    if player == computer:
        return "Empate!"
    elif (player == 'Pedra' and computer == 'Tesoura') or (player == 'Tesoura' and computer == 'Papel') or (player == 'Papel' and computer == 'Pedra'):
        return 'Você venceu!'
    else:
        return "A máquina venceu!"


def game():
    while True:
        player = choice_player()
        computer = choice_computer()

        print(f'Você venceu {player}')
        print(f'A máquina escolheu {computer} {player}')

        result = player_win(player, computer)
        print(result)

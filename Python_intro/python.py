#print(("Hello" " "  "World" "\n") * 5)

#print((99**3) * 8)

#print(5<3)
#print(3==3)
#print(3=="3")
#print("3" > 3)
#print("Hello" == "hello")

#computer_brand=("Hewlett Packard")
#print("I have a "+ computer_brand +" computer")
#print("I have a", computer_brand ,"computer")

#name = ("Devesh Takoor")
#age = ("20")
#shoe_size = ("43")
#info = ("My name is " + name+ ". I am " + age + " years old. I use shoes of number " +shoe_size)
#print(info)

#a = (6)
#b = (5)

#if a > b:
#	print("Hello World")

#num = int(input("Enter a number: "))
#if (num % 2) == 0:
#   print("{0} is Even".format(num))
#else:
#   print("{0} is Odd".format(num))

#name = "Atisha"
#user_name = "Damien"

#if (name == user_name):
#	print("Lerla...ki to lai mo faire?")
#else:
#	print("To nom comic!")

#user_height = (154)
#min_height = (145)
#if (user_height > 145):
#	print("You are tall enough to ride")
#else:
#	print("Pousser inper")

#print((("Hello" " "  "World" "\n") * 5) + (("I" " "  "love" " " " Python" "\n") * 5))

#month = (0)

#if ((month>=3) and (month<=5)):
#	print("Spring")
#elif ((month>=6) and (month<=8)):
#	print("Summer")
#elif ((month>=9) and (month<=11)):
#	print("Autumn")
#elif ((month >=1) and (month<=2)) or (month == 12):
#	print("Winter")
#else:
#	print("Enter a number between 1 to 12")

#print(3 <= 3 < 9)
#print(3==3==3)
#print(bool(0))
#print(bool(5 == "5"))
#print(bool(4 == 4) == (bool("4" == "4")))
#print(bool(bool(None)))
#x = (1 == True)
#y = (1 == False)
#a = (True + 4)
#b = (False + 10)
#print("x is", x)
#print("y is", y)
#print("a:", a)
#print("b:", b)

#my_text = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
#print( len(my_text)) 


#class Person():
  
#  def __init__(self,name,age):
#  self.name = name
#  self.age = age

#  def change_name(self):
#    name1 = str(input('name: '))
#    self.name = name1

#  def show_details():
#    print(f"Hello my name is " + {self.name}, aged {self.age})

 

#first_person = Person('Pitt', 36)

#first_person.show_details()


import random


class TicTacToe:

    def __init__(self):
        self.board = []

    def create_board(self):
        for i in range(3):
            row = []
            for j in range(3):
                row.append('-')
            self.board.append(row)

    def get_random_first_player(self):
        return random.randint(0, 1)

    def fix_spot(self, row, col, player):
        self.board[row][col] = player

    def is_player_win(self, player):
        win = None

        n = len(self.board)

        # checking rows
        for i in range(n):
            win = True
            for j in range(n):
                if self.board[i][j] != player:
                    win = False
                    break
            if win:
                return win

        # checking columns
        for i in range(n):
            win = True
            for j in range(n):
                if self.board[j][i] != player:
                    win = False
                    break
            if win:
                return win

        # checking diagonals
        win = True
        for i in range(n):
            if self.board[i][i] != player:
                win = False
                break
        if win:
            return win

        win = True
        for i in range(n):
            if self.board[i][n - 1 - i] != player:
                win = False
                break
        if win:
            return win
        return False

        for row in self.board:
            for item in row:
                if item == '-':
                    return False
        return True

    def is_board_filled(self):
        for row in self.board:
            for item in row:
                if item == '-':
                    return False
        return True

    def swap_player_turn(self, player):
        return 'X' if player == 'O' else 'O'

    def show_board(self):
        for row in self.board:
            for item in row:
                print(item, end=" ")
            print()

    def start(self):
        self.create_board()

        player = 'X' if self.get_random_first_player() == 1 else 'O'
        while True:
            print(f"Player {player} turn")

            self.show_board()

            # taking user input
            row, col = list(
                map(int, input("Enter row and column numbers to fix spot: ").split()))
            print()

            # fixing the spot
            self.fix_spot(row - 1, col - 1, player)

            # checking whether current player is won or not
            if self.is_player_win(player):
                print(f"Player {player} wins the game!")
                break

            # checking whether the game is draw or not
            if self.is_board_filled():
                print("Match Draw!")
                break

            # swapping the turn
            player = self.swap_player_turn(player)

        # showing the final view of board
        print()
        self.show_board()


# starting the game
tic_tac_toe = TicTacToe()
tic_tac_toe.start()


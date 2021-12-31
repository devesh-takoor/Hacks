
#my_fav_numbers = {3, 2}
#print(my_fav_numbers)

#my_fav_numbers = set(list(my_fav_numbers)[:-1])
#print(my_fav_numbers)

#friend_fav_numbers = {6, 8, 9}
#print(friend_fav_numbers)

#our_fav_numbers = set.union(my_fav_numbers, friend_fav_numbers)
#print(our_fav_numbers)

#tupple = (3, 4)
#print(tupple)

class Door():
    def __init__(self):  
        self.is_opened = True

    def open(self):
        self.is_opened = True
        print('The door is opened')

    def close(self):
        self.is_opened = False
        print('The door is closed')

class BlockedDoor(Door):
    def __init__(self):
        self.is_opened= False

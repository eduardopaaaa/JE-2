from random import Random
from re import X
from unicodedata import name

#  name print ==================================================

class Person:
    def __init__ (self, name):
        self.name = name

    def greet(self): 
        print("Hello... I am a computer... and you are a user... human... I suppose... " + self.name + "?")    
   
me = Person("eduardo")
me.greet(

)


 
# reverse read ==================================================

txt = "a man, a plan, a canal, frenemies" [::1]
print(txt)

txt = "a man, a plan, a canal, frenemies" [::-1]
print(txt)



# reverse read with function ==================================================

def my_function(x):
    return x[::1]

mytxt = my_function("this is a more complicated but useful way of reversing a string")

print(mytxt)


def my_function(x):
    return x[::-1]

mytxt = my_function("this is a more complicated but useful way of reversing a string")

print(mytxt)



# swap ==================================================
x = 10
y = 50

print("initial value of x:",x)
print("initial value of y:", y)


temp = x
x = y
y = temp

print("swapped value of x:", x)
print("swapped value of y:", y)


# Multiply numbers in array using numpy?==================================================

# input: list = [1, 2, 3]
# output: 6
# method: 1*2*3=6

# import numpy
# list1 = [1, 2, 3]
# list2 = [3, 2, 4]

# result1 = numpy.prod(list1)
# result2 = numpy.prod(list2)
# print(result1)
# print(result2)

# Multiply numbers simple==================================================

x = 25
y = 10
res = x*y

print(res)

# Multiply numbers in an array ==================================================

x = [1, 2, 3]
y = [4, 5, 6]


print(x[0] * y[2])

# fizzbuzz ==================================================

x = 5
y = 3
res = x*y

if res == 10:
    print("fizz")
else:
    print('buzz')

#fibonacci ==================================================

def fibonnaci(n): 
    if n<= 0:
        print("incorrect output")
        # in this case, the first fibonnaci number is 0
    elif n == 1:
        return 0
    # in this case, the second fibonnaci number is 1
    elif n == 2:
        return 1
    else: return fibonnaci(n-1)+fibonnaci(n-2)

print(fibonnaci(9))

#find value in array list ==================================================

names = ['jesus', 'eduardo', 'prado', 'aguilar']

for name in names:
    if name == 'jesus':
        print(names [0], '= first name', True)
    elif name == 'eduardo':
        print(names[1],'= middle name', True)
    elif name != 'eduardo' or 'jesus':
        print('no match')

        
# Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. 
# Return the final sum.

# For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. 
# On that example, it skips 3, 6, 9 as those are divisible by 3. It also skips 5, and 10 as it's divisible by 5.

def threesFives(num):
    sum = 0
    for i in range(num+1):
        if i%3 == 0 or i%5 == 0:
            continue
        sum += i
    return sum

# print(threesFives(10))

#Whoa. That Sucker's Huge(Optional) - Add odd integers from 0 to 500,000, and print the final sum.

def sum(num):
    rangeSum = 0
    for x in range(num):
        rangeSum += x
    return rangeSum

# print(sum(500000))

# Flexible Counter (Optional) - Set three variables: lowNum, highNum, mult. 
# Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. 
# For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

def flexCounter(low, high, mult):
    for x in range(low, high+1):
        if x%mult == 0:
            print(x)
    return 'Done'

# print(flexCounter(2,9,3))

def whileCounter(low, high, mult):
    count = low
    while count <= high:
        if count%mult == 0:
            print(count)
        count+=1
    return 'Done'

print(whileCounter(2,9,3))







# ***Still need to fix**
# Create a function to generate Fibonacci numbers. In this famous mathematical sequence, 
# each number is the sum of the previous two, starting with values 0 and 1. 
# Your function should accept one argument, an index into the sequence 
# (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

# Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
# fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
# fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

def fibonacci(index):
    fibArr = [0,1]
    if index < 2:
        return index
    # if index == 2:
    #     return 1

    for i in range(2,index+1):
        sum = fibArr[i-2] + fibArr[i-1]
        fibArr.append(sum)
        sum = 0
    print(fibArr)
    return fibArr[index]

# print(fibonacci(6))
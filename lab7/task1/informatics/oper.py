#1.гипотенуза
import math
a = int(input())
b = int(input())
c = math.sqrt(a*a + b*b)
print(c)

#2.Следующее и предыдущее
n = int(input())
print(f"The next number for the number {n} is {n+1}.")
print(f"The previous number for the number {n} is {n-1}.")

#3.Дележ яблок - 1
n = int(input())
k = int(input())
print(k // n)

#4. Дележ яблок - 2
n = int(input())
k = int(input())
print(k % n)

#5.МКАД
v = int(input())
t = int(input())
print((v * t) % 109)
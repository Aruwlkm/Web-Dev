#1.Список квадратов
n = int(input())
i = 1
while i * i <= n:
    print(i * i)
    i += 1

#2. Минимальный делитель
n = int(input())
for i in range(2, n + 1):
    if n % i == 0:
        print(i)
        break

#3.Список степеней двойки
n = int(input())
x = 1
while x <= n:
    print(x, end=" ")
    x *= 2

#4.Точная степень двойки
n = int(input())
while n % 2 == 0 and n > 1:
    n //= 2
if n == 1:
    print("YES")
else:
    print("NO")

#5. Двоичный логарифм
n = int(input())
k = 0
x = 1
while x < n:
    x *= 2
    k += 1 
print(k)
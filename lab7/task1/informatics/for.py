#1.Четные числа
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

#2.Остаток
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

#3.Квадраты
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if int(i**0.5) ** 2 == i:
        print(i, end=" ")

#4. Цифра в числе
x = input()
d = input()
print(x.count(d))

#5.Минимальный делитель
x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

#6.Делители числа
x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

#7.Количество делителей
x = int(input())
count = 0
for i in range(1, x + 1):
    if x % i == 0:
        count += 1
print(count)

#8.Сумма ста
total = 0
for _ in range(100):
    total += int(input())
print(total)

#9.Сумма чисел
n = int(input())
total = 0
for _ in range(n):
    total += int(input())
print(total)
#10.Нули
n = int(input())
count = 0
for _ in range(n):
    if int(input()) == 0:
        count += 1
print(count)

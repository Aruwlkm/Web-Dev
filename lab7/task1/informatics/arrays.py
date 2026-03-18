#1.A[0], A[2], A[4],
n = int(input())
a = list(map(int, input().split()))
for i in range(0, n, 2):
    print(a[i], end=" ")

#2.Вывести четные элементы
n = int(input())
a = list(map(int, input().split()))
for x in a:
    if x % 2 == 0:
        print(x, end=" ")

#3.Количество положительных элементов
n = int(input())
a = list(map(int, input().split()))
count = 0
for x in a:
    if x > 0:
        count += 1
print(count)

#4.Количество элементов, больших предыдущего
n = int(input())
a = list(map(int, input().split()))
count = 0
for i in range(1, n):
    if a[i] > a[i - 1]:
        count += 1
print(count)

#5.Есть ли два элемента с одинаковыми знаками
n = int(input())
a = list(map(int, input().split()))
found = False
for i in range(1, n):
    if a[i] * a[i - 1] > 0:
        found = True
        break
if found:
    print("YES")
else:
    print("NO")

#6. Количество элементов больших обоих соседей
n = int(input())
a = list(map(int, input().split()))
count = 0
for i in range(1, n - 1):
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        count += 1
print(count)

#7.Переставить элементы в обратном порядке
n = int(input())
a = list(map(int, input().split()))
a.reverse()
print(*a)
#1.Максимум из двух чисел
a = int(input())
b = int(input())
print(max(a, b))

#2. Високосный год
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

#3.Тестирующая система
correct = int(input())
student = int(input())
if correct == 1:
    print("YES" if student == 1 else "NO")
else:
    print("YES" if student != 1 else "NO")

#4.Знак числа
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#5.Какое из чисел больше?
a = int(input())
b = int(input())
if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)

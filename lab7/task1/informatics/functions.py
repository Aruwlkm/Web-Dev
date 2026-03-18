#1.Минимум 4 чисел
def my_min(a, b, c, d):
    return min(a, b, c, d)
a, b, c, d = map(int, input().split())
print(my_min(a, b, c, d))

#2.Степень
def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result
a, n = input().split()
a = float(a)
n = int(n)
print(power(a, n))

#3.Исключающее ИЛИ
def xor(x, y):
    return (x and not y) or (not x and y)
x, y = map(int, input().split())
print(int(xor(x, y)))

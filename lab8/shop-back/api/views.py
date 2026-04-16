from django.http import JsonResponse
from .models import Product, Category
def products_list(request):
    return JsonResponse(list(Product.objects.values()), safe=False)
def categories_list(request):
    return JsonResponse(list(Category.objects.values()), safe=False)
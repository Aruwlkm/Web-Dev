from django.urls import path
from . import views
urlpatterns = [
    path('products/', views.products_list),
    path('categories/', views.categories_list),
]
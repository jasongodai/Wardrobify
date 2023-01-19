from django.urls import path
from .views import api_list_shoes

urlpatterns = [
    path("bins/", api_list_shoes, name="api_list_shoes",)
]

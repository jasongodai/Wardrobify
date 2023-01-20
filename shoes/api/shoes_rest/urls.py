from django.urls import path
from .views import api_list_shoes, api_show_shoe

urlpatterns = [
    path("bins/", api_list_shoes, name="api_list_shoes"),
    path("bins/<int:pk>/", api_show_shoe, name="api_show_shoe"),
]

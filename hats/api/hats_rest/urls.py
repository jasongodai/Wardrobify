from django.urls import path
from .views import api_list_hats


urlpatterns = [
    path("locations/", api_list_hats, name="api_list_hats"),
]

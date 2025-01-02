from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactCardViewSet

router = DefaultRouter()
router.register(r'cards', ContactCardViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
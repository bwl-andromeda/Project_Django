from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from catalog.views import LanguageViewSet, AuthorViewSet, GenreViewSet, BookViewSet

router = routers.DefaultRouter()
router.register(r'language', LanguageViewSet)
router.register(r'author', AuthorViewSet)
router.register(r'genre', GenreViewSet)
router.register(r'book', BookViewSet)

urlpatterns = [
    path('api-token-auth/', obtain_auth_token),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]

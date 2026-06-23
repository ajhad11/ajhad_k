from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SkillViewSet,
    ExperienceViewSet,
    ProjectViewSet,
    CertificateViewSet,
    ContactMessageViewSet
)

router = DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'experience', ExperienceViewSet, basename='experience')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'certificates', CertificateViewSet, basename='certificate')
router.register(r'contact', ContactMessageViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]

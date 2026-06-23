from django.contrib import admin
from .models import Skill, Experience, Project, Certificate, ContactMessage

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency', 'order')
    list_filter = ('category',)
    search_fields = ('name',)
    list_editable = ('proficiency', 'order')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('job_title', 'company', 'duration', 'order')
    search_fields = ('job_title', 'company')
    list_editable = ('order',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'live_link', 'github_link', 'order')
    search_fields = ('title', 'technologies', 'description')
    list_editable = ('order',)


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('title', 'issuing_organization', 'date_issued', 'order')
    search_fields = ('title', 'issuing_organization')
    list_editable = ('order',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')

    # Disable adding or editing message from admin
    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

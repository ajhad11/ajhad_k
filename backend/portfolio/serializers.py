from rest_framework import serializers
from .models import Skill, Experience, Project, Certificate, ContactMessage

class SkillSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Skill
        fields = ['id', 'name', 'category', 'category_display', 'proficiency', 'order']


class ExperienceSerializer(serializers.ModelSerializer):
    responsibilities_list = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = ['id', 'job_title', 'company', 'location', 'duration', 'responsibilities', 'responsibilities_list', 'order']

    def get_responsibilities_list(self, obj):
        # Split responsibilities by newline and clean them up
        if obj.responsibilities:
            return [r.strip() for r in obj.responsibilities.split('\n') if r.strip()]
        return []


class ProjectSerializer(serializers.ModelSerializer):
    technologies_list = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'image_url', 'technologies', 'technologies_list', 'live_link', 'github_link', 'order']

    def get_technologies_list(self, obj):
        if obj.technologies:
            return [t.strip() for t in obj.technologies.split(',') if t.strip()]
        return []

    def get_image(self, obj):
        request = self.context.get('request')
        # If there is a uploaded file image, return its URL
        if obj.image:
            if request is not None:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        # Otherwise, fallback to the external image_url
        return obj.image_url


class CertificateSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Certificate
        fields = ['id', 'title', 'issuing_organization', 'image', 'image_url', 'verification_link', 'date_issued', 'order']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            if request is not None:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return obj.image_url


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

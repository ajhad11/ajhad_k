from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('database', 'Database'),
        ('mobile', 'Mobile'),
        ('tools', 'Tools'),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    proficiency = models.IntegerField(default=100, help_text="Enter proficiency as a percentage (e.g., 85)")
    order = models.IntegerField(default=0, help_text="Ordering key for listing")

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"


class Experience(models.Model):
    job_title = models.CharField(max_length=150)
    company = models.CharField(max_length=150)
    location = models.CharField(max_length=150, blank=True, null=True)
    duration = models.CharField(max_length=100, help_text="e.g., June 2025 - Present")
    responsibilities = models.TextField(help_text="Enter responsibilities, one per line or separated by double newlines")
    order = models.IntegerField(default=0, help_text="Ordering key (smaller values show first)")

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return f"{self.job_title} at {self.company}"


class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True, help_text="Optional external image URL if not uploading file")
    technologies = models.CharField(max_length=255, help_text="Comma-separated values, e.g. React, Django, PostgreSQL")
    live_link = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title


class Certificate(models.Model):
    title = models.CharField(max_length=200)
    issuing_organization = models.CharField(max_length=150)
    image = models.ImageField(upload_to='certificates/', blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True, help_text="Optional external image URL if not uploading file")
    verification_link = models.URLField(blank=True, null=True)
    date_issued = models.CharField(max_length=100, help_text="e.g., Dec 2025")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"

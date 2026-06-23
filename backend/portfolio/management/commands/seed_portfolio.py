from django.core.management.base import BaseCommand
from portfolio.models import Skill, Experience, Project, Certificate

class Command(BaseCommand):
    help = 'Seeds sample portfolio data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding database with sample portfolio data...')

        # Clear existing data to avoid duplicates
        Skill.objects.all().delete()
        Experience.objects.all().delete()
        Project.objects.all().delete()
        Certificate.objects.all().delete()

        # 1. Seed Skills
        skills_data = [
            # Frontend
            {'name': 'HTML', 'category': 'frontend', 'proficiency': 95, 'order': 1},
            {'name': 'CSS', 'category': 'frontend', 'proficiency': 90, 'order': 2},
            {'name': 'JavaScript', 'category': 'frontend', 'proficiency': 92, 'order': 3},
            {'name': 'React', 'category': 'frontend', 'proficiency': 90, 'order': 4},
            {'name': 'Bootstrap', 'category': 'frontend', 'proficiency': 85, 'order': 5},
            {'name': 'Tailwind CSS', 'category': 'frontend', 'proficiency': 92, 'order': 6},
            # Backend
            {'name': 'Python', 'category': 'backend', 'proficiency': 90, 'order': 7},
            {'name': 'Django', 'category': 'backend', 'proficiency': 88, 'order': 8},
            {'name': 'REST API', 'category': 'backend', 'proficiency': 90, 'order': 9},
            {'name': 'Node.js', 'category': 'backend', 'proficiency': 75, 'order': 10},
            # Database
            {'name': 'PostgreSQL', 'category': 'database', 'proficiency': 85, 'order': 11},
            {'name': 'MySQL', 'category': 'database', 'proficiency': 80, 'order': 12},
            {'name': 'SQLite', 'category': 'database', 'proficiency': 90, 'order': 13},
            # Mobile
            {'name': 'Flutter', 'category': 'mobile', 'proficiency': 88, 'order': 14},
            {'name': 'Dart', 'category': 'mobile', 'proficiency': 85, 'order': 15},
            # Tools
            {'name': 'Git', 'category': 'tools', 'proficiency': 88, 'order': 16},
            {'name': 'GitHub', 'category': 'tools', 'proficiency': 90, 'order': 17},
            {'name': 'VS Code', 'category': 'tools', 'proficiency': 95, 'order': 18},
            {'name': 'Figma', 'category': 'tools', 'proficiency': 75, 'order': 19},
        ]
        for skill in skills_data:
            Skill.objects.create(**skill)
        self.stdout.write(self.style.SUCCESS(f'Created {len(skills_data)} skills.'))

        # 2. Seed Experience
        Experience.objects.create(
            job_title='Web Development Intern',
            company='Verveox Technologies',
            location='Remote / Calicut',
            duration='Dec 2025 - May 2026',
            responsibilities='Frontend Development\nResponsive Design\nAPI Integration\nDatabase Management',
            order=1
        )
        Experience.objects.create(
            job_title='Junior Flutter Developer',
            company='Appxone Technologies',
            location='Calicut, Kerala',
            duration='July 2025 - Nov 2025',
            responsibilities='Mobile App Development\nState Management (Bloc / Provider)\nUI/UX Implementation\nApp Store & Play Store Deployment',
            order=2
        )
        self.stdout.write(self.style.SUCCESS('Created experience records.'))

        # 3. Seed Projects
        projects_data = [
            {
                'title': 'Gold Inventory Management',
                'description': 'A robust inventory management system designed for gold merchants. It manages stocks, tracks billing and transactions, and includes detailed analytics reporting.',
                'image_url': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
                'technologies': 'React, Django, PostgreSQL, Tailwind CSS',
                'live_link': 'https://gold-inventory-demo.example.com',
                'github_link': 'https://github.com/ajhadk/gold-inventory-management',
                'order': 1
            },
            {
                'title': 'Wanderluxe Travel Website',
                'description': 'Premium luxury travel booking website. Features destination discovery pages, dynamic filter searches, itinerary planning modules, and responsive booking inquiries.',
                'image_url': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
                'technologies': 'React, Django, SQLite, Tailwind CSS, Framer Motion',
                'live_link': 'https://wanderluxe-travel.example.com',
                'github_link': 'https://github.com/ajhadk/wanderluxe-travel',
                'order': 2
            },
            {
                'title': 'Library Management System',
                'description': 'An educational portal for managing books, members, issues, and returns. Features fine calculations, digital catalog search, and automated email reminders.',
                'image_url': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
                'technologies': 'React, Django REST Framework, SQLite, Bootstrap',
                'live_link': 'https://library-system.example.com',
                'github_link': 'https://github.com/ajhadk/library-management-system',
                'order': 3
            },
            {
                'title': 'Event Management System',
                'description': 'A fully interactive event planning and ticketing platform. Users can create, search, and RSVP to local and online events, with interactive ticketing dashboards.',
                'image_url': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
                'technologies': 'React, Django, SQLite, Tailwind CSS, React-Icons',
                'live_link': 'https://event-system.example.com',
                'github_link': 'https://github.com/ajhadk/event-management-system',
                'order': 4
            }
        ]
        for project in projects_data:
            Project.objects.create(**project)
        self.stdout.write(self.style.SUCCESS(f'Created {len(projects_data)} projects.'))

        # 4. Seed Certifications
        certificates_data = [
            {
                'title': 'Web Development Internship Certificate',
                'issuing_organization': 'Verveox Technologies',
                'image_url': 'https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?auto=format&fit=crop&w=800&q=80',
                'verification_link': 'https://verveox.com/verify/cert123',
                'date_issued': 'May 2026',
                'order': 1
            },
            {
                'title': 'Python Certification',
                'issuing_organization': 'Python Institute / Coursera',
                'image_url': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
                'verification_link': 'https://coursera.org/verify/python456',
                'date_issued': 'Oct 2025',
                'order': 2
            },
            {
                'title': 'Flutter Development Certificate',
                'issuing_organization': 'Google / Udemy',
                'image_url': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                'verification_link': 'https://udemy.com/certificate/flutter789',
                'date_issued': 'Jan 2026',
                'order': 3
            }
        ]
        for cert in certificates_data:
            Certificate.objects.create(**cert)
        self.stdout.write(self.style.SUCCESS(f'Created {len(certificates_data)} certificates.'))
        
        self.stdout.write(self.style.SUCCESS('Successfully seeded database!'))

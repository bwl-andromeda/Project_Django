from django.contrib import admin

from .models import Book,Language,Author

# Register your models here.
admin.site.register(Language)
admin.site.register(Author)
admin.site.register(Book)
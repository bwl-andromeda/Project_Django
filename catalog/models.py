from django.db import models


class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    isbn = models.CharField(max_length=20)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.SET_NULL, null=True)
    genres = models.ManyToManyField(Genre)

    def __str__(self):
        return self.title

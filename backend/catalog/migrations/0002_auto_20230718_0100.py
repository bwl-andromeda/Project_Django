# Generated by Django 3.2.20 on 2023-07-17 22:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='author',
            name='birthdate',
        ),
        migrations.RemoveField(
            model_name='author',
            name='country',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='description',
        ),
    ]
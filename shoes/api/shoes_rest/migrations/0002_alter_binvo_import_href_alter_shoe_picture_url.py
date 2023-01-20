# Generated by Django 4.0.3 on 2023-01-20 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='binvo',
            name='import_href',
            field=models.CharField(blank=True, max_length=200, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='picture_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
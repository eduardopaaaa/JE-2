# Generated by Django 3.1.7 on 2021-03-02 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('age', models.IntegerField()),
                ('main_power', models.CharField(max_length=32)),
                ('team', models.CharField(max_length=32)),
            ],
        ),
    ]
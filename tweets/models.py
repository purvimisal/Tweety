from django.db import models
import random
# Create your models here.

from django.conf import settings

User = settings.AUTH_USER_MODEL

class Tweet(models.Model):
    # maps to sql data
    # id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE) #many users can have many tweets
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/',blank=True, null=True)


    class Meta:
        ordering = ['-id']

    # def __str__(self):
    #     return self.content

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "likes": random.randint(0,299)

        }
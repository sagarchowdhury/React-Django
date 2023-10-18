from django.contrib.auth.models import auth
from backend.models import Message

def AddMessage(msg):
    message=Message.objects.filter(id=1)
    if message.exists():
        message=Message.objects.get(id=1)
        message.Message=msg
        message.save(update_fields = ['Message'])
        message.save()




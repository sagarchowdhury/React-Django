
from backend.DBHandlers import MessageHandler

def AddMessage(message):
    MessageHandler.AddMessage(message)  #return render(request, 'sign-up')
    return message

  
    


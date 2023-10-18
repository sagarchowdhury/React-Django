
from backend.DBHandlers import UserHandler,MessageHandler
from . import Sessions

def AddUser(request,FirstName,LastName, Username, Email, Gender, Password, ContactNO, Address, Type):
    flage = UserHandler.AddUser(FirstName,LastName,Username,Email,Gender,Password,"03004347649",Address, Type)
    return flage


def searchUser(request,Username,Password):
    user = UserHandler.searchUser(Username,Password)
    if user is not None:
        if(Sessions.checkSignIN==True):
            Sessions.deleteSession(request)
        Sessions.creatSession(request,user)
        message=Sessions.getUserType(request)
        print(message)
        MessageHandler.AddMessage(message) 
        return message
    else:
        message="Incorrect Username/Password"  
        MessageHandler.AddMessage(message)  #return render(request, 'sign-up')
        return message


def resetPassword(request,Email, Password):
    user=UserHandler.getEmail(Email)
    if user is not None:
        flage=UserHandler.ressetPassword(user,Password)
        if flage is True:
            return "Success"
        else:
        #return render(request, 'sign-up')
            return "Could not Reset Password"
    else:
        return "Email not found"


def deleteuser(request,ID):
    flage = UserHandler.deleteuser(ID)
    return flage


  
    


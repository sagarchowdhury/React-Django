from django.contrib.auth.models import auth
from backend.models import User

def AddUser(FirstName,LastName, Username, Email, Gender, Password, ContactNO, Address, Type):
    user=User.objects.filter(Username=Username)
    print(Username,Email)
    if not user.exists() :
        user=User.objects.filter(Email=Email)
        if not user.exists():
            user = User(FirstName=FirstName,LastName=LastName,Username=Username,Email=Email,Gender=Gender,Password=Password,ContactNO=ContactNO,Address=Address,Type=Type)
            #user = User(FirstName="admin",LastName="admin",Username="admin",Email="admin@gmail.com",Gender="Male",Password="123",ContactNO="03004347649",Address="Town Ship Lahore",Type="Admin"
            user.save()
            return "Added"
        else:
            return "User Email already Exist"
    else:
        return "User Username already Exist"

def searchUser(Username,Password):
    email = User.objects.filter(Email=Username)
    if not email.exists():
        email = User.objects.filter(Username=Username)
        if not email.exists():
            return None
        else:
            pwd=User.objects.filter(Password=Password)
            if not pwd.exists():
                return None
            else:
                user=User.objects.get(Username=Username)
                return user
    else:
        pwd=User.objects.filter(Password=Password)
        if not pwd.exists():
            return None
        else:
            user=User.objects.get(Email=Username)
            return user

def getUser(username):
    user=User.objects.filter(Username=username)
    if user.exists():
        user=User.objects.get(Username=username)
        return user
    else:
        return None

def getEmail(username):
    user=User.objects.filter(Email=username)
    if user.exists():
        user=User.objects.get(Email=username)
        return user
    else:
        return None




def ressetPassword(user,Password):
    user.Password = Password
    user.save(update_fields = ['Password'])
    user.save()
    return True

def deleteuser(ID):
    apt=User.objects.filter(id=ID)
    if apt.exists():
        User.objects.filter(id=ID).delete()
        return "Succes"
    else:
        return "Could Not Delete Users"


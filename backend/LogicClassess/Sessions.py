from django.contrib.sessions.models import Session
from django.http import HttpResponse, response

Name=""

def creatSession(request,user):
    request.session['Type']=user.Type
    request.session['id']=user.id
    request.session['signin']=True
    # response.set_cookie("ID",user.id)
    return response

def getUserType(request):
    return request.session.get('Type')

def checkSignIN(request):
    return request.session.get('signin')

def getUserID(request):
    return request.session.get('id')

def getNew():
    return Name


def addNew(name):
    global Name
    Name=name

def deleteSession(request):
    try:
        del request.session['Type']
        del request.session['id']
        request.session['signin']=False

    except KeyError:
        pass
    return HttpResponse("<h1>dataflair<br>Session Data cleared</h1>")




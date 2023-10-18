from backend.LogicClassess import Session

def getUserType(request):
    return request.session.get('Type')

def getUserID(request):
    return request.session.get('id')

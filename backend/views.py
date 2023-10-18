from django.shortcuts import render,redirect
from django.http import HttpResponse
from .LogicClassess import Usermodule
from .LogicClassess import AppointmentModule, VacationsModule ,PatientMedicalHistoryModule,MessageModule
from .LogicClassess import Sessions


def signup(request):
    if request.method=='POST':
        FirstName = request.POST['firstname']
        LastName = request.POST['lastname']
        Username = request.POST['username']
        Email= request.POST['email']
        Gender= request.POST['gender']
        Password= request.POST['password']
        flage = Usermodule.AddUser(request,FirstName,LastName,Username,Email,Gender,Password,"03004347649","Street No 1 Township","Patient")
        if flage =="Added":
            MessageModule.AddMessage(flage)
            return redirect('http://127.0.0.1:8000/sign-in')
        else:
            MessageModule.AddMessage(flage)
            return redirect('http://127.0.0.1:8000/sign-up')
    else:
        MessageModule.AddMessage("Server Error! Try Again")
        return redirect('http://127.0.0.1:8000/sign-up')


    
    
def signin(request):
    if request.method=='POST':
        AppointmentModule.DisplayAppointment()
        Username = request.POST['username']
        Password= request.POST['password']
        flage = Usermodule.searchUser(request,Username,Password)
        if flage is not None:
            if flage=="Patient":
                return redirect('http://127.0.0.1:8000/services')
            elif flage=="doctor":
                return redirect('http://127.0.0.1:8000/doctorhome')
            elif flage=="receptionist":
                return redirect('http://127.0.0.1:8000/receptionisthome')
            elif flage=="Admin":
                return redirect('http://127.0.0.1:8000/adminhome')
            else:
                return redirect('http://127.0.0.1:8000/sign-in')
        else:
                #return render(request, 'sign-up')
            return redirect('http://127.0.0.1:8000/sign-in')
    else:
        return redirect('http://127.0.0.1:8000/sign-in')


def logout(request):
    if Sessions.checkSignIN(request)==True:
        Sessions.deleteSession(request)
        return redirect('http://127.0.0.1:8000/home')
    else:
        return redirect('http://127.0.0.1:8000/home')
       
    
def addUser(request):
    if Sessions.checkSignIN(request)==True and Sessions.getUserType(request)=="Admin":
        if request.method=='POST':
            FirstName = request.POST['firstname']
            LastName = request.POST['lastname']
            Username = request.POST['username']
            Type = request.POST['Type']
            Email = request.POST['email']
            Gender = request.POST['gender']
            ContactNO = request.POST.get('phone')
            Address = request.POST['address']
            Password = request.POST['password']
            print((FirstName,LastName,Username,Email,Gender,Password,ContactNO,Address,Type))
            flage = Usermodule.AddUser(request,FirstName,LastName,Username,Email,Gender,Password,ContactNO,Address,Type)
            MessageModule.AddMessage(flage)
            if flage == "Added":
                return redirect('http://127.0.0.1:8000/view-user')
            else:
                #return render(request, 'sign-up')
                return redirect('http://127.0.0.1:8000/add-user')
        else:
            MessageModule.AddMessage("Server Error! Try Again")
            return redirect('http://127.0.0.1:8000/add-user')
    else:
        MessageModule.AddMessage("Please Login as Admin \n To add User")
        return redirect('http://127.0.0.1:8000/add-user')


def updateappointment(request):
    print("Make Appointment")
    if request.method=='POST':
        PatientUsername =  request.POST['patientusername']
        DoctorUsername = request.POST['doctorusername']
        DoctorGmail = request.POST['doctorgmail']
        PatientGmail= request.POST['patientgmail']
        Slot= request.POST['slot']
        Date= request.POST['date']
        #Payment= request.POST['pMethod',False]
        #PatientContactNO= request.POST['Patientphn']
        if 'Patientphn' in request.POST:
            PatientContactNO = request.POST['Patientphn']
        else:
            PatientContactNO = "090078601"

        flage = AppointmentModule.AddAppointment(request,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, PatientContactNO,Slot,Date)
        if flage =="Success":
            return redirect('http://127.0.0.1:8000/view-appointment')
        else:
            MessageModule.AddMessage(flage)
            return redirect('http://127.0.0.1:8000/appointment-form')
    else:
        MessageModule.AddMessage("Server Error")
        return redirect('http://127.0.0.1:8000/appointment-form')




def makeappointment(request):
    if(Sessions.checkSignIN(request)==True and (Sessions.getUserType(request)=='doctor' or Sessions.getUserType(request)=='Patient')):
        if request.method=='POST':
            PatientUsername =  request.POST['patientusername']
            DoctorUsername = request.POST['doctorusername']
            DoctorGmail = request.POST['doctorgmail']
            PatientGmail= request.POST['patientgmail']
            Slot= request.POST['slot']
            Date= request.POST['date']
            #Payment= request.POST['pMethod',False]
            if 'pMethod' in request.POST:
                Payment = request.POST['pMethod']
                if Payment=="online":
                    Payment="online"
                else:
                    Payment="pending"
            else:
                Payment = "pending"
            #PatientContactNO= request.POST['Patientphn']
            if 'Patientphn' in request.POST:
                PatientContactNO = request.POST['Patientphn']
            else:
                PatientContactNO = "090078601"

            flage = AppointmentModule.AddAppointment(request,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, Payment, PatientContactNO,Slot,Date)
            MessageModule.AddMessage(flage)
            if flage =="Success":
                if(Payment=="online"):
                    return redirect('http://127.0.0.1:8000/payment-form')
                else:
                    return redirect('http://127.0.0.1:8000/view-appointment')
            else:
                MessageModule.AddMessage(flage)
                return redirect('http://127.0.0.1:8000/appointment-form')
        else:
            MessageModule.AddMessage("Server Error")
            return redirect('http://127.0.0.1:8000/appointment-form')
    else:
        MessageModule.AddMessage("Please Login as Patient or Admin")
        return redirect('http://127.0.0.1:8000/appointment-form')


def onlinepayment(request):
    print("Make Appointment")
    if request.method=='POST':
        Name =  request.POST['name']
        CardNumber = request.POST['number']
        cvv = request.POST['cvv']
        Date= request.POST['date']
        flage=AppointmentModule.payment(request,Name ,CardNumber , cvv ,  Date )
        MessageModule.AddMessage(flage)
        if flage =="Success":
            return redirect('http://127.0.0.1:8000/view-appointment')
        else:
            MessageModule.AddMessage(flage)
            return redirect('http://127.0.0.1:8000/appointment-form')
    else:
        MessageModule.AddMessage("Server Error")
        return redirect('http://127.0.0.1:8000/appointment-form')




def addVacations(request):
    print("Add Vacations")
    if Sessions.checkSignIN(request)==True and Sessions.getUserType(request)=="Admin":
        if request.method=='POST':
            HolidayName =  request.POST['hname']
            StartDate = request.POST['start']
            EndDate = request.POST['end']
            DoctorUsername="ALL"
            flage = VacationsModule.AddVacations(request,DoctorUsername,HolidayName, StartDate, EndDate)
            MessageModule.AddMessage(flage)
            if flage =="Success": 
                return redirect('http://127.0.0.1:8000/admin-vacation')
            else:
                return redirect('http://127.0.0.1:8000/add-vacation')
        else:
            MessageModule.AddMessage("Server Error")
            return redirect('http://127.0.0.1:8000/add-vacation') 
    else:
        MessageModule.AddMessage("Please Login as Admin \n To add Vacation")
        return redirect('http://127.0.0.1:8000/add-vacation')

def addDocVacations(request):
    print("Add Vacations")
    if Sessions.checkSignIN(request)==True and Sessions.getUserType(request)=="Admin":
        if request.method=='POST':
            HolidayName =  request.POST['hname']
            StartDate = request.POST['start']
            EndDate = request.POST['end']
            DoctorUsername=request.POST['dname']
            flage = VacationsModule.AddVacations(request,DoctorUsername,HolidayName, StartDate, EndDate)
            MessageModule.AddMessage(flage)
            if flage =="Success": 
                return redirect('http://127.0.0.1:8000/admin-vacation')
            else:
                return redirect('http://127.0.0.1:8000/add-doctor-vacation')
        else:
            MessageModule.AddMessage("Server Error")
            return redirect('http://127.0.0.1:8000/add-doctor-vacation') 
    else:
        MessageModule.AddMessage("Please Login as Admin \n To add Vacation")
        return redirect('http://127.0.0.1:8000/add-doctor-vacation')


def addrecord(request):
    print("addrecord")
    if request.method=='POST':
        print("NULL")
        Prescription = request.POST['pres']
        print(Prescription)
        PatientID =  "1"
        flage=PatientMedicalHistoryModule.Addrecord(request, PatientID, Prescription)
        if flage is True: 
            return redirect('http://127.0.0.1:8000/view-patient')

        else:
           return redirect('http://127.0.0.1:8000/add-record')
 
    else:
        return redirect('http://127.0.0.1:8000/add-record')



def addreport(request):
    print("addreport")
    if request.method=='POST':
        PatientID =  "1"
        ReportName = request.POST['fileName']
        ReportFile = request.POST['file']
        flage=PatientMedicalHistoryModule.Addreport(request,PatientID, ReportName, ReportFile)
        if flage is True: 
            MessageModule.AddMessage("Success")
            return redirect('http://127.0.0.1:8000/add-report')
        else:
            MessageModule.AddMessage("Server Error")
            return redirect('http://127.0.0.1:8000/add-report')
    else:
        MessageModule.AddMessage("Server Error")
        return redirect('http://127.0.0.1:8000/add-report')

def SearchReport(request):
    print("addreport")
    if Sessions.checkSignIN==True and Sessions.getUserType=="Admin":
        if request.method=='POST':
            flage=PatientMedicalHistoryModule.SearchReport(request)
            if flage =="Success": 
                return HttpResponse('addreport Made') 
            else:
                return HttpResponse('addreport NOT Made') 
        else:
            return HttpResponse('addreport NOT Made')



def resetPassword(request):
    if request.method=='POST':
        Email = request.POST['email']
        Password = request.POST['password']
        flage=Usermodule.resetPassword(request,Email, Password)
        if flage =="Success": 
            MessageModule.AddMessage(flage)
            redirect('http://127.0.0.1:8000/sign-in')
        else:
            MessageModule.AddMessage(flage)
            redirect('http://127.0.0.1:8000/forget-password')
    else:
        MessageModule.AddMessage("Server Error")
        redirect('http://127.0.0.1:8000/forget-password')


def cancelAppointment(request):
    print("Make Appointment")
    if request.method=='POST':
        id =  request.POST['id']
        flage = AppointmentModule.cancelappointment(request,id)
        if flage =="Success":
            return redirect('http://127.0.0.1:8000/cancel-appointment')
        else:
            MessageModule.AddMessage(flage)
            return redirect('http://127.0.0.1:8000/view-appointment')
    else:
        MessageModule.AddMessage("Server Error")
        return redirect('http://127.0.0.1:8000/view-appointment')


def deleteuser(request):
    print("Make Appointment")
    if request.method=='POST':
        id =  request.POST['id']
        flage = Usermodule.deleteuser(request,id)
        if flage =="Success":
            return redirect('http://127.0.0.1:8000/delete-user')
        else:
            MessageModule.AddMessage(flage)
            return redirect('http://127.0.0.1:8000/view-user')
    else:
        MessageModule.AddMessage("Server Error")
        return redirect('http://127.0.0.1:8000/view-user')


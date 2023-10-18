from django.contrib.auth.models import auth
from backend.models import User
from backend.models import Appointment

def AddAppointment(pID,dID,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, Payment, PatientContactNO,Slot,Date):
    appointment = Appointment( PatientID=pID, DoctorID=dID, PatientUsername=PatientUsername, DoctorUsername=DoctorUsername, DoctorGmail=DoctorGmail, PatientGmail=PatientGmail, Payment=Payment, PatientContactNO=PatientContactNO,SlotID=Slot,Date=Date)
    flage=appointment.save()
    print(flage)


def GetAllAppointments():
    appointment=Appointment.objects.all()
    if appointment.exists():
        return appointment
    else:
        return None


def UpdatePayment(payment,PID):
    apt=Appointment.objects.filter(PatientID=PID)
    if apt.exists():
        apt=Appointment.objects.get(PatientID=PID)
        apt.Payment = payment
        apt.save(update_fields = ['Payment'])
        apt.save()
        return "Succes"
    else:
        return "Transaction Failure"


def updateappointment(pID,dID,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, PatientContactNO,Slot,Date):
    apt=Appointment.objects.filter(PatientID=pID, DoctorID=dID, PatientUsername=PatientUsername, DoctorUsername=DoctorUsername, DoctorGmail=DoctorGmail, PatientGmail=PatientGmail, PatientContactNO=PatientContactNO)
    if apt.exists():
        apt=Appointment.objects.get(PatientID=pID, DoctorID=dID, PatientUsername=PatientUsername, DoctorUsername=DoctorUsername, DoctorGmail=DoctorGmail, PatientGmail=PatientGmail, PatientContactNO=PatientContactNO)
        apt.Slot = Slot
        apt.Date=Date
        apt.save(update_fields = ['Payment','Date'])
        apt.save()
        return "Succes"
    else:
        return "Updation Fail"

def cancelappointment(ID):
    apt=Appointment.objects.filter(id=ID)
    if apt.exists():
        Appointment.objects.filter(id=ID).delete()
        return "Succes"
    else:
        return "Could Not Cancel Appointment"


    


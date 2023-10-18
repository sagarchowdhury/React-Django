
from backend.models import Appointment
from backend.DBHandlers import AppointmentHandler
from backend.DBHandlers import UserHandler
from . import Sessions

def AddAppointment(request,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, Payment, PatientContactNO,Slot,Date ):
    pID=UserHandler.getUser(PatientUsername)
    if pID is not None:
        print("GET PID")
        dID=UserHandler.getUser(DoctorUsername)
        if dID is not None:
            print("GET PID 1")
            AppointmentHandler.AddAppointment(pID.id, dID.id, PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, Payment, PatientContactNO,Slot,Date)
            Sessions.addNew(pID)
            return "Success"
        else:
            print("GET PID 4")
            return "Doctor UserName is Incorrect \nCould not register Appointment"
    else:
        print("GET PID 5")
        return "Patient UserName is Incorrect \nCould not register Appointment"

def payment(request,Name ,CardNumber , CVV ,  Date ):
    PID=Sessions.getNew()

    flage = AppointmentHandler.UpdatePayment("Cleared",PID)
    return flage

def DisplayAppointment():
    appointment=AppointmentHandler.GetAllAppointments()
    a=0
    if appointment is not None:
        apntmtArray=[]
        for appt in appointment:
            appointments={
                "id":appt.id,
                "PatientID":appt.PatientID,
                "DoctorID":appt.DoctorID,
                "DoctorGmail":appt.DoctorGmail,
                "DoctorUsername":appt.DoctorUsername,
                "PatientUsername":appt.PatientUsername,
                "PatientGmail":appt.PatientGmail,
                "Payment":appt.Payment,
                "SlotID":appt.SlotID,
                "PatientContactNO":appt.PatientContactNO
            }
            apntmtArray.append(appointments)
        print(apntmtArray)
        return apntmtArray
    else:
        return None


def updateappointment(pID,dID,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, PatientContactNO,Slot,Date):
    flage = AppointmentHandler.updateappointment(pID,dID,PatientUsername, DoctorUsername, DoctorGmail, PatientGmail, PatientContactNO,Slot,Date)
    return flage


def cancelappointment(request,ID):
    flage = AppointmentHandler.cancelappointment(ID)
    return flage
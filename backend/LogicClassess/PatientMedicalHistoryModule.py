
from backend.models import PatientMedicalHistory
from backend.DBHandlers import AppointmentHandler,PatientMedicalHistoryHandler
from backend.DBHandlers import UserHandler
from . import Sessions, MessageModule

def Addreport(request,PatientID, ReportName, ReportFile  ):
    report = PatientMedicalHistoryHandler.getReport(PatientID)
    if report is not None:
        flage=UpdateReport(report)
        if flage is True:
            return True
        else:
            return False
    else:
        flage=AddNewReport(PatientID, ReportName, ReportFile)
        if flage is True:
            return True
        else:
            return False

def Addrecord(request,PatientID,Prescription):
    record = PatientMedicalHistoryHandler.getReport(PatientID)
    if record is not None:
        flage=PatientMedicalHistoryHandler.UpdateRecord(record,Prescription)
        if flage is True:
            return True
        else:
            return False
    else: 
        flage=PatientMedicalHistoryHandler.AddRecord(PatientID,Prescription)
        if flage is True:
            return True
        else:
            return False


def UpdateReport(report):
    file=report.ReportFile
    flage = PatientMedicalHistoryHandler.UpdateReport(report.PatientID,file)
    if flage is True:
        return True
    else:
        return False

def AddNewReport(PatientID, ReportName, ReportFile):
    flage = PatientMedicalHistoryHandler.AddNewReport(PatientID, ReportFile)
    if flage is True:
        return True
    else:
        return False

def SearchReport(request):
    PID = Sessions.getUserID(request)
    report=PatientMedicalHistoryHandler.SearchReport(PID)
    if report is not None:
        MessageModule.AddMessage(PID)
        return "Success"

    else:
        return "No Record"
 


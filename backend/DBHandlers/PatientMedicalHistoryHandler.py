from django.contrib.auth.models import auth
from backend.models import User
from backend.models import Appointment,PatientMedicalHistory

def getReport(PatientID):
    print("1")
    report=PatientMedicalHistory.objects.filter(PatientID=PatientID)
    if report.exists():
        report=PatientMedicalHistory.objects.get(PatientID=PatientID)
        return report
    else:
        return None


def UpdateReport(PatientID,File):
    report=getReport(PatientID)
    report.ReportFile = File
    report.save(update_fields=['ReportFile'])
    report.save()
    #PatientMedicalHistory.objects.filter(PatientID).update(RportFile=File)
    return True
    

def AddNewReport(PatientID, ReportFile):
    report=PatientMedicalHistory(PatientID=PatientID,ReportFile=ReportFile)
    report.save()
    return True


def UpdateRecord(record,Prescription):
    record.LatestPrescription = Prescription
    record.save(update_fields = ['LatestPrescription'])
    record.save()
    return True

def AddRecord(PatientID,Prescription):
    record=PatientMedicalHistory(PatientID=PatientID, LatestPrescription=Prescription)
    record.save()
    return True

def SearchReport(PID):
    report=PatientMedicalHistory.objects.filter(PatientID=PID)
    if report.exists():
        report=PatientMedicalHistory.objects.get(PatientID=PID)
        return report
    else:
        return None

    


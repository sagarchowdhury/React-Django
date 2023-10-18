from django.db import models
import datetime
class User(models.Model):
    FirstName = models.CharField(max_length=200,default='None')
    LastName = models.CharField(max_length=200,default='None')
    Username = models.CharField(max_length=200)
    Email= models.CharField(max_length=200)
    Gender= models.CharField(max_length=200)
    Password= models.CharField(max_length=12)
    ContactNO= models.CharField (max_length=11,default='03004347649')
    Address= models.CharField(max_length=200,default='NULL')
    Type= models.CharField(max_length=20,default='Patient')
    def __str__(self):
        return self


class Appointment(models.Model):
    PatientID =  models.CharField(max_length=20,default='0')
    DoctorID = models.CharField(max_length=20,default='0')
    DoctorGmail = models.CharField(max_length=200)
    DoctorUsername = models.CharField(max_length=200)
    PatientUsername = models.CharField(max_length=200)
    PatientGmail= models.CharField(max_length=200)
    Payment= models.CharField(max_length=200)
    SlotID=models.CharField(max_length=20)
    PatientContactNO= models.CharField (max_length=11)
    Date= models.DateField(("Date"), default=datetime.date.today)
    
    def __str__(self):
        return self
# Create your models here.

class Payment(models.Model):
    Name = models.CharField(max_length=200)
    CardNumber = models.CharField(max_length=200)
    CVCNumber = models.CharField(max_length=200)
    TransectionDate= models.DateField(("Date"), default=datetime.date.today)
    Amount= models.CharField(max_length=20)
    Status= models.CharField (max_length=11)
    def __str__(self):
        return self

class Vacations(models.Model):
    DoctorUsername = models.CharField(max_length=200,default='None')
    HolidayName = models.CharField(max_length=200)
    StartDate= models.DateField(("Date"), default=datetime.date.today)
    EndDate= models.DateField(("Date"), default=datetime.date.today)
    def __str__(self):
        return self


class PatientMedicalHistory(models.Model):
    PatientID = models.CharField(max_length=20,null=False)
    ReportFile =  models.FileField(upload_to='pdfs/', null=True, blank=True)
    LastUpdate = models.DateField(("Date"), default=datetime.date.today)
    LatestPrescription = models.CharField(max_length=20,default='NULL')

class Message(models.Model):
    Message = models.CharField(max_length=200)

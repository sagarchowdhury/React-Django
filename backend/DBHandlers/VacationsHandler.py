from django.contrib.auth.models import auth
from backend.models import Vacations

def AddVacations(request,DoctorUsername,HolidayName, StartDate, EndDate):
    vac = Vacations(DoctorUsername=DoctorUsername ,HolidayName=HolidayName, StartDate=StartDate, EndDate=EndDate)
    vac.save()
        
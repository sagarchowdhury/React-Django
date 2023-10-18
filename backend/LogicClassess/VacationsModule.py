
from backend.DBHandlers import VacationsHandler, UserHandler
from . import Sessions

def AddVacations(request,DoctorUsername,HolidayName, StartDate, EndDate):
    if DoctorUsername!="ALL":
        dname=UserHandler.getUser(DoctorUsername)
        if dname is not None and dname.Username==DoctorUsername:
            VacationsHandler.AddVacations(request,DoctorUsername,HolidayName, StartDate, EndDate)
            return "Success"
        else:
            return "Doctor Name is InCorrect"
    else:
        VacationsHandler.AddVacations(request,DoctorUsername,HolidayName, StartDate, EndDate)
        return "Success"




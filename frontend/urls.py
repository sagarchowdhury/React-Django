
from django.urls import path
from .views import index
from . import views
urlpatterns = [
    
    path('', index),
    path('appointment', index),
    path('home', index),
    path('sign-in', index),
    path('sign-up', index),
    path('about', index),
    path('services', index),
    path('contact', index),
    path('homedoctors', index),
    path('forget-password', index),
    path('appointment-form', index),
    path('view-appointment', index),
    path('update-appointment', index),
    path('cancel-appointment', index),
    path('payment-form', index),
    path('add-report', index),
    path('veiw-record', index),
    path('HomeDoctors',index),
    path('view-user', index),
    path('add-user', index),
    path('adminhome', index),
    path('admin-vacation', index),  
    path('add-vacation', index),  
    path('add-doctor-vacation', index), 
    path('doctorhome', index), 
    path('doc-services', index), 
    path('view-profile', index), 
    path('view-doc-app', index),
    path('view-patient', index), 
    path('viewpatient', index), 
    path('add-record', index),  
    path('receptionisthome', index), 
    path('payment', index),
    path('delete-user', index),
    path('search-user', index),
    path('update-user', index),


    
   
   # path('vacation',index),
 
]
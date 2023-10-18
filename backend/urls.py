
from django.urls import path
from . import views
urlpatterns = [
    path('signup',views.signup,name='signup'),
    path('signin',views.signin,name='signin'),
    path('addUser',views.addUser,name='addUser'),
    path('updateappointment', views.updateappointment,name='updateappointment'),
    path('makeappointment', views.makeappointment,name='makeappointment'),
    path('onlinepayment', views.onlinepayment,name='onlinepayment'),
    path('addVacations', views.addVacations,name='addVacations'),
    path('addDocVacations', views.addDocVacations,name='addDocVacations'),
    path('addrecord', views.addrecord,name='addrecord'),
    path('addreport', views.addreport,name='addreport'),
    path('resetPassword', views.resetPassword,name='resetPassword'),
    path('logout', views.logout,name='logout'),
    path('cancelAppointment', views.cancelAppointment,name='cancelAppointment'),
    path('deleteuser', views.deleteuser,name='deleteuser'),

 
]
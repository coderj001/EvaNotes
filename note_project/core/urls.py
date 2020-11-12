from django.urls import path
from core.views import (NoteDetail, NoteList)

APP_NAME = 'core'

urlpatterns = [
    path('', NoteList.as_view(),),
    path('<int:pk>/', NoteDetail.as_view(),),
]

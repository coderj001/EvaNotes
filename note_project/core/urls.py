from django.urls import path
from core.views import (NoteDetail, NoteList)

APP_NAME = 'core'

urlpatterns = [
    path('notes/', NoteList.as_view(),),
    path('notes/<int:pk>/', NoteDetail.as_view(),),
]

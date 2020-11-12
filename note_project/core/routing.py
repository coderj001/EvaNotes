from django.urls import path
from core.consumers import NoteConsumer

websocket_urlpatterns = {
    path('ws/notes', NoteConsumer)
}

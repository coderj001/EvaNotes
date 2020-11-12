from django.contrib import admin
from core.models import Note

# Register your models here.


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at', 'word_count')

    def word_count(self, obj):
        from django.utils.html import format_html
        result = len((obj.content).split())
        return format_html("<b>{}</b>", result)
    word_count.short_description = "Words"

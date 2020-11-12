from django.contrib import admin
from core.models import Note

# Register your models here.


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at', 'word_count')
    list_filter = ('updated_at', 'created_at')
    search_fields = ('title__startswith',)

    def word_count(self, obj):
        from django.utils.html import format_html
        result = len((obj.content).split())
        return format_html("<b style='color: blue'>{}</b>", result)
    word_count.short_description = "Words"

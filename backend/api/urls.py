from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("member/find/<str:cookie>", views.findMember, name="FindMember"),
    path("member/find/member/<int:id>", views.findMemberViaID, name="FindMember"),
    path("member/", views.MemberListCreate.as_view(), name="member-list"),
    path("MOS/<str:MOS>", views.MOSListCreate.as_view(), name="member-list"),

]

from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import MOSSerializer, UserSerializer, NoteSerializer, MemberSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note, Member, MOS
from django.http import HttpResponse, JsonResponse



class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


def findMember(request, cookie):


    print(cookie)
    member = Member.objects.filter(member_DOID=cookie)

    member = list(member.values())
    print(member)
    return JsonResponse(member, safe=False)

def findMemberViaID(request, id):
    print(id)
    member = Member.objects.filter(pk=id).values()
    users_list = list(member)  # important: convert the QuerySet to a list object

    return JsonResponse(users_list, safe=False)


class MemberListCreate(generics.ListCreateAPIView):
    serializer_class = MemberSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if not self.request.user.pk:
            return None
        user = self.request.user
        return Member.objects.filter(member_linked_user=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(member_linked_user=self.request.user)
        else:
            print(serializer.errors)


class MOSListCreate(generics.ListCreateAPIView):
    serializer_class = MOSSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        MOSKey = self.kwargs["MOS"]
        print(MOSKey)
        return MOS.objects.filter(pk=MOSKey)


from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from barmeister.permissions import IsOwnerOrReadOnly
from user.serializers import UserSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ManageUserView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly, IsAdminUser]

    def get_object(self):
        return self.request.user
from django.contrib.auth import get_user_model
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    birthdate = serializers.DateTimeField(format="YYYY-MM-DD", read_only=True)

    class Meta:
        model = get_user_model()
        fields = [
            "id",
            "username",
            "email",
            "profile_picture",
            "first_name",
            "last_name",
            "birthdate",
            "is_active",
            "is_staff",
        ]
        read_only_fields = ["is_staff", "is_active"]
        extra_kwargs = {"password": {"write_only": True, "min_length": 5}}


class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "profile_picture"]

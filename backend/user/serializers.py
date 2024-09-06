from datetime import datetime
from dateutil.relativedelta import relativedelta

from django.contrib.auth import get_user_model
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = [
            "id",
            "username",
            "email",
            "password",
            "profile_picture",
            "first_name",
            "last_name",
            "birth_date",
            "is_active",
            "is_staff",
        ]
        read_only_fields = ["is_staff", "is_active"]
        extra_kwargs = {"password": {"write_only": True, "min_length": 5}}

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

    def validate_birth_date(self, birth_date):
        age = relativedelta(datetime.now(), birth_date).years
        if age < 18:
            raise serializers.ValidationError(
                "Must be at least 18 years old to register."
            )
        return birth_date

from rest_framework import serializers
from .models import ContactCard

class ContactCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactCard
        fields = '__all__'
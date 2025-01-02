from rest_framework import viewsets
from .models import ContactCard
from .serializers import ContactCardSerializer

class ContactCardViewSet(viewsets.ModelViewSet):
    queryset = ContactCard.objects.all()
    serializer_class = ContactCardSerializer
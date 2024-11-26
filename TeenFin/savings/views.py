from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Month
from .serializers import MonthSerializer

class MonthListCreateView(APIView):
    """
    Handle POST (create) and GET (list) methods for the Month model.
    """

    def get(self, request):
        """
        GET: Retrieve all records of months.
        """
        months = Month.objects.all()
        serializer = MonthSerializer(months, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """
        POST: Create a new record with month data.
        """
        serializer = MonthSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MonthRetrieveUpdateDeleteView(APIView):
    def get_object(self, pk):
        try:
            return Month.objects.get(pk=pk)
        except Month.DoesNotExist:
            return None

    def get(self, request, pk):
        month = self.get_object(pk)
        if month is None:
            return Response({"error": "Record not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = MonthSerializer(month)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Create your views here.

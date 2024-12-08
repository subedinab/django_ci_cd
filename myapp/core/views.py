from django.shortcuts import render

def home(request):
    context = {"message": "This is an updated view from the CD pipeline!"}
    return render(request, "home.html", context)

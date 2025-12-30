from django.shortcuts import render

# Create your views here.
def home_view(request):
    systems = [
        {'id': 1, 'name': 'سامانه مکران', 'icon': 'droplets', 'color': 'from-blue-500 to-cyan-400', "url": "https://makran.pmetocean.com/home/"},
        {'id': 2, 'name': 'سامانه هیدرا', 'icon': 'ship', 'color': 'from-teal-500 to-emerald-400', "url": "https://hydra.pmetocean.com/"},
        {'id': 3, 'name': 'چارت تابش', 'icon': 'sun', 'color': 'from-amber-500 to-yellow-400', "url": "http://45.156.186.98:8004/radiation/"},
        {'id': 4, 'name': 'چارت اوزون', 'icon': 'cloud', 'color': 'from-purple-500 to-violet-400', "url": "http://45.156.186.98:8004/ozon/"},
        {'id': 5, 'name': 'نمایش گرافیکی لایه ها و چارتهای پارامترهای هواشناسی', 'icon': 'layers', 'color': 'from-indigo-500 to-blue-400', "url": "windy"},
        {'id': 6, 'name': 'هواشناسی جاده ای', 'icon': 'car', 'color': 'from-rose-500 to-pink-400', "url": "Road_Chart"},
        {'id': 7, 'name': 'نمایش نمودارهای باد و موج + گلباد نقاط منتخب', 'icon': 'wind', 'color': 'from-sky-500 to-cyan-400', "url": "era5"}    ]
    return render(request, 'panel.html', {'systems': systems})


def windy_view(request):
    return render(request, 'windy.html')

def era5_view(request):
    return render(request, 'era5.html')

def road_chart_view(request):
    return render(request, 'Road_Chart.html')

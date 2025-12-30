from django.shortcuts import render
from django.http import HttpResponse
from .utils.utils import read_ozon, read_radiation, read_visibility
# Create your views here.


file_path_ozon = "ozon/data/total ozone daily.xlsx"
def ozon_view(request):
    data = read_ozon(file_path_ozon)
    return render(request, 'ozon/ozon.html', {'data': data})


file_path_radiation = "ozon/data/radiation/2025-12/26-12-2025.csv"
file_path_vis = "ozon/data/visibility/dec2025/visibility and present weather 26dec2025 00.00.xlsx"
def radiationvis1_view(request):
    data = read_radiation(file_path_radiation)
    data_vis = read_visibility(file_path_vis)
    return render(request, 'ozon/radiation-vis1.html', {'data': data, 'data_vis': data_vis})

def radiationvis2_view(request):
    data = read_radiation(file_path_radiation)
    data_vis = read_visibility(file_path_vis)
    return render(request, 'ozon/radiation-vis2.html', {'data': data, 'data_vis': data_vis})
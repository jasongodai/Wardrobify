from django.shortcuts import render
from .models import Shoe, BinVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json
# Create your views here.
class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = [
        "closet_name",
        "bin_number",
        "bin_size",
        "import_href",
    ]

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "id",
        "model_name",
    ]

    def get_extra_data(self, o):
        return {"bin": o.bin.closet_name}

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin",
    ]
    encoders = {
        "bin": BinVOEncoder()
    }

@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == "GET":
        if bin_vo_id is not None:
            shoes = Shoe.objects.filter(bin=bin_vo_id)
        else:
            shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            bin_href = content["bin"]
            bin = BinVO.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400
            )
    shoe = Shoe.objects.create(**content)
    return JsonResponse(
        shoe,
        encoder=ShoeDetailEncoder,
        safe=False,
    )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_shoe(request, pk):
    if request.method == "GET":
        try:
            shoes = Shoe.objects.get(id=pk)
            return JsonResponse(
                shoes,
                encoder=ShoeDetailEncoder,
                safe=False,
        )
        except Shoe.DoesNotExist:
            return JsonResponse(
            {"message": "Invalid shoe id"},
            status=400,
            )
    elif request.method == "DELETE":
        count, _ = Shoe.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
            )
    else:
        content = json.loads(request.body)
        try:
            if "bin" in content:
                bin = BinVO.objects.get(bin=content["bin"])
                content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin"},
                status=400
            )
        Shoe.objects.filter(id=pk).update(**content)
        shoes = Shoe.objects.get(id=pk)
        return JsonResponse(
                shoes,
                encoder=ShoeDetailEncoder,
                safe=False,
        )

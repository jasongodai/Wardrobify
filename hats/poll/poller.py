import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()

from hats_rest import models
from hats_rest.models import LocationVO
# Import models from hats_rest, here.
# from shoes_rest.models import Something
def get_locations():
    url = "http://wardrobe-api:8000/api/locations"
    response = requests.get(url)
    content = json.loads(response.content)
    for bin in content["bins"]:
        LocationVO.objects.update_or_create(
            import_href=bin["href"],
            defaults={
                "closet_name": bin["closet_name"],
                "section_mumber": bin["section_number"],
                "shelf_number": bin["shelf_number"],
                }
        )

def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            # Write your polling logic, here
            get_locations()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

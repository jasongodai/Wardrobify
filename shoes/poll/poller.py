import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoes_project.settings")
django.setup()

from shoes_rest.models import BinVO

# Import models from hats_rest, here.
# from shoes_rest.models import Something
def get_bins():
    url = "http://wardrobe-api:8000/api/bins"
    response = requests.get(url)
    content = json.loads(response.content)
    for bin in content["bins"]:
        print(bin)
        BinVO.objects.update_or_create(
            import_href=bin["href"],
            defaults={
                # "id": bin["id"],
                "closet_name": bin["closet_name"],
                "bin_number": bin["bin_number"],
                "bin_size": bin["bin_size"],
                }
        )

def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            # Write your polling logic, here
            get_bins()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

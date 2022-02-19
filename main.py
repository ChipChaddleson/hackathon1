import requests
r = requests.get('https://sdmx.data.unicef.org/ws/public/sdmxapi/rest/data/UNICEF,CCRI,1.0/all?format=sdmx-json').json()

for i in range(0, 27):
    print(i)
    print(r["data"]["dataSets"][0]["series"]["0:" + str(i)]["observations"]["0"][0])
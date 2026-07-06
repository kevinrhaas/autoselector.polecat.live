#!/usr/bin/env python3
import json, subprocess, urllib.parse, os, sys

UA = "AutoSelectorBot/1.0 (contact: dev@polecat.live)"
OUT = "/tmp/claude-0/-home-user/712efe9e-8cce-5ddc-a7fd-6dc580f9d899/scratchpad/newimg"
os.makedirs(OUT, exist_ok=True)

# (id, commons file title) in priority order; cap at 45 successes
PICKS = [
 ("toyota-corolla-cross", "File:Toyota Corolla Cross FL ZVG10 1.8 G HEV Platinum White Pearl Mica.jpg"),
 ("toyota-highlander", "File:24 Toyota Highlander Hybrid (XU70) 1.jpg"),
 ("toyota-crown", "File:2023 Toyota Crown XLE, front 4.7.23.jpg"),
 ("toyota-tundra", "File:2022 Toyota Tundra Limited CrewMax Short Bed 4x4 with TRD Off-Road Package, front left, 11-01-2022.jpg"),
 ("toyota-land-cruiser", "File:2024 Toyota Land Cruiser 1958 in Brown Sugar Metallic, front left, 2025-01-10.jpg"),
 ("toyota-sequoia", "File:2023 Toyota Sequoia Capstone front view.jpg"),
 ("honda-hr-v", "File:2023 Honda HR-V Sport, front 2.9.23.jpg"),
 ("honda-passport", "File:2026 Honda Passport Trailsport Touring in Radiant Red Metallic II, front right, 2025-06-11.jpg"),
 ("honda-ridgeline", "File:Honda Ridgeline RTL 2022 (52385805116).jpg"),
 ("honda-prologue", "File:2024 Honda Prologue.jpg"),
 ("acura-integra", "File:2023 Acura Integra A-Spec, front 12.29.22.jpg"),
 # acura-rdx skipped: only pre-facelift / unverifiable-generation photos on Commons
 ("nissan-kicks", "File:2026 Nissan Kicks - 01.jpg"),
 ("nissan-murano", "File:25 Nissan Murano Platinum.jpg"),
 ("nissan-pathfinder", "File:2026 Nissan Pathfinder front view.jpg"),
 ("nissan-armada", "File:25 Nissan Armada Platinum Reserve.jpg"),
 ("nissan-z", "File:2023 Nissan Z Performance in Seiran Blue, front right (NYIAS 2022).jpg"),
 ("subaru-impreza", "File:2024 Subaru Impreza Base, front right, 03-02-2024.jpg"),
 ("subaru-ascent", "File:2023 Subaru Ascent, front NYIAS 2023.jpg"),
 ("subaru-wrx", "File:2022 Subaru WRX, front right, 06-19-2023.jpg"),
 ("subaru-brz", "File:Subaru BRZ (ZD8) DSC 8496.jpg"),
 ("subaru-solterra", "File:2026 Subaru Solterra Premium, front left, 03-15-2026.jpg"),
 ("mazda-mazda3", "File:Mazda3 (BP) 1X7A7264.jpg"),
 ("mazda-cx-30", "File:Mazda CX-30 IMG 3760.jpg"),
 ("mazda-cx-50", "File:2023 Mazda CX-50 GT in Zircon Sand Metallic, Front Left, 06-18-2022.jpg"),
 ("mazda-cx-70", "File:2025 Mazda CX-70 au salon auto Lanaudière 2025.jpg"),
 ("volkswagen-jetta", "File:2025 Volkswagen Jetta VII DSC 7417.jpg"),
 ("volkswagen-taos", "File:2025 Volkswagen Taos DSC 2867.jpg"),
 ("volkswagen-atlas", "File:2024 Volkswagen Atlas IMG 2146.jpg"),
 ("volkswagen-id4", "File:Volkswagen ID.4 1X7A0360.jpg"),
 ("hyundai-kona", "File:2024 Hyundai Kona SEL, front right, 05-06-2024.jpg"),
 ("hyundai-venue", "File:2020 Hyundai Venue Ultimate 2019-12-13 2.jpg"),
 ("hyundai-sonata", "File:2024 Hyundai Sonata (facelift), front.jpg"),
 ("hyundai-santa-cruz", "File:2025 Hyundai Santa Cruz Preferred in Hampton Grey, front left, 2026-04-12.jpg"),
 ("kia-seltos", "File:Kia Seltos SP2c PE 1.5 EX Snow White Pearl 01.jpg"),
 ("kia-sorento", "File:2024 Kia Sorento X-Line SX Prestige (facelift), front 12.20.24.jpg"),
 ("kia-niro", "File:Kia Niro (SG2) HEV IMG 8250.jpg"),
 ("kia-ev6", "File:Kia EV6 GT-line (Facelift) – f 27072025.jpg"),
 ("kia-k4", "File:2025 Kia K4 4DR GT Line (United States) front view 03.jpg"),
 ("chevrolet-trailblazer", "File:2024 Chevrolet Trailblazer 1.3 LT in Sharkskin Metallic, front right, 06-09-2024.jpg"),
 ("chevrolet-traverse", "File:2024 Chevrolet Traverse RS in Mosaic Black Metallic, front right, 2024-11-14.jpg"),
 ("chevrolet-colorado", "File:2024 Chevrolet Colorado Z71, front left, 09-28-2024.jpg"),
 ("chevrolet-suburban", "File:2025 Chevrolet Suburban RST, front NYIAS 2025.jpg"),
 ("chevrolet-blazer", "File:2023 Chevrolet Blazer RS.jpg"),
 ("gmc-terrain", "File:26 GMC Terrain Denali.jpg"),
 ("gmc-acadia", "File:2024 GMC Acadia Denali front view.jpg"),
 ("gmc-canyon", "File:2023 GMC Canyon.jpg"),
 ("ford-ranger", "File:Ford Ranger LARIAT 4WD SuperCrew (2024) (53620395647).jpg"),
 ("ford-expedition", "File:2025 Ford Expedition Tremor, front NYIAS 2025.jpg"),
 ("ford-bronco-sport", "File:2026 Ford Bronco Sport au salon auto Lanaudière 2025.jpg"),
 ("jeep-compass", "File:Jeep Compass (MP) PHEV Facelift 1X7A0139.jpg"),
 ("dodge-durango", "File:2021 Dodge Durango Citadel (facelift), front 6.21.22.jpg"),
 ("bmw-x3", "File:BMW G45 X3 M Sport Alpine White.jpg"),
 ("mercedes-benz-c-class", "File:Mercedes-Benz W206 C 300 4MATIC AMG Line Polar White (14).jpg"),
 ("lexus-nx", "File:Lexus NX 350 (TAZA25) 1X7A0305.jpg"),
 ("lexus-gx", "File:2024 Lexus GX 550 Overtrail (United States) front view 01.jpg"),
 ("lexus-tx", "File:Lexus TX 550h+ (2024) (53626567768).jpg"),
]

def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    out = subprocess.run(["curl","-sS","-A",UA,url],capture_output=True,text=True,timeout=90)
    return json.loads(out.stdout)

credits = {}
if os.path.exists(OUT+"/credits.json"):
    credits = json.load(open(OUT+"/credits.json"))
downloaded, failed = [], []
MAX = 45

for vid, title in PICKS:
    if len(downloaded) + len([f for f in os.listdir(OUT) if f.endswith('.jpg')]) - len(downloaded) >= MAX and not os.path.exists(f"{OUT}/{vid}.jpg"):
        pass
    if len([f for f in os.listdir(OUT) if f.endswith('.jpg')]) >= MAX:
        print("Cap of 45 reached, stopping.")
        break
    dest = f"{OUT}/{vid}.jpg"
    if os.path.exists(dest):
        continue
    data = api({"action":"query","format":"json","titles":title,"prop":"imageinfo",
                "iiprop":"url|size|mime|extmetadata","iiurlwidth":"1600",
                "iiextmetadatafilter":"LicenseShortName|Artist|ImageDescription"})
    pages = data.get("query",{}).get("pages",{})
    ii = None
    for p in pages.values():
        ii = (p.get("imageinfo") or [None])[0]
    if not ii:
        print("FAIL(no imageinfo)", vid); failed.append(vid); continue
    url = ii.get("thumburl") or ii.get("url")
    ok = False
    import time
    for attempt in range(4):
        r = subprocess.run(["curl","-sS","-A",UA,"-L","-w","%{http_code}","-o",dest,url],capture_output=True,text=True,timeout=180)
        code = r.stdout.strip()
        if r.returncode == 0 and code == "200" and os.path.exists(dest) and os.path.getsize(dest) >= 30720:
            ok = True; break
        time.sleep(5 * (attempt + 1))
    time.sleep(1.5)
    if not ok:
        print("FAIL(download)", vid, code, r.stderr[:100]); failed.append(vid)
        if os.path.exists(dest): os.remove(dest)
        continue
    em = ii.get("extmetadata",{})
    import re
    artist = re.sub(r"<[^>]+>","",em.get("Artist",{}).get("value","")).strip()
    lic = em.get("LicenseShortName",{}).get("value","")
    credits[vid+".jpg"] = {
        "source": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(title.replace(" ","_")),
        "license": lic,
        "author": artist,
    }
    downloaded.append(vid)
    print("OK", vid, os.path.getsize(dest), lic, "|", artist[:60])

json.dump(credits, open(OUT+"/credits.json","w"), indent=1)
print("\nDownloaded:", len(downloaded))
print("Failed:", failed)

import requests
from bs4 import BeautifulSoup
import os

# Create a folder to save the images
# if not os.path.exists("profile-pictures"):
#     os.mkdir("profile-pictures")

# # Send a GET request to the website
# url = "https://unsplash.com/s/photos/profile-picture"
# response = requests.get(url)

# # Parse the HTML content of the website using BeautifulSoup
# soup = BeautifulSoup(response.content, "html.parser")

# # Find all the image tags in the HTML content
# images = soup.findAll("img")

# # Download and save the images
# for i, image in enumerate(images):
#     image_url = image["src"]
#     if image_url.startswith("//"):
#         image_url = "https:" + image_url
#     response = requests.get(image_url)
#     file = open(f"profile-pictures/user{i+1}.jpg", "wb")
#     file.write(response.content)
#     file.close()

onlyImages = [f for f in os.listdir(os.getcwd()) if f.endswith(".jpg")]
cd = f"C:/Users/Workstation/OneDrive/bootcamp/UK-VIRT-FE-PT-11-2022-U-LOLC-main/week-15-and-16-project-2/Freelance-Booking-App/server/profile-pictures"
newNames = [("\\user" + str(i) + ".jpg")  for i in range(32)]
for i in range(len(onlyImages)):
    os.rename(newNames[i], os.path.join(cd, onlyImages[i+1]))
# print ((cd +  newNames[0]))
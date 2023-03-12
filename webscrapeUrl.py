import requests
import json

# Set up the URL and parameters
url = 'https://randomuser.me/api/'
params = {
    'results': 15,
    'nat': 'gb',
    'inc': 'gender,name,email,phone,picture,location'
}

# Make the request and parse the JSON response
response = requests.get(url, params=params)
data = response.json()['results']

# Save the data to a JSON file and download the pictures
for i, user in enumerate(data):
    filename = f'user{i+1}.jpg'
    picture_url = user['picture']['large']
    picture_data = requests.get(picture_url).content
    with open(filename, 'wb') as f:
        f.write(picture_data)
    user['picture'] = filename

with open('users.json', 'w') as f:
    json.dump(data, f, indent=2)

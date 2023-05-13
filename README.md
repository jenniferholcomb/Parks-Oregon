# National and State Parks Api

#### By: Jennifer Holcomb

#### This front-end application connects with Parks API that contains information about State and National Parks, with authentication using token.

Link to API repository, `https://github.com/jenniferholcomb/ParksApi`

### Technologies Used

* React
* Javascript
* HTML
* Tailwind
* webpack
* Babel
* esLint
* npm
* dotenv

### Description

This application connects to an API with details about state and national parks, including park name, location, US state the park is located in, type of park, terrain, and other features relevant to park. There is CRUD functionality with API (GET, POST, PUT, DELETE). Application uses Authorization, requiring a user to login (login info below).

## Setup/Installation Requirements

* Clone this repository to your desktop.
* $ npm install to install all package.
* $ npm run build to build the project.
* $ npm run start to compile the project.
* $ npm run lint to lint JS files in src folder.

## API Documentation
Use base URL: `https://localhost:5001` with endpoints outlined below.
  * Project runs with launch url as ```https://localhost:5001/swagger/index.html```. You may use Swagger to explore endpoints, or optionally you may use Postman to view API [Download and install Postman](https://www.postman.com/downloads/)

#### HTTP Request Structure
```
GET /api/parks
POST /api/parks
GET /api/parks/{id}
PUT /api/parks/{id}
DELETE /api/parks/{id}
```

### Endpoints

### GET - Response returns all parks in database

#### Sample JSON Response 
```
{
"parkId": 1,
"name": "Cape Lookout State Park",
"location": "Tillamook County",
"state": "Oregon",
"type": "coast",
"terrain": "coastal, old-growth forest, high cliffs, rugged",
"features": "beach, hiking, lookouts, camping"
},
{
"parkId": 2,
"name": "Tyron Creek State Natural Area",
"location": "Portland",
"state": "Oregon",
"type": "city",
"terrain": "woodsy ravine, creek",
"features": "hiking, springtime wildflowers, wheelchair access loops"
},
...
```

### POST - Add an entry to ParksApi database
Click ```ADD PARK```. Fill out form.
Sample request body,
```
{
  "name": "string",
  "location": "string",
  "state": "string",
  "type": "string",
  "terrain": "string",
  "features": "string"
}
```

### PUT - Update an entry in ParksApi database
From parks list, click on individual park to navigate to details page. Click ```UPDATE PARK``` to make changes to selected park. 

#### Example PUT JSON Response for parksId = 3
Change "features" to include "visitor center"
```
{
"parkId": 3,
"name": "Mt St Helens National Volcanic Monument",
"location": "Gifford Pinchot National Forest",
"state": "Washington",
"type": "mountain",
"terrain": "volcanic, old-growth forest, lakes, waterfalls in canyon",
"features": "hiking, wheelchair access loops, viewpoints, visitor center"
}
```

### DELETE - Delete an entry in ParksApi database
From parks list, click on individual park to navigate to details page. Click ```DELETE PARK``` to remove park from API. 


## API Documentation with Authentication

* To view API, sign-in using the following login information,

  "email": "test@test.com",
  "password": "Test1234"

### Known Bugs

* No known bugs. 
* If any issues are discovered, please email jenniferlholcomb@gmail.com


### License

MIT License

Copyright (c) 2023 Jennifer Holcomb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

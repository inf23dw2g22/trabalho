
# Work Description
_We were supposed to select a theme to show the knowledge acquired in "Desenvolvimento WEB 2". For that purpose, it was selected a theme based on the Google calendar API (a very simplified version of it). The work was executed according to the  requirements for the First and Secod moment of the evaluation:_

# Resources

_The rest API contains the following resources, organized like the image shown bellow_

![resources](/docs/resources.png "Resources")

## User
The user that will have one or more calendars, with the following attributes:
- id
- name
- email
- status

## Calendar
A calendar definition, linked to the user, with the following attributes:
- id
- description
- user_id

## Category
All the categories that a specific calendar can have, with the following attributes:
- id
- description
- calendar_id

## Event
An event definition linked to a calendar and a category (if wanted), with the following attributes:
- id
- description
- start_date
- end_date
- calendar_id
- category_id

# Authentication

For authentication purposes we have decided to use GitHub.

![Github OAUTH](/docs/oauth_github.png "Github OAUTH")

# API

The API was developed using Express and the database used was MySQL as requested.

The OpenAPI Specification is available without the user being authenticated in 

http://localhost:3000/docs

![openapi](/docs/openapi.png "Open API")

Almost all the other routes are protected.

Endpoints exist for all CRUD operations in all 4 resources.

## Missing work

- A Postman collections was not created.
- There is no connection between the users in the database and the authenticated user, so it was not possible to implement restrictions to the user accessing the data

# UI (React Application)

A simple application was created that handles the login of the user (using oauth2 and github).

A simple screen is displayed to the user to execute the login (and this is the only screen available without the user being authenticated)

![Login](/docs/login.png "Login")

After the login a new screen will be available where the user is able to see:

- The github Profile Information

![Profile](/docs/homepage_profile.png "Profile")

- A simple component that executes an API call to the API to fetch the users list 

![Api data](/docs/api_data.png "API data")

- And the Logout option

![Logout](/docs/homepage_logout.png "Logout")

## Missing work

# Instalation

The installation process is very easy due to the use of docker. The only thing we need to install in the machine is 'Docker for Desktop'.

After the installation, we just need to open a terminal and on the setup folder execute:

```
docker-compose up
```  

The UI is running on http://localhost:4000

The API is running on http://localhost:3000

# Presentation

## Group _G22_

* [Carlos Gonçalves](https://github.com/miguelg11827)
* [Susana Teixeira](https://github.com/SuTeixeira)

Github URL

https://github.com/inf23dw2g22/trabalho

Docker Images

https://hub.docker.com/repository/docker/inf23dw2g22/db
https://hub.docker.com/repository/docker/inf23dw2g22/api
https://hub.docker.com/repository/docker/inf23dw2g22/ui
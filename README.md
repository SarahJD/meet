# Meet App

## General info

This is a "meetup" app, displaying a list of upcoming events for a city and time of the user's choosing. It is also available for users to use while offline.
It is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Status

Project is in progress.

## Screenshots

![Example screenshot](./img/screenshot.png)

## Deployment

This app is published on gh-pages: https://sarahjd.github.io/meet/.

## Technologies

- This Application was built with the Create React App.
- This Application uses the Google Calender API to fetch upcoming events.
- This Application is serverless.

## Development Process

For this app, I used a Test-Driven Development (TDD) approach.

## Features and User Stories

### FEATURE 1: FILTER EVENTS BY CITY

#### USERSTORY:

As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

#### SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.

Given user hasn’t searched for any cityWhen the user opens the appThen the user should see a list of all upcoming events

#### SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.

Given the main page is openWhen user starts typing in the city textboxThen the user should see a list of cities (suggestions) that match what they’ve typed

#### SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.

Given the user was typing “Berlin” in the city textboxAnd the list of suggested cities is showingWhen the user selects a city (e.g., “Berlin, Germany”) from the listThen their city should be changed to that city (i.e., “Berlin, Germany”)And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

#### USERSTORY:

As a user
I should be able to „show/hide event details“
So that I can get more information about an event

#### SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT

Given the user has searched for an event and an event is shown
When the user does nothing
Then the event element will be collapsed

#### SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS

Given the user has searched for an event and an event was shown
When the user clicks on the expand button
Then the user will see the event’s details

#### SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS

Given the user has looked at an event and has expanded it to see the details
When the user clicks on the collapse/hide details button
Then the user will see the event element without details

### FEATURE 3: SPECIFY NUMBER OF EVENTS

#### USERSTORY:

As a user
I should be a able to „specify number of events“
So that I can see a list with a certain amount of events

#### SCENARIO 1: WHEN USER HASN'T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER

Given the user hasn’t specified an event number
When the user searches for events a a list is shown
Then the default event number will be 32

#### SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE

Given the user has searched for events
When the user types in a number in the event number input
Then the event list will be limited to the specified number

### FEATURE 4: USE THE APP WHEN OFFLINE

#### USERSTORY:

As a user
I should be able to „use the app when offline“
So that I can browse events even if I do not have internet connection

#### SCENARIO 1: SHOW CACHED DATA WHEN THERE'S NO INTERNET CONNECTION

Given there was no internet connection
When the user is opening the app
Then cached data will be shown

#### SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)

Given there was no internet connection
When the user changes the settings (types in a new city or inputs a time range)
Then an error will be shown

### FEATURE 5: DATA VISUALIZATION

#### USERSTORY:

As a user
I should be able to „view a chart showing the number of upcoming events by city“
So that I can have an instant overview and grasp the amount of events by city faster

#### SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY

Given the user has opened the app
When the user clicks on the visualization button
Then a chart with the number of upcoming events in each city will be shown

## Inspiration

Add here credits. Project inspired by..., based on...

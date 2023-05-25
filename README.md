
# API Project: Timestamp Microservice for FCC

### User stories:

[![Run on Repl.it](https://repl.it/badge/github/freeCodeCamp/boilerplate-project-timestamp)](https://repl.it/github/freeCodeCamp/boilerplate-project-timestamp)

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"error" : "Invalid Date" }`.

#### Example usage:
* https://Timestamp-Microservice--freecodecamp.repl.co/api/timestamp/2015-12-25
*https://Timestamp-Microservice--freecodecamp.repl.co/api/timestamp/1451001600000

#### Example output:
* {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}


#### 1 Setting up the Project

#### 2 Setting up the Route

#### 3 Setting up the Route

#### 4 Capturing the Input

#### 5 Test 1 - It should handle a valid date, and return the correct unix timestamp

#### 6 Test 2 - It should handle a valid date, and return the correct UTC string

#### 7 Test 3 - It should handle a valid unix date, and return the correct unix timestamp

#### 8 Test 4 - It should return the expected error message for an invalid date

#### 9 Test 5 - It should handle an empty date parameter, and return the current time in unix format

#### 10 Test 6 - It should handle an empty date parameter, and return the current time in UTC format


#### View Solution
live-site https://timestamp-microservice-solution.glitch.me/
code https://glitch.com/edit/#!/timestamp-microservice-solution
# Galactic Age Calculator

#### _By David Lewis_

## Description
_This is the Epicodus weekly project for week 1 of the JavaScript course. This application takes in a users age and calculates how old the user would be on Venus, Mercury, Mars, and Jupiter._

#### _Galactic Age Calculator_
* Takes in a users age in years and calculates how old they would be according to how long other planets' "years" when compared to earths rotation around the sun. These methods can also determine how many years you have left on Venus, Mars, Jupiter, and Mercury according to the same planet year conversions. Life expectancy is set to be the average life expectancy of everyone human being on Earth. If you are past the life expectancy, the app can determine how many years on each planet you are past that age.

### Specifications
* Take a person’s age in years and convert it into seconds.
  * sample input: 30
  * sample output: 946,080,000
* Take two dates and determine the difference, in seconds, between the two.
  * sample input: 3-16-17, 3-16-18
  * sample output: 31,536,000
* Take in a person's age and return the age in Mercury years. (A Mercury year is .24 Earth years.)
  * sample input: 30
  * sample output: 125
* Take in a person's age and return the age in Venus years. (A Venus year is .62 Earth years.)
  * sample input: 30
  * sample output: 48
* Take in a person's age and return the age in Mars years. (A Mars year is 1.88 Earth years.)
  * sample input: 30
  * sample output: 15
* Take in a person's age and return the age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  * sample input: 30
  * sample output: 2
* Determine how many years a user has left to live on each planet based on life expectancy.
  * sample input: Earth age: 30, life expectancy: 79 years
  * sample output: Mercury: 204 years, Venus: 79 years, Mars: 26 years, Jupiter: 4 years
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.
  * sample input: Earth age: 90, life expectancy: 80 years
  * sample output: Mercury: 42 years, Venus: 16 years, Mars: 5 years, Jupiter: 1 year


## Setup/Installation Requirements

* _Clone this GitHub repository_

```
git clone https://github.com/dlewiski/galactic_age_calculator
```

* _Run tests_

```
npm install
```
```
npm run build
```
```
npm run test
```

## Support and Contact Details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Karma
* Jasmine
* Node JS
* ES Lint
* Webpack
* Babel

### License

*MIT License*

Copyright (c) 2018 **_David Lewis_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Planning

2. Specs

* Spec 1: Description: Take a person’s age in years and convert it into seconds.
* Input example: "44"
            * OutPut example: 1,388,000,000 or 1.388e+9

* Spec 2: Description: Take two dates and determine the difference, in seconds, between the two.
            Input example: "2/25/2014" "5/11/2017"
            Output example: 101,174,400

* Spec 3: Description: Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
            Input Example: "44"
            Output Example: 183

* Spec 4: Description: Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
            Input example: "44"
            Output example: 71

* Spec 5: Description: Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
            Input example: "44"
            Output example: 23

* Spec 6: Description: Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
            Input example: "44"
            Output example: 4

* Spec 7: Description: Determine how many years a user has left to live on Mercury
            Input example: "44"
            Output example: 150

* Spec 8: Description: Determine how many years a user has left to live on Venus
            Input example: "44"
            Output example: 58

* Spec 9: Description: Determine how many years a user has left to live on Mars
            Input example: "44"
            Output example: 20

* Spec 10: Description: Determine how many years a user has left to live on Jupiter
            Input example: "44"
            Output example: 3

* Spec 11: Description: If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Mercury
            Input example: "88"
            Output example: 33

* Spec 12: Description: If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Venus
            Input example: "88"
            Output example: 13

* Spec 13: Description: If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Mars
            Input example: "88"
            Output example: 4

* Spec 14: Description: If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on Jupiter
  * Input example: "88"
  * Output example: 1

3. Integration
  * Initial index page with all dependencies in index.html head
  * Template/html page for age calculator
  * main.js page to pull information from index.html page and run it through our functions

4. UX/UI
  * Include and modify bootstrap/Sass
  * Form input for date of birth
  * Display number age on different planets
  * Display how much time they have left to live on each planet based on average age expectanty

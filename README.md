## Planning

1. Configuration/dependencies
  * karma.config.js
  * webpack
  * jasmine

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
            Input example: "88"
            Output example: 1

3. Integration
  * Initial index page with all dependencies in index.html head
  * Template/html page for age calculator
  * main.js page to pull information from index.html page and run it through our functions

4. UX/UI
  * Include and modify bootstrap/Sass
  * Form input for date of birth
  * Display number age on different planets
  * Display how much time they have left to live on each planet based on average age expectanty


Feature: Get Cat Breeds from Cat Facts API

    Background:
        Given the API is available

    Scenario: Send GET request to /breeds with a negative limit

        When I send a GET request to breeds?limit=-5
        Then the response status code should be 404
        And the response body should contain a validation error message “Not Found”

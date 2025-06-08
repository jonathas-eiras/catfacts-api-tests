
Feature: Get Cat Breeds from Cat Facts API

    Background:
        Given the API is available


    Scenario: Send GET request to /breeds without query parameters

        When I send a GET request to endpoint breeds
        Then the response status code should be 200
        And the response body should contain a list of cat breeds

    Scenario: Send GET request to /breeds with a valid limit parameter

        When I send a GET request to breeds?limit=5
        Then the response status code should be 200
        And the response body should contain a list of exactly 5 breeds

    Scenario: Validate pagination in request

        When I send a GET request to endpoint breeds
        Then the response status code should be 200
        And the response body should include pagination fields: per_page and total

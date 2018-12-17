# Video Store Consumer

In this project, you'll take a lot of the knowledge you have so far and create an end-to-end Video Store application. The final product will be something that a rental store employee might use to manage the video store where they work.

This is a [Phase 3](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md) Pair project.

Due: EOD Friday December 21st, 2018

## Learning Goals

- Use React to build a dynamic and attractive user interface
- Organize the behavior of a complex SPA
- Independently research and integrate a new technology
- Remember how Rails works
- Own both ends of an API
- Practice project management skills in prioritizing features and determining deliverables
- Reflect and prepare a short presentation

This project has two main components: a Rails API and a React front-end. You will be extending an existing Rails API to add some of the functionality that you require to complete the front-end implementation. You will be submitting a pull request at the end of the project for both components.

## Problem Statement

Our rental store employees want to be able to manage their rental inventory. They want to be able to search through all movies and pick and choose which movies they want to add to their rental library. They want to be able to manage their rental library. We will be using an external API to build in searching for *all movies*. We will use our existing Rails API to manage the *rental library*.

## Project Information

This project will be utilizing an external API within an API! Whoa! Your front-end implementation will be interacting with a **Rails API** that you will be modifying. The Rails API wraps an **external API** which contains many endpoints related to movies. The external API is [The Movie DB](https://www.themoviedb.org/documentation/api).

The requirements for this project are intentionally open-ended. Part of your job is to work with your partner to prioritize them.

Each pair/group will give a short presentation on their project and their learnings to the class at the conclusion of the project.

## Project Setup

### 1. React Front-End

- One partner shall:
  - Fork this repository
  - Add the pair as a collaborator on the project
  - Clone the repository
  - Use `create-react-app` to generate React scaffolding
  - Commit and push the generated files
- The other partner shall then:
  - Clone the repository (without forking)
  - Install dependencies using `$npm install`
- Both partners shall then
  - Start the development server using `npm start`
  - Start the test watcher using `npm test`

### 2. External API Configuration

- Follow the instructions on the API's [Getting Started](https://developers.themoviedb.org/3/getting-started) page to set up your account and request an API Key.   You can use Ada's address in the registration process.
- Read through the documentation and use POSTman to investigate the API. A few endpoints you may want to explore include:
  - [Search Movies](https://developers.themoviedb.org/3/search/search-movies)
  - [Get Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details)
  - [Configuration](https://developers.themoviedb.org/3/configuration/get-api-configuration)

### 3. Rails API

- One person shall fork the API repository. You can find it at your cohort's GitHub org, and the project's name is VideoStoreConsumer-API. You should immediately notice that this is a Rails project not a React project.
- Add the pair as a collaborator on the project
- Both people shall clone the repository
- Run `bundle install`, `rails db:setup`, etc
- Set up the `.env` file with the API key from step #2
- Ensure both people can run the API locally

## Front-End Requirements

If I am a rental store employee...

- From the home page, I can navigate to the following pages:
  - Movie search page
  - Movie library page
  - Customer list page
- From the movie search page, I can search for a movie by title from the external API
- From the movie search results, I can add a movie from the search results to the rental library
- From the rental library page, I can see a list of all movies in the rental library
- From the rental library list, I can "select" a movie from the rental library. My movie selection will continue to be visible as I navigate the app.
- On the customer list page, I can see a list of all customers
- From the customer list, I can "select" a customer. My customer selection will continue to be visible as I navigate the app.
- Given I have selected a movie and a customer, I can check out the selected movie for the selected customer
  - NOTE: a checkout is between ONE movie and ONE customer

### The React Router

Your front-end should use the [React Router](https://reacttraining.com/react-router/). You will need to research this as a pair!
- What problem does it solve?
- How do you install it?
- How do you use it?

Your front-end should have at least the following routes:

- `/` (home page)
- `/search` (movie search page: allows the user to search for a movie from the external API)
- `/library` (rental library page: lists movies in the rental library)
- `/customers` (customer list page: lists customers)

You can have more if you want (for example `/customers/:id`), but ultimately the design of your user interface is up to you.

### Design Considerations

- What display components will you need?
- How will state be managed in your application?
- What events will you need to handle?
- What user actions will result in API queries?
- How will you make requests from the front-end to the API?

## Back-End Requirements

The Rails back-end already has a lot of functionality implemented. You can:
- Get the list of movies in the library
- Search for movies in the external API
- Get details on an individual movie
- Get a list of customers
- Check movies in and out
- Get a list of all overdue movies

It is worth taking the time to read through this Rails code and understand how the different pieces of the server fit together.

For the core requirements, you will need to add the ability to add a movie from the external API to our library. Things to consider:

- How does the front-end specify which movie to add?
- Where does the Rails server get the information about the movie?
- What happens if you try to add the same movie twice?

## Optional Enhancements
Some of these optional requirements require work in the front-end only, back-end only or both.

- Deploy your front-end to GitHub Pages, and your back-end to AWS
- Set up TravisCI for continuous integration on your back-end
- Allow a user to interact with a Movie by clicking
  - When _selected_, a Movie shows more information
  - When _deselected_, a Movie returns to its default state
  - Only one movie can be selected at a time - selecting another movie deselects the one which was selected
- Add a detail page for a customer to see the movies they have checked out. Overdue movies should be highlighted.
- Be able to check in movies from the customer details page
- Full CRUD for customers
- Introduce scrolling pagination to dynamically load more movies when scrolling to the bottom (research!!)

## Presentation Requirements

At the conclusion of this project, each group will give a presentation of their project. **Each presentation will last no more than 5 minutes.**

This presentation should be a concise demo of your project and also talking through the following reflection prompts.

Please include the following things in your demo:
- **ONE** of the following user flows to demo:
  - Search for a movie and select a movie
  - I can look at the customers and see a customer
- Describe the process of this project:
  - What were some of the challenges and victories of this project?
  - What is an interesting front-end thing that your team accomplished?
  - What is an interesting back-end thing that your team accomplished?
- Reflect on this project in the context of your time at Ada:
  - How was this project different from the first Video Store API project you worked on?
  - What is something you observed in this project that you want to take forward with you in order to succeed in your capstone project?

There is no expectation for a slideshow.

## What we're looking for
You can see what your instructors are looking for [here](./feedback.md)

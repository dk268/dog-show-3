# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

In the project directory, run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Some Notes

There are many places to improve this application, given enough time.\

### Notes on Choices

I chose to make `dogSelections` instances of a class to demonstrate a use for the class.\
This is not optimal, though, because it puts non-serializable data into the Redux store.\
It should demonstrate, to some degree, fluency with use of classes.\
\
I chose to use a higher-order component because the requirements required it.\
I didn't find a place in the application where I thought it was the right choice, so I shoehorned it in.

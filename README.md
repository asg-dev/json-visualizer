# JSON Data Visualizer

## Description

This project is a web application that allows users to visualize JSON data in a
JSON Viewer. The application is built primarily using React.js, bootstrapped by
create-react-app.

## Running the app

To run the app, you will need to have Node.js installed. You can download it
[here](https://nodejs.org/en/download/).

Once you have Node.js installed, you can run the following commands in the root
directory of the project:

```
npm install
npm start
```

## Using the app

Once the app is running, you can open it in your browser at
http://localhost:3000/. You will see a JSON Viewer with a bunch of public APIs
on the left and a tree view on the right. You can choose any API and click the
"Query" button (or press Shift + Enter) to fetch and visualize the data in the
tree view.

## Features

- You can view JSON data from any public API on the list.
- You can expand/collapse the tree view by clicking on the arrow next to the
  node.
- Some APIs (the SpaceX and Coindesk APIs) have graphs drawn using their data.
  When you query for them, you would be able to navigate to the graph viewing
  page.
- You can filter for any query parameters. The page will have a simple form
  where you can type in the query params needed along with the values you're
  filtering with.
- You can use keyboard shortcuts to query the API.

## Potential issues with the app / What I would do better with time? / Afterthoughts

- **Testing:** Unit tests and automated tests are missing. This would be priority one for me
  if I get more time. I would like to add unit tests for the components &
  helpers and automated tests for the app.
- **TS vs JS:** I would use TypeScript if I had more time, for sure. It would make the code a
  lot more readable and maintainable, and would also help with the testing.
- **A11Y:** I've put conscious thought about accessibility guidelines when choosing fonts,
  font-colors and background colors. However, I have not tested the app with a
  screen reader, or for WCAG requirements.
- **Component-Based Design:** Although the app is designed with modularity in mind and I've taken a honest
  effort to modularize all the components, I feel like there is still room for
  improvement. Given more time, I would like to make the components even more
  modular and reusable - especially the skeleton-like base components that
  provide the basic structure for the app.
- **Mobile-friendly development:** The app has not been tested on all browsers. I would like to test it on other
  browsers as well as mobile devices. I worry that the app might not be very
  responsive on mobile devices.
- **Functionality:** The filtered query params are not removed if the query is unsuccessful which
  is not very user-friendly. You can also add only a limited number of query
  parameters. I'd like to make this section a bit friendlier overall.

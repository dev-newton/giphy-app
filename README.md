# Giphy App

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### System Requirements
#### Browser
- Google chrome

#### Code Editor
- VS Code

### Installation Instructions

1. Clone the Repository with `git clone https://github.com/dev-newton/ze-fe-task.git` and run

```
cd ze-fe-task
yarn
```
  
2. Create a `.env` file in the root of the project and paste the code below into the file. Ignore this step if the `.env` file already exists 

```
REACT_APP_API_URL=https://api.giphy.com/v1/gifs
REACT_APP_API_KEY=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ
```

### Running the project
Ensure you are in the root of the project and run
```
yarn start
```

### Unit Testing
Ensure you are in the root of the project and run
```
yarn test --watchAll
```

### 3rd Party Dependencies
NB: I intentionally made use of minimal external libraries to demonstrate proficiency in implementing complex logic.
i.e For the IntersectionObserver and Debounce implementations, libraries could have been used if necessary
- Axios
  - Automatic Transformations Of JSON Data
  - Better Error Handling
  - Wider Range Of Supported Browsers
  
- React Modal
  - Accessible
  - Easy to use
  - Saves time 

### Thought process for certain implentations
- Debounce: I implemented debounce on the search input to prevent the code from needing to process every event and also drastically reduce the number of API calls sent to the API server.
- Intersection Observer: I made use of the IntersectionObserver to implement infinite scrolling
- Suspense: I implemented suspense to suspend component rendering while async data is being loaded
- Lazy Loading:  I made use of lazy loading to reduce the initial load time and conserve bandwidth
- Absolute Imports: I made use of Absolute Imports as it makes the code cleaner and easier to write, makes it easy to locate a file or component imported due to absolute positioning, and removes the unneccessary need for `../../../`.
-  Clean app folder structure/architecture

### Time Spent
- Approximately 12 hours

### Potential Next Steps
- Write integration tests 

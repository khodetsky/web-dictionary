# Web dictionary is a web application for learning English words.

This project was created using
[Create React App](https://github.com/facebook/create-react-app)

## About the app

There are four pages in the application:

- home page,
- the page of adding a new word,
- word knowledge test page,
- a page with the results of the passed test.

On the main page there is a table with already learned words (for convenience,
it already contains 20 simple words), a table with the history of passing the
test (when you click on a separate record, full information about it opens) and
a pie chart with the average test result.

On the page for adding a word, there is a form with mandatory fields. When you
submit the form, you add the written word to the table of all your words.

All 10 questions will be displayed one by one on the page with the test. On each
of them, you should choose one of the four presented answer options and go to
the next question.

## Information if you want to use this app locally

1. Make sure you have the LTS version of Node.js installed on your computer.
   Install her, if necessary.
2. Clone this repository.
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running `npm start`.
5. Open http://localhost:3000/noname-digital-store/ to view it in the browser.
   The page will automatically reload if you make changes to the code. You will
   see the build errors and lint warnings in the console.
6. Command `npm test` runs the test watcher in an interactivemode. By default,
   runs tests related to files changed since the last commit.
7. Command `npm run build` builds the app for production to the build folder. It
   correctly bundles React in production mode and optimizes the build for the
   best performance. The build is minified and the filenames include the hashes.
   App is ready to be deployed.

### Live page

The production version of the project is automatically linted, built, and
deployed to GitHub Pages, in the gh-pages branch, every time the main branch is
updated. For example, after a direct push or an accepted pull request.

The live page can be viewed at "https://khodetsky.github.io/web-dictionary/".

### How it works

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and passes linting and assembly before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.

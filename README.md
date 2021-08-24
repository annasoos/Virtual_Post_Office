# Virtual Post Office

## Description

This application helps file the mails in an imaginary post office.
The goal is to send the mails to a server, save them and be able to search among them.

## Implementation

- When we use the `npm start` command in the root folder, the application starts on only one port --> using the React built files
- There are 3 menu options in the landing page for `List mails`, `New mail` and `Search` --> implemented with React Router
- Managing GET, POST request in backend side
- When we send a get request to the endpoint ("/api/mails"), the server returns a JSON with a list of mails
- When we send a post request to the endpoint ("/api/mails") with a mail object in the request body, the server add the mail to the end of the list of mails
- When we send a mail object with a reference number already existing in the list of mails, the server returns with a status code 400
- When we send a get request to the endpoint("/api/mails/#refNumber"), the server returns a JSON with the mail with the given reference number (if it exists)

### Built with

- React.js
- Express.js
- Semantic HTML5 markup
- Styled-components & SCSS
- Flexbox

## TODO / Additional features

- At the moment the mail list is kept in an array server side. Should move them to an external database (eg. local JSON database lowdb)
- Add registration/login function with authentication and session handling
- Improve responsivity
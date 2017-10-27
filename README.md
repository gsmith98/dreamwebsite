# Dream Website

Your objective is to take a description of a website born from the mind of a fictitious client and make it a reality. In so doing, you may end up involving many of the technologies that have been reviewed this week. If you can make this happen, then you can consider yourself `ready`.

## Starter Code

This repo is a copy of the ReduxChallenge repo with a few small changes.

The website we are building will not be exclusively React UI, we will need to write an express server so we can get things like mongoose and passport involved. As such, the webpack-dev-server is not enough, since it just delivers your app (and hot reloads). The webpack-dev-server was also never intended for use besides as a helpful tool for developing. This repo includes the beginning of an express server in `server.js` and a new script in `package.json` to run it. When you get to the part where you want to use React, you will do `npm run webpack` in order to generate a fresh `app.bundle.js`. Your express server can simply offer up `index.html` which has a script tag for `app.bundle.js`. Having express deliver our react app instead of webpack-dev-server means we've lost hot reloading, but there would be ways you could get it back by installing and using a special middleware or a special component. For today probably just `npm run webpack` each time you change your React code. It may be convenient to have your server running in one terminal window and to have another open to build webpack from. You of course could still use the webpack-dev-server while you're working on the react part just to get them working in isolation before incorporating it into your actual website should you choose.

## The Site

Here is a description of the site the client hiring you has envisioned. The basic premise is that it is a site where users can create accounts and learn more about other users.

*This is not a series of step by step instructions!!* You should read the entire description before beginning and make your own decisions about what tasks and subtasks to break off and get working first. It's possible you could eat a big muffin in one bite, but even if you're successful it would be a lot less enjoyable that doing it in small, manageable nibbles. In the same way, approach the code such that you have frequent checkpoints so you can know what you've done so far is working before getting anything else involved.

If you struggle to get X technology set up, don't hesitate to look back at past projects for an example of it working!

You are also welcome to ask the illustrious Graham any questions you have, or get on the help queue where other TA's are also available.

### Login Page

This site has Users and requires login to access the main page. This page should be a simple form with username and password fields. There should be a submit button, as well as a button/link to the Register Page.

Submitting this form should attempt to log you in. On success you should be taken to the main page. On failure, you stay on the login page (perhaps with some visual indication of login failure).

Of course, only registered Users should be able to login.

### Register Page

The Register page is a form that can be filled out to create an account on our website. To create an account, you need to submit:

* username
* password
* First Name
* Last Name
* Age
* Gender
* Hobbies
* Bio

This information is requested so that people can see it when viewing your profile later.

After registering successfully the user should end up on the login page. It might be cool if the username and password they just made are automatically filled into the form fields when they get there this way, up to you.

### Main Page

This page should be implemented using React. You may choose whether you want to use React state or get Redux into the mix.

The main page's primary purpose is to view all registered users on the site. There should be a left sidebar that is just a list of names of all the people who have made accounts. The rest of the screen could start out as blank or display a little welcome message/image or something.

Upon clicking any of the names in the left sidebar, the rest of the screen should change to display that user's full profile info. These shouldn't be separate pages, the right side of the screen should just change in a React-y way.

### Bonus Main Page Feature: Sending Anonymous Messages

Cordon off a new section of the main page, either at the top or bottom, where incoming messages can appear in real time. When viewing some user's profile, in addition to all their info there should be a "Send this user an anonymous message" text box. If any user sends you a message this way while you are logged in on the main page, the message they wrote should automatically appear in your incoming messages.

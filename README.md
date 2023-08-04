# Study Buddy

<a name="description"></a>

## Description
The purpose of this application is to provide a simple and fun tool for users to be able to assist with studying for tests, practicing their memory skills, or just to enjoy for any other reason that suits them. It allows the user to create subjects and compile lists of flash cards within each subject for an organized study experience. 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Video](#video)
- [Screenshots](#screenshots)
- [Links](#links)
- [Resources / Credits](#credits)


<a name="installation"></a>

## Installation
* Clone the repository using:

```
git clone https://github.com/jonteal/employee-tracker
```
* Be sure that you are in the root directory
* Install the dependencies by opening the terminal and running the following node command. If you use something other than node, run the relevant substitute command to install dependencies
* NOTE - Before running the application, you will need to hook up the server to a database. As this is a MERN application using Mongoose, you will need to use MongoDB unless you wish to refactor the schemas.
* MongoDB Docs -> https://www.mongodb.com/docs/
```
npm install
```
* From there, cd into the client folder
```
cd client
```
* Run the following command
```
npm install
```
* Initiate the client folder with the the command
```
npm run start
```
* Open another terminal with the previous one still running. cd into the server folder
```
cd server
```
* Run the command
```
npm run dev
```
* Now that both the server and the client folder are running, you should be able to open the browser at localhost:3000 and play with the application.

<a name="usage"></a>

## Usage
* In order to use the application, you will simply follow the instructions in the modal forms after clicking on each button, and following the intuitive flow of the application from there. As it is a very simple tool, everything should be fairly straight forward.


<a name="license"></a>

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<a name="contributing"></a>

## How to Contribute
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

<a name="tests"></a>

## Tests
No tests available at this time.


<a name="questions"></a>

## Questions
If you have any questions or comments, please feel free to contact me by email at jonjackson.webdesign@gmail.com!


<a name="video"></a>

## Video
https://github.com/jonteal/studybuddy/assets/87287862/c665b62e-9bc9-48c1-96d2-5dee1cab1fc8



<a name="screenshots"></a>

## Screenshots
<img width="959" alt="Screenshot 2023-08-03 at 5 02 06 PM" src="https://github.com/jonteal/studybuddy/assets/87287862/a5c74566-a8b8-4aaa-8d4b-6e3f9faa02f6">

<img width="1167" alt="Screenshot 2023-08-03 at 8 56 14 PM" src="https://github.com/jonteal/studybuddy/assets/87287862/7c28c27a-f7b3-4b5b-b0e4-0f4bbe3dfabd">

<img width="1146" alt="Screenshot 2023-08-03 at 8 56 33 PM" src="https://github.com/jonteal/studybuddy/assets/87287862/4ffb1a9b-b7c6-4333-897d-8616bde51414">

<img width="1150" alt="Screenshot 2023-08-03 at 8 57 01 PM" src="https://github.com/jonteal/studybuddy/assets/87287862/daa0fb99-a163-4a22-be5f-1dcc73df2cf0">


<a name="links"></a>

## Links
Github Repository: https://github.com/jonteal/studybuddy


<a name="credits"></a>

## Resources / Credits
This project was architected, designed, and developed by Jon Jackson.


## Future Development

Try to add some additional functionality to your application, such as the ability to do the following:

* Incorporate a timer feature so the user can set a window of time they would like to study for.
* Keep track of how much time a user studies per week to help them know how much time they've put into their studies.
* Add index card count in the subject button label
* Add redux to handle state management
* Update card count in subject row component
* Add filtering on home page and on subject page to show only a certain confidence level
* Ability to flip all cards in flash card mode at once (with animation), or just flip individual ones (with animation)


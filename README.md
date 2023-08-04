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
- [Tests](#test)
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
* Be sure that you are in the current working directory
* Install the dependencies by opening the terminal and running
```
npm install
```
* Run the project by typing the following command in the terminal:
```
node index.js
```

<a name="usage"></a>

## Usage
* In order to use the application, you will need to have a 


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
If you have any questions or comments, please feel free to contact me by email at jonjacksonvibes@gmail.com!


<a name="video"></a>

## Video
https://drive.google.com/file/d/1Atc3PQ_L5z0A5gesrnX-7wwA-5KB67cz/view

<a name="screenshots"></a>

## Screenshots

![Screenshot of Viewed Tables](/employee-tracker/Assets/myScreenshot1.png)
![Screenshot of Sample Added Dept, Role, and Employee](/employee-tracker/Assets/myScreenshot2.png)


<a name="links"></a>

## Links
Github Repository: https://github.com/jonteal/employee-tracker


<a name="credits"></a>

## Resources / Credits
This project was authored by Jon Jackson but was given guidance for implementation and logic by fellow cohort member Laurel Thornburn. 



## Bonus [In Progress]

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.






# Study Buddy

The purpose of this app is to create an application where a user can add content in a manner that will help them study and retain information so as to better prepare them for tests. 

As a student 
I want an application that allows me to save information that I must remember
So that I can increase my retention and improve my testing scores and capabilities. 

Acceptance Criteria

Basic Overview and App Needs
1. App that allows the user to save study information on digital index cards so they can study for their exams.
2. Ability to mark a note with a status - 'No clue', 'Somewhat got', 'In the bag'
3. Color coding the index cards status tag according to the status. No clue = 'red', Somewhat get = 'yellow', In the bag = 'green'.
4. Have a page dedicated to the subject which contains all the index cards for that subject.
5. Back button while on index card should navigate to previous page instead of always back to home.
6. Make updating the card a modal option instead of a form that always displays below the content

Nice to haves - Future Development
1. Potentially incorporate a timer feature so the user can set a window of time they would like to study for.
2. Keep track of how much time a user studies per week to help them know how much time they've put into their studies.
3. Add index card count in the subject button label
4. Make cards draggable so they can be organized in the way the user would like.
5. Add redux to handle state management
6. Update card count in subject row component 
7. Add filtering on home page and on subject page to show only a certain confidence level
8. Change all index cards in subject view to accordian view and change title background color to confidence level color
9. Ability to flip all cards in flash card mode at once (with animation), or just flip individual ones (with animation)


TEST

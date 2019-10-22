# Revise With Me

Revise with me is a note taking and revision app designed and written by AUT students in semester two, 2019. This app was during the Software Development Practices course.

## Live demo
[https://revise-with-me.herokuapp.com/](https://revise-with-me.herokuapp.com/)
## Current Features

Currently, we have made a React + Typescript app, where you can make notes. 

We use a dynamic card view and modal popup system to create and view notes.

These notes can have a video and or an image attached to them as well. This was put in place, so that users can take a picture of a slide, or other piece of information, and makes notes about it.

Our next feature is commenting, users can add comments to notes, if they want to add some more information, or add some more context without editing the main note.

Another interesting feature is colour tagging, this allows users to colour coordinate their notes to find related topics easier, or highlight certain notes.

Users can also highlight sections of their notes, and to make it easier to view certain sentances.

Obviously you wouldn't want to lose all your notes once the app closes or refreshes, so our team has implemented an interim solution to save and load notes, while we produce a more permanent and robust solution.
To save notes, you can press "Save to cookie" and this will save your notes to the local browser storage, and then to read them back in, you can press "Load from cookie".

## Future Road Map

As mentioned previously, we would like to implement a more robust saving and loading function. Another related goal was to add user logins to the app. These functions would require a server/cloud solution. We had hopes of utilizing the Azure cloud platform to create and host a web app, as well as host a database that could handle these operations, unfortunately due to time constraints in the sprint 0 learning phase of our project, this was not possible.

In the future we would like to allow users to share notes between devices, for instance typing notes on their computer, and reviewing them on a mobile device. We have already implemented a responsive mobile design.

Another planned feature is to add quizes that can be generated from highlighted notes

## Installation
To install install from source, clone the repo, and run.
You must have node and yarn installed to run this program.

Then run:
```
Yarn install
Yarn start
```

If you would like to compile a production version of the program
Then run:
```
Yarn run build
Yarn start
```
## Usage and Support
Unfortunately, as this was created for a university course, that has already concluded at this time, support is very limited. It is not advised to use this software in production or for personal use until further notice.

If you really would like to use this software and have issues send me a message or open an issue ~Ryan

## License
[MIT](https://choosealicense.com/licenses/mit/)
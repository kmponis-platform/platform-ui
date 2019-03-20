# platform-ui
An AngularJS ui to implement platform's front-end.

>Go to http://localhost:4200 . It will automatically take you to sign-in page. 
<br>Sign-in: (Accept every password) 
<br>user1 (5 Minutes of innactivity allowed) 
<br>user2 (10 Seconds of innactivity allowed) 

>Bugs:
<br>1) Login as 'user2' -> Logout -> Wait for 30 seconds -> See 2 messages:
<br>'You have been automatically logged out'
<br>'You have successfully logged out'

## Prerequisites
* To run the application you need to have git, mvn, noteJS and npm package installed.
* Run web-service
<br>[ReadMe.md] of https://github.com/kmponis-platform/web-service-

## Download
* Open command line and move to your workspace.
* Download project using your username: 
<br>`> git clone https://github.com/kmponis-platform/platform-ui.git`
* Go to project: 
<br>`> cd platform-ui/`

## Run
* Open command line and move to your project.
* Go to the right branch (ex. develop)
<br>`> git checkout master`
* Build project: 
<br>`> npm install`
* Start application:
<br>**Localy NoteJS** 
<br>`> ng serve`
<br>If you don't have ng:
<br>`> npm run ng serve`
<br>**Localy Tomcat** 
<br>Build the project
<br>`> ng build --base-href /platform-ui/`
<br>If you don't have ng:
<br>`> npm run ng -- build --base-href /platform-ui/`
<br>Replace platform-ui on Tomcat webapp
<br>`> rmdir /s /q C:\jws-5.0\tomcat\webapps\platform-ui`
<br>`> xcopy dist\platform-ui C:\jws-5.0\tomcat\webapps\platform-ui`
<br>`> D`
<br>**Dev Server Jenkins** 
<br>`TODO`
<br>**Prod Server Jenkins** 
<br>`TODO`

# General Info

## GIT Strategy
* Open command line and move to your workspace.
* Download project using your username: 
<br>`> git clone https://github.com/kmponis-platform/platform-ui.git`
* Go to develop branch
<br>`> git checkout develop`
* Create a slave branch - using the story number (ex. locsan-9)
<br>`> git branch <newBranchName>`
* Select slave branch 
<br>`> git checkout <newBranchName>`
* Add slave branch to repository 
<br>`> git push --set-upstream origin <newBranchName>`
* When story is finished push and request a merge
* Pull changes from develop
<br>`> git checkout <newBranchName>`
<br>`> git fetch origin`
<br>`> git merge origin/develop`
<br>`> git push`

## Further Angular Information 
* Development server:
<br>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

* Code scaffolding:
<br>Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Build:
<br>Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

* Running unit tests:
<br>Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Running unit tests:
<br>Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* Running end-to-end tests:
<br>Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

* Further help:
<br>To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
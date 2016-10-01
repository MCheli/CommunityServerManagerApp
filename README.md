# Community Server Manager App

This is the source for companion application to the Community Server Manager web platform!  For more information on the web platform please go here:  https://github.com/MCheli/CommunityServerManager 

This mobile application is build with the Ionic framework and can be compiled for either Android or for iOS.  Much of the code is very simple and was generated via ionic creator.  Improvements such as loading screems, and login error feedback will be coming in future releases.

##Development Set Up
###Prerequisites
The CSM app is build on ionic which means you must have the following installed globally...
- Node
- NPM
- Bower
- Gulp
- Ionic
- Cordova

###Download and Run
This repository is currently built WITHOUT any major .gitignore functions so almost all content should work after the clone.  If this does not work, copy the www folder from this repository and replace a basic ionic generated applicaiton's www folder.

1.  `git clone https://github.com/mcheli/CommunityServerManagerApp.git`
2.  `ionic serve`

###Build
Building for this application is standard ionic application building practices.

1.  `ionic build ios` or `ionic build android`

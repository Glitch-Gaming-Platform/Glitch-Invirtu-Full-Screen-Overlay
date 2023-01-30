
# Glitch Invirtu Screen Grabber

## Overview 

The Full Screen Overlay is when an image is shown over the screen as a placeholder. For example, the overlay image might say "Starting Soon". This widget will show 
you how to implement the overlays using Invirtu/Bingewave.

## How To Install

Invirtu/BingeWave provides an Overlay CMS that allows developers to easily build their custom functionality into live events (video conferences, live streams, and 
AR). The Overlay CMS also has a no-code interface, allowing non-technical users to make modifications.

The functionality of the full-screen image overlay is deployed via the overlay system and can be implemented using the following steps.

1.  Create a new widget in the Invirtu/BingeWave [builder here](https://developers.bingewave.com/widgets). **Important:** When making the widget, **mark it as 
published** so it will be usable when you implement it into your template.
2.  From the src folder here, copy the index.html into the HTML section in the widget builder.
3.  From the src folder here, copy the style.css into the HTML section in the widget builder.
4.  From the src folder here, copy the app.js into the Javascript section in the widget builder.
5.  Save the changes in the widget builder.
6.  Release the widget (button next to save changes).
7.  Go to the Organizer account and create or update a template.
8.  In the Interface Builder, use the Widgets section to add the widget anywhere on-screen.

## How It Works

The Full-Screen Image Overlay is a relatively simple utility that works as such:

1.  The widget must be added to the live event.
2.  By default, the widget is inactive by disabling is for all user roles so as not to show the image until it is required.
3.  The HTML is an empty div on the screen, and the CSS is designed to site as a top-level element that will cover the entire screen.
4.  Activating the widget is done in multiple steps. 
5. The first step, an image url must be set in the widget's environment variable. This is done via API Endpoint 
[https://developers.bingewave.com/docs/eventwidgets#setenv](https://developers.bingewave.com/docs/eventwidgets#setenv)
6.  After the image url is set the environment, then it must be activated for the user you want it to appear for using accessible_for_x via this API endpoint: 
[https://developers.bingewave.com/docs/eventwidgets#updatewidget](https://developers.bingewave.com/docs/eventwidgets#updatewidget)
7.  When activated for a user, the image will cover the entire screen.
  

## Key Areas To Understand

The Full-Screen Image Overlay is comprised of several tools for the functionality to work. To get a better of the tools, you can review the following:

- [Invirtu Name Space](https://developers.bingewave.com/javascript/namespace)  
- [Invirtu Environment Variabes](https://developers.bingewave.com/javascript/bwenv)
- [Invirtu Design Layout](https://developers.bingewave.com/javascript/css)

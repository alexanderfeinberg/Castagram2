# Catsagram Phase 2: Add interactivity to the page

Today, you will be adding some interactivity and complexity to your Catsagram
app using event listeners.

## Set up

You can either build off your Catsagram project from the previous day or
clone the practice for this day from the [starter].

## Instructions

First, add a button that requests and displays a new cat image, replacing the
original image.

Second, for the active image, allow the user to upvote/downvote the image and
display the score (upvotes - downvotes).

Third, allow the user to add comments to the image. You may want to look into
the [FormData] API if you're looking to use `form`.

Whenever a new image is requested, the upvotes and comments should be reset.

The final product should at the very least match __wireframes/phase-2.png__. If
you finish early, try to implement a delete comment feature!

By this point, your code could be getting a little bit messy within
__index.js__. Try DRYing up your code and keeping everything as SOLID as
possible.

[starter]: https://github.com/appacademy/practice-for-week-09-catstagram-long-practice-day-2
[FormData]: https://developer.mozilla.org/en-US/docs/Web/API/FormData
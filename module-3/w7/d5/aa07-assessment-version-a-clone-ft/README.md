# HTML/CSS 1a Assessment - Clone

Welcome to the HTML/CSS Clone assessment!

In this assessment, you will clone a target website using HTML and CSS.
Screenshots and an animated gif of the finished project will guide your work.
Make sure you read through all of the instructions and information in the
__README.md__, __myreads-content.md__, and __scorecard.md__ files before
starting to code your project.

There are **no test specs** for this assessment. For more on scoring, see the
[Scoring section](#scoring) below.

* __Total Possible Points:__ 20 points  
* __Points Required to Pass:__ 16 points  

You will have **3 hours** to complete the assessment.

## Resources

For this assessment, you are allowed to use the following resources:

* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., a/A curriculum on Canvas, StackOverflow),
communication apps (e.g., Slack, Discord), search engines, notes, or any of your
previously written code.

## Setup

Clone this starter repo and open it in VS Code.

Note that the starter includes only instructions, site content resources, and a
scorecard.

You will need to create your own HTML and CSS files at the root of the project
directory.

## The Task

Use the screenshots below to guide the structure and styling of your clone
project. The project must include a header (navigation bar), a body with two
book cards, and a footer. All content (text, images, icons) is provided to you
in the __myreads-content.md__ file. This file also includes the specific fonts
and hex codes for colors you can use to match the target site.

You must choose which semantic HTML elements to use as you structure your site,
but you will _not_ be graded on whether you chose the "best" elements. All
grading will be based solely on how the website looks when rendered in the
browser.

### Phase 0: Planning

Take _at least_ 10 minutes to plan out your project before coding anything.
Consider the following planning steps.

- Draw a simple wireframe of the site, labeling semantic HTML elements
  (including wrappers or containers enclosing other elements).

- Compare the desktop and mobile views. Plan ahead around how you might
  make your page responsive to desktop and mobile screen sizes.

- Write a list of steps you'll complete, in order. For example, you might plan
  to lay out the HTML elements, then style the header, then the footer, then the
  body. The order is up to you, but make a plan, and follow it!

One of the most important keys to success on this project will be __time
management__. Don't spend all of your time working on a single element! For each
element or section of the page, work on it until it is "good enough for now",
then move on to the next section. Towards the end of the assessment, come back
to each section to apply finishing touches.

### Phase 1: Desktop View

Create a desktop view matching the screenshots below. Your project should
match the images below at __1024px screen width__.

Full page (desktop - 1024px screen width)

![myreads-desktop]

Title and favicon

![myreads-title-favicon]

> _Note: Your address bar may show a different URL depending on how you open the
> HTML file in the browser (for example, using `live-server` versus opening the
> file directly in Chrome). It does not need to match the URL in the
> screenshot._

### Phase 2: Mobile view

Implement a media query to create a mobile view. At __700px screen width__, your
project should match the screenshot below.

Full page (mobile - 700px screen width)

![myreads-mobile]

### Phase 3: Hover effects and mouse pointers

Your project should include the effects and mouse pointers shown in the gifs
below.

Header:

![hover-effects-gif-header]

Main Body:

![hover-effects-gif-main]

Footer:

![hover-effects-gif-footer]

## Scoring

This assessment will be graded by an instructor based on the criteria listed in
__scorecard.md__. You must score 16/20 to pass the assessment.

Use this final checklist to ensure you have implemented all of the required
elements and effects.

- [ ] Is all content from the __myreads-content.md__ file displayed on the site?
- [ ] Does the site layout match the desktop screenshot at 1024px screen width?
- [ ] Does the site layout match the mobile screenshot at 700px screen width?
- [ ] Do all elements have the same alignment and justification as the
      screenshots?
- [ ] Do the mouse pointers over text, buttons, inputs, and hyperlinks match the
      gif?
- [ ] Do the hover effects on hyperlinks and buttons match the gif?
- [ ] Do the fonts and colors _generally_ resemble the screenshots?
  - _These do not need to be an exact match._
- [ ] Does the whitespacing (margins, padding, borders) _generally_ resemble the screenshots?
  - _These do not need to be an exact match._
- [ ] Do the book images have a box-shadow _similar to_ the screenshots?
  - _These do not need to be an exact match._

## Submission

When you are ready to submit, add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can `add` and `commit` files as often as you wish, but only your first **two
pushes** will be made available to instructors for grading. (If for some reason
you need more than two pushes, you must plead your case to an Instructor.)

Good luck!

**Copyright App Academy. Please do not share this repo or post any parts of it
online. App Academy will take violations very seriously.**

[MDN]: https://developer.mozilla.org/en-US/
[myreads-desktop]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/MyReads/myreads-desktop.png
[myreads-mobile]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/MyReads/myreads-mobile.png
[myreads-title-favicon]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-07/MyReads/myreads-title-favicon.png
[hover-effects-gif-header]: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBjZmJkOTQ5ODA1MzYzYTdkNmE2MjIwMDRmYTRiMWY4ZWUzNWUxNCZjdD1n/ujfUTF4q56Jw6MS5iv/giphy.gif
[hover-effects-gif-main]: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWM4NWM4NWZiM2FhNmM5ZDlhZDFjNmQ2OTg3ZWEwNzZhNWZhMjVjMiZjdD1n/0scsuguQZkOpLrkMqs/giphy.gif
[hover-effects-gif-footer]: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNmYTQ5MGI1NjU5NTQ3Y2FkZTU0NTUzNTRjMzRmMDI4OGI0ZWE0MCZjdD1n/LDXOSeKDBM7HiToTqs/giphy.gif

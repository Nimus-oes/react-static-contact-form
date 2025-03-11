<h1 align="center">Contact Form Page | FE Project #1</h1>

<p align="center"><img src="public/Desktop_1350px.jpg" width="40%"></p>

<p align="center">A static contact form page built with HTML, CSS, and React.</p>

### <div align="center"><a href="https://nimus-oes.github.io/react-static-contact-form/">Go to Live Demo</a></div>

## Table of Contents

- [Project Requirements](#project-requirements)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Resources](#resources)

<br />

## Project Requirements

- Users should be able to provide contact details in the input fields so they can submit the form
- Name, email, message, and consent for contact fields must be filled to submit the form

<br />

## Tech Stack

- HTML
- CSS
- JavaScript + React

<br />

## Features

- A form containing text, email, number, checkbox, and dropdown input fields
- Responsive form layout switching from a single-column on mobile to two-column on desktop using a grid
- An achored background image using the pseudo element `::before`
- Custom dropdown arrow for `<select>` element
- Accessible text and elements that scales with default font size of browsers using a relative unit `rem`

<br />

## What I Learned

### 1. Accessibility from the Perspective of Browser Default Font Size

<br />

**Misunderstanding**

One misconception I had in accessibility is that using `rem` units alone makes elements scalable to the screen sizes and therefore accessible. However, `rem` only adapts to the default font size settings of the browser - it does not inherently adjust to screen size unless you specify to do so with media queries.

<br />

**Responsiveness ≠ Accessibility**

There are many requirements to making website accessible for people with different needs, ranging from screen reading to keyboard navigation. While creating a responsive website that adapts its layout to different device sizes can help improve accessibility, it’s only one part of the process and not enough on its own. A responsive website responds to screen size whereas an accessible website responds to a users’ access needs. In this context, using `rem` is more about accessibility, as it allows text to scale based on the user’s preferred default size.<sup>1</sup>

<br />

**Browser Default Font Sizes Vary**

For accessibility, it’s essential to consider that users may increase their browser’s default font size for better readability. Accessible designs maintain a solid layout that doesn't break even when the font size is scaled up significantly.

<br />

**Why Use `rem` Instead of `px` for Accessibility**

The rem unit is based on the root font size, so if users increase the default font size on the browser, elements sized in `rem` will adjust accordingly. In contrast, `px` remains fixed, regardless of user settings. `rem` is generally better for font sizes and layout elements that need to be flexible to match user preferences.

<br />

**`rem` Isn't a One-Size-Fits-All Solution**

There are cases where `px` is still useful, such as for borders or padding, where scaling with font size isn’t necessary and beneficial to users. Before applying `rem` to everything, it’s important to consider whether a value actually needs to scale when a user increases their browser’s default font size. Testing these choices by adjusting the browser font size can help determine when to use `rem` versus `px`.<sup>2</sup>

<br />

### 2. Grid vs. Flexbox

Both CSS Grid and Flexbox could be used to achieve this form layout, but each serves different purposes:

- Grid: Ideal for two-dimensional layouts (rows and columns), equal-sized areas, and larger page structures
- Flexbox: Best for one-dimensional layouts (row or column), dynamic content alignment, and layouts where content size drives positioning

<br />

**Choosing the Right Layout for the `<form>`**

The form in this project switches between:

- Single-column layout on mobile, where all items take full width.
- Two-column layout on desktop, where some items remain full-width while others take up half of the form container.

<br />

To achieve this with flexbox, you would need to assign `flex` values to control the width of each form item:

```css
/* 
flex-basis determines the item's base width, 
while flex-grow and flex-shrink allow the items to adjust dynamically.
*/

.desktop-form {
  flex-wrap: wrap;
}

.half-width-item {
  flex: 1 1 48%;
}

.full-width-item {
  flex: 1 1 100%;
}
```

<br>

The same layout can be implemented with grid:

```css
.desktop-form {
  grid-template-columns: 1fr 1fr;
}

.half-width-item {
  grid-column: span 1;
}

.full-width-item {
  grid-column: span 2;
}
```

<br>

For this project, I chose Grid because:

- It provides a simpler system with `span`, making it easier to control column spans.
- The grid system is more intuitive to understand the structure
- The form layout is not dynamically determined by content size—it has just two fixed types: half-width or full-width.

<br>

**Aligning Form Items**

While the overall form layout benefits from grid, individual form elements like `<label><input>`, `<label><select>`, and `<label><textarea>` require one-dimensional vertical alignment. For this, I used flexbox as a quick and effective solution.

<br />

### 3. Checklist for Form

- Add a `<label>` for each input field.
- Use appropriate `type` attributes for different input fields.
- Set minimum/maximum values for number inputs and define patterns for password inputs.
- Assign `type`, `name`, `id`, and `value` attributes where needed.
- Use the `required` attribute for mandatory fields.
- Ensure the `<textarea>` resize handle behaves correctly according to the design.
- Properly adjust the highlight effect for `<input>` fields.
- Maintain adequate spacing between radio buttons/checkboxes and their text labels.
- Add padding inside input fields to prevent text from appearing too close to the border.

<br />

## Continued Development

- Would it be better to apply gradient background in CSS rather than using an image file in terms of performance?
- Apply basic data validation to form
- Remove highlight effect on the input fields
- Create a custom dropdown component and apply style to dropdown options

<br />

## Resources

1. [What is responsive website design and how does it relate to accessibility](https://jimbyrne.co.uk/what-is-responsive-website-design-and-how-does-it-relate-to-accessibility/) by Jim Byrne
2. [The Surprising Truth About Pixels and Accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/) by Josh Comeau

<br />

## Author

### Nimus-oes, a frontend engineer & localization specialist.

- [GitHub](https://github.com/Nimus-oes)
- [Blog (English)](https://nimus.hashnode.dev/)
- [Blog (Korean)](https://velog.io/@nimus/posts)
- [Frontend Project Collection](https://github.com/Nimus-oes/frontend-project-collection)

The design of this project is from devChallenge.

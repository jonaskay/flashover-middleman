---

title: Stateful Designs
description: Cheatsheet to help you add stateful thinking to your designs.
type: article
date: 2019-08-25
tags:

---

This cheatsheet is written to help you add stateful thinking to your component designs. Why do you need this cheatsheet? Because when we discuss features and designs we usually focus on the "happy path" – the default state of our app. Things like errors, blank screens, and loading graphics are easily overlooked.

Consider the following states or lifecycles when drawing up designs for a page or component. Not all are applicable for every situation. Inversely, you might have to introduce additional states.

### Data

When working with a list, you have to accommodate both the users with zero items and users with lots of items.

* **Loading:** This is relevant if you load the data (e.g. from a 3rd party API) after you render the component. Loading doesn't happen instantaneously.
* **None:** There is no data, no items, and no input.
* **One:** User has their first item of data.
* **Some:** The ideal state of your component. There is data but not too many and not too few.
* **Too many:** Data starts to overflow. There are too many items or too many characters.

### Availability

* **Disabled:** You are preventing users from interacting with the component.
* **Enabled:** Things are running smoothly.
* **Error:** Something has gone wrong.

### Input

Buttons react to clicks. Form fields might have validation logic.

* **Invalid:** Something is wrong with the input.
* **Valid:** Input is valid and ready for submission.
* **Done:** App has approved the user's input.

### Read more

Vince Speelman gives beautiful examples of stateful thinking in his article ["The Nine States of Design"](https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85).

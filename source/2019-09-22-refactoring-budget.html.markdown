---

title: Refactoring Budget
description: We need to think twice before posting a refactoring ticket on our team's Kanban board.
type: article
date: 2019-09-22
tags:

---

We need to think twice before posting a refactoring ticket on our team's Kanban board. I get that there's value in refactoring: refactoring makes future changes easier and therefore gives us the opportunity to move faster in the long run. However, a refactoring ticket isn't going to help us build trust. Instead, it can do more harm than good for our overall credibility.

Let's divide our product team into developers and non-developers, or to people who write code and people who don't write code. Refactoring is a hard sell for the non-developers because while the cost of refactoring is guaranteed, the benefit isn't. In addition, cost (hours spent on refactoring) is easier to measure than any of the gains: have you ever tried to track how   many developer hours do you actually end up saving with refactoring? Non-developers also lack coding experience and will have a hard time empathizing with the pain that comes with bad or out-of-date code.

What about the developers in your team? They might not be happy about our refactoring ticket either. Similar to non-developers, developers are also aware that the benefits of refactoring are both hard to measure and uncertain. While developers will have an easier time empathizing with you, they also know that sometimes we developers refactor code because we're not proud of our work or because we're constantly bumping into our past mistakes when working with the codebase. These reasons are rarely valid justifications for refactoring work.

Instead of time boxing refactoring or turning refactoring work into stories for your Kanban board, make refactoring an everyday practice. Use TDD's "Red/Green/Refactor" cycle and don't forget the last step of "Refactor" before moving to the next thing. Leave your code cleaner than you found it. Most importantly, stop telling yourself that you'll get to revisit a feature with a refactoring budget. Consider the likely situation that you will have to live with the code you write for a very long time.

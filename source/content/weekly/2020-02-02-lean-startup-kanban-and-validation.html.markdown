---

title: Lean Startup, Kanban, and Validation
description: "Lean Startup introduces a fourth column to our kanban boards: validated"
type: article
date: 2020-02-02
tags:

---

This post assumes you have heard about Eric Ries's book Lean Startup and know the basic idea of it (fast iterations and focus on validated learning). I'm not going to do a review of Lean Startup but instead discuss a specific section of the book that caught me off guard while reading it.

Here is the thing that made my jaw drop. It's Ries's version of the familiar kanban board:

![Picture of Lean Startup's kanban board](lean-startup-kanban.png)

Those first three columns look pretty familiar. There is the "backlog" for user stories that are waiting to be worked on. "In progress" is our WIP. "Built" contains the user stories that have been implemented and deployed.

But what is the fourth column "validated" for?

Here is how Ries defines validated:

> Knowing whether the story was a good idea to have been done in the first place.

Believe it or not, not every user story provides actual value for your users no matter what the market research and user studies tell you. Ries suggests that if the value of a given user story cannot be validated with current or potential customers (using for example split testing or customer interviews) the user story gets removed from the product and from the board. Only the stories that pass validation make it through and stay in the product.

That's a very nice idea, but here is what would probably happen if my team started using this type of kanban board: Because validation takes time and we are expected to deliver new features at a consistent pace, it's easy for us to end up ignoring validation. At the end of the day, it's enough for us (and our managers) that the user stories get built and deployed. That's not of course what the goal should be. But if we are being honest for a second, our stakeholders pay much more attention to output instead of outcome when they evaluate our efforts. As developers, we would also much rather focus on code instead of talking to customers.

Ries used to be a developer himself. He knows that adding the validated column is not enough by itself. It would make it too easy for teams to ignore validation efforts and keep focusing on shipping new user stories.

To prevent this from happening, we will add a card limit to our columns: **each column is allowed to have maximum three user stories.** You might have heard about card limits inside our "in progress" columns because [when WIP goes down, throughput goes up](/posts/limit-your-wip/). But a limit for the "built" column? What kind of effect would that have on our process?

First, work will get stuck. Your "built" column is full because you are not validating the user stories. Next thing you know, your "in progress" column is full because you can't move any more user stories to the "built" column. Your team's lack of validation activities is now an inescapable problem that you have to address.

Let me quickly reiterate why we don't like to do validation in the first place:

* We prefer to focus on our work instead of talking to customers
* We want to ship as much stuff as possible and validation takes resources away from building and shipping

Card limits don't solve either of those problems. Instead, they actually introduce one more item to our list of grievances:

* We don't want to see work sitting in queues and now we have work sitting in queues

Some developers might end up leaving your team because they want to work with code – not customers. Some managers might tear down your kanban board because they want to see results – not learning and validation.

In order for a team to push through these challenges, developers have to get comfortable doing work that's unfamiliar to them and teams have to unlearn everything they have been taught about developer productivity. As a more practical matter, the teams have to start thinking about validation as soon as they start working on user stories because otherwise it's likely for the work to get stuck in the pipeline. This is not easy. I'm not even sure if I could handle this challenge.

Compare this card limit to production lines in Toyota factories where employees can stop the whole line whenever they detect quality errors. This introduces a new incentive to identify problems earlier in the process because it's really bad for business when production comes to a halt. All of a sudden quality errors start to decrease.

When you force a team to stop working when they don't validate their ideas, the team will start to validate more. But is the initial stress and pressure something that you would make your team go through? The method seems risky, doesn't it? People might quit and in the end others might force you to get back to the old kanban columns. Also, what if the kanban board doesn't work? What if validation doesn't work? What if nothing changes in terms of customer value despite the social capital and trust you have spent introducing this idea to your team and your organization?

Adding a fourth column to your kanban board might seem like a trivial task. But it's much more about changing culture than reprinting your board for the team wall.

---

title: Cone of Uncertainty
description: Cone of Uncertainty is used to describe how the uncertainty of estimates decrease as a project evolves.
type: article
date: 2019-12-08
tags:

---

Cone of Uncertainty is used to describe how the uncertainty of our estimates decrease as our project evolves. At the beginning of any project, our understanding of possible edge cases, third party APIs, and other issues is limited. However, as we start the actual work, we begin to learn more and more about the problem space and the details of our system under development.

![Cone of Uncertainty presented as a graph](cone-of-uncertainty.png)

Barry Boehm's [Software Engineering Economics](https://www.amazon.com/Software-Engineering-Economics-Barry-Boehm/dp/0138221227) is a heavily cited resource when it comes to the topic of Cone of Uncertainty. Boehm's version of the initial estimation range is 0.25 to 4 which means that your project can cost 4 times as less or 4 times as more than you expected.

If your company builds WordPress sites for clients, I'm willing to assume that this range is much smaller as you operate with the same tools and in the same problem space from project to project. You are able to collect historical data from your past actuals and apply that data to new estimates. On the other hand, if you are solving novel and complex problems, your initial range can be uncomfortably high.

What will happen the next time you give your client or manager a range instead of a number for a work estimate? Probably they won't be satisfied. It's likely that your answer will be followed by a question of "Can't you just give me a number?" We dislike ranges because a) we hate risk and we want others to absorb it and b) ranges don't fit nicely to our quarterly plans and budget proposals. However, the world cares very little about our dislike of risk. Uncertainty isn't reduced by ignoring its existence.

Here are three ways you can respond to people who need a number instead of a range:

1. **Agree on a fixed budget with a flexible project scope and code quality.** This means that if you find out during the project that your estimate was too optimistic, you cut down some of the features or start making compromises with code quality. However, your client or manager needs to know what flexible scope and quality mean in practice. Make sure they understand what they are signing up for.
2. **Do discovery work.** Cone of Uncertainty gets narrower as we learn more about the project. Build [a Walking Skeleton](https://wiki.c2.com/?WalkingSkeleton) or hack together a prototype using the required third party APIs.
3. **Push back.** Find a place and a time to discuss about the actual success rates of software projects and risk profiles. Just because our visceral reaction to estimate ranges tends to be a negative one, it doesn't mean that we are not willing to sit down and reevaluate our stance.

My final point is somewhat related to pushing back against the need to get single number cost estimates. Most of the time we should use our time and effort to get better at estimating the benefits of our project, how fast people will start using our system, and whether the project will ever be finished. Sometimes it's enough that we know something can be done under an X amount of money. This is related to the concept of information value and you can read more about it in [Paradox of the IT Cost-Benefit Analysis](https://www.flashover.blog/posts/paradox-of-the-it-cost-benefit-analysis/) and [Reduce Expected Opportunity Loss with Build, Measure, and Learn](https://www.flashover.blog/posts/reduce-expected-opportunity-loss-with-build-measure-and-learn/). If you want to learn more about cost estimations, I suggest you check out the post [You Keep Being over Budget Without Data](https://www.flashover.blog/posts/you-keep-being-over-budget-without-data/).

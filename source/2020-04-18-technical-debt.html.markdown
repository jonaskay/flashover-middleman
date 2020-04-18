---

title: Technical Debt
description: At some point of their history, tech giants such as Microsoft and Amazon have had to implement a feature freeze because of technical debt.
type: article
date: 2020-04-18
tags:

---

In 2010, Nokia's head of devices gave a strategy update to the company's board of directors. Nokia was falling behind the Apple and Android ecosystems in terms of delivering new features and phone models to consumers. There had been yet another release delay because of problems in the development of Nokia's new operating system Symbian^3.

One of the board members, Risto Siilasmaa, couldn't believe his ears when he heard about the issue of Symbian's compilation times: it took 48 hours to compile Symbian (compilation is the process of turning your code into something that machines can understand). Compilation times are normally measured in seconds or minutes. Large systems can take hours to compile but a compilation time of two days is beyond anything reasonable.

Unfortunately, this was only the tip of the iceberg. Siilasmaa later learned that the overall build time of Symbian was *two weeks*. This meant that it took developers two weeks to see their code in production after they sent it off and moved on to the next task.

Symbian is a cautionary tale of insurmountable technical debt (also known as development debt). But what is technical debt and how do we end up accruing it?

Because development teams have to meet deadlines or work with limited budgets, they sometimes end up taking shortcuts such as duplicating code, hard-coding a value somewhere, or not writing automated tests for new functionality. These kind of easy fixes often impact future productivity because they tend to make future code changes more difficult or laborious. For example, a missing test case usually means that developers have to do more manual testing every time they push new changes to the codebase.

Avoiding technical debt at all cost is not necessarily the ideal. Also, there isn't really a scientific way to calculate the perfect amount of technical dept. Development teams have to constantly find the balance between budget, technical debt, and future requirements. Avoid all technical debt and you might not release new features fast enough. Take too much technical debt and your feature development might come to a standstill because all code changes suddenly take months to complete.

The likely reason why Siilasmaa was the only one in Nokia's board of directors shocked by the compilation times was that Siilasmaa was also the only board member who had experience from software. Before joining Nokia's board, he had founded and managed the publicly listed software company F-Secure. This is Siilasmaa's advice for companies who find themselves in a hole of technical debt:

> My own experience with development debt at F-Secure had caused me to conclude that there's only one solution: As soon as you realize that you have fallen into this hole, create a separate team to start a complete rewrite of the source code or do the rewrite in stages. Assign separate resources for reducing the debt: otherwise it will never get done. Do this even if it means recruiting a new team or making a bigger investment than anticipated. The sooner you start, the sooner it's ready.

At some point of their history, tech giants such as Microsoft and Amazon have had to implement a feature freeze because of gargantuan amounts of technical debt that was impossible to untangle without a rewrite. These feature freezes are not cheap. For example, Amazon's rearchitecturing project took them six years and cost over $1 billion.

While introducing new technical debt is not a mistake, not acknowledging the fact that shortcuts and easy fixes come with a price is.

### Final notes

I first learned about Symbian's compilation time from Gene Kim's business novel [The Unicorn Project](https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving-ebook/dp/B07QT9QR41). Risto Siilasmaa's book [Transforming NOKIA](https://www.amazon.com/Transforming-NOKIA-Paranoid-Optimism-Colossal/dp/1260128725) can be found [here](https://www.amazon.com/Transforming-NOKIA-Paranoid-Optimism-Colossal/dp/1260128725). Both books are great reads for anyone looking for great storytelling in the tech space.

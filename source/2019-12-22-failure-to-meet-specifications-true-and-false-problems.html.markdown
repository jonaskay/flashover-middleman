---

title: "Failure to Meet Specifications: True and False Problems"
description: As spec gets more detailed, the likelihood of true and false problems increase.
type: article
date: 2019-12-22
tags:

---

Feature requests passed to developers include things like acceptance criteria, product requirements, and mockups. These are the specifications or specs. All code requires some specs – some initial plan for the task waiting for implementation. But this planning part of the work doesn't stop as soon as code writing starts. Often developers find better ways to implement a feature *after they have started working on it*. The details of the implementation plan keep evolving as code gets written.


However, when developers start interpreting spec like this instead of following it precisely, two kinds of problems can arise. I'll call these problems true problems and false problems. True problems are situations where developers fail to implement a detail that was indeed extremely critical for business or security. The spec should have been followed more strictly to avoid actual problems. False problems are situations where stakeholders take umbrage against developers who take liberties with the spec even though the original spec contains details that are falsely thought to be critical.

Both true and false problems are something that we should avoid. True problems risk our business. False problems increase unnecessary development work because they require developers to add useless complexity to the codebase. Since true problems are much more scarier than false problems, we might feel comfortable with initiatives that aim to reduce the number of true spec problems even though it might result into an increase of false spec problems.

However, often our pursuit to reduce the amount of true problems results into not only more false problems but also more true problems. Because we are afraid of potential business and security risks, we spend more time writing and designing the initial spec. We get more parties involved with the requirements gathering. However, no one really knows what the perfect spec looks like despite their job title. We all are equally bad at predicting requirements of software systems before we start implementation and deployment phases. Because of this, the more detailed our spec gets, the more false assumptions about user value our spec will contain.

To avoid true problems we ask developers to do less designing and more coding after we hand them our intricate spec. We are afraid of developers missing all the important details we have gathered in our spec. However, detailed specs that need to be followed to a T prevent developers from finding the easiest and most simple way to implement a feature. This leads to more complexity which in turn leads to less resilient and more error-prone systems. Ironically, in the end our fear of business and security faults has lead to an increased risk of business and security faults.

The hypothesis I'm presenting here is that as spec gets more detailed, the likelihood of true and false problems increase.

Instead of looking into how to improve the documentation of requirements or how to oversee software teams, you might be able to deliver more with less by investing your time in the following questions:

* How do we get our developers to identify what is critical for business instead of business stakeholders trying to translate their needs to requirements?
* How do we get our stakeholders to trust our developers to figure things out instead of doing all the planning for them?

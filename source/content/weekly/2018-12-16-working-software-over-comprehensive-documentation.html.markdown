---

title: Working Software over Comprehensive Documentation
description: Documentation is not the only way to externalize knowledge and build shared understanding
type: article
date: 2018-12-16
tags:

---

*UPDATE: I have finished writing posts for all four agile values. See the bottom of the post for links.*

[Two months ago I got interested in the four agile software development values.](http://www.flashover.blog/posts/back-to-basics-with-agile/) I have never disagreed with the values but I also haven't really reflected about them on a deeper level. [Previously I have written about the first value of "Individuals and interactions over processes and tools."](http://www.flashover.blog/posts/individuals-and-interactions-over-processes-and-tools/) This week I'm discussing the second value, "Working software over comprehensive documentation."

We probably all hate writing documentation. But instead of bad-mouthing docs, I want to start out by pointing out the value of good documentation. The second agile value doesn't state that comprehensive documentation is useless. It just states that working software has more significance than comprehensive documentation.

Comprehensive documentation has two key benefits to any organization or team: it externalizes knowledge and it builds up shared understanding. When we externalize knowledge we take the internal knowledge of individuals and articulate it to a shareable form. When we build shared understanding we build shared vocabulary and common ground.

While documentation is a great tool for knowledge sharing, it's also time-consuming to produce and difficult to make it digestible. In addition to this, maintaining massive amounts of documentation is an enormous task. Especially when you are adding new features to your software every week.

None of us want software teams that spend the majority of their time writing and maintaining documentation. We want teams that iterate and move forward.

So what do you do? First, don't write documentation for its own sake. Write down the stuff that really matters and that is easy to communicate as written docs. Second, you can externalize knowledge and build shared understanding through other means than documentation. You can supplement your minimum viable documentation with different practices. Let me go through some examples of this.

When I'm onboarded to an existing project and try to understand how different features work, I start out by reading the integration tests for those features (integration tests combine different units of the software and go through different use cases). Sometimes the purpose of documentation is to describe how a system works. Easy-to-read tests achieve this same goal. Also, unlike documentation, tests stay up-to-date even when the development team's velocity is high (developers are forced to keep their tests passing and therefore rewrite tests when necessary).

Comprehensive documentation for a development team can also help them to reduce ambiguity and increase the consistency of their work. However, if you are able to adopt known systems and ways of working for your team, you don't necessarily have to write your own documentation--the documentation is written for you! For example, if you and your team decides to adopt git flow or trunk-based development as your development style, you can take advantage of the existing and public documentation for those systems.

The last example deals with the issue of knowledge sharing between technical and non-technical people inside a software project. Documentation can make it easier for people with different backgrounds and skill sets to find a shared vocabulary. But so can face-to-face discussions around artifacts such as post-its, wireframes, and demos. In fact, these discussions can achieve something truly important that documentation can't: they can uncover misconceptions and conflicts. Sure, interactions don't scale the same way as documentation scales, and discussions around misconceptions and conflicts can be uncomfortable. However, if you aren't right now dealing with a scalability problem, you can keep knowledge sharing as a more personal, non-scaling activity.

### Final notes
Documentation by itself has no meaning. The meaning comes from the valuable knowledge that gets distributed to different people. Is your team documenting things? If not, what are the ways you are building shared understanding or keeping your work consistent?

### More reading about agile values

* [Back to Basics with Agile](/posts/back-to-basics-with-agile/)
* [Individuals and Interactions over Processes and Tools](/posts/individuals-and-interactions-over-processes-and-tools/)
* [Customer Collaboration over Contract Negotiation](/posts/customer-collaboration-over-contract-negotiation/)
* [Responding to Change over Following a Plan](/posts/responding-to-change-over-following-a-plan/)

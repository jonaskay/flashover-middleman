---

title: Risk-driven Testing
description: Is your testing risk-driven or is it primarily driven by convention and guidelines?
type: article
date: 2019-02-24
tags:

---

When I started to get serious about writing automated tests for my code, I struggled with the question of what to check and what *not* to check with my tests. I really wanted to get into the habit of writing tests. But learning the APIs and syntax of different testing frameworks was already a significant challenge. It seemed like a hopeless task to then, in addition, learn how to write actually meaningful tests and avoid writing low-value tests. It was much easier for me to find some set of general test writing rules to follow more or less blindly.

Here are two examples of those general rules that I started using:

* Write at least one test case for each function
* If there is a bug in the system, write a test that catches that bug before fixing it

I still follow the latter rule and advocate for it. But the former rule is something I have started to move away from. Sometimes my integration tests also test some of my functions that lack a dedicated test case. Is it good use of my time to then write those unit tests just to reach a quota of at least one test case per one function?

On other occasions, my functions are so simple that I'm not actually concerned that I or anyone else will mess them up when they extend or refactor the codebase. For example, I used to write tests for getter and setter functions. I don't do that anymore.

I'm currently reading Martin Fowler's second edition of [Refactoring](https://martinfowler.com/books/refactoring.html). Reading his chapter about testing reminded me again why we write tests as software developers: We don't write tests just to have them or to reach some vanity metric. Instead, we write tests to catch the most bugs we can with reasonable effort.

My personal set of test writing rules helped me tremendously when I was just starting out with test writing. Those rules got me writing tests in situations where I didn't know exactly what to test or when I was feeling overwhelmed.

But those rules also allowed me not to have to think about the real value of my tests. Those rules allowed me to have false confidence about my test suite's ability to catch bugs. Some functions don't necessarily deserve a single test case while some functions require ten. 100% test coverage can be achieved with low quality tests.

Here is something Fowler has to say about testing in Refactoring:

> Testing should be risk-driven; remember, I’m trying to find bugs, now or in the future. [...] My focus is to test the areas that I’m most worried about going wrong. That way I get the most benefit for my testing effort.

Is your testing risk-driven? Or is it instead driven primarily by convention and guidelines? How often do you test what's easy to test instead of testing what's important to test?

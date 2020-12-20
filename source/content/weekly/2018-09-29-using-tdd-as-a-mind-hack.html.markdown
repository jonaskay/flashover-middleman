---

title: Using TDD as a Mind Hack
description: You can train your mind and reduce context switching with TDD
type: article
date: 2018-09-29 05:00 UTC
tags:

---

In this post, I’m going to be talking about a hidden benefit of test-driven development. This benefit is not about the quality or reliability of your code. It’s about you and your mind.

I will first give you a short introduction to test-driven development (TDD). After that, I’ll discuss how you can use TDD as a tool to reduce stress and frustrations.

### What is TDD?

TDD is the practice of writing tests before writing code. Here is how you ideally work as a developer if you do TDD:

1. **Write a failing test.** Write a test that uses the code you wish you had.
2. **Write the code.** Write the code that will make your test pass.
3. **Refactor your code.** Make your code not only work but also look good.

In [Test-Driven Development by Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530), Kent Beck calls this process as the *“Red/Green/Refactor”* cycle. You are in the "red" when your initial tests are failing. You move to "green" when your tests pass. Finally, you refactor code while making sure your tests continue to pass.

### "Red/Green/Refactor" as mental modes

I heard about using TDD as a mind hack by watching Tom Stuart’s RubyConf talk [Get Off the Tightrope](https://www.youtube.com/watch?v=TdBELZG0UMY). The whole talk is built around the idea that a major cause for knowledge worker stress is people trying to do a big thing all at once.

Stuart discusses a bunch of practical examples of breaking things down into smaller chunks. But he does not say that these are the examples that will necessarily work for you. You should find your own tools. You should personally experiment and practice keeping things small and manageable.

However, Stuart’s TDD mind hack is something I’m just going to start practicing with. I don’t feel like I need to question it. It just makes sense.

This is the mind hack: *treat the “red”, “green”, and “refactor” phases as separate mental modes*. Each of these phases have a different goal. Because of that, you should focus on different things in each phase.

Remember that part of being focused is about identifying distractions and saying “no” to them.

When you are in the “red” phase, you are trying to write a failing test. Don’t allow yourself to get sucked into doing something else. You do have to define interfaces, but you don’t need to know what happens behind those interfaces.

When you are in the “green” phase, you are trying to make the tests pass. In Beck’s words, *“quick green excuses all sins.”* Don’t allow yourself to be concerned about aesthetics. Don’t allow yourself to spin your wheels and try to come up with perfect names.

When you are in the “refactor” phase, you are not focusing on the problem or the solution. You focus turning *“code that works”* into *“good code that works”*. Allow yourself to correct your sins from the “green” phase.

\*\*\*

This hack is about reducing context switching which puts a strain on your brain. It's about understanding that your working memory has a capacity. When you start reaching that capacity, you become more irritable to outside distractions.

When we are talking about being irritable or stressed out, we are not talking about code quality. We are talking about things that prevent you from becoming a happier, more balanced coder. Your family, friends, and co-workers will thank you.

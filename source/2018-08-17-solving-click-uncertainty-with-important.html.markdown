---

title: Solving Click Uncertainty with !important
description: Click certainty is hard to maintain unless you use the !important declaration
image: 1f5b1.png
type: article
date: 2018-08-17 08:00 UTC
tags:

---

*Warning: I’m going to talk about CSS in this post.*

### What is click uncertainty?

Do you know what makes your app’s user experience seem easy, seamless, and enjoyable? Knowing which UI elements are clickable. And knowing what's not clickable.

When you’re not 100% confident about which UI elements are links and buttons, you are experiencing *click uncertainty*.

Here are two symptoms of click uncertainty: You open up a page and can’t instantly identify the things you can click on. You try to click a heading thinking it’s a link.

Your tech-savviness won’t protect you from click uncertainty. However, you probably will be able to work faster with the uncertainty compared to less tech-savvy people. When more tech-savvy people experience click uncertainty they use trial-and-error to find the clickable things. They just start clicking more things. When less tech-savvy people experience click uncertainty they freeze. They start to question every single action they are about to take.

The point is that click uncertainty affects us all. Even though we eventually will find the right thing to click, our overall experience will be overshadowed by frustration.

### Why does click uncertainty exist?

We have shared expectations on how websites and apps should work. Part of these expectations are about which things signify clickability and which things signify staticity (non-clickability).

Underlines and blue text color signify clickable links. Rounded borders, gradients, and shadows signify buttons.

Make your text headings blue and people will try to open them in a new tab. Add a border and a background color to the headings and people will try to tap them.

Trying to make things look pretty is not really an excuse to ignore these signifiers. Remember that the difference between good and bad design is not only about esthetics. Good design gets out of the way of the user. Bad design stands in the way of the user.

There are some exceptions: Even though blue is the preferred link color, it’s not the only color you can use as your link color. Your brand color might work nicely as a link color. Also, links inside clearly identified menus (navbars, sidebars, etc.) don’t have to be uniform with text links.

### Preserving click certainty in CSS

A big problem of click uncertainty is that it requires discipline. As your project grows both in feature and team size, it’s not going to be easy to enforce usability rules.

I’m going to be honest here. I don’t think click uncertainty is the thing that’s going to make or break your project (unless you make a conscious effort to confuse your users). You will forget you read about click uncertainty. Other designers in your company will probably never hear the term click uncertainty.

Even I will forget that I wrote 500 words about click uncertainty.

Instead of trying to keep a list of clickability signifiers in our head, what if we would just make it hard for ourselves to break these rules in the first place?

This is where CSS and the `!important` declaration can help us.

CSS is a collection of your website’s style rules. These style rules are processed in a certain order based on class names and nesting. You can override all these rules with the `!important` declaration.

People hate `!important` for a good reason.

If you are trying to add some new style rules to a project but other rules keep overriding your new rules, you might be tempted to just write `!important` instead of making more time-consuming changes to the codebase.

`!important` is the easy way out. But your `!important` rules will make it harder for other people to add their changes to the codebase. Usually when you add `!important` declarations you also add technical debt to your project. You can use `!important` to make your work super easy and everybody else’s super hard.

But maybe click uncertainty is the perfect use case for `!important`?

If all your links are of the same color, why shouldn’t  you set that color with an additional `!important` declaration? Knowing what you now know about click uncertainty, can you argue why it’s okay for your site to not have uniform links? If your argument is about esthetics, maybe you are trying to stand out *by standing in the way*.

Consider adding these two rules to your project:


    /* Make link colors uniform. */
    a {
      color: var(--link-color) !important;
    }

    /* Prevent headings with background colors. */
    h1, h2, h3, h4, h5, h6 {
      background: transparent !important;
    }

If your menu links should be a different color, feel free to add some additional rules with `!important` . If you are feeling inspired, consider writing your button classes with `!important` ([Chris Coyier from CSS-Tricks approves](https://css-tricks.com/when-using-important-is-the-right-choice/)).

###  Final thoughts

I thought it might be pretty hypocritical for me to write about click uncertainty and not re-evaluate the clickability signifiers on [flashover.blog](http://www.flashover.blog/).

Here are the changes that I made to reduce the click uncertainty of [flashover.blog](http://www.flashover.blog/):

* I added underlines to my links inside posts.
* My article headings are actually the links to the posts. They don’t look like links though (unless you hover over them with your mouse). I currently display all my posts as they are on the home page. This means you don’t really have to click the heading to read the post. However, you might want to get the link for an individual post for sharing or saving. Therefore I added separate links to the posts that literally say “Link to post”.
* My blog title “Flashover” serves also as a link to the home page but like my article headings it doesn’t look like a link. Page titles are usually styled differently than normal links. There are other signifiers (position, size, typography) that indicate a page title is in fact a page title. And I would argue that people expect to be able to click a page title and get to the home page. I still wanted to make it easier for people to navigate from an individual post to a list of all posts. For that purpose I added a new link that just says “Read all posts”. Simple stuff.

### PS.

If you want to read more about clickability signifiers and click uncertainty, I recommend checking out these two articles from NN/g:

* [Flat UI Elements Attract Less Attention and Cause Uncertainty](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/)
* [Beyond Blue Links: Making Clickable Elements Recognizable](https://www.nngroup.com/articles/clickable-elements/)

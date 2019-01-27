---

title: Creative Constraints, Play, and Serverless
description: Serverless architecture has made me work slower but also experience moments of joy
type: article
date: 2019-01-27
tags:

---

**Disclaimer:** I’m going to talk about serverless architecture only from the point of view of my personal projects. I'm not making an argument for or against serverless architecture on a professional level. The aim of this post is to only encourage you to experiment more with different approaches to building software.

Two weeks ago, [Go was announced as a supported language for Google's Cloud Functions](https://cloud.google.com/blog/products/application-development/cloud-functions-go-1-11-is-now-a-supported-language). Go is one of [the programming languages I'm learning this year](http://www.flashover.blog/posts/what-to-learn-in-2019/). I have already gone through some basic tutorials for Go and now I'm trying to build something real with the language.

For a while I was struggling to think of a great hobby project for Go. But when Cloud Functions support for Go was announced, I knew I had to build something using the platform; not only would I get to write Go, but I would also get to experiment with serverless architecture for the first time.

I mainly work with Ruby on Rails projects which have a *monolithic architecture*. Monoliths are almost the exact opposites of serverless projects. While serverless means that you break down your application's logic into small, autonomic components, monoliths hold all the required logic inside the same application. Monolithic architecture is the traditional way of building web software.

When you hear the words "monolithic" and "traditional", fast and agile development patterns might not be the first things that come to your mind. However, compared to serverless architecture, monoliths tend to be much more simpler to develop, test, and deploy.

This is because serverless architecture forces you to separate your application logic into smaller entities that are harder to work with in tandem. Good code is all about [separating logic](https://en.wikipedia.org/wiki/Separation_of_concerns) into [different modules and classes](https://en.wikipedia.org/wiki/Single_responsibility_principle). But you can have this abstract-level separation inside your monolith. You don't need serverless architecture for this.

The separation of logic introduced by serverless architecture, means that you now have much more concrete boundaries between different parts of your application. If you want to introduce a new feature for your application, you have to make changes in bunch of different codebases instead of one monolithic codebase. You also have to deploy a new version for each independent service that you have to change. With a monolith, you would introduce the new feature with a one-time update for the whole application.

### Example of monolithic vs. serverless development

Imagine a simple web app for to-do lists. Users can create new lists, add to-dos to them, and mark the to-dos as done.

Previously, the to-dos only had a text field for description. Now we want our users to be able to not only write text, but also attach images to their to-dos.

Let's think for a second what kind of changes we have to make into our code to make this work: First, we need to have some sort of graphical upload widget for the users. Previously, when users submitted a new to-do, they sent out an HTTP request with the to-do description. Now our handlers for those HTTP requests need to have support for image data. That's a second task. Third, we want to process the incoming images before saving them. We want to scale down very large images and we want to create a thumbnail version for each individual image. Finally, we need to actually save the images somewhere and display them to our users.

When I work with Ruby on Rails, I can implement all those tasks without switching between different services or codebases. Once I'm done, I can deploy all my changes with a single update. In my mind (or on paper) I break down the new feature request into smaller tasks. But there are no actual concrete boundaries between all the code that needs to be changed. I break things down to make my work easier, not because I have to.

Working with serverless architecture has been a totally different development experience. To start with, I need to have two separate projects for my front-end and back-end logic. But moreover, I have not been able to share state between my back-end functions automatically.

This has forced me to think about code and application logic in new ways. For example with Ruby on Rails, I don't have to first think about where each part of my application logic lives. I can always figure that stuff out when I need to. With serverless architecture, you have to do lot more upfront planning. Stepping over to another part of the application is a much more of a pain.

### Developer happiness and experimentation

Serverless architecture has made me work slower. Writing with a new language while discovering a new production environment feels extremely tiring at times. But right now I'm also feeling excited and energized. Not because I believe that serverless architecture is the future of all software but because I have had some genuine moments of creative joy.

There are two things that I think made me experience such high levels of developer happiness. First, serverless architecture forced me to make hard decisions about the scope of my independent services. This meant that I had to introduce creative constraints and actual limitations to my hobby project. We usually dream about creative freedom instead of constraints. But constraints help us focus and ship. With creative freedom comes analysis paralysis and never-ending tinkering.

Second, experimenting with serverless architecture was a form of play for me. I'm a strong believer in habits when it comes to coding or pretty much any aspect of my personal or professional life. However, sometimes habits can make life a little boring or make us forget to stay curious. It's nice to shake things up every now and then.

I hope that this week you all get to play a little as well.

### Additional notes

I'll share my live hobby project and the code for it here when I get a working version out.

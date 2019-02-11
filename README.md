# Flashover
[![Build Status](https://travis-ci.com/jonaskay/flashover-blog.svg?branch=master)](https://travis-ci.com/jonaskay/flashover-blog)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f7e5f080-bc10-4101-9e03-a022684787cf/deploy-status)](https://app.netlify.com/sites/flashover/deploys)

## About

This is my personal blog built with [Middleman](https://middlemanapp.com/). You can read it at <http://www.flashover.blog>.

## Getting Started

### Requirements

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io/)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [gulp-cli](https://gulpjs.com/)

### Installation

To install gems, run

```
$ bundle install
```

To install Node.js dependencies, run

```
$ yarn install
```

## Useful Commands

To start the development server, run

    $ bundle exec middleman server

To build the site, run

    $ bundle exec middleman build

## Deployment

The production site is built after each push to `master`. The staging site is built after pushing to branch `staging`.

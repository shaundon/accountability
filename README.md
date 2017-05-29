# Accountability

A tool for tweeting people about delays.

## Background

I'm having some issues with a company who won't pull their finger out. This
tool is based on [benwilder/autotweet](https://github.com/benwilder/autotweet), who
used it to great effect when he had a similar issue in the past.

## Requirements

* Twitter API credentials.
* NodeJS.
* NPM or Yarn.

## Getting started

Install dependencies:

```
npm install
```

Make a copy of `config.example.json` named `config.json` and add your credentials to it.

Run it:

```
npm start
```

## Run it on a schedule

Add this to your Crontab (adjust the schedule to suit you).

```
* * * * * /usr/bin/npm start --prefix ~/path/to/repo
```

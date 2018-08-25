# SAF 1.0

## Quick and Dirty Installation Guide

This is an installation guide for those running some modern version of Mac OS X.

### Pre-requisites

First, ensure that you have Ruby installed. You can do this by opening your Terminal (Applications > Utilities > Terminal) and running the following command:

```
ruby -v
```

If you get some response with a version number, you're good.

Next, you'll need [NodeJS](https://nodejs.org). The "mature and dependable" version should do the trick. After the package is installed, run the following command:

```
node -v
```

If you get a version number, you're good.

Last, you'll need to install [Git](http://git-scm.com). Download the latest version. After the package is installed, run the following command:

```
git --version
```

If you get a version…you get the gist.

### Installation

- Install gulp via npm: `npm install -g gulp`
- Clone the repo from [https://github.com/safxgroup/safx-fe](https://github.com/safxgroup/safx-fe). Ask Deb for permissions if you're not part of the group.
- Change directories to safx-fe and run the following commands (if you receive a permissions error, run the commands prepended with `sudo`):
  - `npm install`
  - `gem install jekyll`
- There is no step 4

### Gulp Commands

- `gulp` will run everything and create the dist directory
- `gulp watch` will run a process that watches for HTML and CSS updates, and will build on save
- `gulp serve` will run a web server that hosts the `/dist` directory. The files can be viewed at `http://localhost:4000`

const { Post } = require('../models');

const postdata = [
  {
    title: 'RedwoodJS vs. BlitzJS: The Future of Fullstack JavaScript Meta-Frameworks',
    post_url: 'Redwood and Blitz are two up-and-coming full-stack meta-frameworks that provide tooling for creating SPAs, server-side rendered pages, and statically generated content, providing a CLI to generate end-to-end scaffolds. I’ve been waiting for a worthy Rails replacement in JavaScript since who-knows-when. This article is an overview of the two, and while I’ve given more breadth to Redwood (as it differs from Rails a great deal), I personally prefer Blitz.',
    user_id: 10
  },
  {
    title: 'JavaScript Interview Questions & Answers',
    post_url: 'JavaScript is widely used by web developers and is supported by all major web browsers. If you are looking for a job as a web developer, you will most likely be asked to answer some questions about JavaScript during your interview. In this article, we have compiled a list of some of the most vital JavaScript interview questions and answers you should definitely know the answers for. We hope this article will help you prepare for your next interview and ace it!',
    user_id: 8
  },
  {
    title: 'The fs Module in Node.js: A Short Guide to File System Interaction',
    post_url: 'Node.js is an asynchronous event-driven JavaScript runtime and is the most effective when building scalable network applications. Node.js is free of locks, so there is no chance to dead-lock any process. is a powerful platform that lets you build fast, scalable network applications. One of the modules that comes with Node is fs, which provides access to the file system. In this article, we will give an overview of what the fs module does and how you can use it to interact with your files. We will also provide a tutorial on how to use some of its more common functions.',
    user_id: 1
  },
  {
    title: 'How to check Node version',
    post_url: 'Knowing what Node.js is an asynchronous event-driven JavaScript runtime and is the most effective when building scalable network applications. Node.js is free of locks, so there is no chance to dead-lock any process. version you have in a project is vital because it affects the Node and JavaScript language features you can use. Also, you might not want to miss out on essential security patches or experience compatibility problems.',
    user_id: 4
  },
  {
    title: 'Download & Update Node.js to the Latest Version! Node v18.7.0 Current / LTS v16.16.0',
    post_url: 'Node 16 is the LTSLTS means long-term support. The acronym is often used to mark Node.js release lines that will be maintained and supported for an extended period. There are two separate kinds of LTS releases: Active and Maintenance. The Active release line often gets new features and other improvements beside security patches and bug fixes, and the Maintenance only gets the latter. It... version since 2021-10-26, while Node 18 became the Current version from 2022. April 19. The next LTS version, v18 is planned to take over on 2022-10-25. In this article below, you’ll find changelogs and download / update information regarding Node.jsNode.js is an asynchronous event-driven JavaScript runtime and is the most effective when building scalable network applications. Node.js is free of locks, so there is no chance to dead-lock any process.',
    user_id: 7
  },
  {
    title: 'Puppeteer HTML to PDF Generation with Node.js',
    post_url: 'In this article I’m going to show how you can generate a Puppeteer PDF document from a heavily styled React web page using Node.js',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

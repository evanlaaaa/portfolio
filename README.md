# Evan's Personal Website

### Description

This is my personal website built with React.js and Next.js. Currently hosted on Github Pages: https://evanlaaaa.github.io/portfolio/

### Features

- 📱  Responsive design

- 🔥 Static Site generated by [Next.js](https://nextjs.org)

- 🎨 Integrate with [Chakra UI](https://chakra-ui.com/)

Run locally in development mode:

```
$ git https://github.com/evanlaaaa/portfolio.git
$ cd portfolio
$ npm i
$ npm run dev
```

Open <http://localhost:3000> to see your project.

In case if you are getting ```404 Page Not Found```, you might want to follow these step:

 1. **basePath**: change the basePath configuration in the /next.config.js. The reason why I set it to /portfolio is that when hosting a page with Github Pages, you will get your repository name as a prefix. You shouldn't have this issue while running locally.

 2. **assetPrefix**:  this should be similar to your ```basePath```. ```assetPrefix``` is only for next.js assets such as css, js. You will need to manually remove/add prefix from images src

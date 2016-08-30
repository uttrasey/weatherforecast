# 5 day weather forecast

`npm install` // gather deps

`npm start` // run [local](http://localhost:3000) with hot reload

`npm run build` // bundle minified [production](https://weather.trazyinc.com) code

### Architecture Notes

- I have been maintaining my own React boilerplate to deploy any apps that I build. It takes inspiration from many sources and most recently I incorporated a number of features from an ejected [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) build.
- My personal preference is to move away from gulp/grunt and get as much into Webpack & pure JS as possible. Webpack is great and we already know JS so not using another tool means one less thing to learn/forget.
- Optioned Babel as it allows us to write beautiful code
- Optioned Aphrodite as I've been meaning to use a JS CSS framework (css modulesesque)
- Optioned JEST as it's supported very well with React and does a good job
- Put in an s3 bucket on AWS as I already have a couple of sites + SSL there. Next steps would be putting the JS on CloudFront CDN.

### TODO

- Add in better redux async support for failed requests etc
- Add in support for failed locations (routing etc.)
- Allow reloading of weather requests (currently they will cache)
- Make it prettier... didn't have time for fancy CSS/HTML

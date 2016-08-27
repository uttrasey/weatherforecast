# 5 day weather forecast

`npm install` // gather deps

`npm start` // run [local](http://localhost:3000) with hot reload

`npm run build` // bundle minified [production](http://weather.trazyinc.com) code

### Architecture Notes

- I have been maintaining my own React boilerplate to deploy any apps that I build. It takes inspiration from many sources and most recently I incorporated a number of features from an ejected [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) build.
- My personal preference is to move away from gulp/grunt and get as much into Webpack pure JS as possible. Webpack is great and we already know JS so not using another tool means one less thing to learn/forget.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FeedComponent,TweetsComponent, TweetDetailComponent} from './tweets'
import * as serviceWorker from './serviceWorker';
import {ProfileBadgeComponent} from './profiles'

const appEl = document.getElementById('root')

if (appEl) {
  ReactDOM.render(<App />, appEl);
}
const e = React.createElement
const tweetsEl = document.getElementById("twittwit")
if (tweetsEl) {
  ReactDOM.render(
    e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetFeedEl = document.getElementById("twittwit-feed")
if (tweetFeedEl) {
    ReactDOM.render(
        e(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailElements = document.querySelectorAll(".twittwit-detail")

tweetDetailElements.forEach(container=> {
    ReactDOM.render(
        e(TweetDetailComponent, container.dataset), 
        container);
})

const userProfileBadgeElements = document.querySelectorAll(".twittwit-profile-badge")

userProfileBadgeElements.forEach(container=> {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset), 
        container);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

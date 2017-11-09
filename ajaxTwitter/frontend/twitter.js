const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose')

$(() => {
  $('button.follow-toggle').each((i, button) => {
    new FollowToggle(button);
  });

  $('nav.users-search').each((i, nav) => {
    new UsersSearch(nav);
  });

  $('form.tweet-compose').each((i, tweet) => {
    new TweetCompose(tweet);
  });
});

const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.handleInput();
  }

  handleInput() {
    this.$input.on('input', (e) => {
      e.preventDefault();
      APIUtil.searchUsers(this.$input.val())
        .then((resp) => {
          this.renderResults(resp);
        });
    });
  }

  renderResults(resp) {
    this.$ul.empty();
    resp.forEach(el => {
      let $li = $(`<li></li>`);
      let $anchor = $(`<a href="/users/${el.id}">${el.username}</a>`);
      let $button = $(`<button></button>`);
      new FollowToggle($button, {
        userId: el.id,
        followState: el.followed ? 'followed' : 'unfollowed'
      });

      $li.append($anchor);
      $li.append($button);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;

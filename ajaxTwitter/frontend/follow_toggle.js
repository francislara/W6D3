const APIUtil = require("./api_util");

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === 'following' || this.followState === 'unfollowing') {
      this.$el.prop("disabled", true);
    } else {
      this.$el.prop("disabled", false);
    }
    if (this.followState === 'unfollowed') {
      this.$el.text('Follow!');
    } else {
      this.$el.text('Unfollow!');
    }
  }

  handleClick() {
    const handleSuccess = (resp) => {
      this.followState = this.followState === 'following' ? 'followed' : 'unfollowed';
      this.render();
    };
    $(this.$el).on('click', (e) => {
      e.preventDefault();
      this.followState = this.followState === 'unfollowed' ? 'following' : 'unfollowing';
      this.render();
      if(this.followState === 'following') {
        APIUtil.followUser(this.userId)
          .then(handleSuccess);
      } else {
        APIUtil.unfollowUser(this.userId)
          .then(handleSuccess);
      }
    });
  }
}

module.exports = FollowToggle;

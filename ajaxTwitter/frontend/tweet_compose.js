const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on('submit', (e) => {
      e.preventDefault();
      this.submit();
    });
  }

  submit() {
    let data = this.$el.serializeJSON();
    this.$el.find(":input").each( (i, input) => {

      $(input).prop("disabled", true);
    });
    APIUtil.createTweet(data)
      .then(this.handleSuccess.bind(this));
  }

  clearInput() {
    this.$el.find(":input").each( (i, input) => {
      $(input).prop("disabled", false);
      $(input).val('');
    });
  }

  handleSuccess(resp) {
    this.clearInput();
    let stringify = JSON.stringify(resp);
    $(this.$el.data("tweets-ul")).append(`<li>${stringify}</li>`);
  }
}

module.exports = TweetCompose;

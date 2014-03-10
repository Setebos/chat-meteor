Template.messagesPage.events({
	'submit form': function(e) {
		e.preventDefault();
		var $content = $(e.target).find('[name=message]');
		var message = {
			content: $content.val(),
		}

		Meteor.call('post', message, function(error, id) {
			if(error) {
				throwError(error.reason);
			} else {
				$content.val('');
			}
		});
	}
});
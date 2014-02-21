Template.messagesList.helpers({
	messages: function() {
		return Messages.find({}, {sort: {posted: -1}});
	}
})
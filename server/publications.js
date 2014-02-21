Meteor.publish('messages', function() {
	return Messages.find({}, {sort: {posted: -1}});
});
Meteor.publish('messages', function() {
	return Messages.find({}, {sort: {posted: -1}});
});

Meteor.publish('notifications', function() {
	return Notifications.find({userId: this.userId});
});
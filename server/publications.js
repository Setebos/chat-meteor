Meteor.publish('messages', function() {
	return Messages.find({}, {sort: {posted: -1}});
});

Meteor.publish('notifications', function() {
	return Notifications.find({userId: this.userId});
});

Meteor.publish('userStatus', function() {
	return Meteor.users.find({"status.online": true}, {fields: {username: 1}})
});
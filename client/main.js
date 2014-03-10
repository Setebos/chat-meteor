Template.main.helpers({
	notificationCount: function() {
		return Notifications.find({userId: Meteor.userId(), read: false}).count();
	},
	plural: function() {
		return Notifications.find({userId: Meteor.userId(), read: false}).count() > 1;
	}
});
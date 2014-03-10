Meteor.subscribe('userStatus');

Template.messagesList.helpers({
	messages: function() {
		return Messages.find({}, {sort: {posted: -1}});
	},
	users: function() {
		return Meteor.users.find();
	},
	notifMessage: function() {
		return Notifications.find({messageId: this._id, userId: Meteor.userId()}).fetch().length;
	}
})


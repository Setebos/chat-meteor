Meteor.subscribe('userStatus');

Template.messagesList.helpers({
	messages: function() {
		return Messages.find({}, {sort: {posted: -1}});
	},
	users: function() {
		// return Meteor.users.find();
		// return Meteor.call('findUsers');
		return Meteor.users.find();
	}
})


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
	},
	isAdmin: function() {
		return Meteor.users.find({_id: Meteor.userId(), role: 'superadmin'}).fetch().length;
	}
});

Template.messagesList.events({
	'click a.smite': function(e) {
		var id = this._id;
		bootbox.confirm("Unleash the BANHAMMER ?", function(result) {
			if(result == true) {
				Meteor.call('smite', id, function(error,id) {	
					if(error) {
						throwError(error.reason);
					}
				});
			}	
		});
	}
});


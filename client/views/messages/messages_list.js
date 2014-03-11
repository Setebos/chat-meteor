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
		return (Meteor.users.find({_id: Meteor.userId(), role: 'superadmin'}).fetch().length && Meteor.userId() != this._id);
	},
	isBanned: function() {
		return Meteor.users.find({_id: this._id, banned: true}).fetch().length;
	}
});

Template.messagesList.events({
	'click a.smite': function(e) {
		var id = this._id;
		var user = Meteor.users.findOne({_id: id}).username;
		bootbox.prompt("Unleash the BANHAMMER ?", function(result) {
			if(result !== null && result != '') {
				Meteor.call('smite', id, function(error,id) {	
					if(error) {
						throwError(error.reason);
					}
				});
				var content = user + " a été banni avec la justification suivante : " + result;
				Meteor.call('postBanMessage', content, function(error, id) {
					if(error) {
						throwError(error.reason);
					}
				});
			}	
		});
	},
	'click a.deban': function(e) {
		var id = this._id;
		var user = Meteor.users.findOne({_id: id}).username;
		var content = user + " a été débanni";
		bootbox.confirm("Deban ?", function(result) {
			if(result == true) {
				Meteor.call('deban', id, function(error,id) {	
					if(error) {
						throwError(error.reason);
					}
				});
				Meteor.call('postBanMessage', content, function(error, id) {
					if(error) {
						throwError(error.reason);
					}
				});
			}	
		});
	}
});

Template.notifications.helpers({
	notifications: function() {
		return Notifications.find({userId: Meteor.userId(), read: false});
	},
	notificationCount: function(){
		return Notifications.find({userId: Meteor.userId(), read: false}).count();
	}
});

Template.notification.events({
	'click a': function() {
		Notifications.update(this._id, {$set: {read: true}});
		bootbox.alert("<p> Message posté à " + moment(new Date(this.posted)).format('HH:mm') + " le " + moment(new Date(this.posted)).format('DD/MM') + " : </p><blockquote><p>" + this.message + "</p></blockquote>");
	}
});

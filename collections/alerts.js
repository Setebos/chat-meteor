Alerts = new Meteor.Collection('alerts');

Meteor.methods({
	createNewAlert: function(text) {
		var alertId = Alerts.insert({
			userId: Meteor.userId(),
			alertText: text
		});

		return alertId;
	}
})

Alerts = new Meteor.Collection('alerts');

Meteor.methods({
	createNewAlert: function(text) {
		var alertId = Alerts.insert({
			userId: Meteor.userId(),
			alertText: text
		});
		return alertId;
	},
	deleteAlert: function(id) {
		var result = Alerts.remove({_id: id});
		return result;
	}
})

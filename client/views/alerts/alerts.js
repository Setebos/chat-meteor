Template.alerts.helpers({
	alerts: function() {
		return Alerts.find({userId: Meteor.userId()});
	},
	alertCount: function(){
		return Alerts.find({userId: Meteor.userId()}).count();
	}
});

Template.alerts.events({
	'click a.new-alert': function() {
		bootbox.prompt("New Alert", function(result) {
			if (result !== null) {
				Meteor.call('createNewAlert', result, function(error, id) {
					if(error) {
						throwError(error.reason);
					}
				});
				// Alerts.createNewAlert(result);
			}
		});
	}
});

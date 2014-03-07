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
		bootbox.prompt("Nouvelle alerte", function(result) {
			if (result !== null) {
				Meteor.call('createNewAlert', result, function(error, id) {
					if(error) {
						throwError(error.reason);
					}
				});
			}
		});
	}
});

Template.alert.events({
	'click a.alert-delete': function() {
		var id = this._id
		bootbox.confirm("Voulez-vous supprimer cette alerte personnalisée ?", function(result) {
			if(result == true) {
				Meteor.call('deleteAlert', id, function(error, id) {
					if(error) {
						throwError(error.reason);
					}
				});
			}
		});
	}
})

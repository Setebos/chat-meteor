Meteor.methods({
	smite: function(id) {
		Meteor.call('sendBanAlert', id, function(error,id) {	
			if(error) {
				throwError(error.reason);
			}
		});
		Meteor.users.update(id, {$set: {banned: true}});
	},
	deban: function(id) {
		Meteor.call('sendDebanAlert', id, function(error,id) {	
			if(error) {
				throwError(error.reason);
			}
		});
		Meteor.users.update(id, {$set: {banned: false}});
	}
})
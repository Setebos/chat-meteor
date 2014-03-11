Meteor.methods({
	smite: function(id) {
		Meteor.users.remove({_id: id});
	}
})
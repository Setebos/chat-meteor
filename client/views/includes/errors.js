Template.errors.helpers({
	errors: function() {
		return Errors.find({userId: null});
	},
	banAlert: function() {
		return Bans.find();
	}
});

Template.error.rendered = function() {
	var error = this.data;
	Meteor.defer(function() {
		Errors.update(error._id, {$set: {seen: true}});
		Meteor.call('banUpdate', error._id, function(error, id) {
			if(error) {
				throwError(error.reason);
			}
		});
	});
};
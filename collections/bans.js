Bans = new Meteor.Collection('bans');

Meteor.methods({
	sendBanAlert: function(id) {
		Bans.insert({message: "Vous avez été banni par un administrateur", seen:false, userId: id});
	},
	sendDebanAlert: function(id) {
		Bans.insert({message: "Vous avez été débanni par un administrateur", seen:false, userId: id});
	},
	banUpdate: function(id) {
		Bans.update(id, {$set: {seen: true}});
	},
	deleteBans: function() {
		Bans.remove({seen: true});
	} 
});


clearBans = function() {
	Meteor.call('deleteBans');
};
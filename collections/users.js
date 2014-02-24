UserList = new Meteor.Collection('userlist');

Meteor.methods({
	findUsers: function() {
		var users = Meteor.users.find({}, {profile: 1});
		count = 0;
		users.forEach(function(user) {
			count++;
			if(!user.profile) {
				console.log("bouh");
			} else {
				// console.log(user.profile.name);
				UserList.insert({name: user.profile.name});
			}
		});
		return UserList.find();
	}
})

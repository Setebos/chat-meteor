if(Messages.find().count() === 0) {

	var now = new Date().getTime();

	var pipouId = Meteor.users.insert({ profile: { name: 'Pipou'}});
	var bobId = Meteor.users.insert({ profile: { name: 'Bob'}});

	var pipou = Meteor.users.findOne(pipouId);
	var bob = Meteor.users.findOne(bobId);

	Messages.insert({
		userId: pipou._id,
		author: pipou.profile.name,
		content: 'Message Test 1',
		posted: now - 7 * 3600 * 1000
	});
	Messages.insert({
		userId: bob._id,
		author: bob.profile.name,
		content: 'Message Test 2',
		posted: now - 5 * 3600 * 1000
	});
	Messages.insert({
		userId: pipou._id,
		author: pipou.profile.name,
		content: 'Message Test 3',
		posted: now - 3 * 3600 * 1000,
	});
}
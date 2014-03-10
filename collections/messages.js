Messages = new Meteor.Collection('messages');

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user();

		if(!user) {
			throw new Meteor.Error(401, "Vous devez être connecté pour poster un message");
		}

		if(!postAttributes.content) {
			throw new Meteor.Error(422, 'Veuillez entrer un message');
		} 

		var content = postAttributes['content'].toLowerCase();

		var message = _.extend(_.pick(postAttributes, 'content'), {
			userId: user._id,
			author: user.username,
			posted: new Date().getTime(),
		});

		var messageId = Messages.insert(message);

		Meteor.users.find().forEach(function (utilisateur) {
			if(content.indexOf(utilisateur.username.toLowerCase()) > -1 && user._id != utilisateur._id) {
				createMessageNotification(message, messageId, utilisateur._id, false);
			}
		});

		Alerts.find().forEach(function (alert) {
			// Vérifier qu'il n'y a pas déjà une notif pour ce message avant d'en créer une
			if((content.indexOf(alert.alertText.toLowerCase()) > -1) && (!Notifications.find({messageId: messageId, userId: alert.userId}).fetch().length) && user._id != alert.userId) {
				createMessageNotification(message, messageId, alert.userId, true);
			}
		});

		return messageId;
	}
})

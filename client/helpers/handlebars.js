Handlebars.registerHelper("prettifyDate", function(time) {
    // return new Date(time).toString('hh:MMtt');
    return moment(new Date(time)).format('HH:mm:ss');
 //    var date = new Date(time);
 //    var secondes=date.getSeconds();
	// var minute=date.getMinutes();
	// var heure=date.getHours();
	// var prettyDate = heure+":"+minute+":"+secondes;
	// return prettyDate;
});

	
/**
 * Created by bORm on 15.02.2015.
 */
module.exports = {
	// Render Index View
	index: function(req, res) {

		if ( req.user ) {
			req['user'] = {
				username : null
			}
		}

        User.findOne({id: req.session.passport.user}, function (err, user) {
            res.view({
                username: user,
                partials: {
                    head: 'partials/head',
                    tail: '../partials/tail'
                }
            });
        });
	},
	join: function(req, res) {
		/*var room = req.param('room');

		// If request from WebSocket, this method is exist.
		req.socket.join(room);

		res.json({
			success: true
		});*/
		// Get the value of a parameter
		var param = req.param('message');

		// Send a JSON response
		res.json({
			success : true,
			message : param
		});
	}
};
const handleProfile = (req, res, db) => {
	const { id } = req.params;
	db.select('*').from('users').where({id})
	.then(user => {
		if(user.length) {
			user = user[0];
			res.json(user);
		}
		else {
			res.status(400).json('Error getting user')
		}

	})
	.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleProfile: handleProfile
};
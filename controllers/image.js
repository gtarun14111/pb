const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '7996f5a7a1194e2f83bf1423b8fd16c1'
});

const handleApiCall = (res, req) => {
		app.models
		.predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
		.then(data => {
			res.json(data);
		})
		.catch(err => res.status(400).json('unable to work with API'))
	}

const handleImage = (req, res, db) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('unable to update entries'))
}

module.exports = {
	handleImage: handleImage,
	handleApiCall: handleApiCall
};


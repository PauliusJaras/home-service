const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const categories = [

]

const businesses = [
	{ id: 1, title: "Harry Potter", author: "J.K. Rowling", category: 'meow' },
	{ id: 2, title: "Lord of the Rings", author: "J.R.R. Tolkien", category: 'test' },
	{ id: 3, title: "Lord of the Rings 2", author: "J.R.R. Tolkien", category: 'test' }
]

const bookings = [

]

//categories
app.get('/categories', (req, res) => {
	res.status(200).json(categories);
});

app.post('/categories', (req, res) => {
	const newCategory = { id: categories.length + 1, ...req.body };
	books.push(newCategory);
	res.status(201).json(newCategory);
});

//businesses
app.get('/businesses', (req, res) => {
	res.status(200).json(businesses);
});


app.get('/businesses/category/:category', (req, res) => {

	const businessCategory = req.params.category;
	const selectBusinesses = businesses.filter((business) => business.category === businessCategory);

	if (selectBusinesses.length != 0) {
		res.status(200).json(selectBusinesses);
	} else {
		res.status(404).send('Business with the specified Category not found');
	}
});


app.get('/businesses/:id', (req, res) => {
	const businessId = parseInt(req.params.id);
	const selectBusiness = businesses.filter((business) => business.id === businessId);

	if (selectBusiness.length != 0) {
		res.status(200).json(selectBusiness);
	} else {
		res.status(404).send('Business with the specified ID not found');
	}
});

app.post('/businesses', (req, res) => {
	const newBusiness = { id: businesses.length + 1, ...req.body };
	books.push(newBusiness);
	res.status(201).json(newBusiness);
});


//reminder to update put structure
app.put('/businesses/:id', (req, res) => {
	const businessId = parseInt(req.params.id);
	const { title, provider } = req.body;
	const businessIndex = businesses.findIndex(business => business.id === businessId);

	if (businessId !== -1) {
		businessIndex[businessId] = { id: businessId, title, provider };
		res.json(businesses[businessIndex]);
	} else {
		res.status(404).send('Business with the specified ID not found');
	}
});

//bookings
app.get('/bookings/user/:email', (req, res) => {
	res.status(200).json(bookings);
});

app.get('/bookings/user/:email', (req, res) => {

	const email = req.params.email;
	const selectBooking = bookings.filter((booking) => booking.email === email);

	if (selectBooking.length != 0) {
		res.status(200).json(selectBooking);
	} else {
		res.status(404).send('Booking with the specified email not found');
	}
});


//update logic later...
app.get('/businesses/:businessId/bookings/date/:date', (req, res) => {

	const businessId = parseInt(req.params.businessId);
	const date = req.params.date;
	const selectBooking = bookings.filter((booking) => booking.email === email);

	if (selectBooking.length != 0) {
		res.status(200).json(selectBooking);
	} else {
		res.status(404).send('Booking with the specified business id and date not found');
	}
});

app.post('/bookings', (req, res) => {
	const newBooking = { id: bookings.length + 1, ...req.body };
	books.push(newBooking);
	res.status(201).json(newBooking);
});

app.delete('/bookings/:id', (req, res) => {
	const bookingId = parseInt(req.params.id);
	const bookingToDelete = bookings.find(booking => booking.id === bookingId);
	bookings = bookings.filter(booking => booking.id !== bookingId);

	if (bookingToDelete) {
		res.status(200).json(bookingToDelete);
	} else {
		res.status(404).send('Booking with the specified ID not found');
	}
});


app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
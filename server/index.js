const express = require('express');
const { connectToDb, PORT } = require('./db');
const app = express();
const Booking = require('./schemas/bookingSchema');
const Business = require('./schemas/businessSchema');
const Category = require('./schemas/categorySchema');
app.use(express.json());

//categories
app.get('/categories', async (req, res) => {
	try {
		const categories = await Category.find();
		res.json(categories);
	} catch (err) {
		res.status(500).json(err);
	}
});

app.post("/categories", async (req, res) => {
	const newCategory = new Category(req.body);
	try {
		const savedCategory = await newCategory.save();
		res.status(201).json(savedCategory);
	} catch (err) {
		res.status(400).json(err);
	}
});

//businesses
app.post("/businesses", async (req, res) => {
	const business = req.body;

	try {
		const categoryExists = await Category.findOne({ name: business.category });
		if (!categoryExists) {
			return res
				.status(400)
				.json({
					message: "Failed to add business: specified category does not exist.",
				});
		}

		const newBusiness = new Business(business);

		const savedBusiness = await newBusiness.save();
		res.status(201).json(savedBusiness);
	} catch (err) {
		res
			.status(500)
			.json({
				message: "Server error while adding business.",
				error: err.message,
			});
	}
});

app.get("/businesses/category/:category", async (req, res) => {
	try {
		const filteredBusinesses = await Business.find({
			category: req.params.category.toLowerCase(),
		});
		res.json(filteredBusinesses);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Error fetching businesses by category", error: err });
	}
});

app.get("/businesses/:id", async (req, res) => {
	try {
		const business = await Business.findById(req.params.id);
		if (business) {
			res.json(business);
		} else {
			res.status(404).send("Business not found");
		}
	} catch (err) {
		res.status(500).json({ message: "Error fetching business", error: err });
	}
});


//bookings
app.post("/bookings", async (req, res) => {
	try {
		const newBooking = new Booking(req.body);
		await newBooking.save();
		res.status(201).json(newBooking);
	} catch (err) {
		res
			.status(400)
			.json({ message: "Error creating booking", error: err?.message ?? err });
	}
});

app.get("/businesses/:businessId/bookings/date/:date", async (req, res) => {
	try {
		const slots = await Booking.find({
			businessId: req.params.businessId,
			date: new Date(req.params.date),
		});
		res.json(slots);
	} catch (err) {
		res.status(500).json({
			message: "Error fetching bookings for the specified date and business",
			error: err,
		});
	}
});

app.get("/bookings/user/:email", async (req, res) => {
	try {
		const userBookings = await Booking.find({ userEmail: req.params.email });
		res.json(userBookings);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Error fetching bookings for the user", error: err });
	}
});

connectToDb().then(() => {
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
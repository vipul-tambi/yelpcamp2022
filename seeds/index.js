const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');


const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '62c8f294b1a384156c7b079e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price: price,
            geometry: { "type": "Point", "coordinates": [cities[random1000].longitude, cities[random1000].latitude] },
            image: [
                {
                    url: 'https://res.cloudinary.com/dfbpqrxze/image/upload/v1658239002/Yelpcamp/z3id1ptdhvboso2mc5qd.jpg' ,
                    filename: 'Yelpcamp/z3id1ptdhvboso2mc5qd'
                },
                {
                    url: 'https://res.cloudinary.com/dfbpqrxze/image/upload/v1658239002/Yelpcamp/z3id1ptdhvboso2mc5qd.jpg',
                    filename: 'Yelpcamp/z3id1ptdhvboso2mc5qd'
                }
            ]

        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
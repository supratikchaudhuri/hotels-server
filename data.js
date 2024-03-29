import bcrypt from "bcryptjs"

const data = {
    users: [
        {
            name: 'Supratik',
            email: 'rikc.2000@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: true,
        },
        {
            name: 'Supra',
            email: 'rikc@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: false,
        },
        {
            name: 'John Doe',
            email: 'jd@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: false,
        },
        {
            name: 'Qwerty',
            email: 'q@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: true,
        },
        {
            name: 'Alice',
            email: 'a@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: false,
        },
        {
            name: 'Rachel',
            email: 'r@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: false,
        },
        {
            name: 'Toto',
            email: 't@gmail.com',
            password: bcrypt.hashSync( '12345' , 8),
            isAdmin: true,
        },
    ],
    products: [
        {
            name: "Sherman Oaks Phase 4, Balewadi",
            category: "Villa",
            image: "http://prod-upp-image-read.ft.com/27ee9b4a-668c-11e7-8526-7b38dcaef614",
            address: "dadadasdadsasdada",
            location: "Pune",
            price: 20000.00,
            available: 2,
            rating: 3.5,
            numReviews: 7,
            description: "Luxurious nights"
        }, 
        {
            name: "Ritz Carlton, Balewadi",
            category: "Villa",
            image: "https://theblondeabroad.com/wp-content/uploads/2018/05/DSCF5346.jpg",
            address: "dadadasdadsasdada",
            location: "Pune",
            price: 200.00,
            available: 2,
            rating: 2.0,
            numReviews: 6,
            description: "Luxurious nights fsadfa fsdfa fsadfsaf "
        },
        {
            name: "Sherman Oaks Phase 4, Aundh",
            category: "Villa",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/15/a1/d2/af/hotel-r-de-paris.jpg",
            address: "dadadasdadsasdada",
            location: "Pune",
            price: 20000.00,
            available: 3,
            rating:2.9,
            numReviews: 10,
            description: "Luxurious nights"
        },{
            name: "Raddison Blue, Balewadi",
            category: "Villa",
            image: "https://im.rediff.com/getahead/2018/nov/09muraka2.jpg?w=670&h=900",
            address: "dadadasdadsasdada",
            location: "Pune",
            price: 20000.00,
            available: 8,
            rating: 4.6,
            numReviews: 11,
            description: "Luxurious nights"
        },
        {
            name: "Courtyard Marriot, Balewadi",
            category: "Villa",
            image: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2119&height=1195&fit=crop&format=pjpg&auto=webp",
            address: "dadadasdadsasdada",
            location: "Pune",
            price: 20000.00,
            available: 5,
            rating: 5.0,
            numReviews: 10,
            description: "Luxurious nights"
        },
        {
            name: "Taj Palace, Balewadi",
            category: "Villa",
            image: "https://cf.bstatic.com/images/hotel/max1024x768/261/261655231.jpg",
            address: "dadadasdadsasdada",
            location: "Pune",
            price: 20000.00,
            available: 12,
            rating: 5.0,
            numReviews: 13,
            description: "Luxurious nights"
        },
        {
            name: "Caesars Palace, Balewadi",
            category: "Villa",
            image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/05/16/1254/Hyatt-Regency-Ahmedabad-P072-Presidential-Suite-Bedroom-Curtains-Open.jpg/Hyatt-Regency-Ahmedabad-P072-Presidential-Suite-Bedroom-Curtains-Open.16x9.jpg?imwidth=1280",
            address: "dadadasdadsasdada",
            location: "Pune",
            available: 0,
            price: 20000.00,
            rating: 5.0,
            numReviews: 10,
            description: "Luxurious nights"
        },
    ]
}

export default data;
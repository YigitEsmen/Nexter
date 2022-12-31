const homesSection = document.getElementById('homes-section')

const homes = [
    {
        imageUrl: 'house-1.jpeg',
        alt: 'House 1',
        name: 'Beautiful Family House',
        location: 'USA',
        rooms: 5,
        area: 325,
        price: 1_200_000
    },
    {
        imageUrl: 'house-2.jpeg',
        alt: 'House 2',
        name: 'Modern Glass Villa',
        location: 'Canada',
        rooms: 6,
        area: 450,
        price: 2_750_000
    },
    {
        imageUrl: 'house-3.jpeg',
        alt: 'House 3',
        name: 'Cozy Country House',
        location: 'UK',
        rooms: 4,
        area: 250,
        price: 850_000
    },
    {
        imageUrl: 'house-4.jpeg',
        alt: 'House 4',
        name: 'Large Rustical Villa',
        location: 'Portugal',
        rooms: 6,
        area: 480,
        price: 1_950_000
    },
    {
        imageUrl: 'house-5.jpeg',
        alt: 'House 5',
        name: 'Majestic Palace House',
        location: 'Germany',
        rooms: 18,
        area: 4230,
        price: 9_500_000
    },
    {
        imageUrl: 'house-6.jpeg',
        alt: 'House 6',
        name: 'Modern Family Apartment',
        location: 'Italy',
        rooms: 3,
        area: 180,
        price: 600_000
    }
]

const formatCurrency = number => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
}
).format(number)

homes.forEach(h => {
    homesSection.insertAdjacentHTML('beforeend', `
        <div class="home">
            <img class="home__img" src="img/${h.imageUrl}" alt="${h.alt}">
            <svg class="home__like">
                <use xlink:href="img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 class="home__name">${h.name}</h5>
            <div class="home__location">
                <svg class="home__icon">
                    <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                </svg>
                <p>${h.location}</p>
            </div>
            <div class="home__rooms">
                <svg class="home__icon">
                    <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                </svg>
                <p>${h.rooms} rooms</p>
            </div>
            <div class="home__area">
                <svg class="home__icon">
                    <use xlink:href="img/sprite.svg#icon-expand"></use>
                </svg>
                <p>${h.area} m<sup>2</sup></p>
            </div>
            <div class="home__price">
                <svg class="home__icon">
                    <use xlink:href="img/sprite.svg#icon-key"></use>
                </svg>
                <p>${formatCurrency(h.price)}</p>
            </div>
            <button class="btn home__btn">Contact realtor</button>
        </div>
    `)
})
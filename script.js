const cars = [
    { brand: "Mahindra Thar (4WD)", price: "15,50,000", year: 2024, loc: "Coimbatore", img: "https://images.unsplash.com/photo-1662030006000-888f4218a58a?w=400" },
    { brand: "Hyundai Creta SX", price: "14,20,000", year: 2023, loc: "Chennai", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400" },
    { brand: "Maruti Suzuki Swift", price: "6,80,000", year: 2022, loc: "Madurai", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400" },
    { brand: "BMW 3 Series", price: "45,00,000", year: 2021, loc: "Bangalore", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400" },
    { brand: "Toyota Fortuner", price: "38,00,000", year: 2022, loc: "Salem", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400" },
    { brand: "Tata Nexon EV", price: "12,90,000", year: 2024, loc: "Trichy", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400" },
    { brand: "Kia Seltos", price: "13,50,000", year: 2023, loc: "Erode", img: "https://images.unsplash.com/photo-1630602092523-288439167389?w=400" },
    { brand: "Audi Q5", price: "52,00,000", year: 2020, loc: "Chennai", img: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=400" },
    { brand: "Honda City", price: "11,00,000", year: 2021, loc: "Hosur", img: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=400" },
    { brand: "Mahindra XUV700", price: "22,00,000", year: 2023, loc: "Coimbatore", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400" },
    { brand: "Mercedes C-Class", price: "58,00,000", year: 2022, loc: "Bangalore", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400" },
    { brand: "Volkswagen Virtus", price: "16,00,000", year: 2023, loc: "Chennai", img: "https://images.unsplash.com/photo-1622353457530-50341767677f?w=400" },
    { brand: "Skoda Kushaq", price: "14,50,000", year: 2022, loc: "Madurai", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400" },
    { brand: "Ford Endeavour", price: "32,00,000", year: 2020, loc: "Salem", img: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=400" },
    { brand: "Jeep Compass", price: "19,00,000", year: 2021, loc: "Coimbatore", img: "https://images.unsplash.com/photo-1532631270697-638247263b90?w=400" },
    { brand: "Maruti Jimny", price: "14,00,000", year: 2024, loc: "Trichy", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400" },
    { brand: "Hyundai Verna", price: "15,00,000", year: 2023, loc: "Chennai", img: "https://images.unsplash.com/photo-1627450370213-f932f80277bc?w=400" },
    { brand: "Tata Harrier", price: "18,50,000", year: 2022, loc: "Erode", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
    { brand: "Land Rover Defender", price: "1,20,00,000", year: 2023, loc: "Bangalore", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400" },
    { brand: "MG Hector", price: "17,00,000", year: 2021, loc: "Coimbatore", img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400" }
];

const container = document.getElementById('car-container');

function displayCars(carsArray) {
    const container = document.getElementById('car-container');
    if (!container) return;
    
    container.innerHTML = ""; 
    
    // (car, index) allows us to link to the details page correctly
    carsArray.forEach((car, index) => {
        // Inside your displayCars function
container.innerHTML += `
    <div class="car-card" onclick="window.location.href='details.html?id=${index}'">
        <div style="height:200px; overflow:hidden;">
            <img src="${car.img}" onerror="this.src='https://via.placeholder.com/400x250?text=Car+Image'">
        </div>
        <div class="card-details">
            <p class="price">&#8377;${car.price}</p>
            <h3 class="car-name" style="height:45px; overflow:hidden;">${car.brand}</h3>
            <p class="location" style="margin-top:auto;">?? ${car.loc}</p>
        </div>
    </div>`;
    });
}
   

// Search Logic
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = cars.filter(c => c.brand.toLowerCase().includes(term));
    displayCars(filtered);
});

// Post Ad Logic
document.getElementById('sell-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newCar = {
        brand: document.getElementById('carBrand').value,
        price: document.getElementById('carPrice').value,
        year: document.getElementById('carYear').value,
        loc: "Local",
        img: "https://via.placeholder.com/400x250?text=Vetrisudar+Car"
    };
    cars.unshift(newCar);
    displayCars(cars);
    e.target.reset();
});

displayCars(cars);

const priceFilter = document.getElementById('priceFilter');

function filterCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const priceValue = priceFilter.value;

    const filtered = cars.filter(car => {
        // Convert price string "?15,50,000" to a number 1550000
        const numericPrice = parseInt(car.price.replace(/[?,]/g, ''));
        
        const matchesSearch = car.brand.toLowerCase().includes(searchTerm);
        
        let matchesPrice = true;
        if (priceValue === "under10") matchesPrice = numericPrice < 1000000;
        else if (priceValue === "10to20") matchesPrice = numericPrice >= 1000000 && numericPrice <= 2000000;
        else if (priceValue === "over20") matchesPrice = numericPrice > 2000000;

        return matchesSearch && matchesPrice;
    });

    displayCars(filtered);
}

// Listen for both typing and selecting
document.getElementById('searchInput').addEventListener('input', filterCars);
priceFilter.addEventListener('change', filterCars);


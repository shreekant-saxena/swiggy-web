const restaurants = [
  {
    name: "Biryani Palace",
    cuisine: "Indian, Biryani",
    rating: "4.3",
    time: "30-40 min",
    image: "https://images.unsplash.com/photo-1626082927389-b0eaa90bf34f"
  },
  {
    name: "Pizza Hub",
    cuisine: "Italian, Pizza",
    rating: "4.6",
    time: "20-30 min",
    image: "https://images.unsplash.com/photo-1601924582975-7e1f1a2c68e4"
  },
  {
    name: "Sushi World",
    cuisine: "Japanese, Sushi",
    rating: "4.5",
    time: "35-45 min",
    image: "https://images.unsplash.com/photo-1579888538244-457c9e09c1a1"
  },
  {
    name: "Healthy Bowl",
    cuisine: "Healthy, Salads",
    rating: "4.0",
    time: "15-20 min",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f6fdcde"
  }
];

const list = document.getElementById("restaurantList");

restaurants.forEach(r => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${r.image}" alt="${r.name}">
    <div class="card-body">
      <h3>${r.name}</h3>
      <p>${r.cuisine}</p>
      <p><span class="rating">★ ${r.rating}</span> • ${r.time}</p>
    </div>
  `;
  list.appendChild(card);
});

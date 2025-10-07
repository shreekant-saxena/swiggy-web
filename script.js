const restaurants = [
  { name: "Biryani Palace", cuisine: "Indian, Biryani", rating: "4.3", time: "30-40 min", image: "biryanipalace.jpg" },
  { name: "Pizza Hub", cuisine: "Italian, Pizza", rating: "4.6", time: "20-30 min", image: "pizzahub.png" },
  { name: "Sushi World", cuisine: "Japanese, Sushi", rating: "4.5", time: "35-45 min", image: "sushi world.png" },
  { name: "Healthy Bowl", cuisine: "Healthy, Salads", rating: "4.0", time: "15-20 min", image: "healthybowl.jpg" }
];

const list = document.getElementById("restaurantList");

restaurants.forEach(r => {
  const card = document.createElement("div");
  card.className = "restaurant-card"; // ✅ matches CSS
  card.innerHTML = `
    <img src="${r.image}" alt="${r.name}">
    <div class="info"> <!-- ✅ matches CSS -->
      <h3>${r.name}</h3>
      <p>${r.cuisine}</p>
      <p class="rating">⭐ ${r.rating} • ${r.time}</p>
    </div>
  `;
  list.appendChild(card);
});

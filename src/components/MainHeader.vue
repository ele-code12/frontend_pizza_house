<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/index';

const authStore = useAuthStore();
const location = useRoute();

const offers = [
  { id: 1, title: "La Incondicional Familiar", price: "Bs71.00", image: "/assets/images/logo-pizza.avif" },
  { id: 2, title: "Pizza La Incondicional", price: "Bs49.00", image: "/assets/images/logo-pizza.avif" },
  { id: 3, title: "Combo La Incondicional + Gaseosa", price: "Bs55.00", image: "/assets/images/logo-pizza.avif" },
  { id: 4, title: "Oferta Exclusiva Online", price: "Bs79.00", image: "/assets/images/logo-pizza.avif" },
  { id: 5, title: "Combo Familiar Deluxe", price: "Bs90.00", image: "/assets/images/logo-pizza.avif" },
  { id: 6, title: "Pizza Vegetariana", price: "Bs42.00", image: "/assets/images/logo-pizza.avif" },
  { id: 7, title: "Oferta Doble", price: "Bs85.00", image: "/assets/images/logo-pizza.avif" },
  { id: 8, title: "Pizza Mariscos Especial", price: "Bs65.00", image: "/assets/images/logo-pizza.avif" },
  { id: 9, title: "Combo Mini + Gaseosa", price: "Bs35.00", image: "/assets/images/logo-pizza.avif" },
  { id: 10, title: "Pizza La Gran Fiesta", price: "Bs110.00", image: "/assets/images/logo-pizza.avif" },
];
const menuItems = [
  { id: 1, title: "Pizza Margarita", image: "/assets/images/logo-pizza.avif" },
  { id: 2, title: "Pizza Hawaiana", image: "/assets/images/logo-pizza.avif" },
  { id: 3, title: "Refresco Cola", image: "/assets/images/logo-pizza.avif" },
  { id: 4, title: "Refresco Limón", image: "/assets/images/logo-pizza.avif" },
];
</script>

<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="col-12">
        <nav class="main-nav">
          <!-- ***** Logo Start ***** -->
          <RouterLink to="/" class="logo">
            <img src="../assets/images/logo-pizza.avif" alt="Logo" width="70" height="70" />
          </RouterLink>
          <!-- ***** Logo End ***** -->

          <!-- ***** Menu Start ***** -->
          <ul class="nav">
            <li><RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink></li>
            <template v-if="authStore.token">
              <li class="dropdown">
                <a href="#" class="nav-link">Menú</a>
                <ul class="dropdown-menu">
                  <li><RouterLink to="/categoriasProducto" class="nav-link click-scroll">Categorías Producto</RouterLink></li>
                  <li><RouterLink to="/productos" class="nav-link click-scroll">Productos</RouterLink></li>
                </ul>
              </li>
            </template>
            <li v-if="!authStore.token">
              <RouterLink to="/login" class="nav-link click-scroll login-btn">Iniciar Sesión</RouterLink>
            </li>
          </ul>
          <!-- ***** Menu End ***** -->
        </nav>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <!-- Ofertas Section -->
  <div class="offers-section">
    <h2>Ofertas</h2>
    <div class="offers-container">
      <div class="offer-card" v-for="offer in offers" :key="offer.id">
        <img :src="offer.image" :alt="offer.title" />
        <h3>{{ offer.title }}</h3>
        <p>{{ offer.price }}</p>
      </div>
    </div>
  </div>

  <!-- Explore Our Menu Section -->
  <div class="menu-section">
    <h2>Explora Nuestro Menú</h2>
    <div class="menu-container">
      <div class="menu-item-card" v-for="item in menuItems" :key="item.id">
        <img :src="item.image" :alt="item.title" />
        <h3>{{ item.title }}</h3>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* Header Styles */
.header-area.sticky {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.header-area.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.main-nav {
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.nav li {
  position: relative;
  padding: 10px 20px;
}

.logo img {
  height: 70px;
  width: 70px;
}

.nav-link {

  color: #333;
  padding: 0px 90px;
}

.login-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #0056b3;
}

.offers-section {
  margin: 20px;
}

.offers-container {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px 0;
}

.offer-card {
  flex: 0 0 auto;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.offer-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.offer-card h3 {
  font-size: 16px;
  margin: 10px 0 5px;
}

.offer-card p {
  font-size: 14px;
  color: #333;
}

/* Menu Section Styles */
.menu-section {
  margin: 40px 20px;
}

.menu-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.menu-item-card {
  width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.menu-item-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.menu-item-card h3 {
  font-size: 16px;
  margin: 10px 0 5px;
}
</style>

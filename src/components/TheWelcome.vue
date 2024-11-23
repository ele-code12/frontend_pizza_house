<script setup lang="ts"></script>

<template>
  <div class="content">
    <section class="descripcion">
      <div class="descripcion-container">
        <img src="/img/pizza1.gif" alt="Pizza House" class="descripcion-image" />
        <div class="descripcion-text">
          <h2>Bienvenidos a Pizza House</h2>
          <p>
            En Pizza House nos especializamos en ofrecer las mejores pizzas,
            hechas con los ingredientes más frescos y de alta calidad. Nuestra
            misión es brindar una experiencia única en cada bocado, desde nuestras
            pizzas clásicas hasta las más innovadoras, para satisfacer todos los gustos. 
            Nos esforzamos por ofrecer un menú que se adapte a todas las preferencias y necesidades dietéticas, 
            garantizando que cada pizza sea una obra maestra deliciosa y que cada cliente se sienta como en casa.
          </p>
        </div>
      </div>
    </section>

    <section class="productos">
      <h2 class="section-title">Nuestros Productos</h2>
      <div class="product-list">
        <div class="product-item">
          <img src="/img/pizzaP1.jpeg" alt="Pizza 1" class="product-image" />
          <h3 class="product-name">Pizza Margherita</h3>
          <p class="product-description">Deliciosa pizza con tomate, mozzarella y albahaca fresca.</p>
          <p class="product-price">12.99 Bs</p>
        </div>
        <div class="product-item">
          <img src="/img/pizzaP2.jpg" alt="Pizza 2" class="product-image" />
          <h3 class="product-name">Pizza Pepperoni</h3>
          <p class="product-description">Pizza con salsa de tomate, mozzarella y abundante pepperoni.</p>
          <p class="product-price">14.99 Bs</p>
        </div>
        <div class="product-item">
          <img src="/img/pizzaP3.jpg" alt="Pizza 3" class="product-image" />
          <h3 class="product-name">Pizza Cuatro Quesos</h3>
          <p class="product-description">Combinación de mozzarella, cheddar, gorgonzola y parmesano.</p>
          <p class="product-price">16.99 Bs</p>
        </div>
      </div>
    </section>

    <!-- Descripción debajo de productos -->
    <section class="descripcion-bajo-productos">
      <div class="descripcion-bajo-container">
        <img src="/img/PorqueElegirnos.jpg" alt="Pizza House" class="descripcion-bajo-image" />
        <div class="descripcion-bajo-text">
          <h2>¿Por qué elegirnos?</h2>
          <p>
            En Pizza House no solo nos apasiona hacer las mejores pizzas, sino que también nos comprometemos con la
            satisfacción total de nuestros clientes. Ya sea que disfrutes de una pizza clásica o que prefieras algo
            innovador, nuestro menú tiene opciones para todos los gustos. Además, ofrecemos un ambiente acogedor donde
            podrás disfrutar con tu familia y amigos, haciendo que cada visita sea especial.
          </p>
        </div>
      </div>
    </section>

    <section class="categorias">
      <h2 class="section-title">Categorías</h2>
      <div class="category-list">
        <div class="category-item">
          <img src="/img/pizza.jpeg" alt="Categoria 1" class="category-image" />
          <h3 class="category-name">Pizzas Clásicas</h3>
        </div>
        <div class="category-item">
          <img src="/img/pizza.jpeg" alt="Categoria 2" class="category-image" />
          <h3 class="category-name">Pizzas Especiales</h3>
        </div>
        <div class="category-item">
          <img src="/img/pizza.jpeg" alt="Categoria 3" class="category-image" />
          <h3 class="category-name">Pizzas Vegetarianas</h3>
        </div>
      </div>
    </section>

    <section class="ventas">
      <h2 class="section-title">Ofertas de Venta</h2>
      <div class="sales-list">
        <div class="sale-item">
          <img src="/img/pizza.jpeg" alt="Oferta 1" class="sale-image" />
          <h3 class="sale-title">Combo 2 Pizzas</h3>
          <p class="sale-description">Compra 2 pizzas y obtén un 10% de descuento.</p>
          <p class="sale-price">$22.99</p>
        </div>
        <div class="sale-item">
          <img src="/img/pizza.jpeg" alt="Oferta 2" class="sale-image" />
          <h3 class="sale-title">Pizza Familiar</h3>
          <p class="sale-description">Pizza tamaño familiar con 3 ingredientes a elección.</p>
          <p class="sale-price">$19.99</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content {
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-top: 60px;
  margin-bottom: 20px;
  color: #333;
}

.productos .section-title {
  color: white; /* Cambia el color a blanco */
}

.descripcion-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.descripcion-image {
  width: 40%; 
  border-radius: 10px;
  margin-bottom: 80px; 
}

.descripcion-text {
  width: 55%;
}

.descripcion-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: white;
}

.descripcion-text p {
  font-size: 1.3rem;
  color: white;
  line-height: 1.6;
}

/* Estilo de la nueva sección debajo de los productos */
.descripcion-bajo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

.descripcion-bajo-image {
  width: 40%;
  border-radius: 10px;
  margin-bottom: 40px;
}

.descripcion-bajo-text {
  width: 55%;
}

.descripcion-bajo-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: white;
}

.descripcion-bajo-text p {
  font-size: 1.3rem;
  color: white;
  line-height: 1.6;
}

.product-list, .category-list, .sales-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item, .category-item, .sale-item {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out; /* Transición para animación */
}

.product-item img, .category-item img, .sale-item img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out; /* Transición para animación de imagen */
}

.product-item:hover, .category-item:hover, .sale-item:hover {
  transform: scale(1.10); /* Agranda la imagen un 5% */
}

.product-name, .category-name, .sale-title {
  font-size: 1.5rem;
  margin-top: 10px;
  color: #444;
}

.product-description, .sale-description {
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
}

.product-price, .sale-price {
  font-size: 1.2rem;
  color: #e74c3c;
  font-weight: bold;
}
</style>

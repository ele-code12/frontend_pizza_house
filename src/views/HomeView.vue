<script setup lang="ts"></script>

<template>
  <div>
    <div id="top" class="starter_container2">
      <!-- Imagen de la pizzería -->
      <img src="@/assets/images/pizzas.avif" alt="Pizza House" class="left-image" />

      <!-- Contenedor de descripción -->
      <div class="description-container">
        <h2 class="top-title">Pizza House</h2>
        <h2 class="highlighted second-title">"El mejor de la ciudad"</h2>
        <p class="description-text">
          En **Pizza House**, ofrecemos las pizzas más deliciosas de la ciudad, preparadas con los ingredientes más frescos y una receta secreta que ha conquistado a miles de clientes. 
          Ya sea que busques una experiencia gourmet o una comida reconfortante, estamos aquí para hacer que cada bocado sea especial.
        </p>
        <p class="description-text">
          ¡Ven a visitarnos y vive la verdadera pasión por la pizza!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.starter_container2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding-left: 20px;
  gap: 20px;
}

/* Imagen */
.left-image {
  max-width: 50%;
  height: auto;
  border-radius: 10px;
}

/* Contenedor de la descripción */
.description-container {
  max-width: 40%;
  color: #f39c12;
  text-align: left;
}

/* Títulos */
.top-title, .second-title {
  font-size: 2rem;
  color: #f39c12;
  margin-bottom: 10px;
}

/* Resaltar */
.highlighted {
  color: #ffffff;
}

/* Texto descriptivo */
.description-text {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-top: 10px;
  color: #ffffff;
}
</style>

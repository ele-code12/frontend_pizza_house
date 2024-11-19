<script setup lang="ts"></script>

<template>
  <footer class="sub_footer">
    <div class="container">
      <div class="col-md-4">
        <p class="sub-footer-text text-center">
          &copy;Pizza House 2024
        </p>
      </div>
     
      <div class="col-md-4">
        <p class="sub-footer-text text-center">
          &copy;Pizza House 2024
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.sub_footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col-md-4 {
  flex: 1;
  text-align: center;
}

.sub-footer-text {
  font-size: 14px;
}

.sub-footer-text a {
  color: #f39c12;
  text-decoration: none;
}

.sub-footer-text a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>

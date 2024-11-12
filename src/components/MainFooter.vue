<script setup lang="ts">
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="info">
            <li>
              <a href="#"><i class="fa fa-envelope"></i> todo.unosss@gmail.com</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-phone"></i> 64-23598</a>
            </li>
          </ul>
          <p>
            Pizza House © 2024 Fan Page Go. Derechos Reservados <br />
            Diseño: <a href="https://templatemo.com" target="_parent" title="free css templates">Lo Mejor</a>
            <br />
            Distributed By: <a href="https://themewagon.com" target="_blank" title="free css templates">ThemeWagon</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0px;
  background-color: #f8f9fa;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  text-align: center; 
}

footer .info {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; 
}

footer .info li {
  margin-right: 15px; 
}

footer .info li a {
  color: #000;
  text-decoration: none;
}

footer .info li a:hover {
  text-decoration: underline;
}

footer p {
  margin-top: 10px;
  padding-left: 0; 
  font-size: 14px;
  color: black;
}

footer p a {
  color: black;
  text-decoration: none;
}

footer p a:hover {
  text-decoration: underline;
}
</style>

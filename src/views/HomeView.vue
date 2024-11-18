<script setup lang="ts"></script>

<template>
  <div>
    <div id="top" class="starter_container2">
      <img src="@/assets/images/pizzas.avif" alt="" />
      <div class="follow_container">
        <div class="col-md-6 col-md-offset-3">
          <h2 class="top-title">Pizza House</h2>
          <h2 class="white second-title">" El mejor de la ciudad "</h2>

          <hr />
        </div>
      </div>
    </div>

    <!-- ============ About Us ============= -->

    <section id="story" class="description_content">
      <div class="text-content container">
        <div class="col-md-6">
          <h1>Sobre nosotros</h1>
          <div class="fa fa-cutlery fa-2x"></div>
          <p class="desc-text">
            Nuestro restaurante es un lugar donde la pasión por la pizza cobra vida. Nos
            especializamos en ofrecer pizzas deliciosas, elaboradas con ingredientes frescos y una
            masa artesanal que destaca por su sabor y textura. Somos un pequeño equipo de Sucre,
            Bolivia, comprometido con crear una experiencia única para los amantes de la pizza. Ven
            a visitarnos y descubre cómo transformamos la simplicidad en un placer irresistible.
          </p>
        </div>
        <div class="col-md-6">
          <div class="img-section">
            <img src="@/assets/images/pizza1.jpg" width="250" height="220" />
            <img src="@/assets/images/pizza2.jpg" width="250" height="220" />
            <div class="img-section-space"></div>
            <img src="@/assets/images/pizza3.jpg" width="250" height="220" />
            <img src="@/assets/images/pizza4.avif" width="250" height="220" />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ Pricing  ============= -->

    <section id="pricing" class="description_content">
      <div class="pricing background_content">
        <h1><span>Precios</span> accesibles</h1>
      </div>
      <div class="text-content container">
        <div class="container">
          <div class="row">
            <div id="w">
              <ul id="filter-list" class="clearfix">
                <li class="filter" data-filter="all">Todos</li>
                <li class="filter" data-filter="special">pizzas</li>
                <li class="filter" data-filter="desert">Postres</li>
              </ul>
              <!-- @end #filter-list -->
              <ul id="portfolio">
                <li class="item breakfast">
                  <img src="@/assets/images/pizza4.avif" alt="Food" />
                  <h2 class="white">20 bs</h2>
                </li>

                <li class="item dinner special">
                  <img src="@/assets/images/pizza2.jpg" alt="Food" />
                  <h2 class="white">20 bs</h2>
                </li>
                <li class="item dinner breakfast">
                  <img src="@/assets/images/pizza3.jpg" alt="Food" />
                  <h2 class="white">18 bs</h2>
                </li>
                <li class="item special">
                  <img src="@/assets/images/pizza4.avif" alt="Food" />
                  <h2 class="white">15 bs</h2>
                </li>
                <li class="item dinner">
                  <img src="@/assets/images/pizza5.avif" alt="Food" />
                  <h2 class="white">20 bs</h2>
                </li>
                <li class="item special">
                  <img src="@/assets/images/pizza6.jpeg" alt="Food" />
                  <h2 class="white">22 bs</h2>
                </li>
                <li class="item desert">
                  <img src="@/assets/images/pizza3.jpg" alt="Food" />
                  <h2 class="white">32 bs</h2>
                </li>
                <li class="item desert breakfast">
                  <img src="@/assets/images/pizza2.jpg" alt="Food" />
                  <h2 class="white">38 bs</h2>
                </li>
              </ul>
              <!-- @end #portfolio -->
            </div>
            <!-- @end #w -->
          </div>
        </div>
      </div>
    </section>

    <!-- ============ Our Beer  ============= -->

    <section id="beer" class="description_content">
      <div class="beer background_content">
        <h1>Un <span>lugar</span> increíble para disfrutar</h1>
      </div>
      <div class="text-content container">
        <div class="col-md-5">
          <div class="img-section">
            <img src="@/assets/images/pizza8.avif" width="100%" />
          </div>
        </div>
        <br />
        <div class="col-md-6 col-md-offset-1">
          <h1>Nuestro Menu</h1>
          <div class="icon-beer fa-2x"></div>
          <p class="desc-text">
            Aquí, en nuestra pizzería, nos apasionan las pizzas. Sabores nuevos y deliciosos llegan
            a nuestra cocina cada semana, y no podemos evitar compartirlos con ustedes. Aunque
            disfrutamos de las clásicas, siempre estamos emocionados por descubrir nuevas
            combinaciones, así que ven y vive nuestra artesanía en su mejor versión.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ Featured Dish  ============= -->

    <section id="featured" class="description_content">
      <div class="featured background_content">
        <h1>Nuestro <span>menú</span> de platos destacados</h1>
      </div>
      <div class="text-content container">
        <div class="col-md-6">
          <h1>¡Echa un vistazo a nuestros platos!</h1>
          <div class="icon-hotdog fa-2x"></div>
          <p class="desc-text">
            Cada plato es hecho a mano al amanecer, utilizando solo los ingredientes más simples
            para resaltar los olores y sabores que atraen a todo el vecindario. Pasa en cualquier
            momento y experimenta la simplicidad en su máxima expresión.
          </p>
        </div>
        <div class="col-md-6">
          <ul class="image_box_story2">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="@/assets/images/pizza1.jpg" alt="..." />
                  <div class="carousel-caption"></div>
                </div>
                <div class="item">
                  <img src="@/assets/images/pizza2.jpg" alt="..." />
                  <div class="carousel-caption"></div>
                </div>
                <div class="item">
                  <img src="@/assets/images/pizza3.jpg" alt="..." />
                  <div class="carousel-caption"></div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>


      <!-- ============ Our Bread  ============= -->
    <!-- <section id="bread" class="description_content">
      <div class="bread background_content">
        <h1>Nuestro <span>menú</span> de pizzas</h1>
      </div>
      <div class="text-content container">
        <div class="col-md-6">
          <h1>NUESTRAS PIZZAS</h1>
          <div class="icon-bread fa-2x"></div>
          <p class="desc-text">
          Aquí, en nuestro restaurante, nos apasionan las pizzas. Nuevas combinaciones y sabores audaces llegan a nuestras puertas cada semana, y no podemos evitar presumir de ellas. Aunque disfrutamos de las clásicas, siempre estamos emocionados por descubrir algo nuevo, así que ven y vive nuestra pasión por la pizza en su mejor versión.
          </p>
        </div>
        <div class="col-md-6">
          <img src="@/assets/images/bread1.jpg" width="260" alt="Bread" />
          <img src="@/assets/images/bread1.jpg" width="260" alt="Bread" />
        </div>
      </div>
    </section>  -->

    <!-- ============ Reservation  ============= -->

    <section id="reservation" class="description_content">
      <div class="featured background_content">
        <h1>¡Reserva una mesa!</h1>
      </div>
      <div class="text-content container">
        <div class="inner contact">
          <!-- Form Area -->
          <div class="contact-form">
            <!-- Form -->
            <form id="contact-us" method="post" action="reserve.php">
              <!-- Left Inputs -->
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-6 col-xs-12">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-xs-6">
                        <!-- Nombre -->
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          required="required"
                          class="form"
                          placeholder="Nombre"
                        />
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          required="required"
                          class="form"
                          placeholder="Apellido"
                        />
                        <input
                          type="text"
                          name="state"
                          id="state"
                          required="required"
                          class="form"
                          placeholder="Ciudad/Estado"
                        />
                        <input
                          type="text"
                          name="datepicker"
                          id="datepicker"
                          required="required"
                          class="form"
                          placeholder="Fecha de Reserva"
                        />
                      </div>

                      <div class="col-lg-6 col-md-6 col-xs-6">
                        <!-- Información -->
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          required="required"
                          class="form"
                          placeholder="Teléfono"
                        />
                        <input
                          type="text"
                          name="guest"
                          id="guest"
                          required="required"
                          class="form"
                          placeholder="Número de Personas"
                        />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required="required"
                          class="form"
                          placeholder="Correo Electrónico"
                        />
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required="required"
                          class="form"
                          placeholder="Asunto"
                        />
                      </div>

                      <div class="col-xs-6">
                        <!-- Botón Reservar -->
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          class="text-center form-btn form-btn"
                        >
                          Reservar
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-xs-12">
                    <!-- Message -->
                    <div class="right-text">
                      <h2>Horarios</h2>
                      <hr />
                      <p>Lunes a Viernes: 7:30 AM - 11:30 AM</p>
                      <p>Sábado y Domingo: 8:00 AM - 9:00 AM</p>
                      <p>Lunes a Viernes: 12:00 PM - 5:00 PM</p>
                      <p>Lunes a Sábado: 6:00 PM - 1:00 AM</p>
                      <p>Domingo a Lunes: 5:30 PM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Clear -->
              <div class="clear"></div>
            </form>
          </div>
          <!-- End Contact Form Area -->
        </div>
        <!-- End Inner -->
      </div>
    </section>

    <!-- ============ Social Section  ============= -->

    <section class="social_connect">
      <div class="text-content container">
        <div class="col-md-6">
          <span class="social_heading">SIGUENOS EN NUESTRAS REDES SOCIALES</span>

          <ul class="social_icons">
            <li><a class="icon-twitter color_animation" href="#" target="_blank"></a></li>
            <li><a class="icon-github color_animation" href="#" target="_blank"></a></li>
            <li><a class="icon-linkedin color_animation" href="#" target="_blank"></a></li>
            <li><a class="icon-mail color_animation" href="#"></a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <span class="social_heading">O LLAMA</span>

          <span class="social_info"
            ><a class="color_animation" href="tel:883-335-6524">(+591) 123456789</a></span
          >
        </div>
      </div>
    </section>

    <!-- ============ Contact Section  ============= -->

    <section id="contact">
      <div class="map">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.664063989472!2d91.8316103150038!3d24.909437984030877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505558dd0be6a1%3A0x65c7e47c94b6dc45!2sTechnext!5e0!3m2!1sen!2sbd!4v1444461079802"
            width="100%"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner contact">
              <!-- Área del Formulario -->
              <div class="contact-form">
                <!-- Formulario -->
                <form id="contact-us" method="post" action="contact.php">
                  <!-- Entradas Izquierda -->
                  <div class="col-md-6">
                    <!-- Nombre -->
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required="required"
                      class="form"
                      placeholder="Nombre"
                    />
                    <!-- Correo Electrónico -->
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required="required"
                      class="form"
                      placeholder="Correo Electrónico"
                    />
                    <!-- Asunto -->
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required="required"
                      class="form"
                      placeholder="Asunto"
                    />
                  </div>

                  <!-- Fin Entradas Izquierda -->

                  <!-- Entradas Derecha -->
                  <div class="col-md-6">
                    <!-- Mensaje -->
                    <textarea
                      name="message"
                      id="message"
                      class="form textarea"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>
                  <!-- Fin Entradas Derecha -->

                  <!-- Enviar al final -->
                  <div class="relative fullwidth col-xs-12">
                    <!-- Botón Enviar -->
                    <button type="submit" id="submit" name="submit" class="form-btn">
                      Enviar Mensaje
                    </button>
                  </div>
                  <!-- Fin Enviar al final -->

                  <!-- Limpiar -->
                  <div class="clear"></div>
                </form>
              </div>
              <!-- Fin Área del Formulario de Contacto -->
            </div>
            <!-- Fin Inner -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.starter_container2 img {
  margin-top: -21px;
  padding: 0;
  min-width: 100%;
  height: 100%;
  background-size: cover;
  text-align: center;
  background-position: center;
}
</style>

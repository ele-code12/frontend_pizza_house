<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/index'

const authStore = useAuthStore()
const location = useRoute()
</script>

<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="row">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Pizza House</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav main-nav clear navbar-right">
            <li><a class="navactive color_animation" href="#top">BIENVENIDOS</a></li>
            <li><a class="color_animation" href="#story">ABOUT</a></li>
            <li><a class="color_animation" href="#pricing">PRICING</a></li>
            <li><a class="color_animation" href="#beer">BEER</a></li>
            <li><a class="color_animation" href="#bread">BREAD</a></li>
            <li><a class="color_animation" href="#featured">FEATURED</a></li>
            <li><a class="color_animation" href="#reservation">RESERVATION</a></li>
            <li><a class="color_animation" href="#contact">CONTACT</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<style scoped></style>

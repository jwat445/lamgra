<template>
  <div>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" @click="drawer = !drawer">
          <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png">
        </a>
      </div>
      <header>
        Lamgra
      </header>
    </nav>

    <transition name="slide">
        <aside v-show="drawer" class="menu sidebar">
          <p class="menu-label">Skills</p>
          <ul class="menu-list">
            <li>
              <a @click="visibleSkill = 'woodcuttingScreen'" class="" >
                <span class="icon"><i class="mdi-tree"></i></span> Woodcutting
              </a>
            </li>
            <li>
              <a @click="visibleSkill = 'miningScreen'" class="">
                <span class="icon"><i class="mdi-pickaxe"></i></span> Mining
              </a>
            </li>
          </ul>
        </aside>
      </transition>

    <section class="main">
      <!-- <transition name="slide"> -->
        <component v-bind:is="visibleSkill"></component>
      <!-- </transition> -->
    </section>
  </div>
</template>

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: margin-left .5s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -15%; 
  }
  .sidebar {
    height: 100%;
    width: 15%;
    position: fixed;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 16px;
  }
  .main { /*apply same transition here as sidebar so they both slide?*/
  margin-left: 15%; /* Same as the width of the sidenav */
  padding: 0px 10px;
  }
</style>

<script>
import woodcuttingScreen from "./components/woodcuttingScreen";

export default {
  name: "App",

  components: {
    woodcuttingScreen,
  },

  data: () => ({
    drawer: null,
    visibleSkill: "woodcuttingScreen",
  }),
};
</script>


TODO
add full functioanlity to clicking action including xp for action and skill
add unlocking actions
add more skills
add inventory
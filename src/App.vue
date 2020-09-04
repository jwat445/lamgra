<template>
  <v-app>
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

    <section class="main-content columns is-fullheight">
      <aside v-show="drawer" class="column is-narrow-mobile is-fullheight section">
        <p class="menu-label ">Skills</p>
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

        <component v-bind:is="visibleSkill"></component>
    </section>

    <!-- <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="visibleSkill = 'miningScreen'">
          <v-list-item-action>
            <v-icon>mdi-pickaxe </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mining</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="visibleSkill = 'woodcuttingScreen'">
          <v-list-item-action>
            <v-icon>mdi-tree</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Woodcutting</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="visibleSkill = 'settings'">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://google.com" target="_blank" text>
        <span class="mr-2">Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar> -->
  </v-app>
</template>

<style scoped>
  .aside {
    transition: all .3s ease;
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
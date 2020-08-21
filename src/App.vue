<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
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
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://google.com" target="_blank" text>
        <span class="mr-2">Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <component v-bind:is="visibleSkill"></component>
    </v-main>
  </v-app>
</template>

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
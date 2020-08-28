<template>
  <v-container grid-list-md>
    <v-row>
      <v-col
        v-for="action in actions"
        :key="action.name"
        class="d-flex child-flex"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="max-auto"
            outlined
            v-on:click="clickAction(action)"
            max-height="300"
            max-width="350"
            height="300"
            width="350"
            v-ripple="false"
            :elevation="hover ? 5 : 2"
          >
            <v-list-item>
              <v-list-item-content>
                <div class="headline mb-6">{{ action.name }}</div>
                <div class="overline">Mastery: {{ action.mastery }}</div>
                <div class="overline">
                  xp: {{ action.xp }}/{{ action.toNextLevel }}
                </div>
                <div>
                  <v-progress-linear
                    :value="getPercentageComplete(action)" 
                    height="20"
                    color="deep-purple accent-4"
                  ></v-progress-linear>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-progress-linear {
   transition: all 0.05s ease;
}
::-moz-selection {
  background: red;
}
</style>

<script>
export default {
  name: "woodcuttingScreen",

  data: () => ({
    actions: [
      { name: "oak", mastery: 1, interval: 10, xp: 0, toNextLevel: 10, produces: "logs" },
      { name: "maple", mastery: 1, interval: 20, xp: 0, toNextLevel: 10, produces: "logs" },
      { name: "willow", mastery: 1, interval: 50, xp: 0, toNextLevel: 10, produces: "logs" },
      { name: "yew", mastery: 1, interval: 75, xp: 0, toNextLevel: 10, produces: "logs" },
    ],
  }),

  computed: {
    // currentProgress()  {
    //   return this.$store.state.currentProgress
    // },
  },

  methods: {
    getPercentageComplete: function(action) {
      if (action == this.$store.state.currentAction) {
        return this.$store.state.currentProgress / action.interval * 100}
      return 0
    },

    clickAction: function(action) {
      this.$store.commit('clickAction', action)
    }
  }
};
</script>

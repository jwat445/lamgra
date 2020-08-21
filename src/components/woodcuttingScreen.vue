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

<script>
export default {
  name: "woodcuttingScreen",

  data: () => ({
    currentProgress: 0,
    currentAction: null, //pass this into onclick so you dont have to use this
    actions: [
      { name: "oak", mastery: 1, interval: 100, xp: 0, toNextLevel: 100, produces: "logs" },
      { name: "maple", mastery: 1, interval: 200, xp: 25, toNextLevel: 100, produces: "logs" },
      { name: "willow", mastery: 1, interval: 500, xp: 50, toNextLevel: 100, produces: "logs" },
      { name: "yew", mastery: 1, interval: 2000, xp: 75, toNextLevel: 100, produces: "logs" },
    ],
  }),
  methods: {
    getPercentageComplete: function(action) {
      return this.currentProgress / action.interval * 100
    },

    clickAction: function(action) {
      this.currentAction = action
      setInterval(function() {
        if (this.currentProgress < action.interval) {
          console.log(this.currentProgress)
          this.currentProgress++
        }
        else if (this.currentProgress >= action.interval) {
          this.currentProgress = 0
          action.xp++
        }
        if (action.xp >= action.toNextLevel) {
          action.xp = action.xp - action.toNextLevel
          action.toNextLevel *= 2
          action.mastery++
        }
      }, action.interval)
    }
  }
};
</script>

<template>
  <div class="columns is-vcentered">
    <div class="column card" v-for="action in actions"
    :key="action.name" v-on:click="clickAction(action)">
      <div class="card-header">
        <p class="card-header-title is-centered">
          {{ action.name }}
        </p>
      </div>
      <div class="card-content">
        <div class="overline">Mastery: {{ action.mastery }}</div>
        <div class="overline">
          xp: {{ action.xp }}/{{ action.toNextLevel }}
        </div>
        <div>this is an image of a tree</div>
      </div>
      <div class="card-footer">
        <progress class="progress is-small has-background-dark" :value="getPercentageComplete(action)" max="1000"></progress>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .progress {
    border-radius: 0%;
    transition: all 0.05s ease;

  }
  .card-content {
    height: 4000;
    width: 800;
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
                { name: "yew", mastery: 1, interval: 75, xp: 0, toNextLevel: 10, produces: "logs" },

        { name: "yew", mastery: 1, interval: 75, xp: 0, toNextLevel: 10, produces: "logs" },

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
          return this.$store.state.currentProgress / action.interval * 1000}
        return 0
      },

      clickAction: function(action) {
        this.$store.commit('clickAction', action)
      }
    }
  };
</script>

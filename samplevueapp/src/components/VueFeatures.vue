<template>
  <main>
    <h3>Features</h3>
    <slot></slot>
    {{favouriteNumber}}
    <button @click="favouriteNumber++">+1</button>
    <button @click="favouriteNumber--">-1</button>
    <input v-model="twoWayText" />
    <div>
      <button @click="resetFavourite">Reset Fav</button>
    </div>
    <ul>
      <li
        v-for="n in favouriteNumber"
        :key="n"
      >
        {{n}} - Squared fav for some reason: {{favSquared}}
      </li>
    </ul>
    <img
      ref="myImage"
      src="../assets/logo.png"
    />
    <button @click="shrinkImage">Shrink Image</button>

  </main>
</template>

<script>

export default {
  data: () => ({
    twoWayText: "Hello World",
    favouriteNumber: 12,
    _radius: 10
  }),
  computed: {
    favSquared() {
      return this.favouriteNumber * this.favouriteNumber
    },
    radius: {
      get() { return this._radius },
      set(val) { this._radius = val }
    }
  },
  methods: {
    resetFavourite() {
      console.log(this)
      this.favouriteNumber = 12
    },
    shrinkImage() {
      this.$refs.myImage.style.height = "50px"
    },
  },
  watch: {
    twoWayText(newVal, oldVal) {
      console.log({ oldVal, newVal })
    }
  }
}
</script>

<style>
</style>

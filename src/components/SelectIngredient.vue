<script lang="ts">
import Tag from "./Tag.vue";

export default {
  components: { Tag },
  props: {
    ingrediente: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    thenClick() {
      this.selected = !this.selected;

      if(this.selected) {
        this.$emit('addIngredient', this.ingrediente);
      } else {
        this.$emit('removeIngredient', this.ingrediente);
      }
    }
  },
  emits: ['addIngredient', 'removeIngredient']
};
</script>

<template>
  <button
    class="ingredient"
    @click="thenClick"
    :aria-pressed="selected"
  >
    <Tag :text="ingrediente" :active="selected" />
  </button>
</template>

<style scoped>
.ingredient {
  cursor: pointer;
}
</style>

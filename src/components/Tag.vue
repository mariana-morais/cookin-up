<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: "Tag",
    },
    active: Boolean
  },
};
</script>

<template>
  <span :class="['tag', { active }]"> {{ text }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--grey);
  background: var(--light-grey);
  font-weight: 400;
}

.tag.active {
    color: var(--cream, #fffaf3);
    background: var(--coral, #f0633c);
    font-weight: 700;
}
</style>

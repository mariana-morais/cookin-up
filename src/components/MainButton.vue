<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button class="main-button">
    {{ text }}
  </button>
</template>

<style scoped>
.main-button {
  background: var(--coral, #f0633c);
  color: var(--cream, #fffaf3);
  border: none;
  border-radius: 4rem;
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
}

.main-button:hover {
  background: var(--ocre-hover, #d1451e);
}
</style>

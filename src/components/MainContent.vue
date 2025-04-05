<script lang="ts">
import SelectIngredients from "./SelectIngredients.vue";
import Tag from "./Tag.vue";
import TagList from "./TagList.vue";

export default {
  data() {
    return {
      ingredients: [] as string[],
    };
  },
  components: {
    SelectIngredients,
    Tag,
    TagList,
  },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter(list => list !== ingredient);
    }
  }
};
</script>

<template>
  <main class="main-content">
    <TagList :ingredients="ingredients" />
    <SelectIngredients
      @add-ingredient="addIngredient"
      @remove-ingredient="removeIngredient"
    />
  </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--cream, #fffaf3);
  color: var(--grey, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.list-text {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.list-ingredients {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>

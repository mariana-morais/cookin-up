<script lang="ts">
import SelectIngredients from "./SelectIngredients.vue";
import ShowRecipes from "./ShowRecipes.vue";
import Tag from "./Tag.vue";
import TagList from "./TagList.vue";

type Page = 'SelectIngredients' | 'ShowRecipes'

export default {
  data() {
    return {
      ingredientes: [] as string[],
      content: 'SelectIngredients' as Page,
    };
  },
  methods: {
    addIngredient(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    removeIngredient(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(list => list !== ingrediente);
    },
    navigate(page: Page) {
      this.content = page;
    }
  },
  components: {
    SelectIngredients,
    Tag,
    TagList,
    ShowRecipes
  },
};
</script>

<template>
  <main class="main-content">
    <TagList :ingredientes="ingredientes" />

    <KeepAlive include="SelectIngredients">
      <SelectIngredients
        v-if="content === 'SelectIngredients'"
        @add-ingredient="addIngredient"
        @remove-ingredient="removeIngredient"
        @search-recipes="navigate('ShowRecipes')"
      />

      <ShowRecipes
        v-else-if="content === 'ShowRecipes'"
        :ingredientes="ingredientes"
        @edit-recipes="navigate('SelectIngredients')"
      />
    </KeepAlive>

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

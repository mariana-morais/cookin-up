<script lang="ts">
import { getCategories } from '@/http/index';

export default {
    data() {
        return {
            categories: getCategories()
        }
    }
}
</script>

<template>
    <setion class="select-ingredients">
        <h1 class="header ingredients-title">Ingredientes</h1>


        <p class="paragraph-lg instructions">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categories">
            <li v-for="category in categories" :key="category.name">
                {{ category.name }}
            </li>
        </ul>

        <p class="paragraph hint">
            *Atenção: consideramos que você tem em casa sal, pimenta e água.
        </p>
    </setion>
</template>

<style scoped>
.select-ingredients {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--medium-green, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.hint {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .hint {
    margin-bottom: 2.5rem;
  }
}
</style>
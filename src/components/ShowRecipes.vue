<script lang="ts">
import type { PropType } from "vue";
import { getRecipes } from "@/http";
import { itensInListOneArePresentInListTwo } from "@/utils/lists";
import type IRecipe from "@/interfaces/IRecipe";
import MainButton from "./MainButton.vue";
import RecipeCard from "./RecipeCard.vue"

export default {
  props: {
    ingredientes: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  data() {
    return {
        recipesFound: [] as IRecipe[],
    };
  },
  async created() {
    const recipes = await getRecipes();

    this.recipesFound = recipes.filter((recipe) => {
      // verifica se posso fazer receita:
      // todos os ingredientes devem estar presentes na minha lista de ingredientes
      // se sim, retornar true

      const doRecipe = itensInListOneArePresentInListTwo(recipe.ingredientes, this.ingredientes);

      return doRecipe;
    });
  },
  components: { MainButton, RecipeCard },
  emits: ["editRecipes"],
};
</script>

<template>
  <section class="show-recipes">
    <h1 class="header recipes-title">Receitas</h1>

    <p class="paragraph-lg results-found">
      Resultados encontrados: {{ recipesFound.length }}
    </p>

    <div v-if="recipesFound.length" class="recipes-wrapper">
      <p class="paragraph-lg info">
        Veja as opções de receitas que encontramos com os ingredientes que você
        selecionou!
      </p>

      <ul class="recipes">
        <li v-for="recipe of recipesFound" :key="recipe.nome">
          <RecipeCard :recipe="recipe" />
        </li>
      </ul>
    </div>

    <div v-else class="recipes-not-found">
      <p class="paragraph-lg recipes-not-found__info">
        Não encontramos nenhuma receita com os ingredientes que você selecionou.
      </p>

      <img
        src="../assets//images/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste."
      />
    </div>

    <MainButton text="Editar lista" @click="$emit('editRecipes')" />
  </section>
</template>

<style scoped>
.show-recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.recipes-title {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 1.5rem;
}

.results-found {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 0.5rem;
}

.recipes-wrapper {
  margin-bottom: 3.5rem;
}

.info {
  margin-bottom: 2rem;
}

.recipes {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.recipes-not-found {
  margin-bottom: 2rem;
}

.recipes-not-found__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .recipes-wrapper {
    margin-bottom: 2rem;
  }
}
</style>

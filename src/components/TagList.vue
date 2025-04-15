<script lang="ts">
    import { type PropType } from 'vue';
    import Tag from './Tag.vue';

    export default {
        components: { Tag },
        props: {
            ingredientes : {
                type: Array as PropType<string[]>,
                required: true
            }
        }
    }
</script>

<template>
    <section>
        <span class="subtitle-lg text-list">
            Sua lista:
        </span>

        <ul v-if="ingredientes.length" class="list-ingredients">
            <li v-for="ingrediente in ingredientes" :key="ingrediente">
                <tag :text="ingrediente" active />
            </li>
        </ul>

        <p v-else class="paragraph empty-list">
            <img src="/images/icones/lista-vazia.svg" alt="Ícone de pesquisa">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>
    </section>
</template>

<style scoped>
    .text-list {
        color: var(--coral, #F0633C);
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

        color: var(--coral, #F0633C);
        text-align: center;
    }
</style>
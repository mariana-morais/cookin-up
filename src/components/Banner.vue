<template>
    <main class="hero">
        <div class="presentation">
        <img src="../assets/images/logo.svg" alt="Logo of Cookin' Up" class="logo">

        <p class="header-lg phrase-header">
            <span class="green-text">Um banquete de ideias para</span>
            despertar o chef que há em você!
        </p>

        <p class="subtitle-lg">
            Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
        </p>
        </div>

        <img src="../assets/images/foto-banner.png" alt="Imagem de uma mulher cozinhando cm uma bacia de vidro nas mãos" class="hero-photo">
  </main>
</template>

<style scoped lang="css">
.hero {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.phrase-header {
  margin-bottom: 2rem;
}

.green-text {
  color: var(--medium-green, #3D6D4A);
}

.hero-photo {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .hero {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .hero {
    padding: 4rem 1.5rem;
  }

  .hero-photo {
    width: min(100%, 21.25rem);
  }
}
</style>
<template>
	<article class="crescer-sucesso">
      <section class="img-crescer-sucesso">
        <v-container class="porcima">
          <h2 class="text-h3">Numeros</h2>
        </v-container>
      </section>
			
			<section class="container-crescer-sucesso">
				<v-container class="pa-12">

					<div class="img"> </div>

          <div class="texto">
            <h1>Crescer & ter Sucesso</h1>
            <p> Também criamos projetos de arquitetura corporativa sob medida para empresas que buscam um ambiente estratégico e acolhedor.  
            Um espaço bem planejado otimiza fluxos de trabalho, inspira criatividade e reforça a identidade da marca, criando as condições ideais para o crescimento e o sucesso do seu negócio.
            </p>

              <!-- ========= Nova seção de stats ========= -->
          <div ref="stats" class="stats">
            <div class="stat">
              <span class="stat-number">{{ clientsServedDisplay }}</span>
              <span class="stat-label">Clientes atendidos</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ clientsWaitingDisplay }}</span>
              <span class="stat-label">Clientes na espera</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ satisfactionRateDisplay }}%</span>
              <span class="stat-label">Clientes satisfeitos</span>
            </div>
          </div>
          <!-- ======================================== -->
          </div>

				</v-container>
			</section>

				
	</article>
</template>

<script>
export default {
  name: 'CrescerSucesso',
  data() {
    return {
      // valores finais — ajuste conforme sua origem de dados
      clientsServedEnd: 1200,
      clientsWaitingEnd: 45,
      satisfactionRateEnd: 87,

      // valores atuais para animação
      clientsServedDisplay: 0,
      clientsWaitingDisplay: 0,
      satisfactionRateDisplay: 0,

      hasCounted: false,
    }
  },
  mounted() {
    // dispara animação quando a seção fica visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasCounted) {
            this.hasCounted = true;
            this.animateCount('clientsServedDisplay', this.clientsServedEnd, 2000);
            this.animateCount('clientsWaitingDisplay', this.clientsWaitingEnd, 2000);
            this.animateCount('satisfactionRateDisplay', this.satisfactionRateEnd, 2000);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(this.$refs.stats);
  },
  methods: {
    animateCount(field, endValue, duration) {
      const start = 0;
      const range = endValue - start;
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const pct = Math.min(progress / duration, 1);
        this[field] = Math.floor(start + range * pct);
        if (pct < 1) {
          requestAnimationFrame(step);
        } else {
          this[field] = endValue;
        }
      };

      requestAnimationFrame(step);
    }
  }
}
</script>


<style scoped>
.img-crescer-sucesso{
    background-image: url(../../../assets/sala.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 200px;
    position: relative;
    margin-top: 60px;
    padding: 60px;
}
.img-crescer-sucesso::before {
    content: '';
    background: rgba(21, 21, 21, 0.63);
    /* Cor cinza com 50% de opacidade */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.porcima {
    z-index: 2;
    position: relative;
    color: white;
}

.container-crescer-sucesso > .pa-12 {
  display: flex;
  flex-wrap: wrap;           /* em telas pequenas empilha */
  justify-content: space-evenly;   /* ajusta horizontalmente */
  align-items: center;   /* alinha pelo topo */
  gap: 24px;                 /* espaço entre colunas */
}

/* 2) defina largura fixa igual para imagem e texto */
.container-crescer-sucesso .img,
.container-crescer-sucesso .texto {
  box-sizing: border-box;    /* inclui padding na largura */
  width: 500px;              /* mesma largura para as duas */
  margin: 0;                 /* zera possíveis margins */
}

/* 3) ajuste a imagem apenas como background */
.container-crescer-sucesso .img {
  height: 400px;
  padding: 0;                /* remove padding interno */
  background-image: url(../../../assets/sala.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.349);
}

/* 4) opcional: dê um pouco de padding ao texto */
.container-crescer-sucesso .texto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;             /* ajusta conforme desejar */
  border: 1px solid #ccc; /* opcional: borda para destaque */
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.349); /* opcional: sombra */
}

h1{
  font-size: 2rem;
  margin-bottom: 16px; /* espaço entre título e parágrafo */
  text-align: center;
}

/* seção de stats */
.stats {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 32px;
}
.stat {
  text-align: center;
}
.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
}
.stat-label {
  display: block;
  font-size: 1rem;
  margin-top: 4px;
  color: #555;
}

/* === Responsivo para telas pequenas === */
@media (max-width: 600px) {
  /* empilha imagem e texto */
  .container-crescer-sucesso > .pa-12 {
    flex-direction: column;
    align-items: center;
  }

  /* imagem e texto ocupam 100% da largura do container */
  .container-crescer-sucesso .img,
  .container-crescer-sucesso .texto {
    width: 100%;
  }

  /* empilha os stats verticalmente */
  .stats {
    flex-direction: column;
    gap: 16px;     /* ajusta espaçamento entre eles */
    align-items: center;
  }
}

</style>
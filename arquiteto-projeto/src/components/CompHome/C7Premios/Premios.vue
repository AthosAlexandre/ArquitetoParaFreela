<template>
	<article class="premios">
		<section class="img-premios">
			<v-container class="porcima">
				<h2 class="text-h3">Prêmios</h2>
			</v-container>
		</section>

		<section class="container-premios">
			<v-container class="pa-12">

				<div>
					<v-timeline align="start">
						<v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
							<template v-slot:opposite>
								<div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
							</template>
							<div>
								<h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
									{{year.title}}
								</h2>
								<div>
									{{year.descricao}}
								</div>
							</div>
						</v-timeline-item>
					</v-timeline>
				</div>
			</v-container>
		</section>

	</article>
</template>

<script>
export default {
	name: 'Premios',
	data() {
		return {
			years: [
				{
					color: 'cyan',
					year: '2018',
					title: 'Prêmio 1',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
				{
					color: 'green',
					year: '2019',
					title: 'Prêmio 2',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
				{
					color: 'pink',
					year: '2020',
					title: 'Prêmio 3',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
				{
					color: 'amber',
					year: '2021',
					title: 'Prêmio 4',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
				{
					color: 'orange',
					year: '2022',
					title: 'Prêmio 5',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
				{
					color: 'deep-orange',
					year: '2023',
					title: 'Prêmio 6',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
				{
					color: 'red',
					year: '2024',
					title: 'Prêmio 7',
					descricao:'Também fomos recentemente agraciados com o Prêmio de Arquitetura Urbana da nossa cidade, um reconhecimento que enche nosso escritório de orgulho. Receber essa honraria é extremamente gratificante, pois celebra não apenas o resultado final de cada projeto, mas todo o empenho que dedicamos à pesquisa, ao diálogo com clientes e à busca incessante pela excelência'
				},
			]
		}
	}
}
</script>

<style scoped>
.img-premios {
	background-image: url(../../../assets/sala.jpg);
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	height: 200px;
	position: relative;
	margin-top: 60px;
	padding: 60px;
}

.img-premios::before {
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
</style>
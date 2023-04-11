<script setup>
import { ref } from 'vue';

const props_folio = defineProps({
	id: String,
	title: String,
	fields: Object
});

const issue_type = ref(props_folio.fields.summary.slice(0, 3) == 'BUG' ? 'BUG' : 'FUNCIONALIDAD');
const bug = ref(props_folio.fields.summary.slice(0, 3) == 'BUG' ? true : false);

</script>

<template>
	<div class="col-lg-4 col-md-6 col-sm-12">
		<div class="card issue motion">
			<div class=" card-body mt-0">
				<div class="card-body mt-0 p-1">
					<section>
						<div class="color-negro">
							<h6>{{ title }} - {{ fields.summary }}</h6>
						</div>
					</section>
					<section>
						<span :class="bug ? 'badge text-bg-azul' : 'badge text-bg-azul-claro'">Estatus</span> <span
							:class="bug ? 'badge bage-blanco color-negro' : 'badge bage-negro'">{{
								fields.status.name }}</span>
					</section>
					<section>
						<span :class="bug ? 'badge text-bg-azul' : 'badge text-bg-azul-claro'">Creada</span> <span
							:class="bug ? 'badge bage-blanco color-negro' : 'badge bage-negro'">{{
								fields.created
							}}</span>
					</section>
					<section>
						<span :class="bug ? 'badge text-bg-azul' : 'badge text-bg-azul-claro'">Actualizada</span> <span
							:class="bug ? 'badge bage-blanco color-negro' : 'badge bage-negro '">{{
								fields.updated }}</span>
					</section>
					<section class="mt-3">
						<span
							:class="bug ? 'badge text-bg-danger bage-blanco texto-azul-2' : 'bage-blanco badge texto-azul-3'">{{
								issue_type }}</span>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>
<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'BsGrid',
		props: [
			'fluid',
		],
		computed: {
			classes() {
				return this.fluid ? 'bs-container-fluid' : 'bs-container';
			},
		},
	};
</script>

<style scoped>
    .bs-container {
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
        outline: 1px solid red;
    }

    .bs-container-fluid {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
</style>

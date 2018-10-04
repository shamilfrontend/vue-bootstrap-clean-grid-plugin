<template>
    <div class="bs-row" :class="{'no-gutter': noGutter}">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'BsRow',
		props: {
			noGutter: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style lang="less" scoped>
    .bs-row {
        margin-left: -15px;
        margin-right: -15px;
    }

    .bs-container:before,
    .bs-container:after,
    .bs-container-fluid:before,
    .bs-container-fluid:after,
    .bs-row:before,
    .bs-row:after {
        content: " ";
        display: table;
    }

    .bs-container:after,
    .bs-container-fluid:after,
    .bs-row:after {
        clear: both;
    }
</style>

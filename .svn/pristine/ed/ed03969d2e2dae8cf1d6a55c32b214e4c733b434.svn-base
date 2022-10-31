<template>
	<div class="goodsListComponentRootDom">
		<goods-card v-for="(item, index) in list" v-if="max == 0 || index < max" :from="from" :item="item"></goods-card>
	</div>
</template>

<script>
	import goodsCard from '../goodsCard';
	export default {
		components: {
			goodsCard
		},
		props: {
			list: {
				type: Array,
				default: () => {
					return [];
				}
			},
			max: {
				type: Number,
				default: 0
			},
			from: {
				type: Object,
				default: () => {
					return {};
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodsListComponentRootDom {
		display: grid;
		grid-template-columns: repeat(auto-fill, 285px);
		grid-row-gap: 10px;
		grid-column-gap: 20px;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Square from './Square.svelte';
	export let grid: string[];
	export let found: string[];

	let a: number = -1;
	let b: number = -1;
	let resetTimeout: number;

	const dispatch = createEventDispatcher();
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			{emoji}
			on:click={() => {
				clearTimeout(resetTimeout);
				if (a === -1 && b === -1) {
					console.log('first click');
					a = i;
				} else if (b === -1) {
					b = i;
					console.log('second click');
					if (grid[a] === grid[b]) {
						console.log('correct');
						dispatch('found', { emoji });
						// correct
					} else {
						// incorrect
						resetTimeout = setTimeout(() => {
							a = -1;
							b = -1;
						}, 500);
					}
				} else {
					console.log('reset');
					a = i;
					b = -1;
				}
			}}
			selected={a === i || b === i}
			found={found.includes(emoji)}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 0.5 em;
		height: 100%;
	}
</style>

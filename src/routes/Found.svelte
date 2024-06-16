<script lang="ts">
	export let found: string[] = [];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	.found {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2em;
		height: 100%;
	}
	span {
		font-size: 5em;
		pointer-events: none;
	}
</style>

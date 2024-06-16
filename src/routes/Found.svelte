<script lang="ts">
	import { getTwemojiUrl } from './utils';
	import { receive } from './transitions';

	export let found: string[] = [];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<img src={getTwemojiUrl(emoji)} alt={emoji} in:receive={{ key: emoji }} />
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
	img {
		width: 6em;
		height: 6em;
		pointer-events: none;
	}
</style>

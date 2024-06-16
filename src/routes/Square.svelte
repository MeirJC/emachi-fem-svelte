<script lang="ts">
	import { getTwemojiUrl } from './utils';
	export let emoji: string = '';
	export let selected: boolean;
	export let found: boolean;
</script>

<div class="square" class:flipped={selected || found}>
	<button on:click />
	<div class="background"></div>
	{#if !found}
		<img src={getTwemojiUrl(emoji)} alt={emoji} />
		<!-- <span> {emoji}</span> -->
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		transition: transform 0.4s;

		border-radius: 1em;
	}

	.flipped {
		background-color: #eee;
		transform: rotateY(180deg);
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background: #eee;
		border: 0;
		border-radius: 1em;
		font-size: inherit;
	}

	.background {
		background: white;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 1em;
		border: 0.4em solid #eee;
	}
	img {
		width: 8em;
		height: 8em;
		pointer-events: none;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		border-radius: 1em;
	}
</style>

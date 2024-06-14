<script lang="ts">
	export let emoji: string = '';
	export let selected: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />
	<span> {emoji}</span>
</div>

<style>
	.square {
		background-color: lightblue;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	span {
		font-size: 7em;
		pointer-events: none;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.flipped button {
		background-color: crimson;
	}
</style>

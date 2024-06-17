import { crossfade } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: 500,
	delay: 300,
	easing: cubicOut
});

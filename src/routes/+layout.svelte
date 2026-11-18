<script lang="ts">
	import './layout.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>rel — Portofolio</title>
	<meta
		name="description"
		content="Portofolio M. Erel (rel. Creative Studio) — Fullstack Developer, Video Editor, Graphic Designer, & Motion Graphics."
	/>
</svelte:head>

{@render children()}

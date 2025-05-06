<script lang="ts">
	let { data } = $props()
</script>

<h1>photo.nuotsu.dev</h1>

<h2>Cameras</h2>

<ul>
	{#each data.cameras as camera}
		<li>{camera.model}</li>
	{/each}
</ul>

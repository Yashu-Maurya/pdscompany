<script>
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';

	import Partners from '$lib/components/Partners.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>PDS Company | Architecture & Construction</title>
	<meta
		name="description"
		content="PDS Company delivers large-scale architecture and construction projects that shape cities, communities, and industries."
	/>
</svelte:head>

<main>
	<Hero />
	<About />
	<Projects />
	<Partners />
	<ContactForm />
	<Footer />
</main>

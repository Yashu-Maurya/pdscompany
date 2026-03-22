<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	/** @type {HTMLElement[]} */
	let cards = [];

	const works = [
		{ title: 'Water Tank', desc: 'Sultanpur Water Tank Project', img: '/images/water-tank.png' },
		{ title: 'Water Pipeline', desc: 'Barabanki Area Water Pipeline Project', img: '/images/water-pipeline.png' }
	];

	onMount(() => {
		cards.forEach((card, i) => {
			gsap.fromTo(
				card,
				{ opacity: 0, x: -50 },
				{ opacity: 1, x: 0, duration: 0.8, delay: 0.2 + i * 0.2, ease: 'back.out(1.7)' }
			);
		});
	});
</script>

<section id="projects" class="projects">
	<div class="container">
		<h2>Projects & Works</h2>
		<div class="grid">
			{#each works as work, i}
				<div class="card" bind:this={cards[i]}>
					<div class="card-img-wrapper">
						<img src={work.img} alt={work.title} class="project-img" />
					</div>
					<div class="card-content">
						<h3>{work.title}</h3>
						<p>{work.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects {
		padding: var(--section-padding);
		background-color: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
	}

	h2 {
		font-family: var(--font-heading);
		font-size: clamp(2.5rem, 5vw, 4rem);
		margin-bottom: 4rem;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 3rem;
	}

	.card {
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
		border-radius: 4px;
	}

	.card:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
	}

	.card-img-wrapper {
		width: 100%;
		border-bottom: 1px solid var(--color-border);
		overflow: hidden;
		border-radius: 4px 4px 0 0;
	}

	.project-img {
		width: 100%;
		height: 280px;
		object-fit: cover;
		display: block;
		transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.card:hover .project-img {
		transform: scale(1.03);
	}

	.card-content {
		padding: 2.5rem 2rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.card h3 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
	}

	.card p {
		font-size: 1rem;
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-bottom: 0;
	}
</style>

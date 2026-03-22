<script>
	import { onMount } from 'svelte';

	let heroEl;
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<header class="navbar">
	<nav class="container nav-inner">
		<div class="nav-links">
			<a href="#projects">Projects</a>
			<a href="#about">About</a>
		</div>
		<a href="#contact" class="contact-btn">Contact Us</a>
	</nav>
</header>

<section class="hero" bind:this={heroEl}>
	<div class="container hero-content">
		<div class="hero-text" class:visible>
			<h1>PDS<br />COMPANY</h1>
			<p class="subtitle">
				Delivering essential infrastructure and empowering our communities across Uttar Pradesh.
			</p>
			<div class="stats">
				<div class="stat">
					<span class="stat-number">3</span>
					<span class="stat-label">Years of<br />Experience</span>
				</div>
				<div class="stat">
					<span class="stat-number">2</span>
					<span class="stat-label">Completed<br />Projects</span>
				</div>
			</div>
		</div>
		<div class="hero-image" class:visible>
			<img src="/images/hero.png" alt="Modern architectural building" />
			<div class="image-caption">↳ Horizon Center, Skyline Campus, Toronto</div>
		</div>
	</div>
</section>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1.5rem 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-border);
	}

	.nav-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		display: flex;
		gap: 2.5rem;
	}

	.nav-links a {
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--color-text);
		transition: opacity 0.2s;
	}

	.nav-links a:hover {
		opacity: 0.5;
	}

	.contact-btn {
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--color-accent);
		color: #fff;
		padding: 0.7rem 1.5rem;
		border-radius: 2px;
		transition: opacity 0.2s;
	}

	.contact-btn:hover {
		opacity: 0.8;
	}

	.hero {
		padding-top: 8rem;
		padding-bottom: 4rem;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 3rem;
		align-items: start;
	}

	.hero-text {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.hero-text.visible {
		opacity: 1;
		transform: translateY(0);
	}

	h1 {
		font-family: var(--font-heading);
		font-size: clamp(3.5rem, 6vw, 5.5rem);
		font-weight: 800;
		line-height: 0.95;
		letter-spacing: -0.02em;
		margin-bottom: 1.5rem;
	}

	.subtitle {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		line-height: 1.7;
		margin-bottom: 2.5rem;
		max-width: 400px;
	}

	.stats {
		display: flex;
		gap: 3rem;
		margin-bottom: 2.5rem;
	}

	.stat {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
	}

	.stat-number {
		font-family: var(--font-heading);
		font-size: 2.8rem;
		font-weight: 700;
	}

	.stat-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
		line-height: 1.4;
	}

	.hero-image {
		position: relative;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
	}

	.hero-image.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-image img {
		width: 100%;
		height: 520px;
		object-fit: cover;
	}

	.image-caption {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		font-size: 0.7rem;
		color: #fff;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 900px) {
		.hero-content {
			grid-template-columns: 1fr;
		}
		.hero-image img {
			height: 350px;
		}
		.nav-links {
			display: none;
		}
	}
</style>

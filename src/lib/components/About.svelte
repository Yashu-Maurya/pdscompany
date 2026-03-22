<section id="about" class="about">
	<div class="container about-grid">
		<div class="about-text">
			<p>
				We combine architecture and construction expertise to deliver world-class infrastructure
				projects. With years of experience, we handle every stage of the process: from design to
				engineering to final delivery.
			</p>
		</div>
		<div class="about-stats">
			<h2>Build at Scale.<br />Build for Impact.</h2>
			<div class="stat-row">
				<div class="stat-item">
					<span class="stat-num">100%</span>
					<span class="stat-desc">of our portfolio is in India.</span>
				</div>
				<div class="stat-item">
					<span class="stat-num">100%</span>
					<span class="stat-desc">of projects use Modern technologies.</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		padding: var(--section-padding);
		border-top: 1px solid var(--color-border);
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 6rem;
		align-items: start;
	}

	.about-text p {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-text-muted);
		max-width: 360px;
	}

	.about-stats h2 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		margin-bottom: 3rem;
	}

	.stat-row {
		display: flex;
		gap: 3rem;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.stat-num {
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 700;
	}

	.stat-desc {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		max-width: 160px;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		.stat-row {
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>

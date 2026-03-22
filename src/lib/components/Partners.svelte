<section class="partners">
	<div class="container partners-inner">
		{#each ['PNC Infratech'] as partner}
			<div class="partner-logo">{partner}</div>
		{/each}
	</div>
</section>

<style>
	.partners {
		padding: 3rem 4rem;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		background: var(--color-bg);
	}

	.partners-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.partner-logo {
		font-family: var(--font-body);
		font-size: 0.95rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		color: var(--color-text);
		opacity: 0.65;
		transition: opacity 0.2s;
		cursor: default;
	}

	.partner-logo:hover {
		opacity: 1;
	}

	@media (max-width: 768px) {
		.partners-inner {
			justify-content: center;
		}
	}
</style>

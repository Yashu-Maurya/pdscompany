<script>
	import Map from '$lib/components/Map.svelte';
</script>

<section class="contact">
	<div class="container">
		<div class="contact-grid">
			<div class="info">
				<h2>Contact Us</h2>
				<div class="details">
					<div class="item">
						<h4>Phone</h4>
						<p>+91 8299280019</p>
						<p>+91 9792852185</p>
						<p>+91 955432400</p>
					</div>
					<div class="item">
						<h4>Email</h4>
						<p>pdscompany2023@gmail.com</p>
					</div>
					<div class="item">
						<h4>Address</h4>
						<p>
							Neera Aarogya Kendra, PARK VIEW APARTMENT,<br />SULABH AWAS YOJNA, A-75/2, AHRAY-1,
							SECTOR-1,<br />Unnamed Road, Gomti Nagar Vistar,<br />Lucknow, Uttar Pradesh, 226010
						</p>
					</div>
				</div>
			</div>
			<div class="map-wrap">
				<Map />
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		background-color: var(--color-text);
		color: var(--color-bg);
	}

	h2 {
		font-size: 4rem;
		margin-bottom: 2rem;
		color: var(--color-bg);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}

	@media (max-width: 768px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.item h4 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--color-accent);
	}

	.item p {
		font-size: 1.2rem;
	}

	.map-wrap {
		border: var(--brutal-border);
		border-color: var(--color-bg);
		box-shadow: 8px 8px 0px var(--color-bg);
		background-color: var(--color-bg);
	}
</style>

<footer class="footer">
	<div class="container footer-inner">
		<div class="footer-top">
			<div class="footer-brand">
				<h3>PDS COMPANY</h3>
			</div>
			<div class="footer-region">
				<h5>India</h5>
				<p>+91 8299280019<br />+91 9792852185<br />+91 9554324000</p>
				<p>
					Neera Aarogya Kendra<br />PARK VIEW APARTMENT, SULABH AWAS YOJNA<br />A-75/2, AHRAY-1,
					SECTOR-1, Unnamed Road<br />Gomti Nagar Vistar, Lucknow<br />Uttar Pradesh, 226010
				</p>
			</div>
		</div>
		<div class="footer-bottom">
			<span>©PDS COMPANY 2025</span>
			<div class="footer-links">
				<a href="#projects">Projects</a>
				<a href="#about">About</a>
			</div>
			<span class="credit">Design by Studio</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-text);
		color: #fff;
		padding: 4rem 4rem 2rem;
	}

	.footer-inner {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 1fr;
		gap: 3rem;
	}

	.footer-brand h3 {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.footer-region h5 {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 1rem;
	}

	.footer-region p {
		font-size: 0.8rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 0.5rem;
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.footer-links {
		display: flex;
		gap: 2rem;
	}

	.footer-links a {
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.5);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: #fff;
	}

	.credit {
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.3);
	}

	@media (max-width: 768px) {
		.footer-top {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.footer-bottom {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
	}
</style>

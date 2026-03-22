<section id="contact" class="contact-section">
	<div class="contact-layout">
		<div class="contact-image">
			<img src="/images/contact.png" alt="Modern building architecture" />
		</div>
		<div class="contact-form-wrap">
			<div class="form-inner">
				<h2>Let's Build Together.</h2>
				<p class="form-subtitle">
					Looking to bring your project to life? Our team is ready to design and deliver at any
					scale.
				</p>

				<div class="mail-action">
					<a href="mailto:contact@pdscompany.com" class="submit-btn">Email Us Directly</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		border-top: 1px solid var(--color-border);
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 700px;
	}

	.contact-image {
		position: relative;
		overflow: hidden;
	}

	.contact-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.contact-form-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem;
		background: var(--color-bg-alt);
	}

	.form-inner {
		max-width: 420px;
		width: 100%;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 0.75rem;
	}

	.form-subtitle {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.submit-btn {
		display: inline-block;
		text-align: center;
		text-decoration: none;
		box-sizing: border-box;
		width: 100%;
		padding: 1rem;
		margin-top: 1.5rem;
		background: var(--color-accent);
		color: #fff;
		border: none;
		font-family: var(--font-body);
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		cursor: pointer;
		transition: opacity 0.2s;
	}

	.submit-btn:hover {
		opacity: 0.85;
	}

	@media (max-width: 768px) {
		.contact-layout {
			grid-template-columns: 1fr;
		}
		.contact-image {
			height: 300px;
		}
	}
</style>

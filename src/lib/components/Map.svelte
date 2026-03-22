<section class="map-section">
  <div class="map-container">
    <iframe 
      title="PDS Company Location"
      sandbox="allow-scripts allow-same-origin"
      width="100%" 
      height="400" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0" 
      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=40.7128,-74.0060+(PDS%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe>
  </div>
  <div class="location-details">
    <div class="coords">40°42'46.1"N 74°00'21.6"W</div>
  </div>
</section>

<style>
  .map-section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .map-container {
    width: 100%;
    height: 400px;
    border-bottom: 4px solid var(--color-bg);
    filter: grayscale(100%) contrast(120%);
  }

  iframe {
    width: 100%;
    height: 100%;
    display: block;
  }

  .location-details {
    padding: 1rem;
    background-color: var(--color-bg);
    color: var(--color-text);
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .coords {
    font-family: var(--font-heading);
    letter-spacing: 2px;
  }
</style>

    const progressBar = document.getElementById('progressBar');
    const percentText = document.getElementById('percent');
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    let progress = 0;

    const simulateLoading = setInterval(() => {
      if (progress < 100) {
        progress += 2; // Increment progress
        progressBar.style.width = progress + '%'; // Update progress bar width
        percentText.textContent = progress + '%'; // Update percentage text
      } else {
        clearInterval(simulateLoading); // Stop the simulation
        loader.style.opacity = '0'; // Fade out loader
        setTimeout(() => {
          loader.style.display = 'none'; // Hide loader
          content.style.display = 'block'; // Show content
        }, 500); // Matches fade-out duration
      }
    }, 100); // Adjust speed of loading


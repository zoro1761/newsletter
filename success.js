     // Function to extract query parameters from URL
    function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Retrieve the email from the URL
    const email = getQueryParam('email');

    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.innerHTML = `<p>A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.</p>`;
    function dismiss() {

        // Assuming your homepage URL is 'index.html', update it accordingly
        const homepageURL = 'index.html';

        // Redirect to the homepage URL
        window.location.replace(homepageURL);
}



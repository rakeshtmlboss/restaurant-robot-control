// bolt_iot.js

document.addEventListener('DOMContentLoaded', function() {
    const boltAPI = 'https://cloud.boltiot.com/remote/YOUR_API_KEY/';

    async function sendCommand(endpoint, params) {
        const response = await fetch(boltAPI + endpoint, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: params
        });
        const data = await response.json();
        console.log(data);
    }

    document.getElementById('startRobot').addEventListener('click', function() {
        sendCommand('command', { value: 'start' });
    });

    document.getElementById('stopRobot').addEventListener('click', function() {
        sendCommand('command', { value: 'stop' });
    });

    // Add more functions as needed
});

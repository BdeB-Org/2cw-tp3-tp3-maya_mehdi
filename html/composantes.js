const baseUrl = "http://127.0.0.1:8080/ords/tp3/";
const carteGraphiqueUrl = "cartegraphique";
const carteMereUrl = "cartemere";
const cpuUrl = "processeur";
const ramUrl = "ram";

document.addEventListener("DOMContentLoaded", async function() {
    let url = baseUrl+carteGraphiqueUrl;
    console.log('Fetching URL:', url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
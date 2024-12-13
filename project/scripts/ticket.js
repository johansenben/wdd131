const subForms = {
    "request-order": [
        `<label for="description">Describe Order or Request (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ],
    "computer": [
        `<label for="computer-model">Computer Model: <input type="text" name="computer-model" id="computer-model"></label>`,
        `<label for="computer-name">Computer Name: <input type="text" name="computer-name" id="computer-name"></label>
        <details>
            <summary>How to find computer name</summary>
            <p>All computers in the division should have text in the bottom right corner of the desktop. The computer name is on the top line and is labeled by "hostname". If the text is missing, search "cmd" in the start menu and open "Command Prompt", then type "hostname" and press enter. It should display the computer name.</p>
        </details>`,
        `<label for="computer-serial-number">Serial Number: <input type="text" name="computer-serial-number" id="computer-serial-number"></label>
        <details>
            <summary>Where is the serial number?</summary>
            <p>There is usually a sticker on the computer with the serial number. The serial number should be labeled by "Serial Number, "S/N" or "SN".</p>
        </details>`,
        `<label for="description">Describe Problem (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ],
    "chromebook": [
        `<label for="chromebook-model">Chromebook Model: <input type="text" name="chromebook-model" id="chromebook-model"></label>`,
        `<label for="chromebook-serial-number">Chromebook Serial Number: <input type="text" name="chromebook-serial-number" id="chromebook-serial-number"></label>
        <details>
            <summary>Where is the serial number?</summary>
            <p>There is usually a sticker on the chromebook with the serial number. The serial number should be labeled by "Serial Number, "S/N" or "SN". If the sticker is missing and your chromebook can turn on, press Alt + V and the serial number will appear on the top-right corner of the screen.</p>
        </details>`,
        `<label for="description">Describe Problem (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ],
    "internet": [
        `<h2 class="field-header">Wifi or Ethernet?</h2>
        <div class="flex">
            <label for="wifi">Wifi <input type="radio" name="internet-method" id="wifi"></label>
            <label for="ethernet">Ethernet <input type="radio" name="internet-method" id="ethernet"></label>
        </div>`,
        `<label for="ip-address">IP address (ipv4): <input type="text" name="ip-address" id="ip-address"></label>
        <details>
            <summary>How to find my IP address on Windows 10</summary>
            <p>Type "cmd" in the start menu and open "Command Prompt". Type "ipconfig" and press enter. The IP address is labeled by "IPv4 Address". It should look like ##.##.##.###, where the hashtags/pound signs are numbers.</p>
        </details>`,
        `<label for="description">Describe Problem (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ],
    "projector": [
        `<label for="projector-model">Projector Model</label>
        <input type="text" name="projector-model" id="projector-model">`,
        `<label for="description">Describe Problem (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ],
    "printer": [
        `<label for="printer-mmodel">Printer/Scanner Model: <input type="text" name="printer-model" id="printer-model"></label>`,
        `<label for="description">Describe Problem (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ],

    "other": [ //monitor, phone-intercom, viewboard-smartboard or any others that only have a decription field
        `<label for="description">Describe Problem (Required):</label>
        <textarea name="description" id="description" required></textarea>`
    ]
};

const techCategory = document.querySelector("#tech-category");
const subForm = document.querySelector("#sub-form");

const setSubForm = (category) => {
    subForm.innerHTML = '';
    if (!(category in subForms))
        category = "other";
    subForms[category].forEach((field) => {
        subForm.innerHTML += `<div class="form-field">${field}</div>`;
    });
}
techCategory.addEventListener("change", (e) => {
    let value = e.target.value ?? "other";
    setSubForm(value);
});


let totalTickets = parseInt(window.localStorage.getItem("total-tickets")) || 0;
document.querySelector("#total-tickets-submitted").textContent = `Total Tickets Submitted: ${totalTickets}`;

document.querySelector("#ticket-form").addEventListener("submit", (e) => {
    totalTickets++;
    window.localStorage.setItem("total-tickets", `${totalTickets}`);
    document.querySelector("#total-tickets-submitted").textContent = `Total Tickets Submitted: ${totalTickets}`;
});

window.onload = () => {
    //re-add subform after back arrow is pressed
    let value = techCategory.value ?? '';
    if (value)
        setSubForm(value);
}
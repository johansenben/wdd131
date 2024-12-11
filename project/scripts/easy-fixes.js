const categories = [
    {
        heading: "Computer, Keyboard or Mouse",
        headingID: "computer",
        scenarios: [
            {
                scenario: "What is the difference between \"restart\" and \"shut down\" on Windows 10?",
                scenarioID: "shut-down-vs-restart",
                content: "<p>When you click \"shut down\", Windws attempts to save the state to make it turn back on faster, which also tends to save any problems on the computer. \"restart\" closes everything and sometimes fixes problems or makes the computer run faster. It is reccomended that every comuter gets restarted at least every 1-2 weeks. (Note: Your computer will probably be slow for a few minutes after restarting)</p>"
            },
            {
                scenario: "My computer won't turn on.",
                content: `
                    <ol>
                        <li>Check if the power is connected.</li>
                        <li>Check if your computer makes any noise (it can be really quiet) and check if the light on the power button is on. The fans are usually louder right after you press the power button. If the computer makes noise or the light on the power button is on, then the problem is most likely related to the monitor.</li>
                    </ol>`
            },
            {
                scenario: "My computer is slow.",
                content: `
                    <ol>
                        <li>Try closing some programs. Chrome tabs tend to affect the performance more than they should (they use a lot of ram).</li>
                        <li>If it is still slow, try restarting your computer. See <a href="#shut-down-vs-restart">"Shut Down" VS "Restart"</a>.</li>
                    </ol>`
            },
            {
                scenario: "My keyboard/mouse wont work.",
                content: `
                    <ol>
                        <li>Make sure it is plugged into the computer properly.</li>
                        <li>Plug the keyboard/mouse into adifferent usb port.</li>
                        <li>Try using a different keyboard/mouse.</li>
                    </ol>`
            },
            {
                scenario: "Chrome or another browser is being slow or not working properly.",
                content: `
                    <ol>
                        <li>Clear your browser cache. Do this by clicking the 3 dots (usually in the top-right corner), then click "delete browsing date", then "delete data". It might be different on different browsers.</li>
                        <li>Open the browser in incognito mode. in chrome, click the 3 dots on the top-right corner and click "new incognito window".</li>
                    </ol>`
            }
        ]
    },
    {
        heading: "Monitor/Screen",
        headingID: "monitor",
        scenarios: [
            {
                scenario: "My monitor won't turn on.",
                content: `
                    <ol>
                        <li>Make sure the cables are connected properly.</li>
                        <li>Is the light on the power button on? If the light is on, but the monitor isn't displaying anything, it could be a problem with the monitor, the computer, a cable or an adapter. If the light is on, It is probably a problem with the monitor or the power cable.</li>
                    </ol>
                `
            },
            {
                scenario: "My monitor is flickering.",
                content: `
                    <ol>
                        <li>Make sure the cables are connected properly.</li>
                    </ol>
                `
            }
        ]
    },
    {
        heading: "Chromebook",
        headingID: "chromebook",
        scenarios: [
            {
                scenario: "Note: Older chromebooks",
                content: `
                    <p>Older chromebooks might not be fixed. A few years after a chromebook gets relased, it stops receiving security updates. Also, there have been some models of chromebooks that suddenly stop working when they get a chrome OS update.</p>
                `
            },
            {
                scenario: "My chomebook has visible damage.",
                content: `
                    <ul>
                        <li>Depending on the damage, your school or the student responsible for damaging the chromebook will need to pay for replacement parts.</li>
                        <li>Screens, keyboards and trackpads are usually easy to replace. Charging ports are easier to replace on some chromebooks than others. It is usually easier to replace an entire keyboard than an individual key.</li>
                    </ul>
                `
            },
            {
                scenario: "My chromebook won't turn on.",
                content: `
                    <ol>
                        <li>See <a href="#chromebook-not-charging">"My Chromebook Isn't Charging"</a>.</li>
                    </ol>
                `
            },
            {
                scenario: "My chromebook isn't charging.",
                scenarioID: "chromebook-not-charging",
                content: `
                    <ol>
                        <li>When you plug it in, is there a light on the side that turns on? If no light turns on, try a different charging cable. If it still doesn't change, it could be a problem with the charging port or the motherboard. If the light does turn on, It could be the motherboard, battery or charging port.</li>
                    </ol>
                `
            }
        ]
    },
    {
        heading: "Phone or Intercom System (No personal phones)",
        headingID: "phone-intercom",
        scenarios: [
            {
                scenario: "My phone won't turn on.",
                content: `
                    <ol>
                        <li>Did the phone get plugged into a different ethernet port. The phones in the division use POE (power over ethernet) and unused ethernet port should be disabled. It is possible that the phone was plugged into a disabled port or the port has POE turned off.</li>
                    </ol>
                `
            },
            {
                scenario: "My phone is quiet or the person I am calling can't hear me.",
                content: `
                    <ul>
                        <li>Try adjusting the volume setting on the phone.</li>
                        <li>This is usually caused by a problem with the speaker/microphone in the phone.</li>
                    </ul>
                `
            }
        ]
    },
    {
        heading: "Internet, Wifi or Ethernet",
        headingID: "internet",
        scenarios: [
            {
                scenario: "Any Internet Problem",
                content: `
                    <ol>
                        <li>
                            Does your device have a wifi/ethernet symbol? It is usually onthe bottom-right corner on a windows computer or chromebook. An a smartphone, ipad or tablet, it is usually on the top-right corner.
                            <div class="logos">
                                <img src="images/wifi-symbol.svg" alt="Wifi Symbol" loading="lazy">
                                <img src="images/ethernet-symbol.svg" alt="Ethernet Symbol" loading="lazy">
                            </div>
                        </li>
                        <li>If it has a wifi/ethernet symbol, google "internet speed test" and click "run speed test". The download and upload speed should be at least 20 Mbps. (It might seem slow at 20 Mbps, but it is usable)</li>
                        <li>Try restarting your device. Do not click shut down. If the device is a computer, see <a href="#shut-down-vs-restart">"Shut Down" VS "Restart"</a>.</li>
                    </ol>
                `
            },
            {
                scenario: "Wifi",
                content: `
                    <ol>
                        <li>Make sure you aren't connected to HSD Open. In the internet settings on your device click/tap on HSD Open and click "forget". If it says "connect" instead of "forget", then you have never connected to HSD Open on your device</li>
                        <li>Try turning your wifi off and on again.</li>
                        <li>TMake sure that you are using youre computer username/password to log in to HSD BYOD.</li>
                    </ol>
                `
            },
            {
                scenario: "Ethernet",
                content: `
                    <ol>
                        <li>Check if the ethernet cable is connected properly. there should be a flickering light on each end of the cable.</li>
                    </ol>
                `
            }
        ]
    },
    {
        heading: "Projector, Smartboard or Viewboard",
        headingID: "projector-viewboard-smartboard",
        scenarios: [
            {
                scenario: "My projector isn't working and the \"Lamp\" light on the projector is on.",
                content: `
                    <p>The projector needs a new bulb. Submit a ticket with the projector model and room number.</p>
                `
            },
            {
                scenario: "My projector or viewboard says it can't find a source.",
                content: `
                    <ol>
                        <li>Check to see if every cable is connected to your computer and projector/viewboard properly.</li>
                        <li>Use the remote to change the source.</li>
                    </ol>
                `
            }
        ]
    },
    {
        heading: "Printer or Scanner",
        headingID: "printer",
        scenarios: [
            {
                scenario: "My computer says my printer is offline.",
                content: `
                    <ol>
                        <li>Make sure the printer is on and the ethernet cable is connected. the ethernet cable should have a flickering light on each end.</li>
                        <li>Check if there is a different printer with a similar name on your computer. You might be trying to use an old printer that didn't get removed from your computer.</li>
                    </ol>
                `
            }
        ]
    }
];

const legendList = document.querySelector("#legend ul");

const fixesContainer = document.querySelector("#fixes");
const addScenarios = (category) => {
    if (category.scenarios && category.scenarios.length > 0) {
        legendList.innerHTML += `<li><a href="#${category.headingID}">${category.heading}</a></li>`;
        fixesContainer.innerHTML += `<h2 id="${category.headingID}">${category.heading}</h2><div class="details-box">`;
        category.scenarios.forEach((scenario) => {
            fixesContainer.innerHTML += `
                <h3 ${"id=\"" + scenario.scenarioID + '"' ?? ''}>${scenario.scenario}</h3>
                ${scenario.content}
            `;
        });
        fixesContainer.innerHTML += "</div>";
    }
    
}

categories.forEach(addScenarios);

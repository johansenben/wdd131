document.querySelector("#header").innerHTML = `
    <img class="horizon-logo" src="images/horizon-school-division-logo.webp" alt="Horizon School Division Logo" loading="lazy">
    <div id="hamburger-btn"></div>
    <nav class="nav">
        <ul>
            <li class="nav-li"><a href="index.html">Home</a></li>
            <li class="nav-li"><a href="ticket.html">Submit A Ticket</a></li>
            <li class="nav-li"><a href="easy-fixes.html">Easy Fixes & Instructions</a></li>
            <li id="close-menu">Close</li>
        </ul>
    </nav>
`;

document.querySelector("#hamburger-btn").addEventListener("click", e => {
    document.querySelector("#hamburger-btn").classList.toggle("open");
});
document.querySelector("#close-menu").addEventListener("click", e => {
    document.querySelector("#hamburger-btn").classList.toggle("open");
});
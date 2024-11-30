document.querySelector(".hamburger-btn").addEventListener("click", e => {
    document.querySelector(".nav").classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1913, July, 27",
        area: 88562,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-51467.jpg"
    },
    {
        templeName: "Calgary Alberta",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-3888.jpg"
    },
    {
        templeName: "Edmonton Alberta",
        location: "Edmonton, Alberta, Canada",
        dedicated: "1999, December, 11",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/edmonton-alberta-temple/edmonton-alberta-temple-51155.jpg"
    }
];

const getTempleHTML = (templeObj) => `
    <figure class="temple-card">
        <figcaption>${templeObj.templeName}</figcaption>
        <p>Location: ${templeObj.location}</p>
        <p>Dedicated: ${templeObj.dedicated}</p>
        <p>Size: ${templeObj.area} sq ft</p>
        <img class="temple-img" src="${templeObj.imageUrl}" alt="${templeObj.templeName}" loading="lazy" width="600" height="300">
    </figure>
`;

const album = document.querySelector(".album");
const templeCategories = {
    home: temples,
    old: temples.filter((temple) => parseInt(temple.dedicated.substring(0,4)) < 1900),
    new: temples.filter((temple) => parseInt(temple.dedicated.substring(0,4)) > 2000),
    large: temples.filter((temple) => temple.area > 90000),
    small: temples.filter((temple) => temple.area < 10000)
}
for (const [category, filteredTemples] of Object.entries(templeCategories)) {
    document.querySelector(`#${category}-btn`).addEventListener('click', (e) => {
        album.innerHTML = '';
        filteredTemples.forEach((temple) => {
            album.innerHTML += getTempleHTML(temple);
        });
        document.querySelector("#category-header").textContent = category.charAt(0).toUpperCase() + category.slice(1);
    });
}
document.querySelector("#home-btn").click();
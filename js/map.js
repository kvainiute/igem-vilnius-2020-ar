let pointList = [
    {
        lt: {
            title: "Katedros aik&scaron;t&edot;",
            menuTitle: "DNR"
        },
        en: {
            title: "Cathedral Square",
            menuTitle: "DNA"
        },
        coordinates: [25.288243, 54.685297],
        link: "dna",
    },
    {
        lt: {
            title: "Simono Daukanto aik&scaron;t&edot;",
            menuTitle: "RNR"
        },
        en: {
            title: "Simonas Daukantas Square",
            menuTitle: "RNA"
        },
        coordinates: [25.286342, 54.683594],
        link: "rna",
    },
    {
        lt: {
            title: "Baltasis tiltas",
            menuTitle: "Genetinė grandinė"
        },
        en: {
            title: "White Bridge",
            menuTitle: "Genetic circuit"
        },
        coordinates: [25.273619, 54.693303],
        link: "circuit",
    },
    {
        lt: {
            title: "Literatų gatvė",
            menuTitle: "Biobrick"
        },
        en: {
            title: "Literatų Street",
            menuTitle: "Biobrick"
        },
        coordinates: [25.290187, 54.682223],
        link: "biobrick",
    },
    {
        lt: {
            title: "Trij&uogon; kry&zcaron;i&uogon; kalnas",
            menuTitle: "Sintetinė Biologija"
        },
        en: {
            title: "Hill of Three Crosses",
            menuTitle: "Synthetic Biology"
        },
        coordinates: [25.297490, 54.686754],
        link: "painting",
    },
    {
        lt: {
            title: "Bernardin&uogon; sodas (I)",
            menuTitle: "Žaliai fluorescuojantis baltymas"
        },
        en: {
            title: "Bernardine Garden (I)",
            menuTitle: "Green fluorescent protein"
        },
        coordinates: [25.297362, 54.683689],
        link: "gfp",
    },
    {
        lt: {
            title: "Vinco Kudirkos aik&scaron;t&edot;",
            menuTitle: "Genetiškai modifikuoti organizmai"
        },
        en: {
            title: "Vincas Kudirka Square",
            menuTitle: "Genetically modified organisms"
        },
        coordinates: [25.280564, 54.687349],
        link: "gmo",
    },
    {
        lt: {
            title: "U&zcaron;upio undin&edot;",
            menuTitle: "Bakteriofagas"
        },
        en: {
            title: "Mermaid of U&zcaron;upis",
            menuTitle: "Bacteriophage"
        },
        coordinates: [25.292648, 54.680584],
        link: "nano",
    },
    {
        lt: {
            title: "Luki&scaron;ki&uogon; aik&scaron;t&edot;",
            menuTitle: "Sekvenavimas"
        },
        en: {
            title: "Luki&scaron;k&edot;s Square",
            menuTitle: "Sequencing"
        },
        coordinates: [25.271029, 54.689640],
        link: "sequencing",
    },
    {
        lt: {
            title: "Bernardin&uogon; sodas (II)",
            menuTitle: "Modeliniai organizmai"
        },
        en: {
            title: "Bernardine Garden (II)",
            menuTitle: "Model organisms"
        },
        coordinates: [25.296628, 54.682367],
        link: "ecoli",
    },
    {
        lt: {
            title: "Vokiečių gatvė",
            menuTitle: "Crispr-Cas9"
        },
        en: {
            title: "Vokiečių Street",
            menuTitle: "Crispr-Cas9"
        },
        coordinates: [25.283881, 54.679338],
        link: "crisprcas9",
    },
    {
        lt: {
            title: "Rotušės aikštė",
            menuTitle: "Transliacija"
        },
        en: {
            title: "Town Hall Square",
            menuTitle: "Translation"
        },
        coordinates: [25.287631, 54.679236],
        link: "translation",
    },
    {
        lt: {
            title: "MO muziejus",
            menuTitle: "Virusai"
        },
        en: {
            title: "MO Museum",
            menuTitle: "Viruses"
        },
        coordinates: [25.277759, 54.679589],
        link: "virus",
    },
];



function initializeNavBar(language) {

    var els = document.querySelectorAll('#dropdown-content :not(.navbar-contr):not(#navbar-controls):not(img):not(.languageBox):not(h1)');
    for (var i = 0; i < els.length; i++) {
        els[i].parentNode.removeChild(els[i])
    }
    var sortedPointList = pointList;
    sortedPointList.sort((a, b) => {
        if (a[language].menuTitle < b[language].menuTitle)
            return -1;
        if (a[language].menuTitle > b[language].menuTitle)
            return 1;
        return 0;
    })
    pointList.forEach(function (point) {
        var a = document.createElement('a');
        a.setAttribute("href", './ar.html?model=' + point.link);
        a.innerHTML = point[language].menuTitle;
        document.getElementById("dropdown-content").appendChild(a);
    })
}

function makeFeatures(language) {
    let returnList = [];
    for (let item of pointList) {
        let theLink;
        if (typeof (item.customLink) === 'string') {
            theLink = item.customLink;
        } else {
            theLink = './ar.html?model=' + item.link;
        }

        returnList.push({
            'type': 'Feature',
            'properties': {
                'description': '<p><a href="' + theLink + '">' + item[language].title + '</a></p>'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': item.coordinates
            }
        });
    }
    return returnList;
}
mapboxgl.setRTLTextPlugin('https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.2/mapbox-gl-rtl-text.js');

function loadMap(language) {
    if (!mapboxgl.supported()) {
        alert('Your browser does not support Mapbox GL');
    } else {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaWdlbXZpbG5pdXMiLCJhIjoiY2s4b2tuM3ZmMDNmMDNlbnNyNjBjYmF6byJ9.awDMKTb7QstzkFAD3FPA-g';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'https://api.maptiler.com/maps/565e5c8b-5c56-489b-b954-0f260bfa40eb/style.json?key=dh3avbXkPzMlI59PVFsz',
            center: [25.283881, 54.683594],
            zoom: 13
        });
        map.on('load', function () {
            map.loadImage('images/map-target.png', function (error, image) {
                if (error) throw error;
                map.addImage('map-target', image);
                map.addSource('stations-Vln', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': makeFeatures(language),
                    }

                });
                // Add a layer showing the places.
                map.addLayer({
                    'id': 'stations',
                    'type': 'symbol',
                    'source': 'stations-Vln',
                    'layout': {
                        'icon-image': 'map-target',
                        'icon-allow-overlap': true,
                        'icon-size': 0.4,
                        'icon-anchor': "bottom"
                    }
                });
                map.on('click', 'stations', function (e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(map);
                });
                map.on('mouseenter', 'places', function () {
                    map.getCanvas().style.cursor = 'pointer';
                });
                map.on('mouseleave', 'places', function () {
                    map.getCanvas().style.cursor = '';
                });
            });


        });
    }

}


function updateTexts(language) {
    initializeNavBar(language)
    loadMap(language)
}
updateTexts(LanguageSwitcher.currentLanguage);
LanguageSwitcher.makeLanguageBox(document.getElementById("language"), 0);
LanguageSwitcher.addOnLanguageChangeListener(updateTexts);

window.onresize = () => {
    if (navOpen) return;
    if (window.innerWidth > 768) {
        navBar.style.right = "-33vw";
    } else {
        navBar.style.right = "-66vw";
    }
};

let navBar = document.getElementById("dropdown-content");
let footerButton = document.getElementById("footer");

var navOpen = false;

function openNav() {
    if (navOpen) return;
    navOpen = true;
    navBar.style.right = "0";
    footerButton.style.bottom = "-100px";
}

function closeNav() {
    if (!navOpen) return;
    navOpen = false;
    if (window.innerWidth > 768) {
        navBar.style.right = "-33vw";
    } else {
        navBar.style.right = "-66vw";
    }
    footerButton.style.bottom = "0";
}


document.addEventListener('load', function () {
    var language = LanguageSwitcher.currentLanguage
    initializeNavBar(language);
    loadMap(language)
});

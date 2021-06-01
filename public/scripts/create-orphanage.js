//create map
const map = L.map('mapid').setView([-20.1486953,-44.8961689], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;

// create and add marker

map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value =lat
    document.querySelector('[name=lng]').value =lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

// add photo
function addPhotoField() {
    // get the photo container #images
    const container = document.querySelector('#images')
    // get the container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // double the lastet image add
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verify if field is empty, if yes don't add to img container
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }

    // clean fied before add img to container
    input.value = ""

    // add double to container #images
    container.appendChild(newFieldContainer)
}


function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length <= 1) {
        // clean field value
        span.parentNode.children[0].value = ""
        return
    }

    // delete field
    span.parentNode.remove();
}

    //  select yes or no
    function toggleSelect(event) {

    // remove the class .active (from buttons)
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })

    //put the class .active in who button I clicked
    const button = event.currentTarget
        button.classList.add('active')

    // refresh the input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event) {
    // validate if lat n' lng is fill
    const needsLatAndLng = false ;
    if(needsLatAndLng) {
    event.preventDefault()
    alert ('Selecione um ponto no mapa')
}
}
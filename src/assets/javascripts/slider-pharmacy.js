fetch("./FOM/src/assets/javascripts/data/home.json")
.then((res) => {
    return res.json()
})
.then(function(data) {
    let render = ""

    data.listPharmacy.forEach(item => {
        render += `<a href="${item.url}" data-id="${item.id}" class="item flex flex-col justify-center items-center">
            <div class="image">
                <img class="rounded-full" src="${item.image}" alt="image-pharmacy"/>
            </div>
            <p class="font-bold text-xl mt-5 h-10 mb-5">${item.name}</p>
        </a>`
    });

    document.getElementById("item-pharmacy").innerHTML = render
   
})



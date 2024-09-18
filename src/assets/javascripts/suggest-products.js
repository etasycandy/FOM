fetch("./FOM/src/assets/javascripts/data/home.json")
.then((res) => {
    return res.json()
})
.then(function(data) {
    let render = ""

    data.listSuggestProduct.forEach(item => {
        render += `
        <div class="item bg-white rounded-xl shadow-sm px-6 pb-4 relative">
            <div>
              <img
                class="mb-4"
                src="${item.image}"
                alt="thuoc"
              />
              <h5 class="font-medium text-lg mb-1">${item.name}</h5>
              <p class="text-sm font-normal mb-3">${item.category}</p>
              <div class="price flex justify-center items-center gap-5">
                <p class="sale font-semibold text-xl">${item.sale} VNĐ</p>
                <div class="old text-gray-600">${item.price} VNĐ</div>
              </div>
            </div>
            <div class="rounded-xl item-hover">
              <div class="icons float-right mr-4 mt-4 flex flex-col gap-5">
                <img
                  class="cursor-pointer"
                  src="./FOM/src/assets/images/icon-share.png"
                  alt="share"
                />
                <img
                  class="cursor-pointer"
                  src="./FOM/src/assets/images/icon-like.png"
                  alt="like"
                />
              </div>
              <button
                class="bg-white py-2 rounded shadow-sm uppercase font-medium"
              >
                Thêm vào giỏ
              </button>
            </div>
        </div>
        `
    });

    document.getElementById("list-suggest-products").innerHTML = render
   
})

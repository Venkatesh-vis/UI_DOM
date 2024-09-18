var men = document.getElementById("men");
var women = document.getElementById("women");
var kids = document.getElementById("kids");

const men_filter = document.getElementById("m");
const women_filter = document.getElementById("w");
const kids_filter = document.getElementById("k");
const all = document.getElementById("all");

const data = async () => {
  const res = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  const dta = await res.json();
  // console.log(dta.categories);
  dta.categories.map((a) => {
    if (a.category_name == "Men") {
      men_data = a.category_products;
    }
    if (a.category_name == "Women") {
      women_data = a.category_products;
    }
    if (a.category_name == "Kids") {
      kids_data = a.category_products;
    }
  });
//   console.log(men_data);
//   console.log(women_data);
//   console.log(kids_data);

  men_data.map((menp) => {
    const container = document.createElement("div");
    container.setAttribute("class", "cont");
    const img = document.createElement("img");
    img.src = menp.image;
    img.style.display = "block";
   
    container.appendChild(img);

    const title = document.createElement("h5");
    title.innerHTML = menp.title;
    container.appendChild(title);

    const vendor = document.createElement("span");
    vendor.innerHTML = menp.vendor;
    container.appendChild(vendor);

    const price = document.createElement("p");
    price.innerHTML = 'Rs '+menp.price;
    price.style.fontWeight = "bold";
    price.style.display = "inline-block";
    container.appendChild(price);

    const comp = document.createElement("p");
    comp.innerHTML = 'Rs '+menp.compare_at_price;
    comp.style.textDecoration = "line-through";
    container.appendChild(comp);

    const discount = Math.floor((menp.price / menp.compare_at_price) * 100);
    const off = document.createElement("p");
    off.innerHTML = discount + "%  off";
    off.style.color = "red";
    off.style.textDecoration = "bold";
    container.appendChild(off);

    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("id", "btn");
    container.appendChild(button);

    men.appendChild(container);
  });

  women_data.map((womenp) => {
    const container = document.createElement("div");
    container.setAttribute("class", "cont");
    const img = document.createElement("img");
    img.src = womenp.image;
    img.style.display = "block";
   
    container.appendChild(img);

    const title = document.createElement("h5");
    title.innerHTML = womenp.title;
    container.appendChild(title);

    const vendor = document.createElement("span");
    vendor.innerHTML = womenp.vendor;
    container.appendChild(vendor);

    const price = document.createElement("p");
    price.innerHTML = 'Rs '+womenp.price;
    price.style.fontWeight = "bold";
    price.style.display = "inline-block";
    container.appendChild(price);

    const comp = document.createElement("p");
    comp.innerHTML = 'Rs '+womenp.compare_at_price;
    comp.style.textDecoration = "line-through";
    container.appendChild(comp);

    const discount = Math.floor((womenp.price / womenp.compare_at_price) * 100);
    const off = document.createElement("p");
    off.innerHTML = discount + "%  off";
    off.style.color = "red";
    off.style.textDecoration = "bold";
    container.appendChild(off);

    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("id", "btn");
    container.appendChild(button);

    women.appendChild(container);
  });

  kids_data.map((kidsp) => {
    const container = document.createElement("div");
    container.setAttribute("class", "cont");
    const img = document.createElement("img");
    img.src = kidsp.image;
    img.style.display = "block";
   
    container.appendChild(img);

    const title = document.createElement("h5");
    title.innerHTML = kidsp.title;
    container.appendChild(title);

    const vendor = document.createElement("span");
    vendor.innerHTML = kidsp.vendor;
    container.appendChild(vendor);

    const price = document.createElement("p");
    price.innerHTML = 'Rs '+kidsp.price;
    price.style.fontWeight = "bold";
    price.style.display = "inline-block";
    container.appendChild(price);

    const comp = document.createElement("p");
    comp.innerHTML = 'Rs '+kidsp.compare_at_price;
    comp.style.textDecoration = "line-through";
    container.appendChild(comp);

    const discount = Math.floor((kidsp.price / kidsp.compare_at_price) * 100);
    const off = document.createElement("p");
    off.innerHTML = discount + "%  off";
    off.style.color = "red";
    off.style.textDecoration = "bold";
    container.appendChild(off);

    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("id", "btn");
    container.appendChild(button);

    kids.appendChild(container);
  });

  men_filter.onclick = function () {
    women.style.display = "none";
    kids.style.display = "none";
    men.style.display = 'flex'
  };

  women_filter.onclick = function () {
    men.style.display = "none";
    kids.style.display = "none";
    women.style.display = "flex";
  };

  kids_filter.onclick = function () {
    women.style.display = "none";
    men.style.display = "none";
    kids.style.display = "flex";
  };

  all.onclick = function () {
    women.style.display = "flex";
    men.style.display = "flex";
    kids.style.display = "flex";
  };
};

data();

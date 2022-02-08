var loetelu1 = document.getElementById("loetelu")
var sisestus = document.getElementById("mitmest")
const kaugus = document.getElementById("kaugus")
const ptabamus = document.getElementById("carBrand")
const price = document.getElementById('carPrice');

var nupuke1 = document.getElementById("üks")
var nupuke2 = document.getElementById("kaks")
var nupuke3 = document.getElementById("kolm")
var nupuke4 = document.getElementById("neli")
var nupuke5 = document.getElementById("viis")
var nupuke6 = document.getElementById("kuus")
var nupuke7 = document.getElementById("seitse")
var nupuke8 = document.getElementById("kaheksa")
var nupuke9 = document.getElementById("üheksa")
var nupuke10 = document.getElementById("kümme")
var nupuke11 = document.getElementById("üksteist")
var nupuke12 = document.getElementById("kaksteist")
var nupuke13 = document.getElementById("kolmteist")
var nupuke14 = document.getElementById("neliteist")
var nupuke15 = document.getElementById("viisteist")
var nupuke16 = document.getElementById("kuusteist")
var nupuke17 = document.getElementById("seitseteist")
var nupuke18 = document.getElementById("kaheksateist")
var nupuke19 = document.getElementById("üheksateist")
var nupuke20 = document.getElementById("kakskümmend")

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  deviceEventType = 'touchstart'
} else {
//If its not a mobile device use 'click'
 deviceEventType = 'click'
}



const nupp1 = document.getElementById("nupp1");
    nupp1.addEventListener("click", geolock);
    async function geolock(e) {
      
            const nimi = document.getElementById("lemmiktoit").value;
            const tabamusi = document.getElementById('carBrand').value;
            const mitmest = document.getElementById('carPrice').value;
            const kaugus1 = document.getElementById("kaugus").value;
            const protsendike = Math.round(eval(tabamusi*100 / mitmest))

            const data = { nimi, tabamusi, mitmest, kaugus1, protsendike }
            const options = {
                method: "post",
                body: JSON.stringify(data), 
                headers: {
                   'Content-Type': 'application/json'
                }
            }
            const response = await fetch("/api", options)
            const json = await response.json();
            console.log(json)
            console.log("katse")
            //siia uus nimi katse asemele
            
            const proov = document.getElementById("lemmiktoit").value;
            localStorage.setItem("lastname", proov);
            e.prevenDefault()
           // const nimeke = localStorage.getItem("lastname");
    };







nupuke1.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 1;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 1 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 1;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });

  nupuke2.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 2;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 2 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 2;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke3.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 3;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 3 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 3;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke4.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 4;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 4 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 4;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke5.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 5;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 5 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 5;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke6.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 6;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 6 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 6;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke7.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 7;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 7 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 7;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke8.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 8;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 8 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 8;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke9.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 9;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 9 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 9;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke10.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 10;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 10 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 10;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke11.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 11;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 11 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 12;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke12.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 12;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 12 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 12;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke13.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 13;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 13 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 13;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke14.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 14;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 14 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 14;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke15.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 15;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 15 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 15;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke16.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 16;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 16 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 16;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke17.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 17;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 17 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 17;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke18.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 18;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 18 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 18;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke19.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 19;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 19 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 19;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });
  nupuke20.addEventListener("click", () => {
    ptabamus.value = parseInt(ptabamus.value) + 20;
    price.value = parseInt(price.value) + parseInt(sisestus.value);
    let lõik = document.createElement("p");
  
    lõik.innerHTML = `<li>Visked ${kaugus.value}-lt meetrilt: 20 / ${sisestus.value}</li>`;
    loetelu1.appendChild(lõik);

   
    lõik.addEventListener("dblclick", () => {
      loetelu.removeChild(lõik);
      ptabamus.value = parseInt(ptabamus.value) - 20;
      price.value = parseInt(price.value) - parseInt(sisestus.value);
    });
    lõik.addEventListener("auxclick", () => {
      lõik.style.textDecoration = "none";
    });
  });



//minu tulemus avaekraanil
getData();

//sorteerimine algab
const selfies = [];

document.getElementById('tulemused2').addEventListener('click', () => {
  sortData((a, b) => b.time - a.time);
});


function sortData(compare) {
  for (let item of selfies) {
    item.elt.remove();
  }
  selfies.sort(compare);
  for (let item of selfies) {
    document.body.append(item.elt);
  }
}
//sorteerimine lõppeb

  

    async function getData() {
      const response = await fetch('/api');
      const data = await response.json();

      for (item of data) {
       
        const root = document.createElement("tr");
          const nimi = document.createElement("th");
          nimi.classList.add("tabel2");
          const tprotsent = document.createElement("th");
          tprotsent.classList.add("tabel3");
          const kaugusepoiss = document.createElement("th");
          kaugusepoiss.classList.add("tabel3");
          const date = document.createElement("th");
          date.classList.add("tabel4")
          const nimeke = localStorage.getItem("lastname");
          if (item.nimi == nimeke) {
     
            nimi.innerHTML = `<b>${item.nimi}</b>`;
            tprotsent.innerHTML = `<b> ${item.protsendike}%</b>`
            kaugusepoiss.innerHTML = `<b> ${item.kaugus1}m</b>`   
            const dateString = new Date(item.timestamp).toLocaleDateString();  
            date.innerHTML = `${dateString}<br>`;
            
            root.append(nimi, tprotsent, kaugusepoiss, date);
            //oluline sorteerimiseks
            selfies.push({ elt: root, time: item.timestamp, nimi: item.nimi, protsendike: item.protsendike });
          document.body.append(root);
      } else {
          
      }}





      console.log(data)
    }
  // siin lõppeb minu tulemus avaekraanil  
  
//const katsenupp = document.getElementById("katsenupp")


//katsenupp.addEventListener("click", katsepoiss);
//function katsepoiss(){
  //document.getElementById("lemmiktoit").innerHTML = "Siga"
  //  const proov = document.getElementById("katse").value;
  //  localStorage.setItem("lastname", proov);
  
//}
//document.getElementById("katsetulemus").innerHTML = localStorage.getItem("lastname");

document.getElementById("lemmiktoit").value = localStorage.getItem("lastname");
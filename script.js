//Pulls
const thumbs = document.getElementById("thumb-container");
const displayImage = document.getElementById("display-container");

//Definitions
const imgName = "img-";
const imgDir = "/assets/img";
const ar = "_ar_1_1,c_fill,g_auto__c_scale,";
const cScale = "_c_scale,";
const mediaSt = "(max-width: 767px)";
const sizeSmall = "(max-width: 767px) 100vw, 767px";
const sizesBig = "(max-width: 3500px) 40vw, 1400px";
let picIndex = 0;
const imageArray = [
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}1/${imgName}1${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}1/${imgName}1${ar}w_614.jpg 614w`,
        `${imgDir}/${imgName}1/${imgName}1${ar}w_630.jpg 630w`,
        `${imgDir}/${imgName}1/${imgName}1${ar}w_761.jpg 761w`,
        `${imgDir}/${imgName}1/${imgName}1${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_589.jpg 589w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_786.jpg 786w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_971.jpg 971w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_1142.jpg 1142w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_1260.jpg 1260w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_1376.jpg 1376w`,
        `${imgDir}/${imgName}1/${imgName}1${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}1_source.jpg`,
      alt: "A lovely cityscape. Picture taken from an elevated position.",
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}2/${imgName}2${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}2/${imgName}2${ar}w_639.jpg 639w`,
        `${imgDir}/${imgName}2/${imgName}2${ar}w_767.jpg 767w`,
        ,
      ],
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}2/${imgName}2${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}2/${imgName}2${cScale}w_840.jpg 840w`,
        `${imgDir}/${imgName}2/${imgName}2${cScale}w_1083.jpg 1083w`,
        `${imgDir}/${imgName}2/${imgName}2${cScale}w_1400.jpg 1400w`,
        ,
      ].join(", "),
      src: `${imgDir}/${imgName}2_source.jpg`,
      alt: "the second cityscape",
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}3/${imgName}3${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}3/${imgName}3${ar}w_367.jpg 367w`,
        `${imgDir}/${imgName}3/${imgName}3${ar}w_546.jpg 546w`,
        `${imgDir}/${imgName}3/${imgName}3${ar}w_670.jpg 670w`,
        `${imgDir}/${imgName}3/${imgName}3${ar}w_742.jpg 742w`,
        `${imgDir}/${imgName}3/${imgName}3${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_508.jpg 508w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_798.jpg 798w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_954.jpg 954w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_1147.jpg 1147w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_1300.jpg 1300w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_1388.jpg 1388w`,
        `${imgDir}/${imgName}3/${imgName}3${cScale}w_1400.jpg 1400w`,
        ,
      ],
      src: `${imgDir}/${imgName}3_source.jpg`,
      alt: `${imgDir}/${imgName}3_alt.txt`,
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}4/${imgName}4${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_345.jpg 345w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_455.jpg 455w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_526.jpg 526w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_615.jpg 615w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_695.jpg 695w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_752.jpg 752w`,
        `${imgDir}/${imgName}4/${imgName}4${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_524.jpg 524w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_679.jpg 679w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_818.jpg 818w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_945.jpg 945w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_1061.jpg 1061w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_1171.jpg 1171w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_1285.jpg 1285w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_1386.jpg 1386w`,
        `${imgDir}/${imgName}4/${imgName}4${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}4_source.jpg`,
      alt: `${imgDir}/${imgName}4_alt.txt`,
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}5/${imgName}5${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}5/${imgName}5${ar}w_373.jpg 373w`,
        `${imgDir}/${imgName}5/${imgName}5${ar}w_492.jpg 492w`,
        `${imgDir}/${imgName}5/${imgName}5${ar}w_620.jpg 620w`,
        `${imgDir}/${imgName}5/${imgName}5${ar}w_726.jpg 726w`,
        `${imgDir}/${imgName}5/${imgName}5${ar}w_762.jpg 762w`,
        `${imgDir}/${imgName}5/${imgName}5${ar}w_767.jpg 767w`,
      ],
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_536.jpg 536w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_710.jpg 710w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_875.jpg 875w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_1005.jpg 1005w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_1136.jpg 1136w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_1250.jpg 1250w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_1381.jpg 1381w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_1387.jpg 1387w`,
        `${imgDir}/${imgName}5/${imgName}5${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}5_source.jpg`,
      alt: `${imgDir}/${imgName}5_alt.txt`,
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}6/${imgName}6${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}6/${imgName}6${ar}w_426.jpg 426w`,
        `${imgDir}/${imgName}6/${imgName}6${ar}w_577.jpg 577w`,
        `${imgDir}/${imgName}6/${imgName}6${ar}w_724.jpg 724w`,
        `${imgDir}/${imgName}6/${imgName}6${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_513.jpg 513w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_676.jpg 676w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_815.jpg 815w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_941.jpg 941w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_1056.jpg 1056w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_1169.jpg 1169w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_1277.jpg 1277w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_1388.jpg 1388w`,
        `${imgDir}/${imgName}6/${imgName}6${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}6_source.jpg`,
      alt: `${imgDir}/${imgName}6_alt.txt`,
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}7/${imgName}7${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}7/${imgName}7${ar}w_390.jpg 390w`,
        `${imgDir}/${imgName}7/${imgName}7${ar}w_534.jpg 534w`,
        `${imgDir}/${imgName}7/${imgName}7${ar}w_674.jpg 674w`,
        `${imgDir}/${imgName}7/${imgName}7${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_536.jpg 536w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_717.jpg 717w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_872.jpg 872w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_997.jpg 997w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_1111.jpg 1111w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_1306.jpg 1306w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_1395.jpg 1395w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_1397.jpg 1397w`,
        `${imgDir}/${imgName}7/${imgName}7${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}7_source.jpg`,
      alt: `${imgDir}/${imgName}7_alt.txt`,
    },
  },

  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}8/${imgName}8${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}8/${imgName}8${ar}w_459.jpg 459w`,
        `${imgDir}/${imgName}8/${imgName}8${ar}w_627.jpg 627w`,
        `${imgDir}/${imgName}8/${imgName}8${ar}w_737.jpg 737w`,
        `${imgDir}/${imgName}8/${imgName}8${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_640.jpg 640w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_883.jpg 883w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_1059.jpg 1059w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_1223.jpg 1223w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_1382.jpg 1382w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_1397.jpg 1397w`,
        `${imgDir}/${imgName}8/${imgName}8${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}8_source.jpg`,
      alt: `${imgDir}/${imgName}8_alt.txt`,
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}9/${imgName}9${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}9/${imgName}9${ar}w_437.jpg 437w`,
        `${imgDir}/${imgName}9/${imgName}9${ar}w_577.jpg 577w`,
        `${imgDir}/${imgName}9/${imgName}9${ar}w_760.jpg 760w`,
        `${imgDir}/${imgName}9/${imgName}9${ar}w_762.jpg 762w`,
        `${imgDir}/${imgName}9/${imgName}9${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_588.jpg 588w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_770.jpg 770w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_1023.jpg 1023w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_1194.jpg 1194w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_1391.jpg 1391w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_1394.jpg 1394w`,
        `${imgDir}/${imgName}9/${imgName}9${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}9_source.jpg`,
      alt: `${imgDir}/${imgName}9_alt.txt`,
    },
  },
  {
    source: {
      media: mediaSt,
      sizes: sizeSmall,
      srcset: [
        `${imgDir}/${imgName}10/${imgName}10${ar}w_200.jpg 200w`,
        `${imgDir}/${imgName}10/${imgName}10${ar}w_477.jpg 477w`,
        `${imgDir}/${imgName}10/${imgName}10${ar}w_699.jpg 699w`,
        `${imgDir}/${imgName}10/${imgName}10${ar}w_767.jpg 767w`,
      ].join(", "),
    },
    img: {
      sizes: sizesBig,
      srcset: [
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_308.jpg 308w`,
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_630.jpg 630w`,
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_867.jpg 867w`,
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_1036.jpg 1036w`,
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_1216.jpg 1216w`,
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_1399.jpg 1399w`,
        `${imgDir}/${imgName}10/${imgName}10${cScale}w_1400.jpg 1400w`,
      ].join(", "),
      src: `${imgDir}/${imgName}10_source.jpg`,
      alt: `${imgDir}/${imgName}10_alt.txt`,
    },
  },
];

//Functions
function createThumbs() {
  imageArray.forEach((image, index) => {
    let picElement = document.createElement("picture");
    let sourceElement = document.createElement("source");
    let imgElement = document.createElement("img");

    sourceElement.media = image.source.media;
    sourceElement.sizes = image.source.sizes;
    sourceElement.srcset = image.source.srcset;

    imgElement.sizes = image.img.sizes;
    imgElement.srcset = image.img.srcset;
    picElement.source = sourceElement;
    picElement.img = imgElement;
    imgElement.src = image.img.src;
    imgElement.alt = image.img.alt;

    picElement.appendChild(sourceElement);
    picElement.appendChild(imgElement);
    picElement.setAttribute("tabindex", 0);
    picElement.className = "thumb-img";

    //onClick Event Listener
    picElement.addEventListener("click", () => {
      console.log(`Clicked on ${image.img.alt}`);
      picIndex = index;
      biggify(image);
    });

    //On Enter key press Event Listener
    picElement.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        picIndex = index;
        biggify(image);
      }
    });
    //add images to thumb-container
    thumbs.appendChild(picElement);
  });
}
//left arrow event listener
thumbs.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    if (picIndex <= 0) {
      biggify(imageArray[imageArray.length - 1]);
      picIndex = imageArray.length - 1;
    } else {
      biggify(imageArray[picIndex - 1]);
      picIndex--;
    }
  }
});

//right arrow event listener
thumbs.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    if (picIndex >= imageArray.length - 1) {
      biggify(imageArray[0]);
      picIndex = 0;
    } else {
      biggify(imageArray[picIndex + 1]);
      picIndex++;
    }
  }
});

function biggify(image) {
  displayImage.innerHTML = "";

  const bigPicElement = document.createElement("picture");
  let sourceElement = document.createElement("source");
  let imgElement = document.createElement("img");

  sourceElement.media = image.source.media;
  sourceElement.sizes = image.source.sizes;
  sourceElement.srcset = image.source.srcset;

  imgElement.sizes = image.img.sizes;
  imgElement.srcset = image.img.srcset;
  bigPicElement.appendChild(sourceElement);
  bigPicElement.appendChild(imgElement);
  imgElement.src = image.img.src;
  imgElement.alt = image.img.alt;

  displayImage.appendChild(bigPicElement);
}

//Runs

createThumbs();

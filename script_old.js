//Pulls
const thumbs = document.getElementById("thumb-container");
const displayImage = document.getElementById("display-container");

//Definitions
const imgName = "img-";
const imgDir = "/assets/img";
const imageArray = [];
let picIndex = 0;

// Create the <picture> element
const picture = document.createElement("picture");
// Create the <source> element
const source = document.createElement("source");
// Create the <img> element
const img = document.createElement("img");

source.media = "(max-width: 767px)";
source.sizes = "(max-width: 767px) 100vw, 767px";
img.sizes = "(max-width: 3500px) 40vw, 1400px";
// These ^^3 elements^^ work together to form the picture object
// Because all the images use the same .media and .sizes params they don't need to be updated when adding new images

//Pic-1 assignment

picIndex = 1;
source.srcset = `
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_614.jpg 614w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_630.jpg 630w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_761.jpg 761w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w
`;
img.srcset = `
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_308.jpg 308w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_589.jpg 589w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_786.jpg 786w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_971.jpg 971w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1142.jpg 1142w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1260.jpg 1260w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1376.jpg 1376w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1400.jpg 1400w
`;
img.src = `${imgDir}/${imgName}${picIndex}_source.jpg`;
img.alt = updateImageAlt(img, picIndex);
console.log(img.alt);
// Append the <source> and <img> elements to the <picture> element
picture.appendChild(source);
picture.appendChild(img);
// console.log(picture.innerHTML + "pic 1");
// Append the <picture> element to the imageArray
imageArray.push(picture.cloneNode(true));

//Pic-2 Assignment
picIndex = 2;
source.srcset = `
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_639.jpg 639w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w
`;
img.srcset = `
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_308.jpg 308w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_840.jpg 840w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1083.jpg 1083w,
  ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1400.jpg 1400w
`;
img.src = `${imgDir}/${imgName}${picIndex}_source.jpg`;
img.alt = updateImageAlt(img, picIndex);
// Append the <source> and <img> elements to the <picture> element
picture.appendChild(source);
picture.appendChild(img);
console.log(picture.innerHtml + "pic 2");
// Append the <picture> element to the imageArray
imageArray.push(picture.cloneNode(true));

// PIC-3 Assignment
// picIndex = 3;
// source.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_367.jpg 367w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_546.jpg 546w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_670.jpg 670w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_742.jpg 742w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
// `;
// img.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_308.jpg 308w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_508.jpg 508w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_798.jpg 798w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_954.jpg 954w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1147.jpg 1147w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1300.jpg 1300w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1388.jpg 1388w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1400.jpg 1400w"
// `;
// img.src = `${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_source.jpg`;
// img.alt = getAlt(picIndex);
// // Append the <source> and <img> elements to the <picture> element
// picture.appendChild(source);
// picture.appendChild(img);
// // Append the <picture> element to the imageArray
// imageArray.push(picture);

// //PIC-4 Assignment
// picIndex = 4;
// source.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_345.jpg 345w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_455.jpg 455w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_526.jpg 526w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_615.jpg 615w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_695.jpg 695w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_752.jpg 752w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
// `;
// img.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_308.jpg 308w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_524.jpg 524w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_679.jpg 679w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_818.jpg 818w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_945.jpg 945w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1061.jpg 1061w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1171.jpg 1171w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1285.jpg 1285w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1386.jpg 1386w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1400.jpg 1400w"
// `;
// img.src = `${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_source.jpg`;
// img.alt = getAlt(picIndex);
// // Append the <source> and <img> elements to the <picture> element
// picture.appendChild(source);
// picture.appendChild(img);
// // Append the <picture> element to the imageArray
// imageArray.push(picture);

// //PIC-5 Assignment
// picIndex = 5;
// source.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_373.jpg 373w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_492.jpg 492w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_620.jpg 620w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_726.jpg 726w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_762.jpg 762w"
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
// `;
// img.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_308.jpg 308w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_536.jpg 536w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_710.jpg 710w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_875.jpg 875w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1005.jpg 1005w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1136.jpg 1136w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1250.jpg 1250w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1381.jpg 1381w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1387.jpg 1387w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1400.jpg 1400w"
// `;
// img.src = `${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_source.jpg`;
// img.alt = getAlt(picIndex);
// // Append the <source> and <img> elements to the <picture> element
// picture.appendChild(source);
// picture.appendChild(img);
// // Append the <picture> element to the imageArray
// imageArray.push(picture);

// //PIC-6 Assignment
// picIndex = 6;
// source.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_426.jpg 426w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_577.jpg 577w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_724.jpg 724w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w"
// `;
// img.srcset = `
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_308.jpg 308w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_513.jpg 513w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_676.jpg 676w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_815.jpg 815w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1056.jpg 1056w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1169.jpg 1169w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1277.jpg 1277w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1388.jpg 1388w,
//     ${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_c_scale,w_1400.jpg 1400w"
// `;
// img.src = `${imgDir}/${imgName}${picIndex}/${imgName}${picIndex}_source.jpg`;
// img.alt = getAlt(picIndex);
// // Append the <source> and <img> elements to the <picture> element
// picture.appendChild(source);
// picture.appendChild(img);
// // Append the <picture> element to the imageArray
// imageArray.push(picture);

imageArray.forEach((image) => {
  image.className = "thumb-img";
  thumbs.appendChild(image);

  //Event listeners
  image.addEventListener("click", () => {
    //biggify(image);
  });
});

function biggify(image) {
  displayImage.innerHtml = "";
  const bigImage = document.createElement("picture");

  bigImage.src = image.url;
  bigImage.alt = image.alt;
}

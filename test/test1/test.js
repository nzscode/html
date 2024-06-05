// // An area on the main document where I can see if my html code shows properly, ie: are a tags actually clickable hyperlinks that navigate to where I want
// let testZone = document.getElementById("test-zone");
// let nav = document.getElementById("nav");
// //Returns a NodeList of all the h2 in the DOM
// let h2List = document.getElementsByClassName("lvl2");
// // Iterates throught the h2 NodeList

// for (let i = 0; i < h2List.length; i++) {
//     testZone.innerHTML += `<ul>`;
//     // For each element in the NodeList, returns the attribute "id"
//     const h2ID = h2List[i].getAttribute("id");
//     // For each element in the NodeList returns the innerText
//     const h2Text = h2List[i].innerText;
//     // Returns the parent element of each item in the NodeList, and then searches the descendents of the parent Element for the "h3" tag, and returns a NodeList
//     const h3List = h2List[i].parentElement.getElementsByClassName("lvl3");

//     // If the NodeList contains at least 1 element
//     if (h3List.length > 0) {
//         // add to the testZone an html line, that is a list item, with a hyperlink, that has an ID the same as the ID of the h2element, and the hyperlink text that is the same as the innerText of the h2Element
//         testZone.innerHTML += `<li><a href="./#${h2ID}">${h2Text}</a></li>`;
//         // An empty string that will hold the h3 elements
//         let h3Items = "";
//         // Bookending the string of h3 elements, as an unordered list. This is the starting tag.
//         h3Items += `<ul>`;
//         // Iterating through the h3Elements, returning the respective "id" attribute, and the innerText
//         for (let j = 0; j < h3List.length; j++) {
//             const h3ID = h3List[j].getAttribute("id");
//             const h3Text = h3List[j].innerText;
//             const h3Plus =
//                 h3List[j].parentElement.getElementsByClassName("lvl4");
//             // Adding the returned "id" and innerText as part of a list item, to the string that will hold all the list items. Remember this list starts with a <ul> and will close with </ul>

//             if (h3Plus.length > 0) {
//                 h3Items += `<li><a href="./#${h3ID}">${h3Text}</a></li>`;
//                 h3Items += `<ul>`;
//                 for (let k = 0; k < h3Plus.length; k++) {
//                     const hPID = h3Plus[k].getAttribute("id");
//                     const hPText = h3Plus[k].innerText;
//                     h3Items += `<li><a href="./#${hPID}">${hPText}</a></li>`;
//                 }
//                 h3Items += `</ul><br>`;
//             } else {
//                 h3Items += `<li><a href="./#${h3ID}">${h3Text}</a></li>`;
//             }
//         }
//         // Bookending the string of h3 elements, as an unordered list. This is the ending tag.
//         h3Items += `</ul>`;
//         // adds the contents of the h3list (unordered list, with list items made up of all the h3elements that are younger siblings of the h2 element) that has been formatted to containe the necessary html tags to display as a list.
//         testZone.innerHTML += h3Items;
//     } else {
//         // if the NodeList for the h2 parent Element does not contain any descendant h3's, then only insert the preformatted html that contains the h2 element with its respective "id" and innerText into the testZone
//         testZone.innerHTML += `<li><a href="./#${h2ID}">${h2Text}</a></li>`;
//     }
//     testZone.innerHTML += `</ul>`;
// }

// let testZone = document.getElementById("test-zone");
// let nav = document.getElementById("nav");

// let h2List = document.getElementsByClassName("lvl2");

// for (let i = 0; i < h2List.length; i++) {
//     testZone.innerHTML += `<ul>`;
//     const h2ID = h2List[i].getAttribute("id");
//     const h2Text = h2List[i].innerText;
//     const h3List = h2List[i].parentElement.getElementsByClassName("lvl3");

//     if (h3List.length > 0) {
//         testZone.innerHTML += `<li><a href="./#${h2ID}">${h2Text}</a></li>`;
//         let h3Items = "";
//         h3Items += `<ul>`;
//         for (let j = 0; j < h3List.length; j++) {
//             const h3ID = h3List[j].getAttribute("id");
//             const h3Text = h3List[j].innerText;
//             const h3Plus =
//                 h3List[j].parentElement.getElementsByClassName("lvl4");

//             if (h3Plus.length > 0) {
//                 h3Items += `<li><a href="./#${h3ID}">${h3Text}</a></li>`;
//                 h3Items += `<ul>`;
//                 for (let k = 0; k < h3Plus.length; k++) {
//                     const hPID = h3Plus[k].getAttribute("id");
//                     const hPText = h3Plus[k].innerText;
//                     h3Items += `<li><a href="./#${hPID}">${hPText}</a></li>`;
//                 }
//                 h3Items += `</ul><br>`;
//             } else {
//                 h3Items += `<li><a href="./#${h3ID}">${h3Text}</a></li>`;
//             }
//         }
//         h3Items += `</ul>`;
//         testZone.innerHTML += h3Items;
//     } else {
//         testZone.innerHTML += `<li><a href="./#${h2ID}">${h2Text}</a></li>`;
//     }
//     testZone.innerHTML += `</ul>`;
// }

// let testZone = document.getElementById("test-zone");
// let nav = document.getElementById("nav");
// let lvl2List = document.getElementsByClassName("lvl2");
// let allHTML = "<ul>";
// let lvl3 = "<ul>";
// let lvl4 = "<ul>";
// for (let i = 0; i < lvl2List.length; i++) {
//     const lvl2Item = lvl2List[i];
//     const lvl2ID = lvl2Item.getAttribute("id");
//     const lvl2Text = lvl2Item.innerHTML;

//     let lvl3List = lvl2Item.parentElement.getElementsByClassName("lvl3");

//     if (lvl3List.length > 0) {
//         for (let j = 0; j < lvl3List.length; j++) {
//             const lvl3Item = lvl3List[j];
//             const lvl3ID = lvl3Item.getAttribute("id");
//             const lvl3Text = lvl3Item.innerHTML;

//             let lvl4List =
//                 lvl3Item.parentElement.getElementsByClassName("lvl4");

//             if (lvl4List.length > 0) {
//                 for (let k = 0; k < lvl4List.length; k++) {
//                     const lvl4Item = lvl4List[k];
//                     const lvl4ID = lvl4Item.getAttribute("id");
//                     const lvl4Text = lvl4Item.innerHTML;

//                     lvl4 += `<li><a href="./#${lvl4ID}">${lvl4Text}</a></li>`;
//                 }
//                 lvl4 += "</ul>";
//                 lvl3 += lvl4;
//             } else {
//                 lvl3 += `<li><a href="./#${lvl3ID}">${lvl3Text}</a></li>`;
//             }
//             lvl3 += "</ul>";
//             allHTML += lvl3;
//         }
//     } else {
//         console.log("No h3s");
//         allHTML += `<li><a href="./#${lvl2ID}">${lvl2Text}</a></li>`;
//     }
// }
// allHTML += "</ul>";

// testZone.innerHTML += allHTML;
// nav.innerHTML += allHTML;
// console.log(allHTML);
let testZone = document.getElementById("test-zone");
let nav = document.getElementById("nav");
let lvl2List = document.getElementsByClassName("lvl2");

let allHTML = `<ul>`;
for (let i = 0; i < lvl2List.length; i++) {
    const lvl2Item = lvl2List[i];
    const lvl2ID = lvl2Item.getAttribute("id");
    const lvl2Text = lvl2Item.innerHTML;
    allHTML += `<li><a href="./#${lvl2ID}">${lvl2Text}</a></li>`;
    let lvl3List = lvl2Item.parentElement.getElementsByClassName("lvl3");
    if (lvl3List.length > 0) {
        let lvl3HTML = `<ul>`;
        for (let j = 0; j < lvl3List.length; j++) {
            const lvl3Item = lvl3List[j];
            const lvl3ID = lvl3Item.getAttribute("id");
            const lvl3Text = lvl3Item.innerHTML;

            lvl3HTML += `<li><a href="./#${lvl3ID}">${lvl3Text}</a></li>`;

            let lvl4List =
                lvl3Item.parentElement.getElementsByClassName("lvl4");
            if (lvl4List.length > 0) {
                let lvl4HTML = `<ul>`;
                for (let k = 0; k < lvl4List.length; k++) {
                    const lvl4Item = lvl4List[k];
                    const lvl4ID = lvl4Item.getAttribute("id");
                    const lvl4Text = lvl4Item.innerHTML;

                    lvl4HTML += `<li><a href="./#${lvl4ID}">${lvl4Text}</a></li>`;
                }
                lvl4HTML += `</ul>`;
                lvl3HTML += lvl4HTML;
            }
        }
        lvl3HTML += `</ul>`;
        allHTML += lvl3HTML;
    }
}
testZone.innerHTML += allHTML;
nav.innerHTML += allHTML;

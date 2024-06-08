function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// BELOW FOOTER ON HTML DOCUMENT, ADD A DIV, WITH ID = "linky-poo"
// ALSO ADD THIS SCRIPT.

// let testZone = document.getElementById("test-zone");
// let nav = document.getElementById("nav");
// let lvl2List = document.getElementsByClassName("lvl2");
// let allHTML = `<ul>`;
// for (let i = 0; i < lvl2List.length; i++) {
//     const lvl2Item = lvl2List[i];
//     const lvl2ID = lvl2Item.getAttribute("id");
//     const lvl2Text = lvl2Item.innerHTML;
//     allHTML += `<li><a href="./#${lvl2ID}">${lvl2Text}</a></li>`;

//     let lvl3List = lvl2Item.parentElement.getElementsByClassName("lvl3");
//     if (lvl3List.length > 0) {
//         let lvl3HTML = `<ul>`;
//         for (let j = 0; j < lvl3List.length; j++) {
//             const lvl3Item = lvl3List[j];
//             const lvl3ID = lvl3Item.getAttribute("id");
//             const lvl3Text = lvl3Item.innerHTML;
//             lvl3HTML += `<li><a href="./#${lvl3ID}">${lvl3Text}</a></li>`;

//             let lvl4List =
//                 lvl3Item.parentElement.getElementsByClassName("lvl4");
//             if (lvl4List.length > 0) {
//                 let lvl4HTML = `<ul>`;
//                 for (let k = 0; k < lvl4List.length; k++) {
//                     const lvl4Item = lvl4List[k];
//                     const lvl4ID = lvl4Item.getAttribute("id");
//                     const lvl4Text = lvl4Item.innerHTML;
//                     lvl4HTML += `<li><a href="./#${lvl4ID}">${lvl4Text}</a></li>`;

//                     let lvl5List =
//                         lvl4Item.parentElement.getElementsByClassName("lvl5");
//                     if (lvl5List.length > 0) {
//                         let lvl5HTML = `<ul>`;
//                         for (let m = 0; m < lvl5List.length; m++) {
//                             const lvl4Item = lvl5List[m];
//                             const lvl5ID = lvl5Item.getAttribute("id");
//                             const lvl5Text = lvl5Item.innerHTML;
//                             lvl5HTML += `<li><a href="./#${lvl4ID}">${lvl4Text}</a></li>`;
//                         }
//                     }
//                 }
//                 lvl4HTML += `</ul>`;
//                 lvl3HTML += lvl4HTML;
//             }
//         }
//         lvl3HTML += `</ul>`;
//         allHTML += lvl3HTML;
//     }
// }
// testZone.innerHTML += allHTML;
// nav.innerHTML += allHTML;

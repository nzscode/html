// BELOW FOOTER ON HTML DOCUMENT, ADD A DIV, WITH ID = "linky-poo"
// ALSO ADD THIS SCRIPT.

let testZone = document.getElementById("test-zone");

// To Find All H2 Elements, and get their keywords(id), and their Titles, and their child nodes
let h2 = document.querySelectorAll("article section h2");
let links = "";
for (let i = 0; i < h2.length; i++) {
    const h2ID = h2[i].parentElement;
    const h2IDAttr = h2[i].parentNode.getAttribute("id");
    const h2HTML = h2[i].innerHTML;

    // console.log(`<li><a href="./#${h2IDAttr}"]>${h2HTML}</a></li>`);
    links += `<li><a href="./#${h2IDAttr}">${h2HTML}</a></li>`;

    // console.log(h2HTML);
    let h2IDChildren = h2ID.children;
    for (let j = 0; j < h2IDChildren.length; j++) {
        const parentChildren = h2IDChildren[j].querySelectorAll("h3");

        if (parentChildren.length > 0) {
            for (let k = 0; k < parentChildren.length; k++) {
                links += `<ul>`;

                const h3ID = parentChildren[k].parentElement;

                const h3IDAttr =
                    parentChildren[k].parentNode.getAttribute("id");
                const h3HTML = parentChildren[k].innerHTML;
                // console.log(h3IDAttr);
                // console.log(`<li><a href="./#${h3IDAttr}"]>${h3HTML}</a></li>`);
                links += `<li><a href="./#${h3IDAttr}">${h3HTML}</a></li>`;

                // console.log(h3HTML);
            }
            links += `</ul>`;
        }
    }
}

let navLinks = document.getElementById("nav-links");
for (let i = 0; i < links.length; i++) {
    const row = links[i];
    navLinks.innerText = row;
}

let regUL = /\<\/ul\>\<ul\>/gm;
let newLinks = links.replace(regUL, "");
navLinks.innerHTML = newLinks;

let navLink = navLinks.children;
testZone.innerText = navLink;

// for (let j = 0; j < links.length; j++) {
//     const lin = links[j];
//     if (lin.includes("using-for")) {
//         let startIndex = links[j];
//         let endIndex = links[j] + 1;
//         links.splice(startIndex, endIndex);
//     } else {
//         console.log(lin);
//     }
// }

// console.log(links);

// console.log(h2);
// let h2Children = [];

// for (let i = 0; i < h2.length; i++) {
//     const h2Element = h2[i];
//     // console.log(h2Element.parentElement);
//     console.log(h2Element.innerHTML);
//     h2Item = h2Element.innerHTML;
//     h2Children.push(`<li><a href="./#"]>${h2Item}</a></li>`);

//     // console.log(h2Element.children);
// }

// console.log(h2Children);

// for (let i = 0; i < h2.length; i++) {
//     const h2Element = h2[i];
//     console.log(h2Element.parentElement);
//     console.log(h2Element.innerHTML);
//     console.log(h2Element.children);
// }

// for (let j = 0; j < h3.length; j++) {
//     const h3element = h3[j];
//     console.log(h3element.parentElement);
//     console.log(h3element.innerHTML);
// }

// for (let i = 0; i < h2.length; i++) {
//     const h2Element = h2[i];
//     // console.log(h2Element.parentElement);
//     console.log(h2Element.innerHTML);
//     h2Item = h2Element.innerHTML;
//     h2Children.push(`<li><a href="./#"]>${h2Item}</a></li>`);
// };

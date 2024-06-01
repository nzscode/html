// BELOW FOOTER ON HTML DOCUMENT, ADD A DIV, WITH ID = "linky-poo"
// ALSO ADD THIS SCRIPT.

let testZone = document.getElementById("test-zone");

// To Find All H2 Elements, and get their keywords(id), and their Titles, and their child nodes
let h2 = document.querySelectorAll("article section h2");
let links = "";
let linksToSegment = "";
for (let i = 0; i < h2.length; i++) {
    const h2ID = h2[i].parentElement;
    const h2IDAttr = h2[i].parentNode.getAttribute("id");
    const h2HTML = h2[i].innerHTML;

    // console.log(`<li><a href="./#${h2IDAttr}"]>${h2HTML}</a></li>`);
    links += `<li><a href="./#${h2IDAttr}">${h2HTML}</a></li>`;
    linksToSegment +=
        '<li><a href="./#' + h2IDAttr + '">' + h2HTML + "</a></li>";

    // console.log(h2HTML);
    let h2IDChildren = h2ID.children;
    for (let j = 0; j < h2IDChildren.length; j++) {
        const parentChildren = h2IDChildren[j].querySelectorAll("h3");

        if (parentChildren.length > 0) {
            for (let k = 0; k < parentChildren.length; k++) {
                links += `<ul>`;
                linksToSegment += "<ul>";

                const h3ID = parentChildren[k].parentElement;

                const h3IDAttr =
                    parentChildren[k].parentNode.getAttribute("id");
                const h3HTML = parentChildren[k].innerHTML;
                // console.log(h3IDAttr);
                // console.log(`<li><a href="./#${h3IDAttr}"]>${h3HTML}</a></li>`);
                links += `<li><a href="./#${h3IDAttr}">${h3HTML}</a></li>`;
                linksToSegment +=
                    '<li><a href="./#' + h3IDAttr + '">' + h3HTML + "</a></li>";
                // console.log(h3HTML);
            }
            links += `</ul>`;
            linksToSegment += "</ul>";
        }
    }
}

console.log(links);
let navLinks = document.getElementById("nav-links");
for (let i = 0; i < links.length; i++) {
    let row = links[i];
    navLinks.innerText = row;
}

navLinks.innerHTML = links;

console.log(linksToSegment);

// let h = links.length;
// testZone.innerHTML = links;
// console.log(links);

// let regUL = /\<\/ul\>\<ul\>/gm;
// let newLinks = links.replace(regUL, "");
// navLinks.innerHTML = newLinks;

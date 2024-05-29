// To Find All H2 Elements, and get their keywords(id), and their Titles, and their child nodes
let h2 = document.getElementsByTagName("h2");
// console.log(h2);
let h2Children = [];

for (let i = 0; i < h2.length; i++) {
    const h2Element = h2[i];
    console.log(h2Element.parentElement);
    console.log(h2Element.innerHTML);
    console.log(h2Element.children);
}

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

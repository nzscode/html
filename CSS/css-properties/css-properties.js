let h3 = document.getElementsByTagName("h3");
let listh3 = [];
for (let i = 0; i < h3.length; i++) {
    const element = h3[i];

    let innerTextH3 = element.innerText;
    innerTextH3_lower = innerTextH3.toLowerCase();
    let temp = `<li><a href="#${innerTextH3_lower}">${innerTextH3}</a></li>`;
    listh3.push(temp);
}
console.log(listh3.sort());

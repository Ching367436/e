"use-strict";
window.addEventListener("load", h2_to_dict_link);
window.addEventListener("load", code_tag_to_dict_link);

document.querySelector("h1").addEventListener("dblclick", () => {
    if (localStorage.getItem("oced")) {
        localStorage.removeItem("oced");
    } else {
        localStorage.setItem("oced", true);
    }
});

const regex = /[A-Za-z\s\-eéêëēėęèàáâäæãåāîïíīįìûüùúūôöòóœøōõ0-9'’,]+/gi;
const cambridge_dict_url = "https://dictionary.cambridge.org/dictionary/english/";
const oced_url = "hk-com-oupc-oecd-lookup://x-callback-url/s?q=";
const oxford_learnersdictionary_url = "https://www.oxfordlearnersdictionaries.com/definition/english/"
let dict_url = oxford_learnersdictionary_url;
if (localStorage.getItem("oced")) {
    dict_url = oced_url;
}

function h2_to_dict_link() {
    const titles = document.querySelectorAll("h2");

    for (const title of titles) {
        const words = title.textContent.match(regex);

        title.removeChild(title.lastChild);

        for (const word of words) {
            const anchor = document.createElement("a");
            anchor.href = dict_url + word;
            anchor.textContent = word;
            title.appendChild(anchor);

            const slash = document.createTextNode(" / ");
            slash.addEventListener("select", () => { return false; });
            title.appendChild(slash);
        }

    }
}

function code_tag_to_dict_link() {
    const tags = document.querySelectorAll("code");

    for (const tag of tags) {
        const words = tag.textContent.match(regex);

        tag.removeChild(tag.lastChild);

        for (const word of words) {
            const anchor = document.createElement("a");
            anchor.href = dict_url + word;
            anchor.textContent = word;
            tag.appendChild(anchor);
        }

    }
}
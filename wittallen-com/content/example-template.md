+++
title = "Personal journal"
date = 2019-10-05
draft = false
+++

## 2023-06-29 🔧
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus dignissim nulla et ornare. Vestibulum porta, risus eu ultrices condimentum, quam ante mattis massa, eget laoreet neque nisl ullamcorper nibh.


## 2023-06-28 😊
Etiam vulputate nibh in magna feugiat viverra. Donec ultricies sagittis justo vel facilisis. Nulla sollicitudin felis eu tortor consectetur, ac sodales odio faucibus. Vivamus id ultrices orci, ut luctus dolor. Sed sem nibh, semper in posuere eget, dictum eget dui. Praesent nunc dolor, lacinia at tortor eget, sollicitudin sagittis turpis.

{{ img(id="https://uploads-ssl.webflow.com/5ff0b3326e5782a256714165/638b6f3a3d8d2e6bad1cb03b_Random22.1.jpg", alt="xfx6800xt", class="textCenter") }}

## 2022-10-27 💢
facilisis sapien, quis faucibus leo urna ut diam. Etiam eu dolor vestibulum, cursus odio at, aliquam nibh. Donec molestie metus non purus facilisis euismod. In interdum luctus libero, in mollis est tincidunt at. Nam congue, nibh nec tempus elementum, nunc sapien placerat felis, id dignissim sapien tellus a libero. Nunc at elementum tortor, eget scelerisque elit. Donec ultricies mi at accumsan semper. Pellentesque vehicula leo sed urna dapibus, quis feugiat arcu auctor. 

## Webrings

Join our webrings and explore more:

- 🈯 {{ webring(prev="#", webring="#", webringName="Random Webring", next="#") }}
- 🎶 {{ webring(prev="#", webring="#", webringName="Another Webring", next="#") }}


## Overview

anemone theme is designed to provide a nearly no-JavaScript, efficient, and minimalist experience for your website. Embracing simplicity, the theme focuses on content and readability, ensuring a seamless user experience without unnecessary distractions.

> *"Useless blockquote"*

## Blog Posts

Explore our insightful blog posts on a variety of topics:

- 🥣 [Overview Post](./blog/overview-post)
- 🥣 [Overview Post But in French](./fr/blog/overview-post)
- 🈚 [Language Tests](./blog/language-tests)
- 🔥 [Very Very Very Long Title And Very Very Very Short Content](./blog/very-very-very-long-title-and-very-very-very-short-content)
- 📺 [Post Example With Headings And TOC](./blog/post-example-with-headings-and-toc)

## Tags

Browse our posts by tags:

- [example](./tags/example)

## Overview Post


Lorem ipsum[^1] dolor sit amet.

Mauris viverra dictum ultricies. Vestibulum quis ipsum euismod, facilisis metus sed, varius ipsum. Donec scelerisque lacus libero, eu dignissim sem venenatis at. Etiam id nisl ut lorem gravida euismod.

### Lists

Unordered:

- Fusce non velit cursus ligula mattis convallis vel at metus[^2].
- Sed pharetra tellus massa, non elementum eros vulputate non.
- Suspendisse potenti.

Ordered:

1. Quisque arcu felis, laoreet vel accumsan sit amet, fermentum at nunc.
2. Sed massa quam, auctor in eros quis, porttitor tincidunt orci.
3. Nulla convallis id sapien ornare viverra.
4. Nam a est eget ligula pellentesque posuere.

### Blockquote

The following is a blockquote:

> Suspendisse tempus dolor nec risus sodales posuere. Proin dui dui, mollis a consectetur molestie, lobortis vitae tellus.

### Code

Now some code:

```js
const ultimateTruth = 'this theme is the best!';
console.log(ultimateTruth);
```

And here is some `inline code`!

### Tables

Now a table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Images

{{ img(id="https://uploads-ssl.webflow.com/5ff0b3326e5782a256714165/638b6f3a3d8d2e6bad1cb03b_Random22.1.jpg", alt="theme logo") }}

random image of a dog[^4]

### Multilanguage support
- 🥣 [This site but in french (only this page and the homepage is translated)](/fr)

### Webrings
  - 🈯 {{ webring(prev="#", webring="#", webringName="Random Webring", next="#") }}

---

[^1]: this is a footnote. It should highlight if you click on the corresponding superscript number.

[^2]: hey there

[^3]: this is another footnote.

[^4]: this is a very very long footnote to test if a very very long footnote brings some problems or not. I strongly hope that there are no problems but you know sometimes problems arise from nowhere.

## blog post frontmatter/TOML
```toml
+++
title = "Post Example With Headings And Toc"
[taxonomies]
  tags = ["example"]
[extra]
  toc = true
+++
```

first para

### [The start](#the-start)

Fusce non velit cursus ligula mattis convallis vel at metus. Sed pharetra tellus massa, non ele

### [middle](#the-middle)
middle paragraph
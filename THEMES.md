# Semantic New Tab Themes

## List of themes

-   [Semantic New Tab Themes](#semantic-new-tab-themes)
    -   [List of themes](#list-of-themes)
    -   [Background Image](#background-image)
        -   [Code](#code)
        -   [Screenshot](#screenshot)
    -   [Circular bookmark](#circular-bookmark)
        -   [Code](#code-1)
        -   [Screenshot](#screenshot-1)
    -   [Shadows](#shadows)
        -   [Code](#code-2)
        -   [Screenshot](#screenshot-2)

## Background Image

Load a random background image from unsplash.com

### Code

```css
body {
	background-image: url('https://source.unsplash.com/random/1920x1080');
	background-attachment: fixed;
	background-repeat: no-repeat;
}
```

### Screenshot

![](https://imgur.com/download/ralU5hJ)

## Circular bookmark

### Code

```css
body {
	background-image: url('https://images.unsplash.com/photo-1579787204351-26195f2a12a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80');
	background-repeat: no-repeat;
	background-size: auto;
}
.bookmark {
	border-radius: 50%;
}
.settings-button {
	color: white;
}
```

### Screenshot

![](https://imgur.com/download/CwYTJoB)

## Shadows

### Code

```css
body {
	background-image: url('https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80');
	background-attachment: fixed;
	background-repeat: no-repeat;
}
.bookmarks-position {
	width: 70%;
	margin: auto;
}
.bookmark {
	background-color: #fdfdfd;
	width: 128px;
	border-radius: 18%;
	box-shadow: 0 9px 15px 3px rgba(0, 0, 0, 0.55);
}
.settings-button {
	color: #46402f;
}
```

### Screenshot

![](https://imgur.com/download/eiWk3nJ)

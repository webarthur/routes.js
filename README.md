# routes.js

Smallest pushState JavaScript router

- Less then 1kb
- Better performance
- Clean syntax
- Regular Expression
- Easy to use

## Usage

```js
routes
	.config({ root: '/blog' })
	.on('article/(.*)', function(match) {
		document.title = 'Blog article: ' + match[0];
	})
	.on('(contact|sayhello)', function(match) {
		document.title = 'RegExp example: ' + match[0];
	})
	.default(function() {
		document.title = 'Home';
	})
	.always(function() {
		console.log('Router in action!');
	})
```

## Showcase

* [http://araujo.cc](http://araujo.cc)

## [Author](http://araujo.cc)

* [Arthur Araújo](http://araujo.cc)

## [Creative Commons License](http://creativecommons.org/licenses/by-sa/4.0/)

Code released under Creative Commons Share-alike, so Helpers CSS is absolutely free. It's open-source: you can copy, merge, publish and distribute the framework without any limitations! =D

<i>"Simplicity is the ultimate sophistication" - Leonardo da Vinci</i>

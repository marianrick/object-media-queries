# Object media queries

Assign css like media queries to single objects for a component based responsive system. This can make your front-end more flexible, more responsive and better looking in many cases.

## Getting Started

Simply download and include `object-media-queries.min.js` in your project.

```
<script src="object-media-queries.min.js">
```

Than refer inside your DOM to different sizes, for example

```
<div id="example" class="fluid" data-sizes='["320", "640", "800"]'>
```

Finally, target the classes inside your css/sass/etc.

```
#example.size-320 { background: blue; }
#example.size-640 { background: red; }
#example.size-800 { background: green; }
```

### Installing

Simply download and include `object-media-queries.min.js` in your project.

```
<script src="object-media-queries.min.js">
```

## Contributing

Feel free to fork or add any ideas you've got.

## Authors

Marian Rick

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
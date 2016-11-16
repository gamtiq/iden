# iden <a name="start"></a>

Unique identifier generator.

[![NPM version](https://badge.fury.io/js/iden.png)](http://badge.fury.io/js/iden)
[![Build Status](https://secure.travis-ci.org/gamtiq/iden.png?branch=master)](http://travis-ci.org/gamtiq/iden)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

* [Usage](#usage)
* [Examples](#examples)
* [API](#api)
* [Inspiration](#inspiration)
* [Contributing](#contributing)
* [License](#license)

## Installation

### Node

    npm install iden

### [Bower](http://bower.io)

    bower install iden

### AMD, &lt;script&gt;

Use `dist/iden.js` or `dist/iden.min.js` (minified version).

## Usage <a name="usage"></a> [&#x2191;](#start)

### ECMAScript 6

```js
import * as iden from 'iden';
```

### Node

```js
var iden = require("iden");
```

### [Duo](http://duojs.org)

```js
var iden = require("gamtiq/iden");
```

### AMD

```js
define(["path/to/dist/iden.js"], function(iden) {
    ...
});
```

### Bower, &lt;script&gt;

```html
<!-- Use bower_components/iden/dist/iden.js if the library was installed by Bower -->
<script type="text/javascript" src="path/to/dist/iden.js"></script>
<script type="text/javascript">
    // iden is available via iden field of window object
    
    ...
</script>
```

### Examples <a name="examples"></a> [&#x2191;](#start)

```js
iden.getUuid(); // uuid in form of xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
```

## API <a name="api"></a> [&#x2191;](#start)

### getUuid([settings: Object]): String

Generate unique identifier (UUID as described in RFC 4122 version 4).

See `doc` folder for details.

## Inspiration <a name="inspiration"></a> [&#x2191;](#start)

* [http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript](http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
* [leahciMic/uuid-v4](https://github.com/leahciMic/uuid-v4/blob/master/uuidv4.js)
* [broofa/node-uuid](https://github.com/broofa/node-uuid/blob/master/uuid.js)
* [makeable/uuid-v4.js](https://github.com/makeable/uuid-v4.js/blob/master/uuid-v4.js)

## Contributing <a name="contributing"></a> [&#x2191;](#start)
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## License <a name="license"></a> [&#x2191;](#start)
Copyright (c) 2016 Denis Sikuler  
Licensed under the MIT license.

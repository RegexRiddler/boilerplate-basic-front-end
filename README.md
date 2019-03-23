# Basic Front-End Boilerplate
## A boilerplate for small projects using HTML, CSS, and Javascript
This lightweight boilerplate uses Yarn for package management but there is no reason why you can't use NPM. Gulp is used for running tasks like watching files, transpiling sass, running local server, and building the project.

### License
Released under the MIT license - http://opensource.org/licenses/MIT

Happy coding!

## Usage
### Step 1: Download the boilerplate
Start by downloading this boilerplate to your computer then unarchive the folder.

### Step 2: Install dependencies and run tasks
In your terminal change directory to the root of the boilerplate folder then type:
```bash
yarn install
```
Next we need to run Gulp tasks, this will start a local server with auto reloading, watch files for changes, and transpile Sass.
```bash
gulp
```

### Step 3: Code away!
That's it, happy coding!

## Gulp tasks
```bash
gulp copyHtml
```
Copies HTML files from ./src folder.

```bash
gulp copyJs
```
Copies JS files from ./src/js folder or any of its sub directories.

```bash
gulp sass
```
Transpiles Sass files from ./src/sass folder or any of its sub directories, and outputs a compressed .css file to ./dist folder.

```bash
gulp serve
```
Starts a local server on http://localhost:3000 with live reload enabled.

```bash
gulp watch
```
Wathches any files for changes and reloads the browser on change and transpiles Sass if necessary.
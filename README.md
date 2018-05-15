# USA Parks App

> A native application built with NativeScript-Vue to search National Parks in the United States.

This is my first NativeScript App and definitely just a repo for me to learn the ropes. Here are my desired user stories:

1. I can search a Park via a search box
2. I can click on each park item and find the following:
 - park name
 - location (State, Coords) (** eventially to show on a map)
 - description
 - directions info with link to google maps location
 - basic weather info
 3. I can see an image / gallery of images for the selected park

## Usage

``` bash
# Install dependencies
npm install

# Build for production
npm run build
npm run build:<platform>

# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template
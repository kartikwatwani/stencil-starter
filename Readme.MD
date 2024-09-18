By default the library name is 'my-library'. To rename the library:

1. Run in root directory `npm i`.
2. Run in root directory `npx gulp default --name renamed-library name`.

If you renamed the library to foo-library. The core stencil library will be named foo-library and framework libraries will be suffixed with the framework name. For eg. for angular it will be foo-library-angular.

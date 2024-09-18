By default the library name is 'my-library'. To rename the library:

1. In root directory, `npm i`.
2. In root directory, `npx gulp default --name renamed-library name`. This command will rename your library and start watching the component. You can also append `--origin username/repo-path` to update github origin for the repo.

If you renamed the library to foo-library. The core stencil library will be named foo-library and framework libraries will be suffixed with the framework name. For eg. for angular it will be foo-library-angular.

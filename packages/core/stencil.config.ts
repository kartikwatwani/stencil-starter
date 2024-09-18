import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

// Uncomment the following line if you have a Vue 2 output target plugin
// import { vueOutputTarget as vue2OutputTarget } from '@your-org/stencil-vue2-output-target';
// Uncomment the following line if you have a custom event list plugin
// import { eventListOutputTarget } from './scripts/event-list.plugin';

const componentCorePackage = 'my-library';
const parent = './packages';
const entry = 'index.ts';
const companyName = 'Workern';
const excludeComponents = [

  
];

const directivesProxyFile = (name: string, filepath = entry) =>
  `../${name}/lib/${filepath}`;

const angularPath = (projectName: string, filepath = entry) =>
  `../angular/projects/${projectName}/src/lib/${filepath}`;

const customElementsDir = 'standalone';

export const config: Config = {
  enableCache: true,
  hashFileNames: false,
  autoprefixCss: false,
  minifyCss: true,
  preamble: `Built by ${companyName}`,
  hashedFileNameLength: 8,
  invisiblePrehydration: false,
  extras: {
    initializeNextTick: true,
    scriptDataOpts: false,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: false,
    enableImportInjection: true,
  },
  namespace: 'my-library',
  taskQueue: 'async',
  globalStyle: 'src/globals/variables.scss',
  validatePrimaryPackageOutputTarget: true,
  plugins: [
    sass(),
  ],
  outputTargets: [
    // Uncomment the following block if you have a Vue 2 output target plugin
    /*
    vue2OutputTarget({
      componentCorePackage,
      proxiesFile: directivesProxyFile('vue2'),
      excludeComponents,
    }),
    */
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: directivesProxyFile('vue'),
      excludeComponents,
      includePolyfills: true,
    }),
    angularOutputTarget({
      componentCorePackage,
      outputType: 'standalone',
      customElementsDir: customElementsDir,
      directivesProxyFile: angularPath('my-library-angular', 'components.ts'),
      directivesArrayFile: angularPath('my-library-angular', entry),
      excludeComponents,
    }),
    // svelteOutputTarget({
    //   componentCorePackage,
    //   proxiesFile: directivesProxyFile('svelte'),
    //   includeDefineCustomElements: true,
    //   legacy: false,
    //   excludeComponents,
    // }),
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      minify: true,
      dir: customElementsDir,
    
      generateTypeDeclarations: true,
      empty: true,
      copy: [
        {
          src: '**/*.{jpeg,jpg,png,webp,svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget: true,
      empty: true,
    },
    {
      type: 'docs-readme',
      dir: './docs/guide/api',
      footer: `*Built with ❤️ by ${companyName}*`,
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'www',
      copy: [
        { src: 'serve', dest: '.' },
        // Add any additional assets or directories you wish to copy
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  nodeResolve: {
    preferBuiltins: true,
  },
  testing: {
    browserHeadless: 'new',
  },
  
};
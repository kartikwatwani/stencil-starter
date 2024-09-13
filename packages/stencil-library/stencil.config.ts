import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'inner-growth',
  plugins: [
    sass()
  ],
  outputTargets: [

    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    
    angularOutputTarget({
      componentCorePackage: 'inner-growth',
      outputType: 'standalone',
      directivesProxyFile: '../angular-workspace/projects/inner-growth-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/inner-growth-angular/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  globalStyle: 'src/globals/variables.scss'
};

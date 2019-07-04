<<<<<<< HEAD
import { Config } from 'protractor';
import { reporter } from './helpers/reporter';

=======
import { Config, browser } from 'protractor';
>>>>>>> b3d128b799bfbd9441535e7a293acb3b3a6683ef

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
<<<<<<< HEAD
    reporter();
  }
};
=======
    browser.ignoreSynchronization = true;
  }
};
>>>>>>> b3d128b799bfbd9441535e7a293acb3b3a6683ef

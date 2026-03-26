import architectureFilenameConventions from './architecture-filename-conventions.js';
import componentsFilenamePascalCase from './components-filename-pascal-case.js';
import hooksFilenameCamelCase from './hooks-filename-camel-case.js';

/**
 * Reglas locales de nombres de archivo (flat config / ESLint 9).
 */
const localFilenamesPlugin = {
  rules: {
    'components-filename-pascal-case': componentsFilenamePascalCase,
    'hooks-filename-camel-case': hooksFilenameCamelCase,
    ...architectureFilenameConventions,
  },
};

export default localFilenamesPlugin;

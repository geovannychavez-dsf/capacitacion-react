import path from 'node:path';

/** Basename (sin extensión): camelCase, o `index` para barrels. */
const VALID_CAMEL_BASENAME = /^(?:index|[a-z][a-zA-Z0-9]*)$/;

/**
 * Comprueba que los archivos bajo una carpeta `hooks` usen camelCase en el nombre.
 */
const hooksFilenameCamelCaseRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'En carpetas `hooks`, el nombre del archivo (sin extensión) debe ser camelCase; se permite `index` para re-exports.',
    },
    schema: [],
    messages: {
      invalid:
        'El archivo "{{filename}}" no cumple camelCase dentro de una carpeta hooks (nombre sin extensión: "{{basename}}").',
    },
  },
  create(context) {
    return {
      Program(node) {
        const filePath = context.getFilename();
        if (filePath === '<text>' || filePath.endsWith('.md')) {
          return;
        }
        const withoutExt = path.basename(filePath, path.extname(filePath));
        if (!VALID_CAMEL_BASENAME.test(withoutExt)) {
          context.report({
            node,
            messageId: 'invalid',
            data: {
              filename: path.basename(filePath),
              basename: withoutExt,
            },
          });
        }
      },
    };
  },
};

export default hooksFilenameCamelCaseRule;

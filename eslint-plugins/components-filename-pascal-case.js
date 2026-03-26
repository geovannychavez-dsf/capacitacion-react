import path from 'node:path';

/** Basename (sin extensión): PascalCase, o `index` para barrels. */
const VALID_BASENAME = /^(?:index|[A-Z][a-zA-Z0-9]*)$/;

/**
 * Comprueba que los archivos bajo una carpeta `components` usen PascalCase en el nombre.
 */
const componentsFilenamePascalCaseRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'En carpetas `components`, el nombre del archivo (sin extensión) debe ser PascalCase; se permite `index` para re-exports.',
    },
    schema: [],
    messages: {
      invalid:
        'El archivo "{{filename}}" no cumple PascalCase dentro de una carpeta components (nombre sin extensión: "{{basename}}").',
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
        if (!VALID_BASENAME.test(withoutExt)) {
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

export default componentsFilenamePascalCaseRule;

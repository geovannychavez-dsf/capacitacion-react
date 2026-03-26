import path from 'node:path';

const KEBAB = '[a-z0-9]+(?:-[a-z0-9]+)*';

/**
 * @param {string} suffix Sin puntos: "adapter" | "interceptor" | "service" | "interface"
 */
function createArchitectureFilenameRule(suffix, description) {
  const basenamePattern = new RegExp(`^(?:index\\.ts|${KEBAB}\\.${suffix}\\.ts)$`);
  return {
    meta: {
      type: 'suggestion',
      docs: { description },
      schema: [],
      messages: {
        invalid:
          'El archivo "{{filename}}" debe ser kebab-case y terminar en ".{{suffix}}.ts" (excepto barrels "index.ts").',
      },
    },
    create(context) {
      return {
        Program(node) {
          const filePath = context.getFilename();
          if (filePath === '<text>' || filePath.endsWith('.md')) {
            return;
          }
          const base = path.basename(filePath);
          if (!basenamePattern.test(base)) {
            context.report({
              node,
              messageId: 'invalid',
              data: { filename: base, suffix },
            });
          }
        },
      };
    },
  };
}

const architectureFilenameConventions = {
  'adapters-filename': createArchitectureFilenameRule(
    'adapter',
    'En adapters/: nombre kebab-case + ".adapter.ts" (o index.ts).',
  ),
  'interceptors-filename': createArchitectureFilenameRule(
    'interceptor',
    'En interceptors/: nombre kebab-case + ".interceptor.ts" (o index.ts).',
  ),
  'services-filename': createArchitectureFilenameRule(
    'service',
    'En services/: nombre kebab-case + ".service.ts" (o index.ts).',
  ),
  'interfaces-filename': createArchitectureFilenameRule(
    'interface',
    'En interfaces/: nombre kebab-case + ".interface.ts" (o index.ts).',
  ),
};

export default architectureFilenameConventions;

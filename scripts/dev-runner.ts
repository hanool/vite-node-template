import { createServer, isRunnableDevEnvironment } from 'vite'

async function main() {
  const server = await createServer({
    appType: 'custom',
    environments: {
      nodeRunnerEnv: {},
    },
  })

  // NOTE: Workaround to trigger buildStart hook for plugins (since vite-tsconfig-paths^v6.0.0, it initialise its resolvers in buildStart)
  // TODO: Remove after Following PR has merged. https://github.com/aleclarson/vite-tsconfig-paths/pull/200
  await server.pluginContainer.buildStart({})

  const env = server.environments.nodeRunnerEnv
  if (!isRunnableDevEnvironment(env)) {
    console.error('Vite environment is not runnable.')
    process.exit(1)
  }

  await env.runner.import('/src/index.ts')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

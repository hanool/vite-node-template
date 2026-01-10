import { createServer, isRunnableDevEnvironment } from 'vite'

async function main() {
  const server = await createServer({
    appType: 'custom',
    environments: {
      nodeRunnerEnv: {},
    },
  })

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

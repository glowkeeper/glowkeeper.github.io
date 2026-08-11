import { validateContentRegistry } from '../src/app/utils/contentRegistry'

const main = async () => {
  try {
    await validateContentRegistry()
    console.log('Content registry is valid.')
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}

void main()

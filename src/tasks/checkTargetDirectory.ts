import { Listr } from 'listr2'
import { accessDirectory } from 'wsl-export/helpers'
import { Directory } from 'wsl-export/types'

export async function checkTargetDirectory(dir: Directory): Promise<void> {
  return new Listr([
    {
      title: 'Checking target directory',
      task: async (_, task) => {
        try {
          await accessDirectory(dir)
          task.title = 'Target directory exists'
        } catch (_) {
          throw new Error('Invalid target directory')
        }
      },
    },
  ]).run()
}
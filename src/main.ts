import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('github_token')
    const issueNumber: number = parseInt(core.getInput('issue_number'))

    const octokit = github.getOctokit(token)

    await octokit.rest.issues.lock({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: issueNumber
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.error(error.stack)
    // @ts-ignore
    core.setFailed(error.message)
  }
}

run()

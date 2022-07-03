import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('github_token')
    const issueNumber: number = parseInt(core.getInput('issue_number'))

    const octokit = github.getOctokit(token)

    await octokit.request(
      'DELETE /repos/{owner}/{repo}/issues/{issue_number}',
      {
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: issueNumber
      }
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

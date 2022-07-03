import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('github_token')
    const issueNodeId: number = parseInt(core.getInput('issue_node_id'))

    const octokit = github.getOctokit(token)

    await octokit.graphql(`mutation {
      deleteIssue(input: {issueId: "${issueNodeId}"}) {
        clientMutationId
      }
    }`)
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

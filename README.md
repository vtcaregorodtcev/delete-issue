## The Github action allowing you to delete issues from the repo

### Usage

```yml
name: delete opened issue
on:
  issues:
    types: [opened]
jobs:
  delete-issue:
    if: github.event.issue.user.login == 'not_your_name'
    runs-on: ubuntu-latest
    steps:
      - uses: vtcaregorodtcev/delete-issue@main
        with:
          github_token: ${{ secrets.PERSONAL_TOKEN }}
          issue_number: ${{ github.event.issue.number }}
```

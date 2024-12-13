# Contributing Guidelines

The BC Computer Science Club website is an open source project and everyone in the BC community is welcome to contribute. Please follow the guidelines below to make the contribution process smooth and efficient.

## Table of Contents
- [Getting Started](#getting-started)
- [Using GitHub Issues](#using-github-issues)
- [Making Changes](#making-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Review Process](#code-review-process)
- [License](#license)

## Getting Started

1. **Fork the upstream repository**: Click the "Fork" button on https://github.com/bc-compsci-club/bccs-club
2. **Clone your fork**: Clone the forked repository (NOT the upstream repository) to your local machine.
    ```sh
    git clone https://github.com/[your-username]/bccs-club.git
    cd bccs-club
    ```
3. **Add the upstream repository as a remote**: This will allow you to pull changes from the [upstream repository](https://github.com/bc-compsci-club/bccs-club).
    ```sh
    git remote add upstream https://github.com/bc-compsci-club/bccs-club.git
    ```

Note: We use two primary (protected) branches in the [upstream repository](https://github.com/bc-compsci-club/bccs-club):
  - `main`: The stable release branch.
  - `dev`: The development branch where the latest changes are consolidated.

## Using GitHub Issues

1. **Create an Issue in the upstream repository**: Before starting work on a new feature or bugfix, create a GitHub Issue in the [upstream repository](https://github.com/bc-compsci-club/bccs-club) to describe the work to be done.
2. **Label the Issue**: Use appropriate labels to categorize the issue (e.g., `feature`, `bug`, `documentation`).
3. **Assign the Issue**: Assign the issue to yourself or to a team member who will work on it.
4. **Reference the Issue in Commits and PRs**: Reference the issue number in your commit messages and pull request descriptions to link your work to the issue (e.g., `git commit -m 'Create the home page (#11)'`).

## Making Changes

1. **Update your local dev branch**:
    
    ```sh
    git checkout dev # Switch to the dev branch
    git pull upstream dev # Pull the latest changes from the upstream dev branch
    ```
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name # Create a new branch for your feature from the dev branch
    ```
3. **Install dependencies**: Follow the instructions in the README file of the specific project you are working on to install the necessary dependencies.
4. **Make your changes**: Implement your changes (update the codebase) in the new branch.
5. **Commit your changes**: Write clear and concise commit messages. Reference the related issue in your commit message.
    ```sh
    git add . # Stage all your changes
    git commit -m "Brief description of your changes (#11)" # Commit your changes. The "#11" references the related GitHub Issue
    ```
6. **Push your branch to your fork**:
    ```sh
    git push origin feature/your-feature-name # Push your branch to your fork
    ```

## Submitting a Pull Request

1. **Create a pull request**: Go to your fork on GitHub and create a pull request to merge your fork's branch into the upstream repository's `dev` branch.
2. **Add pull request description**: Provide a clear and detailed description or a screenshot of your changes. Reference the related issue (e.g., you can put `Closes #11` in the description of your pull request to automatically close the issue once the pull request is merged).
3. **Request reviewers**: Add at least one reviewer to your pull request.
4. **Label the pull request**: Use appropriate labels to categorize the pull request (e.g., `feature`, `bug`, `documentation`).

## Code Review Process

1. **Request reviewers**: Add at least one reviewer to your pull request.
2. **Address feedback**: Be responsive to feedback and make necessary changes.
3. **Merge**: Once your pull request is approved by at least one reviewer, it can be merged into the `dev` branch.

The purpose of our code reviews is to
- ensure that the codebase is consistent and maintainable
- catch bugs early
- learn from each other and understand the codebase better

## License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](./LICENSE.md).

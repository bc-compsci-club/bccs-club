# Contributing Guidelines

The BC Computer Science Club website is an open source project and everyone in the BC community is welcome to contribute. Please follow the guidelines below to make the contribution process smooth and efficient.

## Table of Contents
- [Getting Started](#getting-started)
- [Branching Model](#branching-model)
- [Using GitHub Issues](#using-github-issues)
- [Making Changes](#making-changes)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Review Process](#review-process)
- [License](#license)

## Getting Started

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page.
2. **Clone your fork**: Clone the forked repository to your local machine.
    ```sh
    git clone https://github.com/[your-username]/bccs-club.git
    cd bccs-club
    ```
3. **Add the upstream repository**: This allows you to keep your fork up-to-date with the main repository.
    ```sh
    git remote add upstream https://github.com/bc-compsci-club/bccs-club.git
    ```

## Branching Model

We use two main branches:
- `main`: The stable release branch.
- `dev`: The development branch where the latest changes are consolidated.

**Feature branches**:
- Create feature branches from `dev` for new features or bug fixes.
- Name feature branches using the following convention:
  - `feature/your-feature-name`
  - `bugfix/description-of-bug`

## Using GitHub Issues

1. **Create an Issue in the upstream repository**: Before starting work on a new feature or bugfix, create a GitHub Issue in the upstream repository to describe the work to be done.
2. **Label the Issue**: Use appropriate labels to categorize the issue (e.g., `feature`, `bug`, `documentation`).
3. **Assign the Issue**: Assign the issue to yourself or to a team member who will work on it.
4. **Reference the Issue in Commits and PRs**: Reference the issue number in your commit messages and pull request descriptions to link your work to the issue (e.g., `#123`).

## Making Changes

1. **Update your local dev branch**:
    
    ```sh
    git checkout dev
    git pull upstream dev
    ```
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes**: Implement your changes in the new branch.
4. **Commit your changes**: Write clear and concise commit messages. Reference the related issue in your commit message.
    ```sh
    git add .
    git commit -m "Brief description of your changes (#123)"
    ```
5. **Push your branch to your fork**:
    ```sh
    git push origin feature/your-feature-name
    ```

## Submitting Pull Requests

1. **Create a pull request**: Go to the [original repository](https://github.com/bc-compsci-club/bccs-club) on GitHub and create a pull request from your branch to the `dev` branch.
2. **Add PR description**: Provide a clear and detailed description of your changes. Reference the related issue (e.g., `#123`).
3. **Request reviewers**: Add at least one reviewer to your pull request.

## Review Process

1. **Request reviewers**: Add at least one reviewer to your pull request.
2. **Address feedback**: Be responsive to feedback and make necessary changes.
3. **Merge**: Once your pull request is approved by at least one reviewer, it can be merged into the `dev` branch.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

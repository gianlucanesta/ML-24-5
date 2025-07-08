# MIT ML-24-5 Project

## Overview

This project is designed to build and test a Node.js application using AWS CodeBuild. It includes automated testing with coverage reports and artifact generation.

## Prerequisites

- Node.js 20 or higher
- npm (Node Package Manager)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/MIT-ML-24-5.git
   cd MIT-ML-24-5
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Build and Test

To build and run tests with coverage:

```bash
npm test -- --coverage
```

## Deployment

Artifacts are generated in the `build` directory. Ensure the `build` directory is used as the base for deployment.

## File Structure

- `buildspec.yml`: Configuration for AWS CodeBuild.
- `src/`: Source code for the application.
- `tests/`: Test cases for the application.

## License

This project is licensed under the MIT License.

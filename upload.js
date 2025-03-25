const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const uploadFile = async (filePath, repoPath) => {
  const content = fs.readFileSync(filePath, { encoding: 'base64' });
  const message = `Upload ${path.basename(filePath)}`;

  await octokit.repos.createOrUpdateFileContents({
    owner: 'CompeteX001',
    repo: 'tutoring-website',
    path: repoPath,
    message: message,
    content: content,
    branch: 'main',
  });
};

const uploadDir = async (dirPath, repoDirPath) => {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const repoPath = path.join(repoDirPath, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      await uploadDir(filePath, repoPath);
    } else {
      await uploadFile(filePath, repoPath);
    }
  }
};

uploadDir('./uploads', 'uploads');
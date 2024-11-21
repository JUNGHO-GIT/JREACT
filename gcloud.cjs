// gcloud.js

const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');
const fs = require('fs');

const winOrLinux = os.platform() === 'win32' ? "win" : "linux";
console.log(`Activated OS is : ${winOrLinux}`);

// env 파일 및 index 파일 수정 ---------------------------------------------------------------------
const modifyEnvAndIndex = () => {
};

// changelog 수정 ----------------------------------------------------------------------------------
const modifyChangelog = () => {
  try {
    // ex. 2024-11-03 (16:23:24)
    const currentDate = new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    const currentTime = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const changelog = fs.readFileSync('changelog.md', 'utf8');
    const versionPattern = /\d+\.\d+\.\d+/g;
    const matches = [...changelog.matchAll(versionPattern)];
    const lastMatch = matches[matches.length - 1];
    const versionArray = lastMatch[0].match(/\d+/g) || [];

    // 세 번째 숫자에 +1
    versionArray[2] = (parseFloat(versionArray[2]) + 1).toString();

    let newVersion = `\\[ ${versionArray.join('.')} \\]`;
    let newDateTime = `- ${currentDate} (${currentTime})`;
    let newEntry = `\n## ${newVersion}\n\t${newDateTime}\n\n`;

    newEntry = newEntry.replace(/([.]\s*[(])/g, ' (');
    newEntry = newEntry.replace(/([.]\s*)/g, '-');
    newEntry = newEntry.replace(/[(](\W*)(\s*)/g, '(');

    const updatedChangelog = changelog + newEntry;

    fs.writeFileSync('changelog.md', updatedChangelog, 'utf8');
  }
  catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// git push ----------------------------------------------------------------------------------------
const gitPush = () => {
  try {
    const gitAdd = (
      'git add .'
    );
    const gitCommit = (
      winOrLinux === "win"
      ? 'git commit -m \"%date% %time:~0,8%\"'
      : 'git commit -m \"$(date +%Y-%m-%d) $(date +%H:%M:%S)\"'
    );
    const gitPush = (
      'git push origin master'
    );

    execSync(gitAdd, { stdio: 'inherit' });
    execSync(gitCommit, { stdio: 'inherit' });
    execSync(gitPush, { stdio: 'inherit' });
  }
  catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// 원격 서버에서 스크립트 실행 ---------------------------------------------------------------------
const runRemoteScript = () => {
};

// env 파일 및 index 파일 복원 --------------------------------------------------------------------
const restoreEnvAndIndex = () => {
};

// -------------------------------------------------------------------------------------------------
modifyEnvAndIndex();
modifyChangelog();
gitPush();
runRemoteScript();
restoreEnvAndIndex();
process.exit(0);
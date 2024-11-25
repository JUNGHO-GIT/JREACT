// gcloud.cjs

const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const os = require('os');
const fs = require('fs');

const winOrLinux = os.platform() === 'win32' ? "win" : "linux";
console.log(`Activated OS is : ${winOrLinux}`);

// env 파일 및 index 파일 수정 ---------------------------------------------------------------------
const modifyEnvAndIndex = () => {
  try {
    const envFile = readFileSync('.env', 'utf8');
    const indexFile = readFileSync('index.ts', 'utf8');

    // 파일을 줄 단위로 나눔
    const linesEnv = envFile.split(/\r?\n/);
    const linesIndex = indexFile.split(/\r?\n/);

    const updatedEnv = linesEnv.map(line => {
      if (line.startsWith('CLIENT_URL=')) {
        return `CLIENT_URL=https://www.junghomun.com/JREACT`;
      }
      if (line.startsWith('GOOGLE_CALLBACK_URL=')) {
        return `GOOGLE_CALLBACK_URL=https://www.junghomun.com/JREACT/api/auth/google/callback`;
      }
      // 다른 줄은 그대로 유지
      return line;
    });

    const updatedIndex = linesIndex.map(line => {
      if (line.startsWith(`// const db = process.env.DB_NAME`)) {
        return `const db = process.env.DB_NAME`;
      }
      if (line.startsWith(`const db = process.env.DB_TEST`)) {
        return `// const db = process.env.DB_TEST`;
      }
      // 다른 줄은 그대로 유지
      return line;
    });

    // 줄을 다시 합쳐서 저장
    const newEnvFile = updatedEnv.join(os.EOL);
    const newIndexFile = updatedIndex.join(os.EOL);

    writeFileSync('.env', newEnvFile);
    writeFileSync('index.ts', newIndexFile);
  }
  catch (error) {
    console.error(error);
    process.exit(1);
  }
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
    const versionPattern = /(\s*)(\d+[.]\d+[.]\d+)(\s*)/g;
    const matches = [...changelog.matchAll(versionPattern)];
    const lastMatch = matches[matches.length - 1];
    const lastVersion = lastMatch[2];
    const versionArray = lastVersion.split('.');
    versionArray[2] = (parseInt(versionArray[2]) + 1).toString();

    let newVersion = `\\[ ${versionArray.join('.')} \\]`;
    let newDateTime = `- ${currentDate} (${currentTime})`;
    newDateTime = newDateTime.replace(/([.]\s*[(])/g, ' (');
    newDateTime = newDateTime.replace(/([.]\s*)/g, '-');
    newDateTime = newDateTime.replace(/[(](\W*)(\s*)/g, '(');

    let newEntry = `\n\n## ${newVersion}\n\t${newDateTime}`;

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
  try {
    const keyPath = (
      winOrLinux === "win"
      ? "C:\\Users\\jungh\\.ssh\\JKEY"
      : "~/ssh/JKEY"
    );

    const serviceId = (
      winOrLinux === "win"
      ? 'junghomun00'
      : 'junghomun1234'
    );

    const ipAddr = "104.196.212.101";
    const cmdCd = 'cd /var/www/junghomun.com/JREACT/server';
    const cmdGitFetch = 'sudo git fetch --all';
    const cmdGitReset = 'sudo git reset --hard origin/master';
    const cmdRmClient = 'sudo rm -rf client';
    const cmdCh = 'sudo chmod -R 755 /var/www/junghomun.com/JREACT/server';
    const checkPm2Status = `pm2 list | grep JREACT`;
    const cmdStop = 'sudo pm2 stop JREACT';
    const cmdSave = 'sudo pm2 save --force';
    const cmdNpm = 'sudo npm install';
    const cmdStart = 'pm2 start ecosystem.config.cjs --env production';
    const cmdReSave = 'sudo pm2 save --force';

    // 명령어를 배열로 작성
    const remoteCommandString = `
      ${cmdCd} &&
      ${cmdGitFetch} &&
      ${cmdGitReset} &&
      ${cmdRmClient} &&
      ${cmdCh} &&
      if pm2 list | grep JREACT > /dev/null 2>&1; then
        ${cmdStop} &&
        ${cmdSave};
      fi &&
      ${cmdNpm} &&
      ${cmdStart} &&
      ${cmdReSave}
    `;
    const winCommand = `powershell -Command "ssh -i ${keyPath} ${serviceId}@${ipAddr} \\"bash -c '${remoteCommandString}'\\" "`;
    const sshCommand = winCommand;

    execSync(sshCommand, { stdio: 'inherit' });
  }
  catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// env 파일 및 index 파일 복원 --------------------------------------------------------------------
const restoreEnvAndIndex = () => {
  try {
    const envFile = readFileSync('.env', 'utf8');
    const indexFile = readFileSync('index.ts', 'utf8');

    // 파일을 줄 단위로 나눔
    const linesEnv = envFile.split(/\r?\n/);
    const linesIndex = indexFile.split(/\r?\n/);

    const updatedEnv = linesEnv.map(line => {
      if (line.startsWith('CLIENT_URL=')) {
        return `CLIENT_URL=http://localhost:3000/JREACT`;
      }
      if (line.startsWith('GOOGLE_CALLBACK_URL=')) {
        return `GOOGLE_CALLBACK_URL=http://localhost:4100/JREACT/api/auth/google/callback`;
      }
      // 다른 줄은 그대로 유지
      return line;
    });

    const updatedIndex = linesIndex.map(line => {
      if (line.startsWith(`const db = process.env.DB_NAME`)) {
        return `// const db = process.env.DB_NAME`;
      }
      if (line.startsWith(`// const db = process.env.DB_TEST`)) {
        return `const db = process.env.DB_TEST`;
      }
      // 다른 줄은 그대로 유지
      return line;
    });

    // 줄을 다시 합쳐서 저장
    const newEnvFile = updatedEnv.join(os.EOL);
    const newIndexFile = updatedIndex.join(os.EOL);

    writeFileSync('.env', newEnvFile);
    writeFileSync('index.ts', newIndexFile);
  }
  catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// -------------------------------------------------------------------------------------------------
modifyEnvAndIndex();
modifyChangelog();
gitPush();
runRemoteScript();
restoreEnvAndIndex();
process.exit(0);
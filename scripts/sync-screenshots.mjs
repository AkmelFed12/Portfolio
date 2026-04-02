import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const imagesDir = path.join(rootDir, 'public', 'images');
const uploadsDir = path.join(imagesDir, 'uploads');
const projectsDataPath = path.join(rootDir, 'src', 'data', 'projects.ts');

const allowedExt = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg']);

const projectMap = [
  {
    key: 'asaa',
    desktopTargetBase: 'asaa-portal-desktop',
    mobileTargetBase: 'asaa-portal-mobile',
  },
  {
    key: 'myfinance',
    desktopTargetBase: 'myfinance-desktop',
    mobileTargetBase: 'myfinance-mobile',
  },
  {
    key: 'barakatrack',
    desktopTargetBase: 'barakatrack-desktop',
    mobileTargetBase: 'barakatrack-mobile',
  },
];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function getExt(filename) {
  return path.extname(filename).toLowerCase();
}

function findUpload(files, projectKey, variant) {
  const needle = `${projectKey}-${variant}`;
  return files.find((file) => file.toLowerCase().startsWith(needle));
}

async function replaceProjectPaths(pathUpdates) {
  let content = await fs.readFile(projectsDataPath, 'utf8');

  for (const update of pathUpdates) {
    const imageRegex = new RegExp(
      `(image:\\s*')/images/${update.desktopTargetBase}\\.[^']+(')`,
      'g'
    );
    const mobileRegex = new RegExp(
      `(mobileImage:\\s*')/images/${update.mobileTargetBase}\\.[^']+(')`,
      'g'
    );

    content = content.replace(
      imageRegex,
      `$1/images/${update.desktopFilename}$2`
    );
    content = content.replace(
      mobileRegex,
      `$1/images/${update.mobileFilename}$2`
    );
  }

  await fs.writeFile(projectsDataPath, content, 'utf8');
}

async function main() {
  await ensureDir(uploadsDir);

  const uploadEntries = await fs.readdir(uploadsDir, { withFileTypes: true });
  const uploadFiles = uploadEntries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => allowedExt.has(getExt(name)));

  if (uploadFiles.length === 0) {
    console.log('No screenshot files found in public/images/uploads.');
    console.log('Expected names: asaa-desktop.png, asaa-mobile.png, myfinance-desktop.png, myfinance-mobile.png, barakatrack-desktop.png, barakatrack-mobile.png');
    return;
  }

  const updates = [];

  for (const project of projectMap) {
    const desktopUpload = findUpload(uploadFiles, project.key, 'desktop');
    const mobileUpload = findUpload(uploadFiles, project.key, 'mobile');

    if (!desktopUpload || !mobileUpload) {
      console.log(`Skipping ${project.key}: missing desktop or mobile image.`);
      continue;
    }

    const desktopExt = getExt(desktopUpload);
    const mobileExt = getExt(mobileUpload);

    const desktopFilename = `${project.desktopTargetBase}${desktopExt}`;
    const mobileFilename = `${project.mobileTargetBase}${mobileExt}`;

    await fs.copyFile(
      path.join(uploadsDir, desktopUpload),
      path.join(imagesDir, desktopFilename)
    );
    await fs.copyFile(
      path.join(uploadsDir, mobileUpload),
      path.join(imagesDir, mobileFilename)
    );

    updates.push({
      ...project,
      desktopFilename,
      mobileFilename,
    });
  }

  if (updates.length > 0) {
    await replaceProjectPaths(updates);
    console.log(`Updated screenshot paths for ${updates.length} project(s).`);
  } else {
    console.log('No project screenshots were updated.');
  }
}

main().catch((error) => {
  console.error('sync:screenshots failed:', error);
  process.exit(1);
});


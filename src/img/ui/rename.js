import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
// Укажите путь к директории с файлами
const directoryPath = path.join(__dirname, 'icons');

// Функция для обработки файлов
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Ошибка при чтении директории:', err);
    return;
  }

  files.forEach(file => {
    const oldFilePath = path.join(directoryPath, file);

    // Ищем шаблон и создаем новое имя
    let match = file.split('Icon=')[1];
    if (!match) {
      return;
    }
    match = match.replace(/ /g, '-');
    if (match) {
      const newFileName = match.toLowerCase() + '.svg';
      const newFilePath = path.join(directoryPath, newFileName);

      // Переименовываем файл
      fs.rename(oldFilePath, newFilePath, renameErr => {
        if (renameErr) {
          console.error(`Ошибка при переименовании файла ${file}:`, renameErr);
        } else {
          console.log(`Файл ${file} переименован в ${newFileName}`);
        }
      });
    }
  });
});

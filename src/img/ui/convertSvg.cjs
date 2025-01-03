const fs = require('fs');
const path = require('path');

// Папка с SVG файлами
const iconsDir = path.join(__dirname, 'icons');

// Файл, куда запишем результат
const outputCssFile = path.join(__dirname, 'icons.css');

// Проверяем, существует ли папка
if (!fs.existsSync(iconsDir)) {
  console.error(`Папка ${iconsDir} не найдена.`);
  process.exit(1);
}

// Читаем файлы из папки
const files = fs.readdirSync(iconsDir).filter(file => path.extname(file) === '.svg');

if (files.length === 0) {
  console.error('Нет SVG файлов в папке.');
  process.exit(1);
}

// Генерируем CSS
let cssContent = `/* Автоматически сгенерированные стили */\n\n
[class^="ui-icon-"] {
  display: inline-block;
  --size: 24px;
  width: var(--size);
  height: var(--size);
  --svg: none;
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
`;

files.forEach(file => {
  const iconName = path.basename(file, '.svg').toLowerCase().replace(/ /g, '-').replace('.svg', ''); // Имя файла без расширения
  const svgPath = path.join(iconsDir, file);
  const svgData = fs.readFileSync(svgPath, 'utf8');
  console.log(iconName);

  // Кодируем SVG в base64
  const base64Data = Buffer.from(svgData).toString('base64');

  // Генерируем CSS-класс
  cssContent += `
.ui-icon-${iconName} {
  --svg: url('data:image/svg+xml;base64,${base64Data}');
}
`;
});

// Записываем результат в файл
fs.writeFileSync(outputCssFile, cssContent, 'utf8');

console.log(`CSS для иконок успешно сгенерирован в файл: ${outputCssFile}`);

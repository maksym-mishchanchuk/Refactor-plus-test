# Shopify Featured Products Section

Це проект для створення секції "Featured Products" на платформі Shopify, яка дозволяє відображати рекомендовані продукти з колекції, що обирається через кастомайзер теми.

## Опис

- Додається можливість вибору колекції в кастомайзері теми.
- Продукти можна додавати в кошик без перезавантаження сторінки.
- Використано Ajax API для додавання товару до кошика.

## Технології
- **HTML** (Liquid для Shopify)
- **SCSS** (BEM для структури класів)
- **JavaScript** (для інтерактивності, додавання товарів у кошик без перезавантаження сторінки)

## Налаштування середовища

### Встановлення залежностей

Для запуску так розробки вам необхідно мати встановлені наступні інструменти:
1. **Клонуйте репозиторій**:
   Якщо ви хочете працювати з проектом локально, спочатку клонувати репозиторій:
   ```bash
   git clone https://github.com/yourusername/shopify-featured-products.git
   
2. **Node.js** - потрібен для запуску таск-раннерів (наприклад, Gulp або Webpack).
   - Перевірте, чи встановлений Node.js, за допомогою команди:
     ```bash
     node -v
     ```
   - Завантажити Node.js можна [тут](https://nodejs.org/).

3. **Gulp** (або Webpack) - для автоматизації задач, таких як компіляція SCSS у CSS.
   - Для встановлення Gulp використовуйте команду:
     ```bash
     npm install --global gulp-cli
     ```

4. **Залежності проекту**:
   Встановіть залежності, які необхідні для проекту, через npm:
   ```bash
   npm install



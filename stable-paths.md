# Стабильные пути сайта

Список для тех, кто ссылается на книгу. Это не глава для читателя. Адрес сайта до выбора постоянного домена — `https://infoculture.github.io/datainventorydocs`, полный адрес страницы — он плюс путь, со слэшем в конце. Путь не меняют без перенаправления со старого.

Якоря заголовков Docusaurus строит из текста заголовка. На якорь ссылаются, только если заголовок больше не будут переименовывать.

## С чего начать

| О чём речь | Путь |
|------------|------|
| О книге | `/` |
| Что такое карта данных | `/basics/what-is-a-data-map/` |
| Как классифицировать карты | `/map-types/classification/` |
| Как составить карту | `/method/process/` |
| Источники сведений о данных | `/sources/overview/` |
| Атлас | `/atlas/how-to-read/` |

## Метод

| Тема | Путь |
|------|------|
| Тема и вопросы | `/method/topic-and-questions/` |
| Полномочия и владельцы | `/method/authorities-and-owners/` |
| Карточка источника | `/method/describing-systems/` |
| Шкала доступности | `/method/assessing-availability/` |
| Проверка и публикация | `/method/review-and-publish/` |
| Обновление | `/method/maintenance/` |

## Атлас

| Карта | Путь | Данные |
|-------|------|--------|
| Государственные финансы | `/atlas/public-finance/` | `data/maps/public-finance.yaml` |
| Нефть и газ | `/atlas/oil-and-gas/` | `data/maps/oil-and-gas.yaml` |
| Здравоохранение | `/atlas/health/` | `data/maps/health.yaml` |
| Образование | `/atlas/education/` | `data/maps/education.yaml` |

Файлы для скачивания, не страницы книги: `/data-maps-book.pdf`, `/downloads/<карта>.csv`, `/downloads/<карта>.pdf`, `/templates/sources.csv`, `/templates/questions.csv`, `/templates/links.csv`, `/templates/map.yaml`.

## Старые адреса GitBook

Раньше книга публиковалась на GitBook как «Методика составления карт данных (черновик)»: `https://infoculture.gitbook.io/datamaps`. В октябре 2026 года этот сайт ещё отвечает и показывает текст 2020 года. Перенаправить с него на новый сайт из этого репозитория нельзя: домен gitbook.io принадлежит GitBook. Автору стоит добавить на старый сайт ссылку на новый или снять его с публикации.

| Старый адрес | Новый путь |
|--------------|------------|
| `/` (Введение) | `/` |
| `/whatis` | `/map-types/classification/` |
| `/guide` | `/method/process/` |
| `/sources` | `/sources/overview/` |
| `/datamaps` | `/atlas/how-to-read/` |
| `/datamaps/finances` | `/atlas/public-finance/` |
| `/datamaps/oil` | `/atlas/oil-and-gas/` |
| `/datamaps/health` | `/atlas/health/` |
| `/datamaps/education` | `/atlas/education/` |

Если книга переедет на собственный домен, эти пары можно подключить как перенаправления через `@docusaurus/plugin-client-redirects`.

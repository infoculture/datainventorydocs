# Карты данных — книга на Docusaurus

Книга о картах данных: как выяснить, где лежат данные по теме или территории, кто ими владеет и насколько они доступны, и как описать это для других. Название рабочее.

- Принципы проекта: `.cursor/rules/book-principles.mdc`
- Шаблоны и оформление глав: `.cursor/rules/chapter-writing.mdc`
- План работ и статус задач: `PLAN.md`
- Ревизия, из которой вырос план: `REVIEW-2026-10-23.md`

Тексты лежат в `docs/`. Части и главы упорядочены числовыми префиксами папок и файлов, URL строится без префиксов (`docs/04-sources/02-gis-registries.md` → `/sources/gis-registries/`). Подпись и описание части — в `_category_.json` её папки.

Иллюстрации — `static/img/<часть>/`, файлы для печати и скачивания — `static/downloads/`.

Карты атласа хранятся как данные в `data/` (схема — `data/README.md`). Скрипт `scripts/atlas.mjs` проверяет их и строит в `docs/06-atlas/_generated/` паспорт, таблицы и список изменений для страниц атласа, а в `static/downloads/` — CSV. Сгенерированные файлы в git не хранятся; `npm start` и `npm run build` запускают скрипт сами. Таблицы атласа правят в `data/`, а не на страницах.

Книга раньше собиралась в GitBook: страницы лежали в корне (`README.md`, `whatis.md`, `guide.md`, `sources.md`, `datamaps/`), оглавление — в `SUMMARY.md`, картинки — в `.gitbook/assets/`. Всё это перенесено в `docs/` и `static/`, разметка GitBook заменена на Markdown и MDX.

```bash
npm install          # первый запуск
npm start            # разработка
npx tsc --noEmit     # проверка типов
npm run build        # сборка, падает на битых ссылках
npm run atlas:check  # проверить данные атласа
```

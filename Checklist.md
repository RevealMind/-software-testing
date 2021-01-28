# Checklist for homework
## Frontend
### Main часть:

- [X] Папка client в репозитории на GitHub
- [X] Приложение на React
- [X] Несколько страниц с роутингом
- [X] node.js бекенд (express)
- [X] Unit тесты
- [X] Component тесты
- [X] E2E тесты

### Advanced часть:

- [X] Авторизация
- [X] Тесты для проверки авторизации
- [X] Нескольно наборов тестов (несколько suites)

### Bonus часть:

- [X] Примеры с Playwright и Cypress
- [ ] заметка с основными отличиями #TODO

## Frontend: E2E
### Main часть:
- [X] Тесты на Playwright
- [X] Тесты на Cypress
- [X] Не менее 5 тестов на каждый фреймворк

### Advanced часть:
- [X] Тесты не проходящие авторизацию

### Bonus часть:
- [X] Скриншот-тестирование
- [X] Запись видео
- [ ] Статья в блог #TODO

## Backend
### Main часть:
- [ ] сервис Java + Spring + DB
- [ ] больше 1 контроллерa
- [ ] unit тесты
- [ ] component тесты
- [ ] TestContainers для теста с DB
- [ ] Mockito


### Advanced часть:
- [ ] взаимодействие сервиса и Frontend приложения
- [ ] тесты на авторизацию (работают тесты из предыдущего дз)
- [ ] Spring Test Configuration, которые можно переключать при помощи флага при запуске тестов
- [ ] генерация тестовой документации через Asci Doctor(Spring Rest Docs)

### Bonus часть:
- [ ] функциональность с Kafka/RabbitMQ streams
- [ ] компонентные тесты на эту функциональность

## CI/CD. GitHub actions. Azure
### Main часть:
- [ ] GitHub action для запуска тестов на UI и Backend по пушу из master в ветку

### Advanced часть:
- [ ] GitHub action для деплоя приложения UI+BE на Azure/Vercel/Яндекс Облако

### Bonus часть:
- [ ] Kubernetes в Azure/Яндекс Облаке для разворачивания среды

## Reporting. BDD
### Bonus часть:
- [ ]  Allure reporting для написанных тестов

## Contract tests. Pact. Spring cloud contract
### Bonus часть:
- [ ]  Pact-тесты к сервису.

## A11Y. Instruments
### Bonus часть:
- [ ]  протестировать сайт на а11y с помощью инструментов от Mozilla и Lighthouse
- [ ]  пофиксить проблемы
- [ ]  сделать автоматический тест с a e

## Selenium. Selenide. Selenoid
### Main часть:
- [ ] e2e тесты, используя Selenide

### Advanced часть:
- [ ] настроить запуск тестов с Selenoid

### Bonus часть:
- [ ] настроить генерацию отчетов с Allure report, сделав полный сетап в GitHub: e2e тесты с selenide запускаются с использованием Selenoid на разных окружениях(браузерах) параллельно и собирают отчет с помощью Allure Report
- [ ] написать статью про сетап

## Performance testing
### Main часть:
- [ ] пройти воркшоп и выложить результаты (начало положено)

### Advanced часть:
- [ ] настроить CI с Github actions

### Bonus часть:
- [ ] настроить генерацию отчетов с Allure report
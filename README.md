# PETDAY — Agenda de Atendimentos

Interface web para gerenciar agendamentos de uma clínica/pet shop.  
A aplicação exibe a agenda do dia segmentada por períodos (Manhã, Tarde e Noite) e possui um **modal** para criar novos agendamentos.

> **Stack:** HTML + CSS + JavaScript (arquitetura por módulos).  
> **Build/Dev:** Webpack + (opcional) `json-server` para API fake.

---

## 📸 Preview

<img width="1919" height="947" alt="image" src="https://github.com/user-attachments/assets/f1c7e2f4-691d-48bb-b09a-942e5b659db7" />


---

## ✅ Recursos

- **Agenda diária** por períodos: **Manhã (09h–12h)**, **Tarde (13h–18h)** e **Noite (19h–21h)**  
- **Modal de agendamento** com campos:
  - Nome do tutor, Nome do pet, Telefone
  - Descrição do serviço
  - Data e Hora (select de horários)
- **Design tokens** (CSS Variables) para cores, tipografia e espaçamentos
- **Inputs com ícones** e **seta customizada** (date/select)
- **Responsivo** com *breakpoints* em arquivo dedicado `css/responsive.css`
- Estrutura pronta para integrar com API (ex.: `json-server`)

---

## 🗂️ Estrutura de Pastas (sugerida)

> Os nomes podem variar conforme seu setup; ajuste caminhos no HTML/JS conforme necessário.

```
project-root/
├─ src/
│  ├─ assets/                 # SVGs e ícones
│  │  ├─ afternoon.svg
│  │  ├─ arrow-down.svg
│  │  ├─ calendar.svg
│  │  ├─ clock-circle.svg
│  │  ├─ Close-Small-Fill.svg
│  │  ├─ Cloud-Sun.svg
│  │  ├─ dog.svg
│  │  ├─ Icon.svg
│  │  ├─ logo.svg
│  │  ├─ Moon-Stars--Streamline-Solar.svg
│  │  ├─ night.svg
│  │  ├─ pet-paw.svg
│  │  ├─ phone.svg
│  │  ├─ Sun-Fog--Streamline-Solar.svg
│  │  ├─ sun-fog.svg
│  │  └─ user.svg
│  │
│  ├─ libs/
│  │  └─ dayjs.js             # biblioteca/utilitário dayjs
│  │
│  ├─ modules/
│  │  ├─ form/
│  │  │  ├─ date-change.js    # lida com mudança da data (#data) no modal
│  │  │  ├─ hours-click.js    # interações de clique/seleção de hora
│  │  │  ├─ hours-load.js     # popula o <select> de horários disponíveis
│  │  │  ├─ mask-numbers.js   # máscara numérica (telefone)
│  │  │  ├─ open-modal.js     # abre/fecha o modal de agendamento
│  │  │  └─ submit.js         # submissão do formulário de agendamento
│  │  │
│  │  └─ schedules/
│  │     ├─ delete.js         # remoção de um agendamento existente
│  │     ├─ load.js           # busca e carrega agenda no DOM
│  │     ├─ show.js           # funções de renderização por período
│  │     └─ page-load.js      # bootstrap inicial da página (carrega dia atual)
│  │
│  ├─ services/
│  │  ├─ api-config.js        # BASE_URL/config da API
│  │  ├─ fetch-schedule-by-day.js # GET /schedules?date=...
│  │  ├─ schedule-delete.js   # DELETE /schedules/:id
│  │  └─ schedule-new.js      # POST /schedules
│  │
│  ├─ styles/
│  │  ├─ global.css
│  │  ├─ index.css
│  │  ├─ inputs.css
│  │  ├─ modal.css
│  │  ├─ responsive.css
│  │  └─ schedule.css
│  │
│  ├─ utils/
│  │  └─ opening-hours.js     # configuração/faixas de horários
│  │
│  └─ main.js                 # ponto de entrada JS
│
├─ index.html
├─ server.json                # (opcional) base para json-server
├─ package.json
├─ package-lock.json
├─ webpack.config.js
├─ .gitignore
└─ dist/                      # (gerado no build)

```

---

## 🚀 Como rodar

### 1) Clonar e instalar dependências

```bash
git clone <url-do-repo>
cd petshop
npm install
```

### 2) Subir o front (dev)

Se estiver usando **webpack-dev-server**:

```bash
npm run dev
# acesse http://localhost:3000 (ou a porta configurada)
```

### 3) Subir API fake (opcional)

Se já existir `server.json` na raiz, use **json-server**:

```bash
# Instale (dev ou global)
npm i -D json-server
# ou: npm i -g json-server

# Rode a API
npx json-server --watch server.json --port 3000
# endpoint base: http://localhost:3000
```

Dica: você pode criar um script no `package.json`:

```json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "server": "json-server --watch server.json --port 3333"
  }
}
```

*(Adicione `concurrently` se usar `dev:all`: `npm i -D concurrently`.)*

---

## 🔌 Integração com API (exemplo)

### Estrutura de um agendamento

```json
{
  "id": "1755291007157",
  "username": "Bruno",
  "petname": "Tom",
  "cleanedNumber": "11940028922",
  "serviceDescription": "Banho e Tosa",
  "when": "2025-08-15T21:00:00.000Z"
},
```

### Endpoints (json-server)

- `GET /schedules?date=YYYY-MM-DD` → lista do dia
- `POST /schedules` → cria
- `DELETE /schedules/:id` → remove
- `PUT /schedules/:id` → atualiza

### Exemplo simples de serviço (`js/services/fetch-schedule-by-day.js`)

```js
const BASE_URL = 'http://localhost:3000';

export async function fetchScheduleByDay({ date }) {
  const res = await fetch(`${BASE_URL}/schedules?date=${date}`);
  if (!res.ok) throw new Error('Falha ao buscar agendamentos');
  return res.json();
}
```

---

## 🧩 Principais IDs/Classes no DOM

- **Filtro de data do topo:** `#schedule-date`
- **Listas por período:**
  - `#schedules-morning`
  - `#schedules-afternoon`
  - `#schedules-night`
- **Modal:** `.modal` (usa `.disabled` para ocultar)
- **Campos do modal:**
  - `#tutorName`, `#petName`, `#phoneNumber`, `#description`
  - Data: `#data` dentro de `.input-wrapper.date-only`
  - Hora (select): `#modal-time` dentro de `.input-wrapper.hours-available`

---

## 🧠 Lógica de períodos (sugestão)

```js
function bucketByHour(timeStr) {
  const [h] = timeStr.split(':').map(Number);
  if (h >= 9 && h < 12) return 'schedules-morning';
  if (h >= 13 && h < 19) return 'schedules-afternoon';
  return 'schedules-night';
}
```

---

## 🎨 Design & Responsividade

- **Tokens (CSS Variables)** em `css/global.css` (`:root`) para: cores, tipografia e presets
- **Estados de foco/hover** em `css/inputs.css`
- **Layout do modal/agenda** em `css/modal.css` e `css/schedules.css`
- **Breakpoints** em `css/responsive.css`:
  - `@media (max-width: 1024px)` — **tablet**
  - `@media (max-width: 768px)` — **mobile**
  - `@media (max-width: 480px)` — **small phones**

---


**Feito com ♥ para agilizar o dia da sua clínica/pet shop.**

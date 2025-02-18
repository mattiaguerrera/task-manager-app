
# Guida al Setup e Build del Progetto

## Prerequisiti

- [Node.js](https://nodejs.org/) e npm installati
- (Opzionale) [Sass](https://sass-lang.com/) per compilare file SCSS in CSS

---

## 1. Installazione delle Dipendenze

Se il progetto possiede già un file `package.json`, esegui:

```bash
npm install
```

Se non hai ancora un file `package.json`, crealo e installa TypeScript come dipendenza di sviluppo:

```bash
npm init -y
npm install typescript --save-dev
```

---

## 2. Configurazione di TypeScript

Crea il file di configurazione `tsconfig.json` eseguendo:

```bash
npx tsc --init
```

---

## 3. Compilazione del Progetto

### Compila TypeScript in JavaScript

```bash
npx tsc
```

### Compila SCSS in CSS (se utilizzi Sass)

Se Sass non è installato, aggiungilo globalmente:

```bash
npm install -g sass
```

Compila il file SCSS (ad esempio `src/style.scss`) in CSS nella cartella di destinazione (`dist/style.css`):

```bash
npx sass src/style.scss dist/style.css
```

Oppure, se hai definito uno script di build nel tuo `package.json`, eseguilo:

```bash
npm run build
```

---

## 4. Avvio del Server Locale

Per testare l'applicazione nel browser, avvia un server locale.

### Utilizzando live-server

Installa live-server globalmente (se non è già installato):

```bash
npm install -g live-server
```

Avvia il server:

```bash
live-server dist
```

### Oppure utilizzando http-server

Installa http-server globalmente:

```bash
npm install -g http-server
```

Avvia il server (l'opzione `-o` apre automaticamente il browser):

```bash
http-server ./dist -o
```

---

## 5. Pulizia e Rebuild

Per rimuovere le cartelle di build e le dipendenze, quindi ricostruire il progetto:

```bash
rm -rf ./dist ./node_modules
npx tsc
npx sass src/style.scss dist/style.css
npm run build
```


### LANCIA IL PROGETTO SU FIREFOX
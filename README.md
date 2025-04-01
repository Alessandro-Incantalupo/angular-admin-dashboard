
# 🧠 Angular Admin Dashboard – Developer Notes (for Notion)

## ✅ Step 1: Bootstrapping & App Configuration

### ✅ What this part of the app does
- Boots the app with **standalone APIs** — no `AppModule` needed
- All global providers (routing, HTTP, DI tokens, animations) are set in `app.config.ts`

---

### 💡 Why it’s important in Angular
- Angular v15+ supports **standalone components and applications**
- This makes apps more **tree-shakable**, **lightweight**, and **modular**
- Shows you're using **modern Angular best practices**

---

### 🧠 What I applied
- Used `bootstrapApplication()` in `main.ts`
- Registered routing, HTTP, animations, PrimeNG, and Angular SVG Icon via DI
- Introduced a global token `APP_INFO` from `package.json`

---

### 🔧 Code Snippet

```ts
// main.ts
bootstrapApplication(AppComponent, appConfig);
```

```ts
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideAnimationsAsync(),
    providePrimeNG(),
    provideAngularSvgIcon(),
    { provide: APP_INFO, useValue: packageJson },
  ]
};
```

---

### 🗣️ How I’d explain this in an interview:

> “I'm using the latest standalone approach from Angular 15+, so instead of relying on an `AppModule`, my app bootstraps directly via `main.ts`. All global providers like routing, HTTP, and third-party libraries are configured in `app.config.ts`.
>
> This gives me a cleaner, tree-shakable app with fewer dependencies — and it signals I’m keeping up with modern Angular best practices.”

---

### 📝 Reflection Questions
- Do I understand the difference between module-based and standalone bootstrapping?
- Could I add or remove a provider without breaking anything?
- Can I explain this setup confidently in 1–2 sentences?

---

More steps coming soon...

---

# 📘 README.md

## Angular Admin Dashboard 🚀

A modern Angular admin dashboard built with:

- ✅ Standalone Components & App Config
- ✅ Lazy Loaded Routes & Components
- ✅ TailwindCSS + PrimeNG for clean UI
- ✅ Signals for Reactive State
- ✅ Modern DI using `inject()`
- ✅ Scalable project structure: `core/`, `shared/`, `features/`, `layouts/`

---

### 💡 Tech Stack

- Angular 19+
- Standalone API (no NgModules)
- Signals for reactive state
- TailwindCSS for styling
- PrimeNG component library
- SVG Icon system via `provideAngularSvgIcon`
- ESLint + Prettier
- PNPM + PostCSS

---

### 🗂️ Folder Structure (Inspired by Trajan's Enterprise Architecture)

```
src/
├── app/
│   ├── core/         # Singletons, guards, interceptors
│   ├── shared/       # Reusable components (buttons, etc.)
│   ├── layouts/      # App shell and layout templates
│   ├── features/     # Business logic split into modules (auth, profile, etc.)
│   ├── app.config.ts # App-wide providers
│   ├── app.routes.ts # Top-level routing
│   └── app.component.ts
├── assets/
├── styles.css
└── main.ts
```

---

### 📸 Screenshots & Demos

Coming soon...

---

### 🧠 Want to Learn More?

This project applies principles from:
- [Modern Angular (Manfred Steyer)](https://leanpub.com/modern-angular)
- [Enterprise Angular (Steyer)](https://leanpub.com/enterprise-angular)
- [Angular Experts Architecture Guide (Tomas Trajan)](https://angularexperts.io)

---

### 📦 Install & Run

```bash
pnpm install
pnpm start
```

---

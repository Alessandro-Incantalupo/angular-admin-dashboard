# ✅ Use Modern Angular Syntax

We're building with **Angular 17+** and embracing the new syntax and standalone mindset.

## 💡 Preferred Syntax

- `@if()` instead of `*ngIf`
- `@for()` instead of `*ngFor`
- `@defer()` for lazy rendering instead of manual loading states
- `inject(SomeService)` instead of constructor DI (where possible)
- `provideX()` in `app.config.ts` instead of `AppModule`
- `inject(Router)` over constructor injection (except in tests)
- `readonly mySignal = signal<Type>(initialValue)` for local state
- `readonly myInput = input<Type>()` instead of `@Input()`
- `readonly myOutput = output<Type>()` instead of `@Output()`
- `readonly myTable = viewChild<Table>(Table)` instead of `@ViewChild()`
- Use **SignalStore** for state management

---

## 🚫 Avoid

- Don't use legacy `@Input()`, `@Output()`, `@ViewChild()` in new code

# ReactPractice
Practica de react

### React en si
Son componentes que son secciones de codigo reusables.

### JSX JavaScript+XML

- Los modulos react se pueden llamar por id, en nuestro .tsx que tiene los elementos de react, se llama al DOM virtual y se le dice que elemento es por id.

#### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>app-practica</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### main.tsx
```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**<App />** es nuestro elemnto react por si solo. Y este esta siendo llamado por el tsx y el tsx lo llama nuestra pagina html

### Declarative UI vs Imperative UI (TypeScript Vs JavaScript)
El imperativo tenemos nuestro elemento html como un boton por ejemplo, por separado.

Despues tenemos nuestro codigo JavaScript el cual trae la constante que es el boton referenciado por id, una variable y una funcion que esta ligada al elemento que referenciamos por id.
```html
<button id = "boton"> count is 0</button>
```
```js
let count=0;
const boton = document.getElementById('boton');

boton.addEventListener('click',funcion(){
    count++;
    boton.textContent='count is '+count;
})
```

Es imperativo, porque vamos paso a paso diciendo que quermeos hacer.

En declarativo, declaramos la constante y en el mismo boton que declaramos como un boton, le asignamos una funcion inmediata que es lo que queremos que haga el boton.
```tsx
const [count,setCount]=useState(0)
<button onClick={()=>setCount(count+1)}>
    count is {count}
</button>
```

Al parecer, cada que se ejecuta la funcion, la pantalla entera se re-renderiza


#### Tailwind CSS
No tenemos que tener un css diferente por pagina, tenemos clases para los elementos html. Es parecido a bootstrap en el sentido de que declaramos clases para el estilo, pero es para estilo solamente. No controles de elementos html, como Bootsrap.

Se instala en vite con los siguientes comandos

```sh
npm install tailwindcss @tailwindcss/vite
```
y lo declaramos en vite.config.ts

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Y se importa asi en los css
```css
@import "tailwindcss";
```


# SUV

<p align="center">
<img src="https://github.com/fervillalbag/suv/blob/main/logo-suv.png?raw=true" height="90" />
</p>

**SUV** es un espacio que te permitira vender y/o comprar productos/servicios de manera segura. La premisa de la misma es evitar cualquier tipo de estafas, dificultad durante la transacción, veracidad del producto entre otros obstáculo que ocasiona una mala experiencia en la compra/venta.

Se prima la experiencia del comprador y/o vendedor y la seguridad al manipular el software. Esto nos permitiría recuperar la confianza de la venta en línea y acrecentar en mayor o menor medida la economía.

## Ramas

- staging -> pr en esta rama para todo
- main -> no tocar, esto esta corriendo en produccion

## Contribuidores

Por el momento, colaboradores que ayudan a revisar

- Fernando Villalba

## Estructura

| Path                     | Descripción |
| :----------------------- | :---------: |
| [deimos](apps/deimos/)   |  Frontend   |
| [yocasta](apps/yocasta/) |   Backend   |

## How to run locally

### Instalar las dependencias:

```bash
yarn # en la raiz
```

### Para iniciar el backend, ejecutar:

```bash
npx nx serve yocasta
# or
nx serve yocasta
```

### Para iniciar el frontend, ejecutar:

```bash
npx nx serve deimos
# or
nx serve deimos
```

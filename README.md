<p align="center">
<img src="https://github.com/fervillalbag/suv/blob/main/logo-suv.png?raw=true" height="90" />
</p>

**SUVAP** es un espacio que te permitira vender y comprar productos/servicios de manera segura. La premisa de la misma es evitar cualquier tipo de estafas, dificultades durante las transacciones, veracidad del producto, entre otros obstáculos que ocasionan una mala experiencia en la venta.

Se prima la experiencia del usuario y la seguridad al manipular el software. Esto nos permitiría recuperar la confianza de las compras en línea y acrecentar en mayor o menor medida la economía.

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

## Como correr en local

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

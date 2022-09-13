# SUV

Configurar la variable de entorno que se encuentra en el directorio /apps/dafne/.env.example

```
DATABASE_URL="postgresql://[user]:@localhost:5432/[database_name]"
JWT_SECRET_ID="some-secret-id"
```

Instalar todos los paquetes

```bash
## en la raíz
yarn
```

Ejecutar prisma encontrandóse en el path /apps/dafne

```bash
npx prisma migrate dev --name=init
npx prisma generate
```

Para arrancar el servidor

```bash
## en la raíz
nx serve dafne
```

Para arrancar el cliente

```bash
## en la raíz
nx serve bestla
```

Para inspeccionar/editar el código acceder al directorio apps

| Name   | Project |
| ------ | ------- |
| Bestla | Client  |
| Dafne  | Backend |

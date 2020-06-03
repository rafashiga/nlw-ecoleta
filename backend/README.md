<h1 align="center">
  <img src="../frontend/src/assets/img/logo.svg" alt="ecoleta logo">
</h1>

<h3 align="center">
<strong>Back-end</strong>
</h3>

<p align="center">
  <a href="#space_invader-technologies">Technologies</a> |
  <a href="#arrow_right-endpoint">Endpoint</a>
  <br>
  <br>
</p>

## :space_invader: Technologies

- express
- typescript
- knex.js
- sqlite
- cors

## :arrow_right: Endpoint

```bash
# items
[GET] http://localhost:3333/items

#points
[GET] http://localhost:3333/points?city=S%C3%A3o%20Paulo&uf=sp&items=1

[GET] http://localhost:3333/points/:id

[POST] http://localhost:3333/points
# body
{
	"name": "mercado 01",
	"email": "email@email.com",
	"whatsapp": "123456789",
	"latitude": -46.5435,
	"longitude": -35.4234,
	"city": "São Paulo",
	"uf": "sp",
	"items": [4, 2]
}
```

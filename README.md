# Microserviço de Catalogação de Velas de Day Trade
# Aplicação de Estratégias e Geração de Relatórios 



## Link da Api 
` http://catalog-env.dit82d6cgu.us-east-2.elasticbeanstalk.com/ `

### Requisitos

> Node.js

### Dev Build 
`$ npm run dev`
`$ yarn dev`


### Prod Build && run

`$ npm run prod`
`$ yarn prod`

### Tests 
- Unit : `$ npm run test` `$ yarn test`
- Integrated: `$ npm run integrated_test` `$ yarn integrated_test`

### Api Docs 
`$ npm run build_doc`
`$ yarn build_doc`

- Windows: ``$ npm run run_doc_windows`` ``$ yarn run_doc_windows``
- Linux: ``$ npm run run_doc_linux`` ``$ yarn run_doc_linux``

### Docker 

`docker-compose.yml` 
- Transpilado e Buildado para produção 
` $ docker compose up `


### Padrão de Projeto 

> REST like Service 

### Testes Unitários 

``` /service/tests  ```


### Input 

- O Serviço espera um JSON de entrada contendo um array de de velas catalogadas num determinado período. 
- Cada Vela possui uma cor, a qual o sistema ira utilizar para analisar as estratégias 
- Estratégias estão previamente cadastradas e serão validadas no array de velas inserido

- Exemplo: 
```json
    [
        { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "N" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" },
        { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "N" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" },
        { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" },
        { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" },
        { "cor": "G" }, { "cor": "G" }, { "cor": "G" }, { "cor": "R" }, { "cor": "N" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "R" }, { "cor": "G" }, { "cor": "R" },
        { "cor": "G" }, { "cor": "R" }, { "cor": "G" }, { "cor": "G" }, { "cor": "G" }
    ]
```
### Output 

- A api ira devolver todos os valores necessários para uma análise por estratégia validada

```json 
    [
        {
            "size": 130,
            "winRateFinal": 91.3,
            "winsBeforeFirstHit": 18,
            "winRateBetweenHits": [
                null,
                1,
                0
            ],
            "firstOrderWinRate": 60.87,
            "firstMgWinRate": 21.74,
            "secondMgWinRate": 8.7,
            "hitRate": 8.7,
            "winRateAfterHit": 100,
            "firstOrderWinRateAfterHit": 100,
            "firstMgWinRateAfterHit": 0,
            "secondMgWinRateAfterHit": 0,
            "hitAfterHit": 0,
            "fiveCandlesBeforeEachHit": [
                [
                    {
                        "_cor": 1
                    },
                    {
                        "_cor": 1
                    },
                    {
                        "_cor": 1
                    },
                    {
                        "_cor": 0
                    },
                    {
                        "_cor": 0
                    }
                ],
                [
                    {
                        "_cor": 0
                    },
                    {
                        "_cor": 0
                    },
                    {
                        "_cor": 0
                    },
                    {
                        "_cor": 1
                    },
                    {
                        "_cor": 2
                    }
                ]
            ]
        }
    ]
```





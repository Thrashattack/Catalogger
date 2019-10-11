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
    {
        [
            "1": "verde",
            "2": "vermelha,
            "3": "cinza",
            "...": ...,
            "100": "verde"
        ]
    } 
```
### Output 

- A api ira devolver todos os valores necessários para uma análise por estratégia validada

```json 
    {
        [
            "MHI": {
                "size": "100", 
                "winRateFinal": "91%", 
                "winRateBeforeFirstHit": "95%",
                "winRateBetweenHits": ["95%", "100%", "81%", "99%", "79%", "91%", "91%", "90%" ],
                "firstOrderWinRate:"66%",
                "firstMgWinRate ":"12%",
                "secondMgWinRate ":"15%",
                "hitRate": "9%",
                "winRateAfterHit":"100%",
                "firstOrderWinRateAfterHit:"66%",
                "firstMgWinRateAfterHit ":"12%",
                "secondMgWinRateAfterHit ":"15%",
                "hitAfterHit": "0%",
                "fiveCandlesBeforeEachHit": [
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ]
                                        ] 
                
            },
            "Estrategia 2": {
                "size": "100", 
                "winRateFinal": "91%", 
                "winRateBeforeFirstHit": "95%",
                "winRateBetweenHits": ["95%", "100%", "81%", "99%", "79%", "91%", "91%", "90%" ], 
                "firstOrderWinRate:"66%",
                "firstMgWinRate ":"12%",
                "secondMgWinRate ":"15%",
                "hitRate": "9%",
                "winRateAfterHit":"100%",
                "firstOrderWinRateAfterHit:"66%",
                "firstMgWinRateAfterHit ":"12%",
                "secondMgWinRateAfterHit ":"15%",
                "hitAfterHit": "0%",
                "fiveCandlesBeforeEachHit": [
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ]
                                        ] 
                
            },
            "Estrategia 3": {
                "size": "100",
                "winRateFinal": "91%",
                "winRateBeforeFirstHit": "95%",
                "winRateBetweenHits": ["95%", "100%", "81%", "99%", "79%", "91%", "91%", "90%" ],
                "firstOrderWinRate:"66%",
                "firstMgWinRate ":"12%",
                "secondMgWinRate ":"15%",
                "hitRate": "9%",
                "winRateAfterHit":"100%",
                "firstOrderWinRateAfterHit:"66%",
                "firstMgWinRateAfterHit ":"12%",
                "secondMgWinRateAfterHit ":"15%",
                "hitAfterHit": "0%",
                "fiveCandlesBeforeEachHit": [
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ],
                                                [ "verde ", "vermelha ", "verde ", "verde", "verde " ],
                                                [ "verde ", " verde", " vermelha", " vermelha", "vermelha " ],
                                                [ " vermelha", " verde", " vermelha", " vermelha", " vermelha" ]
                                        ] 
                
            },
        ]
    } 
```





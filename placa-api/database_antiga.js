const veiculos = [
    {
        "placa": "ODE2510",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1170.25"
    },
    {
        "placa": "PPC5431",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 578.35"
    },
    {
        "placa": "PJM6113",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 162.96"
    },
    {
        "placa": "OVK7900",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1191.66"
    },
    {
        "placa": "ODI9001",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 625.36"
    },
    {
        "placa": "GJX9280",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1055.00"
    },
    {
        "placa": "CVJ6688",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 367.80"
    },
    {
        "placa": "ODT4111",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1011.76"
    },
    {
        "placa": "QRD1911",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 459.20"
    },
    {
        "placa": "OYE3384",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1114.69"
    },
    {
        "placa": "MQI3733",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 747.76"
    },
    {
        "placa": "MTP9115",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 805.84"
    },
    {
        "placa": "MSZ3471",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 446.42"
    },
    {
        "placa": "ODA4357",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 46.91"
    },
    {
        "placa": "NYD7092",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1195.91"
    },
    {
        "placa": "LRL4891",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1063.92"
    },
    {
        "placa": "PPW3256",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 737.96"
    },
    {
        "placa": "PPY1001",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 247.41"
    },
    {
        "placa": "PWA6224",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 688.92"
    },
    {
        "placa": "LSE1695",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 104.41"
    },
    {
        "placa": "EJE5677",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 154.54"
    },
    {
        "placa": "HBL9124",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1089.45"
    },
    {
        "placa": "PPT7651",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 882.04"
    },
    {
        "placa": "NTB0219",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 613.03"
    },
    {
        "placa": "KQV2056",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 437.07"
    },
    {
        "placa": "OYK5217",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 767.22"
    },
    {
        "placa": "OYD7576",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 668.60"
    },
    {
        "placa": "ODK4343",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1073.10"
    },
    {
        "placa": "OYX4758",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 777.73"
    },
    {
        "placa": "MTK6939",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 419.20"
    },
    {
        "placa": "OVF9576",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1003.45"
    },
    {
        "placa": "ENP0573",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 695.17"
    },
    {
        "placa": "MSL0386",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1044.69"
    },
    {
        "placa": "OYK6852",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 231.43"
    },
    {
        "placa": "MQY6980",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 906.75"
    },
    {
        "placa": "ODQ7026",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 23.58"
    },
    {
        "placa": "QOU5289",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 50.98"
    },
    {
        "placa": "PPP5844",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 143.98"
    },
    {
        "placa": "MPP7123",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 258.14"
    },
    {
        "placa": "ODP9783",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 167.79"
    },
    {
        "placa": "QPE1764",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 776.99"
    },
    {
        "placa": "JSV4493",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 691.88"
    },
    {
        "placa": "LQT5979",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 692.93"
    },
    {
        "placa": "OAU0530",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 789.91"
    },
    {
        "placa": "MTZ0181",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1189.70"
    },
    {
        "placa": "QPL9771",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 318.27"
    },
    {
        "placa": "PPT7058",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 488.85"
    },
    {
        "placa": "PPK6012",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 431.08"
    },
    {
        "placa": "PPN1470",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 4.53"
    },
    {
        "placa": "QQD3031",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 55.43"
    },
    {
        "placa": "PPQ1223",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1018.02"
    },
    {
        "placa": "OXG8134",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 69.00"
    },
    {
        "placa": "OYK9944",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 14.43"
    },
    {
        "placa": "OXJ7818",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 160.03"
    },
    {
        "placa": "MSN2034",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 54.81"
    },
    {
        "placa": "PPW9995",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 805.26"
    },
    {
        "placa": "ODF4990",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 240.92"
    },
    {
        "placa": "MTS5557",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 570.16"
    },
    {
        "placa": "MRS6971",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1101.46"
    },
    {
        "placa": "PPI7056",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 56.92"
    },
    {
        "placa": "QOO5925",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 986.40"
    },
    {
        "placa": "ODD0831",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 813.03"
    },
    {
        "placa": "PPR5071",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 54.95"
    },
    {
        "placa": "MTE1664",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 320.95"
    },
    {
        "placa": "PPN7168",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 219.77"
    },
    {
        "placa": "MRG9742",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 101.24"
    },
    {
        "placa": "KPQ3389",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 674.64"
    },
    {
        "placa": "PPF4609",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 938.49"
    },
    {
        "placa": "PPZ3525",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 179.90"
    },
    {
        "placa": "PPS4219",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1191.78"
    },
    {
        "placa": "QRD8410",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 640.38"
    },
    {
        "placa": "OYD1047",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1137.40"
    },
    {
        "placa": "OVK3931",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 841.72"
    },
    {
        "placa": "MRZ7550",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 165.81"
    },
    {
        "placa": "MQC8984",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 284.89"
    },
    {
        "placa": "EYO3502",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 622.81"
    },
    {
        "placa": "MRO2620",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 828.80"
    },
    {
        "placa": "KVW4909",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 565.03"
    },
    {
        "placa": "BYB9009",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 329.60"
    },
    {
        "placa": "OYK9672",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 780.16"
    },
    {
        "placa": "MTX3192",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 938.10"
    },
    {
        "placa": "MSF1046",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 282.30"
    },
    {
        "placa": "OYH9528",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 611.42"
    },
    {
        "placa": "OVI1346",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 635.57"
    },
    {
        "placa": "KSV3325",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 754.76"
    },
    {
        "placa": "OYG1026",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1186.32"
    },
    {
        "placa": "JSB6303",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 504.24"
    },
    {
        "placa": "PPA5809",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 938.96"
    },
    {
        "placa": "MTZ7571",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1090.86"
    },
    {
        "placa": "PPU0879",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 21.63"
    },
    {
        "placa": "PPJ0865",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 44.13"
    },
    {
        "placa": "MPS4323",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 910.84"
    },
    {
        "placa": "MRP2989",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 250.33"
    },
    {
        "placa": "MQA9803",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 915.87"
    },
    {
        "placa": "LVA0109",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 603.23"
    },
    {
        "placa": "MTS0495",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 100.84"
    },
    {
        "placa": "QMQ1271",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 52.61"
    },
    {
        "placa": "OVH6633",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 540.57"
    },
    {
        "placa": "PPN6370",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 341.04"
    },
    {
        "placa": "PPJ8058",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 14.36"
    },
    {
        "placa": "MQM2157",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 657.45"
    },
    {
        "placa": "MRO9366",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 419.76"
    },
    {
        "placa": "OVF4168",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1145.69"
    },
    {
        "placa": "PPQ2277",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 991.63"
    },
    {
        "placa": "MTP5026",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1129.05"
    },
    {
        "placa": "MRQ9317",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 76.65"
    },
    {
        "placa": "OZH4614",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 215.16"
    },
    {
        "placa": "PPJ3352",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 360.46"
    },
    {
        "placa": "MTJ5833",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 707.51"
    },
    {
        "placa": "PPW4661",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1153.47"
    },
    {
        "placa": "GMF8421",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 960.40"
    },
    {
        "placa": "PPW1889",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 793.13"
    },
    {
        "placa": "PPW2110",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 663.69"
    },
    {
        "placa": "PPP4907",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 460.85"
    },
    {
        "placa": "ODS3662",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 786.10"
    },
    {
        "placa": "PPH6390",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 51.75"
    },
    {
        "placa": "MSD2843",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 190.43"
    },
    {
        "placa": "PPX5162",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 292.62"
    },
    {
        "placa": "ODT9984",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 444.54"
    },
    {
        "placa": "MSA3310",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 107.51"
    },
    {
        "placa": "OCZ5887",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 324.08"
    },
    {
        "placa": "OYJ7768",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 37.45"
    },
    {
        "placa": "PPO4739",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 519.82"
    },
    {
        "placa": "PPF3006",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 988.42"
    },
    {
        "placa": "PPS9591",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1075.00"
    },
    {
        "placa": "ODO9891",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 143.84"
    },
    {
        "placa": "PPY2924",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 81.46"
    },
    {
        "placa": "MSR1353",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 265.53"
    },
    {
        "placa": "ODG5904",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 428.40"
    },
    {
        "placa": "MTY4028",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 759.22"
    },
    {
        "placa": "MTZ3256",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 537.35"
    },
    {
        "placa": "MST8531",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 759.11"
    },
    {
        "placa": "OVI9976",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1197.51"
    },
    {
        "placa": "ODR2138",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1178.96"
    },
    {
        "placa": "ODM7278",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1173.36"
    },
    {
        "placa": "OYI8894",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 221.03"
    },
    {
        "placa": "MTY7073",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 783.97"
    },
    {
        "placa": "PPX4854",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 615.98"
    },
    {
        "placa": "MSB1096",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 909.61"
    },
    {
        "placa": "JEG8603",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 83.47"
    },
    {
        "placa": "ODB7841",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 207.40"
    },
    {
        "placa": "OVF6363",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1046.68"
    },
    {
        "placa": "ODR3127",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 102.24"
    },
    {
        "placa": "BAX9016",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 197.75"
    },
    {
        "placa": "MTC6112",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 767.65"
    },
    {
        "placa": "KZG4329",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 744.38"
    },
    {
        "placa": "PPP7670",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 998.81"
    },
    {
        "placa": "ODS2955",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1153.79"
    },
    {
        "placa": "PPZ9148",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 912.86"
    },
    {
        "placa": "MSZ8797",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 203.58"
    },
    {
        "placa": "OYJ6834",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 142.47"
    },
    {
        "placa": "ODF5623",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 361.43"
    },
    {
        "placa": "ODT6208",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 61.14"
    },
    {
        "placa": "ODS2590",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 48.79"
    },
    {
        "placa": "MQI9275",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 512.25"
    },
    {
        "placa": "ODG3176",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 195.33"
    },
    {
        "placa": "MTY0046",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 101.05"
    },
    {
        "placa": "OCZ6222",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 49.55"
    },
    {
        "placa": "MSB4766",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1009.76"
    },
    {
        "placa": "ODQ0381",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 715.91"
    },
    {
        "placa": "LQT4070",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 991.62"
    },
    {
        "placa": "ODT6181",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 32.38"
    },
    {
        "placa": "MRY7465",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 795.03"
    },
    {
        "placa": "ODE6371",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 249.46"
    },
    {
        "placa": "PPP7674",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 971.52"
    },
    {
        "placa": "OYJ3924",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 503.77"
    },
    {
        "placa": "MTC0626",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 409.24"
    },
    {
        "placa": "ODS4396",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 398.36"
    },
    {
        "placa": "OVE1860",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 710.00"
    },
    {
        "placa": "PPX0155",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 293.29"
    },
    {
        "placa": "ODN8932",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 505.61"
    },
    {
        "placa": "QRD3012",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 448.10"
    },
    {
        "placa": "PPV2861",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 0.11"
    },
    {
        "placa": "MQX8097",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 536.70"
    },
    {
        "placa": "GJZ8809",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 712.04"
    },
    {
        "placa": "MTS7362",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1055.75"
    },
    {
        "placa": "MST9967",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 318.19"
    },
    {
        "placa": "PPW0076",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 796.64"
    },
    {
        "placa": "ODG4873",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 336.09"
    },
    {
        "placa": "FDA4010",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 930.08"
    },
    {
        "placa": "ODT6092",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1048.10"
    },
    {
        "placa": "MSE9185",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 429.23"
    },
    {
        "placa": "MTX0171",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1073.94"
    },
    {
        "placa": "KET5921",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 275.70"
    },
    {
        "placa": "OYF9110",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 984.41"
    },
    {
        "placa": "QRC6770",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1155.72"
    },
    {
        "placa": "PPY2852",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 834.55"
    },
    {
        "placa": "ODR3984",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 587.79"
    },
    {
        "placa": "ODT6140",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 734.60"
    },
    {
        "placa": "ODF1244",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 900.17"
    },
    {
        "placa": "ODT6164",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 988.44"
    },
    {
        "placa": "OCX7086",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 475.03"
    },
    {
        "placa": "ODP8769",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 561.89"
    },
    {
        "placa": "LPF1607",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 170.14"
    },
    {
        "placa": "MSW1014",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 427.07"
    },
    {
        "placa": "OCW3526",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 902.85"
    },
    {
        "placa": "ODT6153",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 413.45"
    },
    {
        "placa": "ODG6312",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 714.09"
    },
    {
        "placa": "PPJ6812",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1009.56"
    },
    {
        "placa": "MSF9531",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 31.47"
    },
    {
        "placa": "MSK5187",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1022.45"
    },
    {
        "placa": "PPL9177",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 711.12"
    },
    {
        "placa": "PPW2782",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 303.72"
    },
    {
        "placa": "EOY0572",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 256.22"
    },
    {
        "placa": "ODM9447",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 113.29"
    },
    {
        "placa": "PPB0869",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1149.69"
    },
    {
        "placa": "OCY9703",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 862.61"
    },
    {
        "placa": "ODH8048",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1012.87"
    },
    {
        "placa": "GTT0358",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 353.96"
    },
    {
        "placa": "PPW7521",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 140.89"
    },
    {
        "placa": "ODG4038",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1034.05"
    },
    {
        "placa": "PPW7578",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1124.59"
    },
    {
        "placa": "ODF8239",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 386.14"
    },
    {
        "placa": "PPA7949",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 197.81"
    },
    {
        "placa": "PPW7559",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1067.53"
    },
    {
        "placa": "MSM2996",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 381.61"
    },
    {
        "placa": "PPP7010",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 503.49"
    },
    {
        "placa": "MQW8039",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 278.32"
    },
    {
        "placa": "PPX7594",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 542.87"
    },
    {
        "placa": "QRC0469",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 754.09"
    },
    {
        "placa": "ODO0659",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 721.52"
    },
    {
        "placa": "ODQ1051",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 414.86"
    },
    {
        "placa": "MPK7245",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 946.96"
    },
    {
        "placa": "ODR2295",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 205.34"
    },
    {
        "placa": "PPP6749",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 223.91"
    },
    {
        "placa": "ODR4149",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1026.22"
    },
    {
        "placa": "ODS6243",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1110.33"
    },
    {
        "placa": "ODI1892",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 895.70"
    },
    {
        "placa": "PPH2864",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1144.82"
    },
    {
        "placa": "OYK7355",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 380.01"
    },
    {
        "placa": "ODT6073",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1164.09"
    },
    {
        "placa": "MTN9522",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 817.98"
    },
    {
        "placa": "PPC9486",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 700.26"
    },
    {
        "placa": "QPU5730",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 484.97"
    },
    {
        "placa": "ODR4042",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 661.70"
    },
    {
        "placa": "PPW7557",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 975.27"
    },
    {
        "placa": "PPC6864",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 140.19"
    },
    {
        "placa": "PPW0032",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1174.48"
    },
    {
        "placa": "PPP6110",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 848.16"
    },
    {
        "placa": "OVE5896",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 873.12"
    },
    {
        "placa": "PPA1379",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 757.81"
    },
    {
        "placa": "PPX9984",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 699.50"
    },
    {
        "placa": "QNR5824",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 434.85"
    },
    {
        "placa": "ODQ2909",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 78.03"
    },
    {
        "placa": "ODT6163",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 35.43"
    },
    {
        "placa": "MSF3995",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 45.78"
    },
    {
        "placa": "ODP1456",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 530.98"
    },
    {
        "placa": "ODP4433",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1107.64"
    },
    {
        "placa": "NSA2861",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 705.47"
    },
    {
        "placa": "OKO0458",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 947.41"
    },
    {
        "placa": "ODO7980",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 554.59"
    },
    {
        "placa": "PPV9051",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 671.56"
    },
    {
        "placa": "PPP7519",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 636.71"
    },
    {
        "placa": "KGD4016",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1168.75"
    },
    {
        "placa": "ODO4239",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 275.50"
    },
    {
        "placa": "OYF4061",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 720.77"
    },
    {
        "placa": "OYF2481",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 232.19"
    },
    {
        "placa": "PPF9168",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1028.35"
    },
    {
        "placa": "MQR8619",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 253.58"
    },
    {
        "placa": "MTX3205",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 545.78"
    },
    {
        "placa": "HAK9425",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 159.99"
    },
    {
        "placa": "MSD0247",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 904.67"
    },
    {
        "placa": "ODR8565",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 30.59"
    },
    {
        "placa": "QRD5027",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 914.74"
    },
    {
        "placa": "PPW4039",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 608.27"
    },
    {
        "placa": "MQU6023",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1142.82"
    },
    {
        "placa": "PPP3628",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 642.16"
    },
    {
        "placa": "QRB5219",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 358.86"
    },
    {
        "placa": "MKA7333",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 155.04"
    },
    {
        "placa": "GFU9590",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 904.67"
    },
    {
        "placa": "QRC6790",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1060.24"
    },
    {
        "placa": "ODT6251",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 351.45"
    },
    {
        "placa": "OYG5768",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1115.20"
    },
    {
        "placa": "OVL9783",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 254.02"
    },
    {
        "placa": "MTB8406",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 866.85"
    },
    {
        "placa": "MSI5428",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 211.01"
    },
    {
        "placa": "HOE1200",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1111.51"
    },
    {
        "placa": "ODO3058",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 857.18"
    },
    {
        "placa": "PPB4748",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1103.55"
    },
    {
        "placa": "ODF0135",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 517.28"
    },
    {
        "placa": "ODT6173",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 745.33"
    },
    {
        "placa": "ODH1374",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 811.63"
    },
    {
        "placa": "MST4686",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 503.74"
    },
    {
        "placa": "ODR4769",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 821.66"
    },
    {
        "placa": "ODG3967",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 818.83"
    },
    {
        "placa": "LMA4241",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1108.52"
    },
    {
        "placa": "MTZ3549",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 174.60"
    },
    {
        "placa": "ALZ9782",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 692.63"
    },
    {
        "placa": "PPE0807",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1089.34"
    },
    {
        "placa": "PPX8345",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 64.69"
    },
    {
        "placa": "ODT6074",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 884.21"
    },
    {
        "placa": "PPX0700",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 902.64"
    },
    {
        "placa": "MTP3805",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 353.75"
    },
    {
        "placa": "MQK4229",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 345.01"
    },
    {
        "placa": "ODS4852",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 252.63"
    },
    {
        "placa": "PPO7500",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 171.66"
    },
    {
        "placa": "MRN1024",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 20.04"
    },
    {
        "placa": "PPC5281",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 692.77"
    },
    {
        "placa": "ODH0321",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 119.50"
    },
    {
        "placa": "MQZ2664",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 968.35"
    },
    {
        "placa": "MTU0478",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 477.66"
    },
    {
        "placa": "EZV8786",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 879.96"
    },
    {
        "placa": "PPP7406",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1196.87"
    },
    {
        "placa": "FSH5743",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 583.58"
    },
    {
        "placa": "MSO3806",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 979.38"
    },
    {
        "placa": "PPL5787",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1115.31"
    },
    {
        "placa": "QRC0461",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 565.03"
    },
    {
        "placa": "ODR1528",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 488.71"
    },
    {
        "placa": "PPP7808",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 580.89"
    },
    {
        "placa": "PPP8154",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 490.38"
    },
    {
        "placa": "PPX9986",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 512.41"
    },
    {
        "placa": "MSI3690",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 990.57"
    },
    {
        "placa": "OYJ8571",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 136.64"
    },
    {
        "placa": "ODS2624",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1066.09"
    },
    {
        "placa": "PPX4010",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 797.67"
    },
    {
        "placa": "PPM2187",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 240.96"
    },
    {
        "placa": "ODF5652",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 823.86"
    },
    {
        "placa": "ODT6064",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 234.19"
    },
    {
        "placa": "JQX6295",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 215.41"
    },
    {
        "placa": "MRL9688",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 790.52"
    },
    {
        "placa": "MRR1187",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1060.43"
    },
    {
        "placa": "MSU1292",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 984.83"
    },
    {
        "placa": "MSN9329",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1025.48"
    },
    {
        "placa": "PPU7496",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 437.11"
    },
    {
        "placa": "PPB2418",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 47.21"
    },
    {
        "placa": "EFV0889",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 828.05"
    },
    {
        "placa": "ODS7423",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 274.85"
    },
    {
        "placa": "ODR0863",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 220.15"
    },
    {
        "placa": "MSA1557",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 840.10"
    },
    {
        "placa": "ODT6462",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1124.29"
    },
    {
        "placa": "MTD4979",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 181.00"
    },
    {
        "placa": "NZF9172",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 612.89"
    },
    {
        "placa": "OCZ1443",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 687.95"
    },
    {
        "placa": "PPU7362",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 558.26"
    },
    {
        "placa": "ODT6482",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1053.74"
    },
    {
        "placa": "PPG1685",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 601.85"
    },
    {
        "placa": "MTH8727",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 967.50"
    },
    {
        "placa": "ODF4543",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1052.83"
    },
    {
        "placa": "MSK7666",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 986.45"
    },
    {
        "placa": "KXX5595",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 514.97"
    },
    {
        "placa": "OYF6247",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 550.00"
    },
    {
        "placa": "PPP3410",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 320.89"
    },
    {
        "placa": "MPI7944",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 199.08"
    },
    {
        "placa": "MQM8730",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1008.45"
    },
    {
        "placa": "PPW2922",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 219.98"
    },
    {
        "placa": "MSE9818",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 677.56"
    },
    {
        "placa": "EZR1163",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 24.70"
    },
    {
        "placa": "PPP7137",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 380.89"
    },
    {
        "placa": "OYK4286",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 361.15"
    },
    {
        "placa": "PPY4766",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 600.44"
    },
    {
        "placa": "PPU6946",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 261.90"
    },
    {
        "placa": "PPT5522",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 734.87"
    },
    {
        "placa": "MSE3200",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 198.81"
    },
    {
        "placa": "OYE8992",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 813.25"
    },
    {
        "placa": "MQK1972",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1047.53"
    },
    {
        "placa": "ODS3207",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 919.51"
    },
    {
        "placa": "MSL8231",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 667.42"
    },
    {
        "placa": "PPO3623",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1013.07"
    },
    {
        "placa": "OVJ2050",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1123.95"
    },
    {
        "placa": "OVL4336",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 569.52"
    },
    {
        "placa": "MRD4897",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 592.87"
    },
    {
        "placa": "PPL5527",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1114.31"
    },
    {
        "placa": "FLM6393",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 14.76"
    },
    {
        "placa": "PPL8583",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1062.13"
    },
    {
        "placa": "GDL4498",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 135.44"
    },
    {
        "placa": "PPO2122",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 487.93"
    },
    {
        "placa": "MSL5551",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 642.66"
    },
    {
        "placa": "OYE8685",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 309.05"
    },
    {
        "placa": "AKE0129",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1163.95"
    },
    {
        "placa": "MSP0900",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 882.84"
    },
    {
        "placa": "PPX4024",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 853.94"
    },
    {
        "placa": "PPW2480",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 97.62"
    },
    {
        "placa": "QRB8654",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 905.57"
    },
    {
        "placa": "GAY6020",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 497.25"
    },
    {
        "placa": "PPO8297",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 95.39"
    },
    {
        "placa": "ODD9364",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 997.54"
    },
    {
        "placa": "PPD0778",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1014.40"
    },
    {
        "placa": "PPY4248",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 118.32"
    },
    {
        "placa": "MTV8249",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 932.04"
    },
    {
        "placa": "ODQ9369",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 210.50"
    },
    {
        "placa": "ODR3706",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 913.54"
    },
    {
        "placa": "ODG9132",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 366.70"
    },
    {
        "placa": "PPP7505",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 472.06"
    },
    {
        "placa": "ODF4532",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1131.09"
    },
    {
        "placa": "MTZ9247",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 671.44"
    },
    {
        "placa": "MSA8486",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 864.95"
    },
    {
        "placa": "PPW6102",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1077.25"
    },
    {
        "placa": "MTU0475",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 238.97"
    },
    {
        "placa": "MTW3591",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1188.89"
    },
    {
        "placa": "OYK7731",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 159.14"
    },
    {
        "placa": "MTT0954",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 551.97"
    },
    {
        "placa": "MSA7262",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 492.77"
    },
    {
        "placa": "OYH9080",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 221.46"
    },
    {
        "placa": "ODR5917",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 849.03"
    },
    {
        "placa": "MTU0486",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 286.80"
    },
    {
        "placa": "PPP9428",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 40.14"
    },
    {
        "placa": "QOY7508",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 682.78"
    },
    {
        "placa": "PPP6659",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 445.45"
    },
    {
        "placa": "OVL4669",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 923.82"
    },
    {
        "placa": "PPI4806",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 637.65"
    },
    {
        "placa": "MPW6181",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1179.83"
    },
    {
        "placa": "MQV6554",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 191.49"
    },
    {
        "placa": "QOL8801",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 592.04"
    },
    {
        "placa": "QRD1552",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 838.93"
    },
    {
        "placa": "OYJ9740",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 924.86"
    },
    {
        "placa": "ODG1753",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 623.45"
    },
    {
        "placa": "MSV2120",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 463.47"
    },
    {
        "placa": "MTY0011",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1126.20"
    },
    {
        "placa": "MTK3992",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 439.71"
    },
    {
        "placa": "OYH9045",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 890.50"
    },
    {
        "placa": "PPZ2997",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1155.82"
    },
    {
        "placa": "QRD2983",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1164.52"
    },
    {
        "placa": "PPM7375",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 488.12"
    },
    {
        "placa": "ODA4892",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 228.66"
    },
    {
        "placa": "OYD0026",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 86.77"
    },
    {
        "placa": "MTG5739",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 244.12"
    },
    {
        "placa": "ODS2015",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 676.06"
    },
    {
        "placa": "MRG6866",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 259.39"
    },
    {
        "placa": "MQL2952",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 860.14"
    },
    {
        "placa": "MTE5140",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 816.59"
    },
    {
        "placa": "PPX4021",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 919.05"
    },
    {
        "placa": "MSN9341",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 641.46"
    },
    {
        "placa": "PPA8526",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 517.75"
    },
    {
        "placa": "FOU9480",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 233.86"
    },
    {
        "placa": "PPX4040",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 692.05"
    },
    {
        "placa": "MTT3856",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1010.07"
    },
    {
        "placa": "JPW1666",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1034.70"
    },
    {
        "placa": "PPF8901",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1128.73"
    },
    {
        "placa": "ODT7146",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 985.16"
    },
    {
        "placa": "MSN8551",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 79.85"
    },
    {
        "placa": "ODP4215",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 263.35"
    },
    {
        "placa": "PPP9250",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1099.74"
    },
    {
        "placa": "ODS2861",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 67.44"
    },
    {
        "placa": "ODM8657",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 365.05"
    },
    {
        "placa": "ODO8346",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 423.58"
    },
    {
        "placa": "PPZ3386",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 987.34"
    },
    {
        "placa": "PPX0696",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 885.61"
    },
    {
        "placa": "MRU1598",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 687.06"
    },
    {
        "placa": "PPG3724",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 36.98"
    },
    {
        "placa": "MTX1539",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 860.51"
    },
    {
        "placa": "DKB8587",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1031.67"
    },
    {
        "placa": "MSC9142",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 192.74"
    },
    {
        "placa": "PPZ9146",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 345.95"
    },
    {
        "placa": "ODD3296",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 648.54"
    },
    {
        "placa": "ODS6880",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 651.03"
    },
    {
        "placa": "PPW7570",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 924.75"
    },
    {
        "placa": "QQJ5943",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 389.63"
    },
    {
        "placa": "QRB9955",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 617.94"
    },
    {
        "placa": "ODG5452",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 437.12"
    },
    {
        "placa": "PPA3833",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 280.49"
    },
    {
        "placa": "ODO1303",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 411.28"
    },
    {
        "placa": "LOQ5504",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1160.96"
    },
    {
        "placa": "OVF6315",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 874.63"
    },
    {
        "placa": "ODT6068",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 704.90"
    },
    {
        "placa": "PPE0122",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 270.75"
    },
    {
        "placa": "QQG7579",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1093.80"
    },
    {
        "placa": "PPZ9997",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 339.55"
    },
    {
        "placa": "PPP6853",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 113.39"
    },
    {
        "placa": "QRC0811",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 83.67"
    },
    {
        "placa": "DQF5959",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 578.95"
    },
    {
        "placa": "PPL5238",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1091.56"
    },
    {
        "placa": "MPM5666",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 532.00"
    },
    {
        "placa": "PPZ0595",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 829.38"
    },
    {
        "placa": "QPG3610",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 982.33"
    },
    {
        "placa": "PPI7628",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 485.61"
    },
    {
        "placa": "PPS8274",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 738.47"
    },
    {
        "placa": "MQP9840",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 774.85"
    },
    {
        "placa": "JHS7566",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 649.52"
    },
    {
        "placa": "PPH7923",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1154.10"
    },
    {
        "placa": "PPV3999",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 469.88"
    },
    {
        "placa": "FSE3408",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 816.29"
    },
    {
        "placa": "PPT6253",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 670.50"
    },
    {
        "placa": "MSX6699",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 90.25"
    },
    {
        "placa": "QNN6738",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 418.86"
    },
    {
        "placa": "ODB9073",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 544.07"
    },
    {
        "placa": "ODN9224",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 884.62"
    },
    {
        "placa": "ODJ7768",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 862.08"
    },
    {
        "placa": "KLB5590",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 527.53"
    },
    {
        "placa": "MRO1351",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 518.31"
    },
    {
        "placa": "OYK5036",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 29.38"
    },
    {
        "placa": "MQQ6674",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 808.63"
    },
    {
        "placa": "ODF1587",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 41.32"
    },
    {
        "placa": "ODP0519",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 417.60"
    },
    {
        "placa": "PPX7639",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1163.83"
    },
    {
        "placa": "MVN3322",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 378.97"
    },
    {
        "placa": "MPP5590",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 848.11"
    },
    {
        "placa": "ODK4672",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 602.24"
    },
    {
        "placa": "PPW9332",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 600.55"
    },
    {
        "placa": "MSW1233",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 359.37"
    },
    {
        "placa": "QRD1576",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 190.58"
    },
    {
        "placa": "OVL3155",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 813.31"
    },
    {
        "placa": "MTL9713",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 56.64"
    },
    {
        "placa": "PPQ3307",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 769.31"
    },
    {
        "placa": "OYK7794",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 671.40"
    },
    {
        "placa": "ODE2467",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 866.63"
    },
    {
        "placa": "MTX2491",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 483.68"
    },
    {
        "placa": "OCZ6223",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 806.66"
    },
    {
        "placa": "MRW0022",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1183.67"
    },
    {
        "placa": "PPP5117",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 132.35"
    },
    {
        "placa": "EEF7005",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 207.48"
    },
    {
        "placa": "PPP6100",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 873.06"
    },
    {
        "placa": "KPT3218",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 363.95"
    },
    {
        "placa": "ODM6350",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 200.59"
    },
    {
        "placa": "BCD2302",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 734.87"
    },
    {
        "placa": "ODG6205",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1197.05"
    },
    {
        "placa": "KRQ3553",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 508.22"
    },
    {
        "placa": "PPR8167",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 693.70"
    },
    {
        "placa": "PPF8122",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 135.04"
    },
    {
        "placa": "PPW5169",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 912.92"
    },
    {
        "placa": "MTE1360",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 260.20"
    },
    {
        "placa": "OCV7476",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1178.63"
    },
    {
        "placa": "OVK3888",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 808.06"
    },
    {
        "placa": "PPZ9928",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 580.07"
    },
    {
        "placa": "MSY0488",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 617.15"
    },
    {
        "placa": "ODO8746",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1040.61"
    },
    {
        "placa": "PPW6229",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 332.80"
    },
    {
        "placa": "ODK7986",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 332.61"
    },
    {
        "placa": "ODK7987",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 785.34"
    },
    {
        "placa": "ODK7988",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1108.69"
    },
    {
        "placa": "QQR8453",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 829.86"
    },
    {
        "placa": "OCV2491",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 316.14"
    },
    {
        "placa": "MTA2065",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 78.56"
    },
    {
        "placa": "MRQ2842",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 798.33"
    },
    {
        "placa": "MSG8913",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1035.73"
    },
    {
        "placa": "EUV4667",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1049.84"
    },
    {
        "placa": "PPZ1213",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 469.72"
    },
    {
        "placa": "OYE0941",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 840.31"
    },
    {
        "placa": "ODE3198",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 203.36"
    },
    {
        "placa": "MSF0062",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 530.12"
    },
    {
        "placa": "OYE6786",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 801.14"
    },
    {
        "placa": "MTK8020",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1156.32"
    },
    {
        "placa": "MPQ7553",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1119.60"
    },
    {
        "placa": "ODN9810",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 377.50"
    },
    {
        "placa": "NZT9498",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 848.35"
    },
    {
        "placa": "ODT6061",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 271.52"
    },
    {
        "placa": "PPW7538",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1026.49"
    },
    {
        "placa": "OVH8499",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 725.31"
    },
    {
        "placa": "QRC9801",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 127.79"
    },
    {
        "placa": "QOU2489",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 708.27"
    },
    {
        "placa": "OYI5319",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 88.45"
    },
    {
        "placa": "PPV7264",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1014.12"
    },
    {
        "placa": "PPW7560",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 397.50"
    },
    {
        "placa": "ODT7242",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 722.39"
    },
    {
        "placa": "MPV2866",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 530.41"
    },
    {
        "placa": "MRR3239",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1071.45"
    },
    {
        "placa": "ODM8060",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 654.69"
    },
    {
        "placa": "MRD6023",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 45.56"
    },
    {
        "placa": "ODM0982",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 784.73"
    },
    {
        "placa": "PPD1306",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 340.84"
    },
    {
        "placa": "MSM2979",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 785.28"
    },
    {
        "placa": "QJK6374",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 481.86"
    },
    {
        "placa": "ODS5989",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1129.32"
    },
    {
        "placa": "OVF6271",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1140.54"
    },
    {
        "placa": "ODR5274",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 722.25"
    },
    {
        "placa": "MSZ3263",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 256.65"
    },
    {
        "placa": "MPR9390",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 237.38"
    },
    {
        "placa": "MPM7061",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1149.04"
    },
    {
        "placa": "OVH4128",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 550.63"
    },
    {
        "placa": "MSE9111",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 850.37"
    },
    {
        "placa": "ODM4994",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1108.61"
    },
    {
        "placa": "PPV8529",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 715.03"
    },
    {
        "placa": "MSG7196",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 390.55"
    },
    {
        "placa": "MRT6203",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 943.74"
    },
    {
        "placa": "PPX8891",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 935.21"
    },
    {
        "placa": "OVI5852",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 151.83"
    },
    {
        "placa": "MTG9026",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 420.59"
    },
    {
        "placa": "OYJ6978",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 726.97"
    },
    {
        "placa": "OVF0684",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 368.83"
    },
    {
        "placa": "FNP4495",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 119.14"
    },
    {
        "placa": "OVH0017",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1141.99"
    },
    {
        "placa": "MQS0330",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1050.75"
    },
    {
        "placa": "OYD8087",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1171.42"
    },
    {
        "placa": "OYE5236",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 576.80"
    },
    {
        "placa": "KXL1868",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 527.75"
    },
    {
        "placa": "ODR1531",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 469.72"
    },
    {
        "placa": "PPX8664",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 891.45"
    },
    {
        "placa": "ODS9896",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 913.21"
    },
    {
        "placa": "PPY5023",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 391.02"
    },
    {
        "placa": "OVK9741",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 969.23"
    },
    {
        "placa": "PPR1067",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 55.07"
    },
    {
        "placa": "ODT5253",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 515.49"
    },
    {
        "placa": "QRC5306",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 173.84"
    },
    {
        "placa": "MRF1160",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 67.34"
    },
    {
        "placa": "PPZ8402",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 405.98"
    },
    {
        "placa": "OPT5840",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 542.16"
    },
    {
        "placa": "PPN3181",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 576.73"
    },
    {
        "placa": "MTB6923",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1116.03"
    },
    {
        "placa": "PPA6634",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 332.31"
    },
    {
        "placa": "ODD1433",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1055.67"
    },
    {
        "placa": "ODP5721",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 698.69"
    },
    {
        "placa": "MRV4181",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 743.11"
    },
    {
        "placa": "MPJ4391",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 32.04"
    },
    {
        "placa": "MPJ5046",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1111.98"
    },
    {
        "placa": "MSG7058",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 323.64"
    },
    {
        "placa": "PPP3783",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 618.71"
    },
    {
        "placa": "QNY4536",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 976.46"
    },
    {
        "placa": "MTG6455",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 6.48"
    },
    {
        "placa": "OVE4103",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1050.30"
    },
    {
        "placa": "OYI1980",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 137.63"
    },
    {
        "placa": "QQF9929",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1164.99"
    },
    {
        "placa": "MSV6051",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 867.71"
    },
    {
        "placa": "PPQ7354",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 410.12"
    },
    {
        "placa": "MSD0067",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1089.49"
    },
    {
        "placa": "MQP8310",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 893.86"
    },
    {
        "placa": "JQJ0456",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 969.20"
    },
    {
        "placa": "PPE3141",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1178.07"
    },
    {
        "placa": "OUT2108",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 696.77"
    },
    {
        "placa": "OVK4786",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 133.94"
    },
    {
        "placa": "QQI4716",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 895.80"
    },
    {
        "placa": "DAM5437",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1070.88"
    },
    {
        "placa": "MSR4057",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 611.26"
    },
    {
        "placa": "MTW4485",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 3.67"
    },
    {
        "placa": "OVH0207",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 988.53"
    },
    {
        "placa": "ODF8178",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 525.72"
    },
    {
        "placa": "MSB9511",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1021.81"
    },
    {
        "placa": "MTQ2673",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 452.59"
    },
    {
        "placa": "MTC5670",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 632.32"
    },
    {
        "placa": "MSA0662",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 786.60"
    },
    {
        "placa": "MSP5057",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1053.27"
    },
    {
        "placa": "MRL5357",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 173.21"
    },
    {
        "placa": "OVF3388",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 106.59"
    },
    {
        "placa": "OPH4043",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 316.55"
    },
    {
        "placa": "MTE5376",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 209.31"
    },
    {
        "placa": "OYI8091",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1178.21"
    },
    {
        "placa": "PPA2627",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 359.15"
    },
    {
        "placa": "MTW3110",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 388.00"
    },
    {
        "placa": "ODD5117",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 576.87"
    },
    {
        "placa": "LRW8643",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1161.36"
    },
    {
        "placa": "OCY0048",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 997.66"
    },
    {
        "placa": "MQL3554",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1139.56"
    },
    {
        "placa": "OYE8828",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 215.02"
    },
    {
        "placa": "JFE0111",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 788.27"
    },
    {
        "placa": "QOH1908",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 484.33"
    },
    {
        "placa": "OVF0528",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1024.99"
    },
    {
        "placa": "PPP7169",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 43.90"
    },
    {
        "placa": "MRQ5441",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 586.20"
    },
    {
        "placa": "PPC8284",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 72.78"
    },
    {
        "placa": "MSO8911",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 161.27"
    },
    {
        "placa": "PPS6642",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1180.03"
    },
    {
        "placa": "OVF0629",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 726.90"
    },
    {
        "placa": "AUD9870",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 795.79"
    },
    {
        "placa": "MQX6167",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 862.39"
    },
    {
        "placa": "OCW1800",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1148.65"
    },
    {
        "placa": "MQZ9192",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 156.75"
    },
    {
        "placa": "MQK7341",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1007.63"
    },
    {
        "placa": "PPK3940",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 920.66"
    },
    {
        "placa": "MSY5362",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1062.11"
    },
    {
        "placa": "MSS6605",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 59.34"
    },
    {
        "placa": "MQA2936",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 546.62"
    },
    {
        "placa": "QQR5957",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 217.91"
    },
    {
        "placa": "PPE9212",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 16.50"
    },
    {
        "placa": "MSA2212",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 551.33"
    },
    {
        "placa": "MSD5315",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 229.70"
    },
    {
        "placa": "PPQ5027",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1109.00"
    },
    {
        "placa": "MTU2839",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 2.63"
    },
    {
        "placa": "OYK7891",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 981.65"
    },
    {
        "placa": "PPM2757",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 141.41"
    },
    {
        "placa": "MSU5802",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 260.24"
    },
    {
        "placa": "OVJ3026",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1044.27"
    },
    {
        "placa": "FLU3653",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 599.33"
    },
    {
        "placa": "OYJ3097",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 614.17"
    },
    {
        "placa": "AXM5171",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 242.36"
    },
    {
        "placa": "PPP4165",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 908.18"
    },
    {
        "placa": "MQF8929",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 740.22"
    },
    {
        "placa": "MTU8829",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1172.86"
    },
    {
        "placa": "MSB7881",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 996.10"
    },
    {
        "placa": "MSL6508",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 375.61"
    },
    {
        "placa": "MQQ9406",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1160.99"
    },
    {
        "placa": "MTS0837",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 840.65"
    },
    {
        "placa": "PPS8319",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 773.69"
    },
    {
        "placa": "PPD4515",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 471.06"
    },
    {
        "placa": "MTQ6935",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 689.54"
    },
    {
        "placa": "PPW9610",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 961.98"
    },
    {
        "placa": "OVE2395",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 415.30"
    },
    {
        "placa": "OCW8859",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1196.57"
    },
    {
        "placa": "MSV5784",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1114.46"
    },
    {
        "placa": "MRQ7581",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 147.87"
    },
    {
        "placa": "MSY0949",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 376.71"
    },
    {
        "placa": "ODL3304",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 208.45"
    },
    {
        "placa": "PPL4793",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 644.05"
    },
    {
        "placa": "ODO9564",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 771.93"
    },
    {
        "placa": "PPU0714",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 299.41"
    },
    {
        "placa": "LVZ1701",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 233.59"
    },
    {
        "placa": "OYF3809",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 840.63"
    },
    {
        "placa": "ODJ5347",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 545.69"
    },
    {
        "placa": "OVI6720",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 685.20"
    },
    {
        "placa": "PPV8752",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1184.42"
    },
    {
        "placa": "HMI7411",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 600.06"
    },
    {
        "placa": "ODR7864",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 442.43"
    },
    {
        "placa": "PPN7832",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 288.79"
    },
    {
        "placa": "QRB7689",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 12.77"
    },
    {
        "placa": "EEO7107",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 574.13"
    },
    {
        "placa": "MRM2232",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 456.10"
    },
    {
        "placa": "PPT8629",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 96.18"
    },
    {
        "placa": "MSS2913",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 507.39"
    },
    {
        "placa": "QRB2043",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 75.63"
    },
    {
        "placa": "OCZ5336",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 807.08"
    },
    {
        "placa": "MSF4013",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 624.59"
    },
    {
        "placa": "OVF7371",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 286.08"
    },
    {
        "placa": "MQY8591",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 548.70"
    },
    {
        "placa": "MPF4454",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1077.18"
    },
    {
        "placa": "PPZ3373",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 902.56"
    },
    {
        "placa": "PPQ7901",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 305.30"
    },
    {
        "placa": "MSE5742",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 34.70"
    },
    {
        "placa": "ODS9237",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 384.71"
    },
    {
        "placa": "MQY2128",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 514.03"
    },
    {
        "placa": "MQP6736",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 371.94"
    },
    {
        "placa": "ODB9830",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1037.52"
    },
    {
        "placa": "MSS5436",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 325.99"
    },
    {
        "placa": "OYF1548",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 527.10"
    },
    {
        "placa": "ODQ6589",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1072.37"
    },
    {
        "placa": "ODE4300",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 201.47"
    },
    {
        "placa": "PPX0617",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 464.08"
    },
    {
        "placa": "MQS4940",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 567.78"
    },
    {
        "placa": "PPJ8249",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 603.40"
    },
    {
        "placa": "PPE2447",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 341.02"
    },
    {
        "placa": "OVJ0592",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 20.51"
    },
    {
        "placa": "NXA2424",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 477.75"
    },
    {
        "placa": "QPP8907",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 632.33"
    },
    {
        "placa": "MTZ4880",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 388.32"
    },
    {
        "placa": "PPX9252",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1189.62"
    },
    {
        "placa": "OQS2384",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 892.50"
    },
    {
        "placa": "PPB2977",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 902.71"
    },
    {
        "placa": "QQG3168",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 837.46"
    },
    {
        "placa": "OYI9947",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 971.35"
    },
    {
        "placa": "PPZ2798",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 448.52"
    },
    {
        "placa": "MSU2805",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 863.49"
    },
    {
        "placa": "QRB2628",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 799.76"
    },
    {
        "placa": "MSH2275",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 230.12"
    },
    {
        "placa": "MSP1814",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 157.46"
    },
    {
        "placa": "MSD3852",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1075.22"
    },
    {
        "placa": "MSU6818",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 358.07"
    },
    {
        "placa": "OCX1974",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 254.05"
    },
    {
        "placa": "QRD2336",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 673.21"
    },
    {
        "placa": "MPL9202",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 127.06"
    },
    {
        "placa": "MQJ2744",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1021.33"
    },
    {
        "placa": "OVK1955",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 551.78"
    },
    {
        "placa": "PPJ1139",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 971.35"
    },
    {
        "placa": "ODB5746",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 305.25"
    },
    {
        "placa": "PPZ5838",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 861.24"
    },
    {
        "placa": "ODN5493",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 995.13"
    },
    {
        "placa": "ODM1836",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 585.16"
    },
    {
        "placa": "KON3026",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 0.49"
    },
    {
        "placa": "MPL6953",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 150.02"
    },
    {
        "placa": "PPX8276",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 618.68"
    },
    {
        "placa": "PPO9399",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 659.81"
    },
    {
        "placa": "QPR0810",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 322.78"
    },
    {
        "placa": "PPG5515",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 831.74"
    },
    {
        "placa": "PPO4393",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1021.05"
    },
    {
        "placa": "MSO7675",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 933.86"
    },
    {
        "placa": "PPP4319",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 179.12"
    },
    {
        "placa": "KPW4529",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 154.48"
    },
    {
        "placa": "HCQ3053",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 221.38"
    },
    {
        "placa": "LUH5275",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1000.94"
    },
    {
        "placa": "PPX9031",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1192.62"
    },
    {
        "placa": "PPJ2838",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 908.09"
    },
    {
        "placa": "MSW9578",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 58.36"
    },
    {
        "placa": "PPY4427",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 616.48"
    },
    {
        "placa": "PPE5615",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 439.51"
    },
    {
        "placa": "MSS6709",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1181.89"
    },
    {
        "placa": "ODD4421",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 232.23"
    },
    {
        "placa": "OWJ3885",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1033.65"
    },
    {
        "placa": "MTV2618",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 427.01"
    },
    {
        "placa": "QQI7718",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 66.77"
    },
    {
        "placa": "MTV1729",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 604.70"
    },
    {
        "placa": "ODF7967",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 530.00"
    },
    {
        "placa": "PVD3867",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 212.62"
    },
    {
        "placa": "PPB0307",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 15.47"
    },
    {
        "placa": "MPK9615",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 953.99"
    },
    {
        "placa": "OVI6104",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1056.57"
    },
    {
        "placa": "PPC6245",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 547.08"
    },
    {
        "placa": "HDT7386",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 384.40"
    },
    {
        "placa": "HHZ5833",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 608.60"
    },
    {
        "placa": "PWW9166",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 398.42"
    },
    {
        "placa": "OCW2369",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 906.48"
    },
    {
        "placa": "MSG4296",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1012.41"
    },
    {
        "placa": "ODG4151",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 325.12"
    },
    {
        "placa": "EYI1314",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 179.48"
    },
    {
        "placa": "PPM5461",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1055.85"
    },
    {
        "placa": "OCZ2964",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 995.64"
    },
    {
        "placa": "MRD0953",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 994.80"
    },
    {
        "placa": "PPE6570",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 318.66"
    },
    {
        "placa": "PPS0718",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 701.97"
    },
    {
        "placa": "MQL0019",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 528.84"
    },
    {
        "placa": "MSJ7415",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 644.43"
    },
    {
        "placa": "PPQ1327",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 602.84"
    },
    {
        "placa": "PPD6032",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 448.00"
    },
    {
        "placa": "PPW7324",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 332.77"
    },
    {
        "placa": "OYF5721",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1169.01"
    },
    {
        "placa": "PPZ0502",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 521.90"
    },
    {
        "placa": "GZV6241",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 452.48"
    },
    {
        "placa": "MTX9353",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1148.56"
    },
    {
        "placa": "MSR4148",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1160.45"
    },
    {
        "placa": "NLX1454",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 695.12"
    },
    {
        "placa": "OCY6836",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 587.55"
    },
    {
        "placa": "MTW0024",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 619.14"
    },
    {
        "placa": "PPN9181",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 123.31"
    },
    {
        "placa": "OVK3530",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 274.26"
    },
    {
        "placa": "MQX0111",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 944.12"
    },
    {
        "placa": "PPN9190",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1.15"
    },
    {
        "placa": "PPH6414",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 674.27"
    },
    {
        "placa": "QON0153",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 267.93"
    },
    {
        "placa": "MSU6323",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 391.33"
    },
    {
        "placa": "OYK3627",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 696.66"
    },
    {
        "placa": "KPA9108",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 201.14"
    },
    {
        "placa": "MTS3944",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 321.12"
    },
    {
        "placa": "ODQ7295",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 755.15"
    },
    {
        "placa": "ASM5257",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 12.11"
    },
    {
        "placa": "QRC5076",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 114.24"
    },
    {
        "placa": "PPQ4626",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 638.11"
    },
    {
        "placa": "OCW3557",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 639.72"
    },
    {
        "placa": "PPT9888",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 415.88"
    },
    {
        "placa": "ODN7127",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1023.23"
    },
    {
        "placa": "ODP5893",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1175.99"
    },
    {
        "placa": "ODK4110",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 294.24"
    },
    {
        "placa": "ODQ9190",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 834.32"
    },
    {
        "placa": "PKS2528",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 617.66"
    },
    {
        "placa": "QOZ5157",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 225.13"
    },
    {
        "placa": "AZL7075",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 867.33"
    },
    {
        "placa": "LLG4173",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 821.55"
    },
    {
        "placa": "LRT4712",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 723.00"
    },
    {
        "placa": "HHZ6416",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 628.51"
    },
    {
        "placa": "GPX8181",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 682.04"
    },
    {
        "placa": "OVL2797",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 298.42"
    },
    {
        "placa": "OOK0200",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 671.19"
    },
    {
        "placa": "MSN0221",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 343.78"
    },
    {
        "placa": "MTA7952",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 81.30"
    },
    {
        "placa": "MSI0631",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 815.60"
    },
    {
        "placa": "OYG5329",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 865.81"
    },
    {
        "placa": "MTH9401",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 178.32"
    },
    {
        "placa": "LPY1910",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 203.62"
    },
    {
        "placa": "LUW1449",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 997.16"
    },
    {
        "placa": "ODF7199",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 823.82"
    },
    {
        "placa": "PPL8112",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 701.12"
    },
    {
        "placa": "OVJ8131",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 214.31"
    },
    {
        "placa": "QQR2078",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 185.99"
    },
    {
        "placa": "PPE8367",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 320.43"
    },
    {
        "placa": "MSU2726",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 319.07"
    },
    {
        "placa": "PPW7047",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 595.38"
    },
    {
        "placa": "LQK5610",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1042.51"
    },
    {
        "placa": "PPS8693",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 459.08"
    },
    {
        "placa": "QPB4482",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 901.13"
    },
    {
        "placa": "PPG6086",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1039.31"
    },
    {
        "placa": "MQT9188",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 541.37"
    },
    {
        "placa": "PPM2725",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 581.28"
    },
    {
        "placa": "OVI6283",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 189.60"
    },
    {
        "placa": "PPK5586",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 135.17"
    },
    {
        "placa": "PPI1340",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1022.68"
    },
    {
        "placa": "ODE3578",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 74.18"
    },
    {
        "placa": "MSP0881",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1048.46"
    },
    {
        "placa": "AXO4550",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 726.04"
    },
    {
        "placa": "QPZ1364",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 724.25"
    },
    {
        "placa": "ODC0482",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 295.28"
    },
    {
        "placa": "OVK4394",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 773.52"
    },
    {
        "placa": "MTX5944",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 762.09"
    },
    {
        "placa": "MTW9302",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 624.79"
    },
    {
        "placa": "ODA0774",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1147.27"
    },
    {
        "placa": "PPD4853",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 573.72"
    },
    {
        "placa": "QGP1987",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1105.08"
    },
    {
        "placa": "FAN0977",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1130.87"
    },
    {
        "placa": "EYE8090",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 503.41"
    },
    {
        "placa": "OVJ6155",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 496.12"
    },
    {
        "placa": "QRB8644",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 425.96"
    },
    {
        "placa": "QRC8158",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 653.86"
    },
    {
        "placa": "QRB1024",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1055.16"
    },
    {
        "placa": "PPU7781",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 736.17"
    },
    {
        "placa": "MQQ5887",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 227.52"
    },
    {
        "placa": "LPC7695",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 558.83"
    },
    {
        "placa": "MPJ5725",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 898.20"
    },
    {
        "placa": "QPH1426",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1143.91"
    },
    {
        "placa": "PPV4916",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1123.14"
    },
    {
        "placa": "PJV8445",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 444.34"
    },
    {
        "placa": "OVH8037",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 482.65"
    },
    {
        "placa": "MTY6226",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 179.10"
    },
    {
        "placa": "ODJ6199",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 353.27"
    },
    {
        "placa": "QRB8380",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 809.11"
    },
    {
        "placa": "OVH1611",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 713.62"
    },
    {
        "placa": "QEZ0198",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 813.98"
    },
    {
        "placa": "MRD0233",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 292.17"
    },
    {
        "placa": "PPX4940",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 961.71"
    },
    {
        "placa": "OVE2382",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 644.50"
    },
    {
        "placa": "OPO2947",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 808.11"
    },
    {
        "placa": "ELB8864",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 782.70"
    },
    {
        "placa": "ODL0148",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 662.29"
    },
    {
        "placa": "ODL9978",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 102.65"
    },
    {
        "placa": "OYI6078",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 547.53"
    },
    {
        "placa": "PPX5303",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 618.64"
    },
    {
        "placa": "ODI2296",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 196.30"
    },
    {
        "placa": "ELQ6596",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 390.72"
    },
    {
        "placa": "OCX3707",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 861.37"
    },
    {
        "placa": "MTF1704",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 371.84"
    },
    {
        "placa": "MRF7840",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 352.01"
    },
    {
        "placa": "MQF9988",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 30.80"
    },
    {
        "placa": "PPW9117",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 961.58"
    },
    {
        "placa": "PPB9046",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 60.69"
    },
    {
        "placa": "ODA2795",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 155.03"
    },
    {
        "placa": "PXD9590",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 114.17"
    },
    {
        "placa": "PPQ0345",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 19.14"
    },
    {
        "placa": "FWB4566",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 854.44"
    },
    {
        "placa": "OWP0505",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 389.32"
    },
    {
        "placa": "MSJ7189",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 750.76"
    },
    {
        "placa": "JIY2883",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 650.14"
    },
    {
        "placa": "HTF7448",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 169.16"
    },
    {
        "placa": "ODL5427",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 447.28"
    },
    {
        "placa": "PPC7990",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1028.49"
    },
    {
        "placa": "PPA0280",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 389.14"
    },
    {
        "placa": "ODK0873",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1074.54"
    },
    {
        "placa": "MSF2975",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 582.94"
    },
    {
        "placa": "NTW0122",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 500.33"
    },
    {
        "placa": "LMB7722",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 762.93"
    },
    {
        "placa": "PPR1476",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 649.62"
    },
    {
        "placa": "QQH1738",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 869.50"
    },
    {
        "placa": "HMA6157",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 116.15"
    },
    {
        "placa": "PPU0817",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1091.56"
    },
    {
        "placa": "AYO8215",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 186.82"
    },
    {
        "placa": "QNV8261",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 850.75"
    },
    {
        "placa": "MQP8938",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 364.04"
    },
    {
        "placa": "MQY8567",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 469.52"
    },
    {
        "placa": "MTS5428",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 711.09"
    },
    {
        "placa": "ODQ9418",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 191.16"
    },
    {
        "placa": "PPS1311",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 20.32"
    },
    {
        "placa": "GIL1830",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 195.40"
    },
    {
        "placa": "OYF3651",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1054.68"
    },
    {
        "placa": "HLU5868",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1133.96"
    },
    {
        "placa": "ODR3611",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 824.07"
    },
    {
        "placa": "OCW3711",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 645.11"
    },
    {
        "placa": "PPY3697",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 20.16"
    },
    {
        "placa": "ODI2379",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 200.95"
    },
    {
        "placa": "MQF8526",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 949.18"
    },
    {
        "placa": "GDN0209",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 41.79"
    },
    {
        "placa": "OVF8268",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 7.10"
    },
    {
        "placa": "OCZ0909",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1163.99"
    },
    {
        "placa": "MTC5843",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 384.78"
    },
    {
        "placa": "PPU4196",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 860.42"
    },
    {
        "placa": "LPW5770",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 845.49"
    },
    {
        "placa": "PPW9073",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1142.39"
    },
    {
        "placa": "ODS7161",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 843.17"
    },
    {
        "placa": "QRB2150",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 258.19"
    },
    {
        "placa": "OYG5374",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 590.13"
    },
    {
        "placa": "QPL1656",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 335.09"
    },
    {
        "placa": "OZL8063",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 837.00"
    },
    {
        "placa": "MPL8215",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 141.74"
    },
    {
        "placa": "QRC0395",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 393.91"
    },
    {
        "placa": "MSY1064",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 464.21"
    },
    {
        "placa": "MRB2549",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 48.89"
    },
    {
        "placa": "LLC5545",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1094.84"
    },
    {
        "placa": "OCW7937",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 934.56"
    },
    {
        "placa": "PPR6604",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1068.63"
    },
    {
        "placa": "QIG3960",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 510.86"
    },
    {
        "placa": "PPL4976",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 609.22"
    },
    {
        "placa": "MSB1993",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 208.32"
    },
    {
        "placa": "ODC7593",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 83.28"
    },
    {
        "placa": "PPY9009",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1115.07"
    },
    {
        "placa": "LLO4164",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 562.76"
    },
    {
        "placa": "ODI4526",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 769.06"
    },
    {
        "placa": "PPU1195",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 696.85"
    },
    {
        "placa": "QOH1158",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 28.81"
    },
    {
        "placa": "OYE4605",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 331.53"
    },
    {
        "placa": "PPY7727",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 698.35"
    },
    {
        "placa": "QNI6388",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 329.04"
    },
    {
        "placa": "PYB9462",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 603.48"
    },
    {
        "placa": "MOX4428",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 390.70"
    },
    {
        "placa": "PPM1281",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 506.16"
    },
    {
        "placa": "PPV2253",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 233.38"
    },
    {
        "placa": "PPN2136",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 309.65"
    },
    {
        "placa": "PPO6642",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1123.96"
    },
    {
        "placa": "PPO5990",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 136.54"
    },
    {
        "placa": "MRZ2093",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 637.62"
    },
    {
        "placa": "QPK3360",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1127.14"
    },
    {
        "placa": "PPW2400",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1152.41"
    },
    {
        "placa": "MSX7576",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 170.54"
    },
    {
        "placa": "ODP6391",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1087.88"
    },
    {
        "placa": "MQJ5849",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 633.99"
    },
    {
        "placa": "MSX8326",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 792.11"
    },
    {
        "placa": "MSQ4244",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1026.09"
    },
    {
        "placa": "MTC5704",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 384.75"
    },
    {
        "placa": "OVE1875",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 208.92"
    },
    {
        "placa": "PPT7130",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1012.36"
    },
    {
        "placa": "MTY2840",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1071.83"
    },
    {
        "placa": "MSY2306",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 247.91"
    },
    {
        "placa": "QPD9002",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 720.73"
    },
    {
        "placa": "QPJ0938",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 273.40"
    },
    {
        "placa": "QQW6643",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 615.14"
    },
    {
        "placa": "HJD2832",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 775.52"
    },
    {
        "placa": "ODT2908",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 998.34"
    },
    {
        "placa": "ODP4946",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 670.90"
    },
    {
        "placa": "PPK8945",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 100.78"
    },
    {
        "placa": "PPA8020",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 549.04"
    },
    {
        "placa": "BBI7290",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 876.27"
    },
    {
        "placa": "PPN2387",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 294.07"
    },
    {
        "placa": "OCV6027",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 340.06"
    },
    {
        "placa": "MSS2308",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 626.15"
    },
    {
        "placa": "PWF6163",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 463.28"
    },
    {
        "placa": "KZJ7033",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 779.35"
    },
    {
        "placa": "ODR7608",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 4.03"
    },
    {
        "placa": "ODI5578",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 308.88"
    },
    {
        "placa": "OYK4303",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 186.11"
    },
    {
        "placa": "PPX5159",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 777.71"
    },
    {
        "placa": "ODF4825",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1066.45"
    },
    {
        "placa": "ODC0569",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 272.46"
    },
    {
        "placa": "PPX5172",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1038.59"
    },
    {
        "placa": "MPX8748",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 678.71"
    },
    {
        "placa": "MTD3867",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 8.68"
    },
    {
        "placa": "MTZ2747",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 417.40"
    },
    {
        "placa": "ODT6480",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 271.80"
    },
    {
        "placa": "OYE1131",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 150.95"
    },
    {
        "placa": "ODT6112",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 26.22"
    },
    {
        "placa": "MQO6017",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 230.71"
    },
    {
        "placa": "ODE8251",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 774.15"
    },
    {
        "placa": "PPP4579",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 923.38"
    },
    {
        "placa": "ODO0942",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 606.32"
    },
    {
        "placa": "PPX4023",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 681.46"
    },
    {
        "placa": "ODT6162",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 109.90"
    },
    {
        "placa": "ODT6131",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 926.24"
    },
    {
        "placa": "ODR5548",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 586.14"
    },
    {
        "placa": "ODM2729",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 587.93"
    },
    {
        "placa": "PPW0087",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1064.85"
    },
    {
        "placa": "OYJ3909",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 943.66"
    },
    {
        "placa": "ODP2906",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1123.62"
    },
    {
        "placa": "QRB1720",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 46.08"
    },
    {
        "placa": "QQI7423",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 96.62"
    },
    {
        "placa": "MSR2924",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 892.69"
    },
    {
        "placa": "PPE4552",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 440.76"
    },
    {
        "placa": "PPX6781",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 754.70"
    },
    {
        "placa": "EJD6314",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 661.89"
    },
    {
        "placa": "MTZ8488",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 276.50"
    },
    {
        "placa": "ODD7225",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 862.31"
    },
    {
        "placa": "MTY0063",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 854.53"
    },
    {
        "placa": "MRS0956",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 297.18"
    },
    {
        "placa": "PPP6398",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 671.35"
    },
    {
        "placa": "PPZ5238",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 878.16"
    },
    {
        "placa": "MSI3655",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1176.77"
    },
    {
        "placa": "ODF2673",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 822.06"
    },
    {
        "placa": "MPK0083",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 439.66"
    },
    {
        "placa": "MSV8187",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1022.38"
    },
    {
        "placa": "ODA7901",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1087.09"
    },
    {
        "placa": "MTZ7906",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 852.95"
    },
    {
        "placa": "MTX7856",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1029.70"
    },
    {
        "placa": "PMG7794",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 731.78"
    },
    {
        "placa": "ODR2139",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 766.98"
    },
    {
        "placa": "IJN7064",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 932.33"
    },
    {
        "placa": "BYQ3760",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 203.26"
    },
    {
        "placa": "QRD3026",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 453.75"
    },
    {
        "placa": "QRD1477",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 757.34"
    },
    {
        "placa": "ODS5913",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1148.56"
    },
    {
        "placa": "MRA7083",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1102.88"
    },
    {
        "placa": "MQX3427",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 967.12"
    },
    {
        "placa": "MRC8892",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 228.67"
    },
    {
        "placa": "OYH2941",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 965.64"
    },
    {
        "placa": "OYI4587",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 789.43"
    },
    {
        "placa": "QQF7965",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1088.07"
    },
    {
        "placa": "BQS6540",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 135.51"
    },
    {
        "placa": "ODT3275",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 302.88"
    },
    {
        "placa": "ODT6142",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 252.53"
    },
    {
        "placa": "MSN7625",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 211.21"
    },
    {
        "placa": "QRD2995",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 972.23"
    },
    {
        "placa": "OVK4839",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 287.86"
    },
    {
        "placa": "QNN6529",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 222.91"
    },
    {
        "placa": "PPR1441",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 599.99"
    },
    {
        "placa": "PPU1165",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 182.54"
    },
    {
        "placa": "ELM5783",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 101.42"
    },
    {
        "placa": "OYD2360",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1053.63"
    },
    {
        "placa": "MRJ2234",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 367.17"
    },
    {
        "placa": "MPH9172",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 809.96"
    },
    {
        "placa": "ODE2759",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1125.08"
    },
    {
        "placa": "OCZ2846",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 43.78"
    },
    {
        "placa": "OZX5111",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 205.39"
    },
    {
        "placa": "OCX7051",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 608.51"
    },
    {
        "placa": "MSN0594",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 453.42"
    },
    {
        "placa": "PPC7852",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 30.80"
    },
    {
        "placa": "ODI5586",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 171.13"
    },
    {
        "placa": "OVK9607",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 268.97"
    },
    {
        "placa": "ODT6129",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 800.63"
    },
    {
        "placa": "ODM0384",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 523.91"
    },
    {
        "placa": "PPQ8660",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 711.44"
    },
    {
        "placa": "MTD7587",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 267.46"
    },
    {
        "placa": "MSR1117",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 303.14"
    },
    {
        "placa": "LVD0684",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 241.61"
    },
    {
        "placa": "MRC1366",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 921.02"
    },
    {
        "placa": "MRF3306",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 186.37"
    },
    {
        "placa": "GOW7229",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1083.68"
    },
    {
        "placa": "ODR2347",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 358.79"
    },
    {
        "placa": "OYE4639",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 688.25"
    },
    {
        "placa": "MPT0582",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1050.28"
    },
    {
        "placa": "PPG0223",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1087.00"
    },
    {
        "placa": "PPN7838",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 261.95"
    },
    {
        "placa": "PPP9897",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 932.21"
    },
    {
        "placa": "LOY5808",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1104.28"
    },
    {
        "placa": "ODL5490",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1084.88"
    },
    {
        "placa": "ODT6241",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 166.21"
    },
    {
        "placa": "PPX4015",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 909.96"
    },
    {
        "placa": "DIS4700",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 312.74"
    },
    {
        "placa": "ODF2786",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 988.02"
    },
    {
        "placa": "ODG2504",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 692.52"
    },
    {
        "placa": "ODF1682",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1032.45"
    },
    {
        "placa": "PPN5137",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 621.59"
    },
    {
        "placa": "MRX3194",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 865.83"
    },
    {
        "placa": "ODG1893",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 270.31"
    },
    {
        "placa": "ODK8117",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1003.51"
    },
    {
        "placa": "ODD6032",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 25.53"
    },
    {
        "placa": "LUP5138",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 662.58"
    },
    {
        "placa": "MRG1153",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 0.55"
    },
    {
        "placa": "MPE2451",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 761.84"
    },
    {
        "placa": "OCW3401",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 108.49"
    },
    {
        "placa": "JPM4675",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 883.39"
    },
    {
        "placa": "PPJ0932",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 706.34"
    },
    {
        "placa": "MSY8428",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1147.09"
    },
    {
        "placa": "OVF8199",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 890.74"
    },
    {
        "placa": "KWI1052",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 3.07"
    },
    {
        "placa": "PPX5163",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1181.95"
    },
    {
        "placa": "ODS3398",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 440.21"
    },
    {
        "placa": "ODS6881",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 729.94"
    },
    {
        "placa": "MSC9128",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 101.79"
    },
    {
        "placa": "PPT9994",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 856.22"
    },
    {
        "placa": "ODO2628",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1040.37"
    },
    {
        "placa": "ODT7222",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 124.51"
    },
    {
        "placa": "MSP5302",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 78.56"
    },
    {
        "placa": "HAI9942",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 232.75"
    },
    {
        "placa": "OCV6153",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 65.56"
    },
    {
        "placa": "MSS6660",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 674.67"
    },
    {
        "placa": "PPU6303",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 20.86"
    },
    {
        "placa": "MTC4119",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 180.47"
    },
    {
        "placa": "MSS2875",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 316.64"
    },
    {
        "placa": "LRU3311",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 151.85"
    },
    {
        "placa": "MQN5440",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 597.60"
    },
    {
        "placa": "PPQ6186",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 978.59"
    },
    {
        "placa": "QRC4612",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 298.70"
    },
    {
        "placa": "OVI1629",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 279.04"
    },
    {
        "placa": "OYE3551",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 815.59"
    },
    {
        "placa": "PPP4341",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 433.17"
    },
    {
        "placa": "MSG0818",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 241.41"
    },
    {
        "placa": "QRB0114",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 392.17"
    },
    {
        "placa": "ODE0018",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 170.06"
    },
    {
        "placa": "PPE0550",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 679.61"
    },
    {
        "placa": "PWP8711",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 582.89"
    },
    {
        "placa": "HJD0999",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 557.88"
    },
    {
        "placa": "OVL7912",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 296.61"
    },
    {
        "placa": "OVE4572",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 894.29"
    },
    {
        "placa": "MTU0472",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 511.84"
    },
    {
        "placa": "PPC5148",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 213.51"
    },
    {
        "placa": "OQI5224",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 448.02"
    },
    {
        "placa": "PPW3275",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 270.94"
    },
    {
        "placa": "MQR8284",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1140.96"
    },
    {
        "placa": "MQY8950",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 710.11"
    },
    {
        "placa": "OYF6232",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 358.13"
    },
    {
        "placa": "PPS4715",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 537.99"
    },
    {
        "placa": "ODK7984",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 349.58"
    },
    {
        "placa": "PPQ6773",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 43.09"
    },
    {
        "placa": "ODT6063",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 709.21"
    },
    {
        "placa": "MSM3569",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 728.77"
    },
    {
        "placa": "PPW2943",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 221.91"
    },
    {
        "placa": "PPR3064",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 283.34"
    },
    {
        "placa": "GSR0785",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 919.71"
    },
    {
        "placa": "MRL3604",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 691.76"
    },
    {
        "placa": "ODT7199",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 253.57"
    },
    {
        "placa": "ODH0186",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 870.26"
    },
    {
        "placa": "ODT6113",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 566.08"
    },
    {
        "placa": "PPY3803",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 951.39"
    },
    {
        "placa": "PBK0199",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 55.65"
    },
    {
        "placa": "MRZ3529",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 84.56"
    },
    {
        "placa": "ODT7297",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 578.13"
    },
    {
        "placa": "PPK4295",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1031.75"
    },
    {
        "placa": "ODR3902",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 846.03"
    },
    {
        "placa": "PPS5495",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1040.58"
    },
    {
        "placa": "ODT6475",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 21.09"
    },
    {
        "placa": "PPS4192",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 640.50"
    },
    {
        "placa": "MRY9914",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 94.72"
    },
    {
        "placa": "PPG7631",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1144.87"
    },
    {
        "placa": "MTE1705",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 130.11"
    },
    {
        "placa": "OCW3864",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 853.27"
    },
    {
        "placa": "PPG4536",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 543.34"
    },
    {
        "placa": "ODL0222",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 908.76"
    },
    {
        "placa": "MRC1316",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 592.63"
    },
    {
        "placa": "PPW7561",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1021.08"
    },
    {
        "placa": "MPW8555",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1049.28"
    },
    {
        "placa": "MML6926",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 454.40"
    },
    {
        "placa": "IWD5655",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 700.07"
    },
    {
        "placa": "PPX4048",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 573.97"
    },
    {
        "placa": "PPX7377",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 986.97"
    },
    {
        "placa": "PPX5165",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 179.63"
    },
    {
        "placa": "PPX0151",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 520.92"
    },
    {
        "placa": "PPX5175",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 676.86"
    },
    {
        "placa": "PPR1573",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 845.28"
    },
    {
        "placa": "MSB8136",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 130.41"
    },
    {
        "placa": "ODR4735",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 940.07"
    },
    {
        "placa": "ODS6119",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 959.66"
    },
    {
        "placa": "MPJ4743",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 81.47"
    },
    {
        "placa": "MSK2049",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 662.79"
    },
    {
        "placa": "PPG3077",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 390.56"
    },
    {
        "placa": "QPQ8146",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 856.45"
    },
    {
        "placa": "PPQ5919",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 821.66"
    },
    {
        "placa": "MPJ1907",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 33.23"
    },
    {
        "placa": "PPZ2122",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1148.07"
    },
    {
        "placa": "DMM4969",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 666.86"
    },
    {
        "placa": "PPX0691",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 698.09"
    },
    {
        "placa": "PPX4369",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1074.02"
    },
    {
        "placa": "MTK9460",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 23.03"
    },
    {
        "placa": "PYD9944",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1145.77"
    },
    {
        "placa": "OYJ1146",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 593.79"
    },
    {
        "placa": "PPO6842",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 424.54"
    },
    {
        "placa": "PPK1261",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1118.20"
    },
    {
        "placa": "ODH0187",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 425.75"
    },
    {
        "placa": "ODF3904",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 604.30"
    },
    {
        "placa": "PPN2211",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 272.94"
    },
    {
        "placa": "QRD7151",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1164.83"
    },
    {
        "placa": "MPJ4590",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 498.52"
    },
    {
        "placa": "QRD3004",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 88.07"
    },
    {
        "placa": "ODO0250",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 676.25"
    },
    {
        "placa": "PPX0681",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 268.89"
    },
    {
        "placa": "ODS1724",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 429.18"
    },
    {
        "placa": "PPV3932",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 415.07"
    },
    {
        "placa": "ODP3066",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 247.87"
    },
    {
        "placa": "PPW4282",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 745.13"
    },
    {
        "placa": "MSA9309",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 718.40"
    },
    {
        "placa": "ODH0279",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 953.55"
    },
    {
        "placa": "PPV3597",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1192.10"
    },
    {
        "placa": "OCX3790",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 967.78"
    },
    {
        "placa": "MTN9622",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 72.12"
    },
    {
        "placa": "OYF1755",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 612.49"
    },
    {
        "placa": "GVP0415",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 223.15"
    },
    {
        "placa": "PPC6858",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 106.52"
    },
    {
        "placa": "PWR4766",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 525.43"
    },
    {
        "placa": "PPO7252",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 777.40"
    },
    {
        "placa": "PPZ9142",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 666.12"
    },
    {
        "placa": "OYK0617",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 730.23"
    },
    {
        "placa": "PPI0057",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 186.30"
    },
    {
        "placa": "PPP6086",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 852.38"
    },
    {
        "placa": "OVK0788",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1058.08"
    },
    {
        "placa": "ODR5073",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 806.34"
    },
    {
        "placa": "PPV7130",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1180.10"
    },
    {
        "placa": "PPV5023",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 196.78"
    },
    {
        "placa": "PPX0911",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 791.75"
    },
    {
        "placa": "ODC6531",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 21.50"
    },
    {
        "placa": "MTE5192",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1021.70"
    },
    {
        "placa": "PPO4419",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1045.11"
    },
    {
        "placa": "ODO3344",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 373.96"
    },
    {
        "placa": "PPX0160",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 162.75"
    },
    {
        "placa": "PPP3574",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 891.15"
    },
    {
        "placa": "OYH6830",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 662.87"
    },
    {
        "placa": "QRD2985",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1079.92"
    },
    {
        "placa": "ODT6174",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 234.21"
    },
    {
        "placa": "MTZ5508",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 96.36"
    },
    {
        "placa": "GGU9469",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 554.13"
    },
    {
        "placa": "PPP2796",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 716.43"
    },
    {
        "placa": "OYJ3918",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1174.83"
    },
    {
        "placa": "PPZ9135",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 687.60"
    },
    {
        "placa": "QRD2724",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 361.31"
    },
    {
        "placa": "MRX7902",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 669.46"
    },
    {
        "placa": "PPW0977",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 427.76"
    },
    {
        "placa": "MSM0612",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 558.12"
    },
    {
        "placa": "ODE1235",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1144.24"
    },
    {
        "placa": "MSA2218",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1127.31"
    },
    {
        "placa": "OPI5371",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 794.94"
    },
    {
        "placa": "ODF7548",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 677.48"
    },
    {
        "placa": "PUF3091",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 408.40"
    },
    {
        "placa": "MSQ2701",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 58.74"
    },
    {
        "placa": "ODT6166",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 639.22"
    },
    {
        "placa": "HCA4535",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 893.44"
    },
    {
        "placa": "MTV1770",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1043.00"
    },
    {
        "placa": "ODE9783",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 594.91"
    },
    {
        "placa": "PPB5250",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 966.20"
    },
    {
        "placa": "GVL3401",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 900.77"
    },
    {
        "placa": "EVZ7529",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1127.78"
    },
    {
        "placa": "GTT1448",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 672.35"
    },
    {
        "placa": "KAA7843",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 467.04"
    },
    {
        "placa": "OVH0968",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 186.57"
    },
    {
        "placa": "KVI3621",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 338.80"
    },
    {
        "placa": "ODK0482",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 11.44"
    },
    {
        "placa": "PPM2784",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 24.87"
    },
    {
        "placa": "MTN9583",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 364.77"
    },
    {
        "placa": "ODR3694",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 128.25"
    },
    {
        "placa": "MQF1914",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 648.80"
    },
    {
        "placa": "ODT6192",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 105.73"
    },
    {
        "placa": "ODT6211",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 696.56"
    },
    {
        "placa": "MTT0714",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 92.05"
    },
    {
        "placa": "PPV0966",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 598.04"
    },
    {
        "placa": "MSX3625",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1171.24"
    },
    {
        "placa": "PPJ9301",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 259.41"
    },
    {
        "placa": "PPJ4189",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 235.22"
    },
    {
        "placa": "EFV5471",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 294.00"
    },
    {
        "placa": "PPW7608",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 97.98"
    },
    {
        "placa": "PPG7664",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 148.12"
    },
    {
        "placa": "JLM4459",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 143.57"
    },
    {
        "placa": "ODD8043",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 839.89"
    },
    {
        "placa": "ODT7225",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1116.65"
    },
    {
        "placa": "QPO9898",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 36.22"
    },
    {
        "placa": "ODT6201",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 437.72"
    },
    {
        "placa": "MTZ4291",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 634.29"
    },
    {
        "placa": "OVJ9709",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 388.66"
    },
    {
        "placa": "ODT1578",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 764.13"
    },
    {
        "placa": "PPU6390",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 264.92"
    },
    {
        "placa": "OYF9087",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 531.14"
    },
    {
        "placa": "PPN6969",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 285.94"
    },
    {
        "placa": "ODO9888",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 669.54"
    },
    {
        "placa": "ODJ0078",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 148.82"
    },
    {
        "placa": "PPM1391",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 918.93"
    },
    {
        "placa": "JMI5050",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 181.85"
    },
    {
        "placa": "OYH2574",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 301.97"
    },
    {
        "placa": "QRD8588",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 724.39"
    },
    {
        "placa": "MPC0937",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 49.37"
    },
    {
        "placa": "ODT6119",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 490.13"
    },
    {
        "placa": "MTS4094",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 361.83"
    },
    {
        "placa": "OVK5846",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 683.24"
    },
    {
        "placa": "MTZ7706",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 950.90"
    },
    {
        "placa": "PPX5170",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 599.65"
    },
    {
        "placa": "PPH0659",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1119.90"
    },
    {
        "placa": "QRD2970",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1178.83"
    },
    {
        "placa": "ODM0438",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 114.58"
    },
    {
        "placa": "MRD6262",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 94.90"
    },
    {
        "placa": "PPW3670",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 367.33"
    },
    {
        "placa": "OLQ5547",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1017.58"
    },
    {
        "placa": "ODB8156",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1148.13"
    },
    {
        "placa": "MTW9122",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 137.77"
    },
    {
        "placa": "PPW6580",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 830.78"
    },
    {
        "placa": "MSP5693",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 302.75"
    },
    {
        "placa": "ODR5144",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 828.89"
    },
    {
        "placa": "MPU1861",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1188.93"
    },
    {
        "placa": "PPQ8138",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 542.18"
    },
    {
        "placa": "ODJ2482",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 6.33"
    },
    {
        "placa": "ODG5861",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 559.87"
    },
    {
        "placa": "LLR2388",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 780.18"
    },
    {
        "placa": "LSN9622",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 539.10"
    },
    {
        "placa": "MTY6370",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1187.22"
    },
    {
        "placa": "OYE6776",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 701.70"
    },
    {
        "placa": "OYF1754",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 372.80"
    },
    {
        "placa": "QRC6742",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 210.74"
    },
    {
        "placa": "QRC6780",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1019.97"
    },
    {
        "placa": "PPZ2988",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1039.00"
    },
    {
        "placa": "ODQ3672",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 760.20"
    },
    {
        "placa": "PPW3952",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1002.24"
    },
    {
        "placa": "ODD7980",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 290.24"
    },
    {
        "placa": "OLU5502",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 552.51"
    },
    {
        "placa": "MTF6518",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 447.51"
    },
    {
        "placa": "ODE4307",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 600.33"
    },
    {
        "placa": "MPK3718",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 121.66"
    },
    {
        "placa": "HGI1748",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 267.27"
    },
    {
        "placa": "ODE0173",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1127.66"
    },
    {
        "placa": "PVH1495",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 8.82"
    },
    {
        "placa": "PPZ1030",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1058.79"
    },
    {
        "placa": "QWT4740",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 944.54"
    },
    {
        "placa": "JHH0555",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 422.67"
    },
    {
        "placa": "PPI8255",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 286.06"
    },
    {
        "placa": "MQQ9045",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 707.44"
    },
    {
        "placa": "MTU9549",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 666.65"
    },
    {
        "placa": "OVJ0320",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 219.58"
    },
    {
        "placa": "OYF9111",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 247.14"
    },
    {
        "placa": "PPI1632",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 257.11"
    },
    {
        "placa": "PPE5641",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 319.88"
    },
    {
        "placa": "GWQ6575",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 815.11"
    },
    {
        "placa": "PPP7478",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 139.83"
    },
    {
        "placa": "HCR1994",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 468.61"
    },
    {
        "placa": "MTX5977",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 123.48"
    },
    {
        "placa": "OQR4867",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 153.59"
    },
    {
        "placa": "QRB1690",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 707.74"
    },
    {
        "placa": "MQC8617",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 949.69"
    },
    {
        "placa": "ODI5375",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 376.89"
    },
    {
        "placa": "MSX1694",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1118.35"
    },
    {
        "placa": "OYK7347",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 211.47"
    },
    {
        "placa": "QHL7752",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 24.82"
    },
    {
        "placa": "ODR3747",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 795.57"
    },
    {
        "placa": "ODR0379",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1089.37"
    },
    {
        "placa": "PPX0915",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 487.88"
    },
    {
        "placa": "PPS4426",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 622.90"
    },
    {
        "placa": "PWL6172",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 970.56"
    },
    {
        "placa": "OYK7789",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 446.33"
    },
    {
        "placa": "GSW6100",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 234.22"
    },
    {
        "placa": "MPX2832",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 760.14"
    },
    {
        "placa": "OVF7961",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 64.27"
    },
    {
        "placa": "QON7387",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1081.96"
    },
    {
        "placa": "ODT6169",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 229.06"
    },
    {
        "placa": "MQM4704",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 604.32"
    },
    {
        "placa": "MTX8520",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 670.59"
    },
    {
        "placa": "ODS3004",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 945.84"
    },
    {
        "placa": "ODT6191",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 707.64"
    },
    {
        "placa": "MPO7261",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 769.81"
    },
    {
        "placa": "OYJ6843",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1095.03"
    },
    {
        "placa": "MSV5944",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 898.24"
    },
    {
        "placa": "PPV0918",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1131.18"
    },
    {
        "placa": "ODS3861",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 605.87"
    },
    {
        "placa": "HHE6642",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 48.22"
    },
    {
        "placa": "OYH4566",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 164.40"
    },
    {
        "placa": "OYK7784",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1074.03"
    },
    {
        "placa": "ODI5590",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 765.74"
    },
    {
        "placa": "PWZ0050",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 134.70"
    },
    {
        "placa": "HCY2358",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 785.64"
    },
    {
        "placa": "MRV1354",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 412.94"
    },
    {
        "placa": "HNX8299",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 302.37"
    },
    {
        "placa": "PPX4034",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 272.03"
    },
    {
        "placa": "OVF6320",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 635.11"
    },
    {
        "placa": "MQL6457",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 918.00"
    },
    {
        "placa": "OYJ6854",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 361.00"
    },
    {
        "placa": "ODS4298",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 253.23"
    },
    {
        "placa": "PPW7594",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1182.22"
    },
    {
        "placa": "MPY1784",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 717.00"
    },
    {
        "placa": "ODS5401",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 45.65"
    },
    {
        "placa": "IXJ5450",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1156.53"
    },
    {
        "placa": "MTB8714",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 289.55"
    },
    {
        "placa": "PPP5321",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 652.36"
    },
    {
        "placa": "ODR5846",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 933.24"
    },
    {
        "placa": "MTJ9335",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 78.87"
    },
    {
        "placa": "MTK0539",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 860.15"
    },
    {
        "placa": "ODS4776",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 745.48"
    },
    {
        "placa": "PPW9578",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1155.77"
    },
    {
        "placa": "MSK3813",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 725.45"
    },
    {
        "placa": "HEQ9654",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 997.36"
    },
    {
        "placa": "PPW0162",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 396.13"
    },
    {
        "placa": "ODG3937",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1003.37"
    },
    {
        "placa": "GYS8753",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 23.94"
    },
    {
        "placa": "PPD8040",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 419.64"
    },
    {
        "placa": "ODR8577",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1120.48"
    },
    {
        "placa": "ODL2849",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 843.36"
    },
    {
        "placa": "PPW7609",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 337.65"
    },
    {
        "placa": "OVH8494",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1038.79"
    },
    {
        "placa": "OYH9330",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 58.01"
    },
    {
        "placa": "MSV2851",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 368.16"
    },
    {
        "placa": "MPV1368",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 604.81"
    },
    {
        "placa": "PPE5629",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 53.40"
    },
    {
        "placa": "KVS7430",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 913.92"
    },
    {
        "placa": "MSO3345",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 760.78"
    },
    {
        "placa": "MQZ2688",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 535.39"
    },
    {
        "placa": "OVL6085",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 670.07"
    },
    {
        "placa": "OVE2346",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 305.81"
    },
    {
        "placa": "OVI8982",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 564.21"
    },
    {
        "placa": "OVI5960",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 787.81"
    },
    {
        "placa": "PPT3857",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 200.99"
    },
    {
        "placa": "ODT6072",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 600.91"
    },
    {
        "placa": "OYK6151",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 701.22"
    },
    {
        "placa": "PPP5971",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 765.00"
    },
    {
        "placa": "MSZ3447",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 650.02"
    },
    {
        "placa": "MTD1323",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1029.99"
    },
    {
        "placa": "OYE8650",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 182.87"
    },
    {
        "placa": "OCX2966",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 835.86"
    },
    {
        "placa": "GYL3311",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 381.75"
    },
    {
        "placa": "PPV1887",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 288.00"
    },
    {
        "placa": "PPV9053",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 906.67"
    },
    {
        "placa": "MQM2965",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 208.40"
    },
    {
        "placa": "LLI6801",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 496.14"
    },
    {
        "placa": "PPW8336",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 152.70"
    },
    {
        "placa": "PPI7079",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 478.16"
    },
    {
        "placa": "ODF7443",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 987.76"
    },
    {
        "placa": "PPW8794",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 690.82"
    },
    {
        "placa": "MRD4618",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1195.35"
    },
    {
        "placa": "QRC0086",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 674.69"
    },
    {
        "placa": "PPP8171",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 463.73"
    },
    {
        "placa": "ODD4538",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 541.22"
    },
    {
        "placa": "PPI2549",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1142.67"
    },
    {
        "placa": "PPB2351",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 374.62"
    },
    {
        "placa": "MSD0648",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 763.30"
    },
    {
        "placa": "ODG3990",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 953.29"
    },
    {
        "placa": "AEH6622",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 899.72"
    },
    {
        "placa": "OYE1719",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 433.73"
    },
    {
        "placa": "OVL4093",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 679.50"
    },
    {
        "placa": "MTL7677",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 164.45"
    },
    {
        "placa": "PPU6399",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 911.61"
    },
    {
        "placa": "MTJ6238",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 801.45"
    },
    {
        "placa": "ODA0811",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 978.99"
    },
    {
        "placa": "MSO8571",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 493.67"
    },
    {
        "placa": "ODQ1034",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 428.46"
    },
    {
        "placa": "OYK7786",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1050.31"
    },
    {
        "placa": "QRC0468",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 437.62"
    },
    {
        "placa": "PPP3108",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 282.23"
    },
    {
        "placa": "MQL1802",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1188.88"
    },
    {
        "placa": "PPZ5030",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 612.39"
    },
    {
        "placa": "MTQ6892",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 218.68"
    },
    {
        "placa": "ODT6137",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 192.64"
    },
    {
        "placa": "ODH4584",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 271.67"
    },
    {
        "placa": "OVL8548",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1022.20"
    },
    {
        "placa": "PPQ3580",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 839.05"
    },
    {
        "placa": "QNA4386",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 236.29"
    },
    {
        "placa": "MTW3255",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 531.45"
    },
    {
        "placa": "PPX4852",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 568.97"
    },
    {
        "placa": "JOK7866",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 145.12"
    },
    {
        "placa": "JJU1909",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 567.01"
    },
    {
        "placa": "LAJ1744",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 497.12"
    },
    {
        "placa": "FAZ6945",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 246.33"
    },
    {
        "placa": "PPP5346",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 926.31"
    },
    {
        "placa": "PPX4025",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 588.62"
    },
    {
        "placa": "MRO1902",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 882.91"
    },
    {
        "placa": "PPV5021",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1192.22"
    },
    {
        "placa": "PPX9828",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 682.01"
    },
    {
        "placa": "MTL6296",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1130.36"
    },
    {
        "placa": "PPB5272",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 841.25"
    },
    {
        "placa": "MSB0344",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 32.02"
    },
    {
        "placa": "PPX0682",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 668.51"
    },
    {
        "placa": "KYW4349",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 591.75"
    },
    {
        "placa": "PPS4459",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 855.27"
    },
    {
        "placa": "PPG6212",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 855.52"
    },
    {
        "placa": "NZU3333",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1145.35"
    },
    {
        "placa": "MRE9388",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 464.96"
    },
    {
        "placa": "JFW7462",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 155.23"
    },
    {
        "placa": "MRB5624",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 741.51"
    },
    {
        "placa": "OYJ3903",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 290.83"
    },
    {
        "placa": "ODR3893",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 425.33"
    },
    {
        "placa": "PZT7967",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 887.13"
    },
    {
        "placa": "OVF6381",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 631.01"
    },
    {
        "placa": "PPP5077",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 221.96"
    },
    {
        "placa": "OYK0631",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 436.23"
    },
    {
        "placa": "OVH8488",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 707.74"
    },
    {
        "placa": "PPU7807",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1090.00"
    },
    {
        "placa": "ODR1856",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1110.78"
    },
    {
        "placa": "ODS4362",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1041.22"
    },
    {
        "placa": "MTN9652",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 625.70"
    },
    {
        "placa": "QRC6734",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 35.43"
    },
    {
        "placa": "PPZ5237",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 616.88"
    },
    {
        "placa": "ODL6965",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 826.96"
    },
    {
        "placa": "PPZ2695",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 436.94"
    },
    {
        "placa": "ODH4216",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 634.78"
    },
    {
        "placa": "PPE5451",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 410.54"
    },
    {
        "placa": "PUC4534",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 823.66"
    },
    {
        "placa": "OYF4011",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 442.75"
    },
    {
        "placa": "ODS4352",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 260.24"
    },
    {
        "placa": "MQH2381",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 136.88"
    },
    {
        "placa": "MRB0432",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1040.49"
    },
    {
        "placa": "APE6012",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 326.10"
    },
    {
        "placa": "ODO6478",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 926.86"
    },
    {
        "placa": "ODF5714",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 379.59"
    },
    {
        "placa": "OVL6090",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 833.08"
    },
    {
        "placa": "NZA5541",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 920.72"
    },
    {
        "placa": "CVT3644",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 741.65"
    },
    {
        "placa": "ODE9633",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1139.74"
    },
    {
        "placa": "ODT7294",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 495.72"
    },
    {
        "placa": "ODR2427",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 919.49"
    },
    {
        "placa": "LQR5015",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 446.55"
    },
    {
        "placa": "PKI3355",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1106.78"
    },
    {
        "placa": "OYH9062",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1177.84"
    },
    {
        "placa": "OWV9793",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1057.79"
    },
    {
        "placa": "QOO7031",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 557.32"
    },
    {
        "placa": "PPH5379",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 355.57"
    },
    {
        "placa": "ODT9981",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 561.27"
    },
    {
        "placa": "HLG7557",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 920.11"
    },
    {
        "placa": "JHI6642",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1151.92"
    },
    {
        "placa": "MSN6235",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1006.17"
    },
    {
        "placa": "ODH5076",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 788.17"
    },
    {
        "placa": "MRA7567",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 587.94"
    },
    {
        "placa": "MTQ1391",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 956.10"
    },
    {
        "placa": "MTB7628",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 780.56"
    },
    {
        "placa": "OVL2647",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 932.06"
    },
    {
        "placa": "LCL4337",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1007.98"
    },
    {
        "placa": "OLE8866",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 519.57"
    },
    {
        "placa": "QNT6723",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 138.39"
    },
    {
        "placa": "MTX0269",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 66.50"
    },
    {
        "placa": "QQI3866",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 202.65"
    },
    {
        "placa": "DML6340",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 811.35"
    },
    {
        "placa": "PPZ7593",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 958.48"
    },
    {
        "placa": "MQH6337",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 897.43"
    },
    {
        "placa": "PXH0309",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 807.81"
    },
    {
        "placa": "OVF4034",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1059.28"
    },
    {
        "placa": "MPT6477",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1042.52"
    },
    {
        "placa": "MTC4480",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1019.20"
    },
    {
        "placa": "PPM1777",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 5.71"
    },
    {
        "placa": "ODH0228",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 996.78"
    },
    {
        "placa": "ODK7947",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 802.92"
    },
    {
        "placa": "MPI9809",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 362.37"
    },
    {
        "placa": "ODS2621",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 843.64"
    },
    {
        "placa": "KWZ1156",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 150.65"
    },
    {
        "placa": "OYJ8863",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 811.80"
    },
    {
        "placa": "MTB7280",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1082.54"
    },
    {
        "placa": "MSW6074",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 476.80"
    },
    {
        "placa": "PPO8857",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 812.66"
    },
    {
        "placa": "MQE4494",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1142.50"
    },
    {
        "placa": "MRZ5980",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 796.76"
    },
    {
        "placa": "QRD3021",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 94.25"
    },
    {
        "placa": "MQV2452",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 963.78"
    },
    {
        "placa": "LBI7719",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 615.20"
    },
    {
        "placa": "PPD3144",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 761.00"
    },
    {
        "placa": "MSX9073",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 302.20"
    },
    {
        "placa": "MSU7735",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 849.77"
    },
    {
        "placa": "MTQ7765",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 541.04"
    },
    {
        "placa": "ODT6172",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 370.89"
    },
    {
        "placa": "PPE8144",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 9.46"
    },
    {
        "placa": "PPW3468",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1120.49"
    },
    {
        "placa": "PPX5484",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 828.46"
    },
    {
        "placa": "MSS5721",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 781.17"
    },
    {
        "placa": "NYS1758",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1162.12"
    },
    {
        "placa": "PPG0978",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 505.05"
    },
    {
        "placa": "ODC7574",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 561.85"
    },
    {
        "placa": "PUA1686",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 789.00"
    },
    {
        "placa": "MQS2638",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 845.09"
    },
    {
        "placa": "KOO9144",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 331.41"
    },
    {
        "placa": "MSN6401",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 162.40"
    },
    {
        "placa": "MTY0257",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1173.61"
    },
    {
        "placa": "MSF6603",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 971.46"
    },
    {
        "placa": "LPF4692",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 132.36"
    },
    {
        "placa": "KKU4086",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 663.42"
    },
    {
        "placa": "PPF3671",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1039.33"
    },
    {
        "placa": "ODG3065",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 34.81"
    },
    {
        "placa": "PPM1763",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 983.60"
    },
    {
        "placa": "OVL5378",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1118.23"
    },
    {
        "placa": "PPL0245",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 166.26"
    },
    {
        "placa": "ODP9185",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 242.05"
    },
    {
        "placa": "MTB3976",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 784.22"
    },
    {
        "placa": "PPV3204",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 374.77"
    },
    {
        "placa": "EAN2657",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1199.30"
    },
    {
        "placa": "QND1483",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1103.09"
    },
    {
        "placa": "QND1485",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 191.63"
    },
    {
        "placa": "ODR2913",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 440.85"
    },
    {
        "placa": "MTZ8387",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 62.39"
    },
    {
        "placa": "ODG3968",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 977.75"
    },
    {
        "placa": "MTM4102",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 52.44"
    },
    {
        "placa": "PPX5167",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 338.58"
    },
    {
        "placa": "PPA5141",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 19.42"
    },
    {
        "placa": "MQN3600",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1111.48"
    },
    {
        "placa": "ODC8133",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 441.42"
    },
    {
        "placa": "PPI4116",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 347.20"
    },
    {
        "placa": "PPW7385",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 310.06"
    },
    {
        "placa": "ODE6294",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 168.83"
    },
    {
        "placa": "QRC8133",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 863.83"
    },
    {
        "placa": "KPL1606",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 163.24"
    },
    {
        "placa": "MQM5304",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1077.14"
    },
    {
        "placa": "OCV8797",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 863.98"
    },
    {
        "placa": "PPW9887",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1041.14"
    },
    {
        "placa": "MTU1392",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 219.47"
    },
    {
        "placa": "MTX7616",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1113.46"
    },
    {
        "placa": "OYJ3900",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 242.90"
    },
    {
        "placa": "QRC0464",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 651.87"
    },
    {
        "placa": "OYE7905",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 304.37"
    },
    {
        "placa": "MQU5385",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 476.47"
    },
    {
        "placa": "ODK0705",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 557.58"
    },
    {
        "placa": "MSH8964",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 836.94"
    },
    {
        "placa": "OVH0550",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 89.22"
    },
    {
        "placa": "ODH0102",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 624.83"
    },
    {
        "placa": "PPP6190",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 822.56"
    },
    {
        "placa": "ODM3563",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1128.70"
    },
    {
        "placa": "MQN2715",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 631.17"
    },
    {
        "placa": "ODT4813",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 837.56"
    },
    {
        "placa": "PPX0920",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 204.29"
    },
    {
        "placa": "OYK7386",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 776.82"
    },
    {
        "placa": "PPV6223",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 907.14"
    },
    {
        "placa": "ODT6077",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1111.01"
    },
    {
        "placa": "ODT6177",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 514.18"
    },
    {
        "placa": "MRY6685",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 114.22"
    },
    {
        "placa": "PPW7210",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 666.38"
    },
    {
        "placa": "ODH0105",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 518.83"
    },
    {
        "placa": "PPU0729",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 379.96"
    },
    {
        "placa": "QPZ8234",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 167.61"
    },
    {
        "placa": "LTL9770",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 926.78"
    },
    {
        "placa": "PPE5416",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 262.42"
    },
    {
        "placa": "QNS7486",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 542.99"
    },
    {
        "placa": "ODF4653",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 920.85"
    },
    {
        "placa": "PPZ9120",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 63.48"
    },
    {
        "placa": "PPX4326",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 712.48"
    },
    {
        "placa": "JPP5875",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1162.40"
    },
    {
        "placa": "PPP7559",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 864.66"
    },
    {
        "placa": "OVE9712",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 108.34"
    },
    {
        "placa": "EEO6314",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 363.52"
    },
    {
        "placa": "OYE4607",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 740.54"
    },
    {
        "placa": "MTD5159",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 678.06"
    },
    {
        "placa": "QOD0956",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 802.56"
    },
    {
        "placa": "PPM5420",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 163.02"
    },
    {
        "placa": "KOR8637",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 788.33"
    },
    {
        "placa": "MQN9789",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1012.28"
    },
    {
        "placa": "PPP8410",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 283.05"
    },
    {
        "placa": "PWK4214",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 837.18"
    },
    {
        "placa": "PLB1104",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 289.77"
    },
    {
        "placa": "MSP2542",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 826.13"
    },
    {
        "placa": "OVF3435",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 476.74"
    },
    {
        "placa": "MQJ7289",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1136.06"
    },
    {
        "placa": "MTE0438",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 27.12"
    },
    {
        "placa": "PPN8221",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 719.18"
    },
    {
        "placa": "MTU9220",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 904.39"
    },
    {
        "placa": "QQR1393",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1187.33"
    },
    {
        "placa": "MSX8597",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 266.31"
    },
    {
        "placa": "ODJ5344",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 140.92"
    },
    {
        "placa": "QRC0723",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 324.59"
    },
    {
        "placa": "ODT1374",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 614.97"
    },
    {
        "placa": "ODP1405",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 314.04"
    },
    {
        "placa": "PPB4710",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 91.70"
    },
    {
        "placa": "OVL8183",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 349.76"
    },
    {
        "placa": "MTS0261",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 664.22"
    },
    {
        "placa": "OYG6189",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 703.33"
    },
    {
        "placa": "HAX6942",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 251.21"
    },
    {
        "placa": "PPJ2862",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 583.20"
    },
    {
        "placa": "QRB2218",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 914.44"
    },
    {
        "placa": "MRY7639",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 876.78"
    },
    {
        "placa": "PPK2695",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 880.92"
    },
    {
        "placa": "OVF6902",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 771.65"
    },
    {
        "placa": "ODH3455",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 713.56"
    },
    {
        "placa": "OVL7967",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 371.03"
    },
    {
        "placa": "PPW5066",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 393.71"
    },
    {
        "placa": "OVL8175",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 485.07"
    },
    {
        "placa": "PPZ3416",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 614.44"
    },
    {
        "placa": "OVF7767",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 912.63"
    },
    {
        "placa": "QRD3045",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 639.76"
    },
    {
        "placa": "PLE1570",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 496.78"
    },
    {
        "placa": "PBG5687",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1033.22"
    },
    {
        "placa": "PPO5092",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1051.04"
    },
    {
        "placa": "PPW0369",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 998.49"
    },
    {
        "placa": "OYK7466",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 150.13"
    },
    {
        "placa": "PPX7685",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 709.12"
    },
    {
        "placa": "PPP8356",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 182.32"
    },
    {
        "placa": "PPP6764",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 687.10"
    },
    {
        "placa": "HMH1518",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 826.21"
    },
    {
        "placa": "PPP4645",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 213.98"
    },
    {
        "placa": "PPX4860",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 809.20"
    },
    {
        "placa": "MTT9989",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 546.66"
    },
    {
        "placa": "LQF8280",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 16.36"
    },
    {
        "placa": "MQM7541",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 180.88"
    },
    {
        "placa": "PPW6911",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 16.98"
    },
    {
        "placa": "JJU0051",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1110.08"
    },
    {
        "placa": "PPP5709",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 727.19"
    },
    {
        "placa": "PPZ0148",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 721.31"
    },
    {
        "placa": "PPZ8485",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 974.55"
    },
    {
        "placa": "ODS8607",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 358.45"
    },
    {
        "placa": "MQC3875",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 911.86"
    },
    {
        "placa": "MQR9776",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 426.22"
    },
    {
        "placa": "MPJ5666",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1007.29"
    },
    {
        "placa": "DCZ8412",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 911.57"
    },
    {
        "placa": "QNN5778",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 618.87"
    },
    {
        "placa": "QRC0917",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 942.56"
    },
    {
        "placa": "ODS8398",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 151.47"
    },
    {
        "placa": "ODK9040",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 279.03"
    },
    {
        "placa": "PPV3922",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 805.05"
    },
    {
        "placa": "MTW7394",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 385.50"
    },
    {
        "placa": "ODG1791",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 480.21"
    },
    {
        "placa": "PPD0847",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 456.08"
    },
    {
        "placa": "FCO3908",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 653.25"
    },
    {
        "placa": "PPB4021",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 263.98"
    },
    {
        "placa": "OYF4944",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 291.79"
    },
    {
        "placa": "OYG1205",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1048.77"
    },
    {
        "placa": "PPN2471",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1145.86"
    },
    {
        "placa": "MQC1355",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 487.34"
    },
    {
        "placa": "MTX2256",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 571.82"
    },
    {
        "placa": "PAC2343",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 531.09"
    },
    {
        "placa": "PPU8237",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 221.91"
    },
    {
        "placa": "OVE4404",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 501.92"
    },
    {
        "placa": "MSX2549",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 803.89"
    },
    {
        "placa": "PPP4869",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 706.63"
    },
    {
        "placa": "MPC2008",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 964.77"
    },
    {
        "placa": "AYH3828",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 912.35"
    },
    {
        "placa": "PPH4925",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 622.61"
    },
    {
        "placa": "PPR3512",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1064.49"
    },
    {
        "placa": "PPP4521",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 783.52"
    },
    {
        "placa": "MQP3776",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 481.48"
    },
    {
        "placa": "OYK7770",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 228.59"
    },
    {
        "placa": "PPK0655",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 856.84"
    },
    {
        "placa": "PPP9312",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 401.44"
    },
    {
        "placa": "OYE0246",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 804.92"
    },
    {
        "placa": "PPW3176",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1178.77"
    },
    {
        "placa": "PAF3507",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 911.49"
    },
    {
        "placa": "MTI4774",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 624.60"
    },
    {
        "placa": "OVI1809",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 558.47"
    },
    {
        "placa": "MRY7955",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 44.09"
    },
    {
        "placa": "PPW0050",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 740.07"
    },
    {
        "placa": "ODG5897",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 457.00"
    },
    {
        "placa": "POQ2469",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1135.42"
    },
    {
        "placa": "HNC5286",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 544.65"
    },
    {
        "placa": "OYH2625",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1175.20"
    },
    {
        "placa": "MTG8276",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 69.38"
    },
    {
        "placa": "PPP1397",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1122.57"
    },
    {
        "placa": "KRX4658",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 152.83"
    },
    {
        "placa": "PPW6402",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1098.40"
    },
    {
        "placa": "MSH4937",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 434.47"
    },
    {
        "placa": "MTW7816",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 252.25"
    },
    {
        "placa": "MPL8325",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 325.58"
    },
    {
        "placa": "OVH1838",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1128.96"
    },
    {
        "placa": "MTZ6794",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 964.57"
    },
    {
        "placa": "PPO1167",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 263.38"
    },
    {
        "placa": "PPP8761",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 59.12"
    },
    {
        "placa": "OVF4736",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 613.41"
    },
    {
        "placa": "ODR1708",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 10.28"
    },
    {
        "placa": "QRC0463",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 226.08"
    },
    {
        "placa": "OCY5093",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 407.84"
    },
    {
        "placa": "ODR2162",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 105.32"
    },
    {
        "placa": "MQL9741",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 302.34"
    },
    {
        "placa": "PPJ2466",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1047.89"
    },
    {
        "placa": "ODR3892",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 104.74"
    },
    {
        "placa": "QRD7267",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 734.00"
    },
    {
        "placa": "QRD5034",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 325.35"
    },
    {
        "placa": "ODT6472",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 645.89"
    },
    {
        "placa": "MQF7485",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1127.62"
    },
    {
        "placa": "OVE8718",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 364.05"
    },
    {
        "placa": "PPK7880",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 373.78"
    },
    {
        "placa": "MSN8166",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 899.89"
    },
    {
        "placa": "ODT7221",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 60.06"
    },
    {
        "placa": "MPE1118",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 328.42"
    },
    {
        "placa": "MTZ9687",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 675.52"
    },
    {
        "placa": "ODS6175",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 233.81"
    },
    {
        "placa": "PPP5853",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 181.20"
    },
    {
        "placa": "OVF6264",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 427.16"
    },
    {
        "placa": "OVL5358",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 510.32"
    },
    {
        "placa": "PPS6649",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 595.12"
    },
    {
        "placa": "ODE4548",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 621.20"
    },
    {
        "placa": "MQN1780",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 809.70"
    },
    {
        "placa": "MTY5346",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 454.83"
    },
    {
        "placa": "ODR1805",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 793.45"
    },
    {
        "placa": "ODQ5904",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 801.43"
    },
    {
        "placa": "MSB8495",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 967.45"
    },
    {
        "placa": "ODT6185",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1047.68"
    },
    {
        "placa": "OVE2120",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1083.10"
    },
    {
        "placa": "PPA2373",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1169.32"
    },
    {
        "placa": "MTZ6860",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 216.98"
    },
    {
        "placa": "MTZ8620",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 345.36"
    },
    {
        "placa": "KXQ9069",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 249.60"
    },
    {
        "placa": "PPP4197",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 416.54"
    },
    {
        "placa": "ODG3139",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1076.25"
    },
    {
        "placa": "MST1875",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 392.46"
    },
    {
        "placa": "ODG3992",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 773.40"
    },
    {
        "placa": "PPS5641",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1108.69"
    },
    {
        "placa": "QRD1769",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 413.25"
    },
    {
        "placa": "PPH1418",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 101.76"
    },
    {
        "placa": "PPP4789",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 964.92"
    },
    {
        "placa": "ORB3168",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 773.78"
    },
    {
        "placa": "ODO9889",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 985.87"
    },
    {
        "placa": "MQF4262",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 979.41"
    },
    {
        "placa": "PUK3709",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 827.89"
    },
    {
        "placa": "PPP4766",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 619.85"
    },
    {
        "placa": "PPC9428",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 74.09"
    },
    {
        "placa": "OVF6317",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 365.02"
    },
    {
        "placa": "PPP9789",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 510.12"
    },
    {
        "placa": "HJJ5756",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 840.26"
    },
    {
        "placa": "OYD0023",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 19.49"
    },
    {
        "placa": "OYK7721",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 546.86"
    },
    {
        "placa": "POU5490",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 135.28"
    },
    {
        "placa": "PPS4432",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1076.58"
    },
    {
        "placa": "ODR1583",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 135.08"
    },
    {
        "placa": "PPO8331",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 705.83"
    },
    {
        "placa": "PPM2271",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 690.88"
    },
    {
        "placa": "PPB1525",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 994.13"
    },
    {
        "placa": "OVI8531",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1146.44"
    },
    {
        "placa": "LRY9368",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 484.17"
    },
    {
        "placa": "PPZ9321",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 677.58"
    },
    {
        "placa": "MTA1883",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 96.72"
    },
    {
        "placa": "PPP5412",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 372.62"
    },
    {
        "placa": "ODS2167",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1033.67"
    },
    {
        "placa": "PPP9633",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 148.69"
    },
    {
        "placa": "MRY3349",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 341.30"
    },
    {
        "placa": "PPO0839",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1098.16"
    },
    {
        "placa": "EPK6958",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 999.15"
    },
    {
        "placa": "MSP1487",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 406.30"
    },
    {
        "placa": "MRV6732",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 471.18"
    },
    {
        "placa": "PVU3264",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 713.96"
    },
    {
        "placa": "KQF4385",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 166.67"
    },
    {
        "placa": "MTB2142",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 394.27"
    },
    {
        "placa": "MTE0896",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 848.66"
    },
    {
        "placa": "OVK3121",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 734.66"
    },
    {
        "placa": "MTB4715",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 90.41"
    },
    {
        "placa": "ODR4369",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1135.22"
    },
    {
        "placa": "OYE4641",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 621.95"
    },
    {
        "placa": "PPG4180",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 947.83"
    },
    {
        "placa": "OKL2076",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 983.49"
    },
    {
        "placa": "OVH4054",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 395.37"
    },
    {
        "placa": "OYK7720",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 460.82"
    },
    {
        "placa": "ODE4816",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 428.11"
    },
    {
        "placa": "OCV6649",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1055.11"
    },
    {
        "placa": "PPT9635",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 808.11"
    },
    {
        "placa": "DDO2680",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1018.96"
    },
    {
        "placa": "PPX2707",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 772.60"
    },
    {
        "placa": "PPY4366",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 491.27"
    },
    {
        "placa": "MTH5431",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1102.16"
    },
    {
        "placa": "PPP4625",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1007.07"
    },
    {
        "placa": "QRC3727",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 229.55"
    },
    {
        "placa": "PPG5552",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 789.84"
    },
    {
        "placa": "PPW6404",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 166.91"
    },
    {
        "placa": "FJA8105",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 350.30"
    },
    {
        "placa": "QOE1909",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 892.13"
    },
    {
        "placa": "PPM3001",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1033.70"
    },
    {
        "placa": "PPP8021",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 437.49"
    },
    {
        "placa": "PPP4302",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 329.04"
    },
    {
        "placa": "PPW1955",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 268.03"
    },
    {
        "placa": "PPN9005",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 701.91"
    },
    {
        "placa": "OYG2548",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 410.18"
    },
    {
        "placa": "PPZ9136",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 822.33"
    },
    {
        "placa": "OVF6909",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 696.99"
    },
    {
        "placa": "MTN9701",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 611.82"
    },
    {
        "placa": "OTT5977",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 765.40"
    },
    {
        "placa": "PPP3992",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 159.33"
    },
    {
        "placa": "ODR2159",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 969.33"
    },
    {
        "placa": "PPP4955",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 331.41"
    },
    {
        "placa": "QUM6264",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 419.85"
    },
    {
        "placa": "GYS3208",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 742.64"
    },
    {
        "placa": "MSA5334",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 208.75"
    },
    {
        "placa": "PAC2868",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 240.51"
    },
    {
        "placa": "ODQ9380",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 570.46"
    },
    {
        "placa": "MQI5104",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 931.26"
    },
    {
        "placa": "MTZ7504",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 868.77"
    },
    {
        "placa": "PPZ9124",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1119.93"
    },
    {
        "placa": "ODT6217",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 780.46"
    },
    {
        "placa": "PPL5934",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 57.88"
    },
    {
        "placa": "DRU0900",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 102.29"
    },
    {
        "placa": "OVK8324",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 40.08"
    },
    {
        "placa": "ODH4015",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 860.00"
    },
    {
        "placa": "PPP2642",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 763.51"
    },
    {
        "placa": "ODM0548",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 136.51"
    },
    {
        "placa": "MRT2203",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 495.69"
    },
    {
        "placa": "OYH9089",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 154.65"
    },
    {
        "placa": "LRE2424",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1169.48"
    },
    {
        "placa": "OYG3459",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 260.98"
    },
    {
        "placa": "PPA0934",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 92.45"
    },
    {
        "placa": "MSR6511",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 412.52"
    },
    {
        "placa": "ODT6149",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 829.38"
    },
    {
        "placa": "ODS3172",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 526.87"
    },
    {
        "placa": "PPL8393",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 406.98"
    },
    {
        "placa": "PPT9261",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 55.19"
    },
    {
        "placa": "QRD3044",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1076.27"
    },
    {
        "placa": "QRB2775",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 152.13"
    },
    {
        "placa": "QRD1619",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 460.48"
    },
    {
        "placa": "MTF9808",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 11.45"
    },
    {
        "placa": "PPL8682",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 197.81"
    },
    {
        "placa": "OCZ9247",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 995.12"
    },
    {
        "placa": "ODT7395",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 609.09"
    },
    {
        "placa": "PPA9043",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 955.68"
    },
    {
        "placa": "PPC4281",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 311.38"
    },
    {
        "placa": "PPK9896",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 811.39"
    },
    {
        "placa": "MSZ7325",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 612.30"
    },
    {
        "placa": "DOO0157",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 282.50"
    },
    {
        "placa": "OCY5190",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 580.46"
    },
    {
        "placa": "PXL8620",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1053.50"
    },
    {
        "placa": "PPA8552",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1088.13"
    },
    {
        "placa": "PVI5901",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 768.25"
    },
    {
        "placa": "PPV8721",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1051.36"
    },
    {
        "placa": "OYJ6856",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 30.49"
    },
    {
        "placa": "MTS3329",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1197.42"
    },
    {
        "placa": "MTL5802",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1195.05"
    },
    {
        "placa": "QRC0727",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 327.88"
    },
    {
        "placa": "OYK7514",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 836.48"
    },
    {
        "placa": "HJT6532",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 621.82"
    },
    {
        "placa": "ODS6953",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 500.32"
    },
    {
        "placa": "PPH7380",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 503.37"
    },
    {
        "placa": "OMH2663",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 221.52"
    },
    {
        "placa": "ODS3821",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 544.29"
    },
    {
        "placa": "PVS4028",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 207.42"
    },
    {
        "placa": "JWY4148",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 606.12"
    },
    {
        "placa": "ODN5899",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 691.04"
    },
    {
        "placa": "MTW3128",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 881.86"
    },
    {
        "placa": "MTY6419",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 789.84"
    },
    {
        "placa": "PPI8000",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 105.04"
    },
    {
        "placa": "ODR7843",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 194.47"
    },
    {
        "placa": "MQU8858",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1192.41"
    },
    {
        "placa": "PPO9498",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 259.01"
    },
    {
        "placa": "ODQ9376",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 598.04"
    },
    {
        "placa": "QRD2971",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 172.38"
    },
    {
        "placa": "PPC5253",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 59.96"
    },
    {
        "placa": "ODT6179",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 96.23"
    },
    {
        "placa": "PPE4457",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1103.36"
    },
    {
        "placa": "MTZ3672",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 48.58"
    },
    {
        "placa": "KVT5141",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 959.80"
    },
    {
        "placa": "PPW1121",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 775.38"
    },
    {
        "placa": "OVF6153",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 427.25"
    },
    {
        "placa": "ODQ9368",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1176.73"
    },
    {
        "placa": "OKZ6723",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1178.73"
    },
    {
        "placa": "OVF6261",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 864.38"
    },
    {
        "placa": "PPT7096",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 604.31"
    },
    {
        "placa": "MSE4881",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 532.40"
    },
    {
        "placa": "PPZ9126",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 748.79"
    },
    {
        "placa": "MOX2291",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 734.01"
    },
    {
        "placa": "OYK4283",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 373.29"
    },
    {
        "placa": "PPX4020",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1152.87"
    },
    {
        "placa": "PVJ1062",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 374.14"
    },
    {
        "placa": "MPB0290",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 766.26"
    },
    {
        "placa": "MHN2867",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 238.34"
    },
    {
        "placa": "JKO9758",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 321.46"
    },
    {
        "placa": "ODT6139",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 316.98"
    },
    {
        "placa": "PPZ2419",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 594.57"
    },
    {
        "placa": "ODF5761",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 77.20"
    },
    {
        "placa": "MQU4192",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 181.36"
    },
    {
        "placa": "OVE9965",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 174.49"
    },
    {
        "placa": "ODS4069",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 774.38"
    },
    {
        "placa": "MPM9202",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 82.55"
    },
    {
        "placa": "OPQ3943",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 207.84"
    },
    {
        "placa": "FPT2388",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 438.51"
    },
    {
        "placa": "MTY1273",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 473.07"
    },
    {
        "placa": "PPI4828",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1118.23"
    },
    {
        "placa": "OAU8499",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1184.21"
    },
    {
        "placa": "PPP2841",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 576.11"
    },
    {
        "placa": "ODR8310",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 762.78"
    },
    {
        "placa": "PPL6230",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 816.87"
    },
    {
        "placa": "HDK6742",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 353.32"
    },
    {
        "placa": "QPO2337",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 261.08"
    },
    {
        "placa": "PPZ2430",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 63.12"
    },
    {
        "placa": "MTU7718",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1048.41"
    },
    {
        "placa": "ODO0222",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 274.73"
    },
    {
        "placa": "PPM2605",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 914.94"
    },
    {
        "placa": "ODL2854",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 488.02"
    },
    {
        "placa": "ODD7312",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 651.38"
    },
    {
        "placa": "MTE0324",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 140.71"
    },
    {
        "placa": "PPJ4025",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 931.63"
    },
    {
        "placa": "MQJ5895",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 400.18"
    },
    {
        "placa": "MQM4744",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 223.55"
    },
    {
        "placa": "OYF7863",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 911.66"
    },
    {
        "placa": "EVA6236",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 536.70"
    },
    {
        "placa": "PPF3778",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 822.52"
    },
    {
        "placa": "PPK1316",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1021.63"
    },
    {
        "placa": "OCZ8482",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 141.06"
    },
    {
        "placa": "QPY0584",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 857.93"
    },
    {
        "placa": "OYJ3904",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 508.00"
    },
    {
        "placa": "MTA6166",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 0.33"
    },
    {
        "placa": "ODE8182",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 852.36"
    },
    {
        "placa": "ODG3046",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 294.74"
    },
    {
        "placa": "PPD9936",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 760.36"
    },
    {
        "placa": "MSS7380",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 680.63"
    },
    {
        "placa": "JHZ0352",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 832.38"
    },
    {
        "placa": "PPX4049",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 248.04"
    },
    {
        "placa": "MRN2932",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 50.47"
    },
    {
        "placa": "ODO2523",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 46.77"
    },
    {
        "placa": "PPB5741",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 943.28"
    },
    {
        "placa": "PPC9436",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 476.41"
    },
    {
        "placa": "MSP6328",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 34.77"
    },
    {
        "placa": "OVF6833",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1031.85"
    },
    {
        "placa": "EME1668",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 908.18"
    },
    {
        "placa": "MSP3357",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 709.39"
    },
    {
        "placa": "JPY8429",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 308.33"
    },
    {
        "placa": "MTZ8680",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 350.90"
    },
    {
        "placa": "EIB7543",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 929.01"
    },
    {
        "placa": "KZS7719",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 597.47"
    },
    {
        "placa": "ODR9834",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1191.45"
    },
    {
        "placa": "PPU6314",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 421.34"
    },
    {
        "placa": "PPW7569",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 993.75"
    },
    {
        "placa": "MTU0474",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 31.21"
    },
    {
        "placa": "ODK8364",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 817.75"
    },
    {
        "placa": "QRD0796",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 43.81"
    },
    {
        "placa": "FLO2110",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 581.32"
    },
    {
        "placa": "LKP2851",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 831.64"
    },
    {
        "placa": "MSU5804",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 71.02"
    },
    {
        "placa": "MTW1030",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 0.95"
    },
    {
        "placa": "PPW8965",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 884.78"
    },
    {
        "placa": "MQZ4551",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 229.91"
    },
    {
        "placa": "MTT0717",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1071.43"
    },
    {
        "placa": "ODS9679",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 427.56"
    },
    {
        "placa": "MQP3411",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 125.87"
    },
    {
        "placa": "MQJ7618",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 790.19"
    },
    {
        "placa": "HBR4108",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 982.56"
    },
    {
        "placa": "MRT2430",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 527.79"
    },
    {
        "placa": "MPT3174",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 660.08"
    },
    {
        "placa": "ODA9324",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 844.57"
    },
    {
        "placa": "ODT3410",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 935.80"
    },
    {
        "placa": "MRD3230",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 425.61"
    },
    {
        "placa": "ODK1589",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 530.30"
    },
    {
        "placa": "OYG3795",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 660.72"
    },
    {
        "placa": "FBT6969",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 257.68"
    },
    {
        "placa": "LRX0573",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1134.20"
    },
    {
        "placa": "GCT7357",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 178.73"
    },
    {
        "placa": "JPE2677",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 17.22"
    },
    {
        "placa": "PPI2537",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 299.13"
    },
    {
        "placa": "MRZ0866",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 55.00"
    },
    {
        "placa": "MSJ2926",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1194.84"
    },
    {
        "placa": "MQS8963",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 87.77"
    },
    {
        "placa": "KRN5890",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 340.64"
    },
    {
        "placa": "MST3381",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1012.81"
    },
    {
        "placa": "PPF2550",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 272.13"
    },
    {
        "placa": "MPK0306",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 316.88"
    },
    {
        "placa": "PPD9475",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 680.16"
    },
    {
        "placa": "PPZ5459",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 420.90"
    },
    {
        "placa": "OVH1014",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 804.72"
    },
    {
        "placa": "PPB7055",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1097.67"
    },
    {
        "placa": "PPU6461",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 559.22"
    },
    {
        "placa": "MPP4198",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 754.86"
    },
    {
        "placa": "QRB7717",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1046.52"
    },
    {
        "placa": "PPF8599",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1157.53"
    },
    {
        "placa": "OYH3829",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 381.65"
    },
    {
        "placa": "MTM6554",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1005.01"
    },
    {
        "placa": "DOR2030",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 469.01"
    },
    {
        "placa": "ODE3540",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 447.43"
    },
    {
        "placa": "MRD2754",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 637.32"
    },
    {
        "placa": "PPO1139",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 611.37"
    },
    {
        "placa": "KXK5188",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 742.93"
    },
    {
        "placa": "PPL5835",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 206.32"
    },
    {
        "placa": "OGJ1970",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 40.83"
    },
    {
        "placa": "QQB7715",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 139.68"
    },
    {
        "placa": "OFD3013",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 639.52"
    },
    {
        "placa": "OVE3767",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 667.94"
    },
    {
        "placa": "PPN6011",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 451.63"
    },
    {
        "placa": "PPW2175",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 390.72"
    },
    {
        "placa": "KMV4345",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1075.21"
    },
    {
        "placa": "LTA8105",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 256.19"
    },
    {
        "placa": "OYG3532",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 741.00"
    },
    {
        "placa": "OYI4004",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 654.28"
    },
    {
        "placa": "GQS3698",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 438.15"
    },
    {
        "placa": "PPY9880",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 65.47"
    },
    {
        "placa": "PPW2766",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 616.33"
    },
    {
        "placa": "PPB4562",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 85.13"
    },
    {
        "placa": "LTH6167",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1140.29"
    },
    {
        "placa": "JJJ0896",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 324.06"
    },
    {
        "placa": "PPV4400",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 876.83"
    },
    {
        "placa": "MQK5111",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 29.77"
    },
    {
        "placa": "MTS0601",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1120.73"
    },
    {
        "placa": "MTZ2972",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 458.89"
    },
    {
        "placa": "QUR8553",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 653.52"
    },
    {
        "placa": "PPY0074",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 54.95"
    },
    {
        "placa": "OYI9872",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 897.86"
    },
    {
        "placa": "MTV0022",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 205.44"
    },
    {
        "placa": "GZE6588",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 206.74"
    },
    {
        "placa": "PPJ1068",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 303.24"
    },
    {
        "placa": "PPV0119",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 71.25"
    },
    {
        "placa": "QNI5581",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 864.07"
    },
    {
        "placa": "MTQ5314",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1058.46"
    },
    {
        "placa": "MPJ6102",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1067.99"
    },
    {
        "placa": "PPM7718",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 506.33"
    },
    {
        "placa": "ODM9838",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1126.95"
    },
    {
        "placa": "PPO5136",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 850.46"
    },
    {
        "placa": "LST6525",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 501.96"
    },
    {
        "placa": "MRQ6870",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1031.70"
    },
    {
        "placa": "MRZ1196",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 213.03"
    },
    {
        "placa": "ODF1100",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 887.82"
    },
    {
        "placa": "OYK0882",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 16.71"
    },
    {
        "placa": "PPT5330",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 570.47"
    },
    {
        "placa": "PXD1027",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 536.05"
    },
    {
        "placa": "ODR9708",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 419.36"
    },
    {
        "placa": "ODQ6958",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 123.27"
    },
    {
        "placa": "OYE7884",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1127.71"
    },
    {
        "placa": "ODF2508",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 933.15"
    },
    {
        "placa": "ODI7421",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 498.28"
    },
    {
        "placa": "PPF7141",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 104.38"
    },
    {
        "placa": "OVL4105",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1105.25"
    },
    {
        "placa": "OMG9116",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 321.66"
    },
    {
        "placa": "PPL8103",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 818.70"
    },
    {
        "placa": "PPV6702",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 237.61"
    },
    {
        "placa": "MSS1325",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 14.60"
    },
    {
        "placa": "MTB4022",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1138.63"
    },
    {
        "placa": "MTO4906",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 598.55"
    },
    {
        "placa": "LQK5731",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 976.91"
    },
    {
        "placa": "ODK9096",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 787.43"
    },
    {
        "placa": "OYJ3195",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 729.77"
    },
    {
        "placa": "NOZ6127",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1171.12"
    },
    {
        "placa": "MJD4789",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 569.78"
    },
    {
        "placa": "ODK0944",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 861.17"
    },
    {
        "placa": "AMY4727",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 118.10"
    },
    {
        "placa": "ODG4351",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1002.53"
    },
    {
        "placa": "KRX4720",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 574.66"
    },
    {
        "placa": "FWI2379",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1031.11"
    },
    {
        "placa": "MHG7583",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 745.43"
    },
    {
        "placa": "OFQ9844",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 814.32"
    },
    {
        "placa": "KYE4676",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1190.00"
    },
    {
        "placa": "MOR2356",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 37.12"
    },
    {
        "placa": "PPR6116",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 8.17"
    },
    {
        "placa": "MPT6696",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 660.10"
    },
    {
        "placa": "ODC6250",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 294.70"
    },
    {
        "placa": "LSO9405",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 992.79"
    },
    {
        "placa": "ODC0003",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 144.18"
    },
    {
        "placa": "PPN9199",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1063.48"
    },
    {
        "placa": "QQA4798",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 486.79"
    },
    {
        "placa": "PAG4933",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 603.20"
    },
    {
        "placa": "OVL6005",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 804.65"
    },
    {
        "placa": "EQT0490",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 753.79"
    },
    {
        "placa": "OYF4038",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 967.75"
    },
    {
        "placa": "OYI6109",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 400.07"
    },
    {
        "placa": "PPP0105",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 358.06"
    },
    {
        "placa": "LME8233",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 134.96"
    },
    {
        "placa": "KVG1425",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 249.97"
    },
    {
        "placa": "ODM3765",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 208.69"
    },
    {
        "placa": "PPT2997",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 229.12"
    },
    {
        "placa": "ODK3234",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 898.86"
    },
    {
        "placa": "MSW4228",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 946.17"
    },
    {
        "placa": "MTM4050",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 636.95"
    },
    {
        "placa": "PPY1420",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 950.89"
    },
    {
        "placa": "PPA3624",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 429.96"
    },
    {
        "placa": "ODM8539",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1145.61"
    },
    {
        "placa": "PPY8837",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 345.50"
    },
    {
        "placa": "LOO2541",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1152.04"
    },
    {
        "placa": "ODQ6655",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 849.16"
    },
    {
        "placa": "MQM0465",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 81.80"
    },
    {
        "placa": "MTX4895",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 900.31"
    },
    {
        "placa": "LPD1908",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 787.16"
    },
    {
        "placa": "MTC2892",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 804.37"
    },
    {
        "placa": "PXL5988",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 797.03"
    },
    {
        "placa": "JIG2094",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1162.88"
    },
    {
        "placa": "JHT7994",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 34.27"
    },
    {
        "placa": "MTA6905",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 45.16"
    },
    {
        "placa": "KWR7345",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 264.11"
    },
    {
        "placa": "ODK0930",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 873.38"
    },
    {
        "placa": "PPD1009",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 496.21"
    },
    {
        "placa": "KWD7660",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 170.79"
    },
    {
        "placa": "KYZ9625",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1017.23"
    },
    {
        "placa": "MTF1823",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1160.68"
    },
    {
        "placa": "MQQ7117",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 765.58"
    },
    {
        "placa": "DGA9115",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 826.50"
    },
    {
        "placa": "MQV5881",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 318.03"
    },
    {
        "placa": "ODL1997",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1044.84"
    },
    {
        "placa": "MPB2848",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 888.90"
    },
    {
        "placa": "EBA9320",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 223.51"
    },
    {
        "placa": "MSY5841",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 838.48"
    },
    {
        "placa": "KOX2814",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 691.47"
    },
    {
        "placa": "OUV7590",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 303.65"
    },
    {
        "placa": "QRD6529",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 859.46"
    },
    {
        "placa": "MTS4169",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 364.42"
    },
    {
        "placa": "ODP4300",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 261.07"
    },
    {
        "placa": "MRE8327",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 864.55"
    },
    {
        "placa": "KJF9722",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 18.37"
    },
    {
        "placa": "MSK0430",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 920.63"
    },
    {
        "placa": "MPK3827",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 164.72"
    },
    {
        "placa": "MTS5534",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 606.67"
    },
    {
        "placa": "PPG6826",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 278.06"
    },
    {
        "placa": "FPB2742",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 784.34"
    },
    {
        "placa": "OYG3856",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1050.64"
    },
    {
        "placa": "MTY3272",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 543.05"
    },
    {
        "placa": "HDR5451",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 556.28"
    },
    {
        "placa": "OVH0618",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 39.26"
    },
    {
        "placa": "PPD2507",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 546.52"
    },
    {
        "placa": "OVI2024",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 622.72"
    },
    {
        "placa": "NXZ9695",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 13.28"
    },
    {
        "placa": "PPA4081",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 922.38"
    },
    {
        "placa": "PPY7889",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1099.00"
    },
    {
        "placa": "PPP7851",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 49.54"
    },
    {
        "placa": "QNO5662",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 585.06"
    },
    {
        "placa": "PPK9922",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1067.85"
    },
    {
        "placa": "MPO3605",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 923.29"
    },
    {
        "placa": "LRW8742",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1103.08"
    },
    {
        "placa": "PPH0682",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 14.77"
    },
    {
        "placa": "MPL3243",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 220.17"
    },
    {
        "placa": "QRB8270",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1042.40"
    },
    {
        "placa": "FJC3472",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 558.10"
    },
    {
        "placa": "MSH4776",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 202.51"
    },
    {
        "placa": "MTR2201",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 672.83"
    },
    {
        "placa": "ODD7325",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 465.82"
    },
    {
        "placa": "OQJ2254",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1108.93"
    },
    {
        "placa": "LSB4203",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 233.67"
    },
    {
        "placa": "JHC0151",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1.67"
    },
    {
        "placa": "PPC7653",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 680.33"
    },
    {
        "placa": "OYI4952",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 6.28"
    },
    {
        "placa": "MSU0364",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 146.58"
    },
    {
        "placa": "ODQ4490",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 101.24"
    },
    {
        "placa": "MTL8146",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1145.63"
    },
    {
        "placa": "HCH2010",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 810.98"
    },
    {
        "placa": "KVD6643",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1113.06"
    },
    {
        "placa": "PPJ1151",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 152.89"
    },
    {
        "placa": "FQZ8341",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 0.28"
    },
    {
        "placa": "PPD8443",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 922.14"
    },
    {
        "placa": "MTD9587",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 804.96"
    },
    {
        "placa": "MQF9992",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 798.83"
    },
    {
        "placa": "PPR0808",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 669.08"
    },
    {
        "placa": "KXS4485",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 936.50"
    },
    {
        "placa": "MRF8628",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 476.63"
    },
    {
        "placa": "MRX5757",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 947.47"
    },
    {
        "placa": "QOZ6776",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 799.08"
    },
    {
        "placa": "OYE7896",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 85.64"
    },
    {
        "placa": "OVJ4890",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 894.58"
    },
    {
        "placa": "MQO1197",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 827.49"
    },
    {
        "placa": "PPM1238",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 921.04"
    },
    {
        "placa": "MTT8575",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1171.43"
    },
    {
        "placa": "KPH8532",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 186.37"
    },
    {
        "placa": "ODS8457",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 161.69"
    },
    {
        "placa": "MSN9151",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 315.80"
    },
    {
        "placa": "OVF6191",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 501.39"
    },
    {
        "placa": "QRC8128",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1084.02"
    },
    {
        "placa": "PPD6888",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 838.45"
    },
    {
        "placa": "LLW1513",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 926.30"
    },
    {
        "placa": "PPV5029",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 235.53"
    },
    {
        "placa": "MSI6626",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1107.91"
    },
    {
        "placa": "ODC5618",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 560.45"
    },
    {
        "placa": "OVH9811",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 596.66"
    },
    {
        "placa": "OYF8679",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 346.72"
    },
    {
        "placa": "MTM8025",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 96.07"
    },
    {
        "placa": "PPL4836",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1.41"
    },
    {
        "placa": "PPQ9635",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 951.20"
    },
    {
        "placa": "DMC3433",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 299.02"
    },
    {
        "placa": "ODH3771",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1173.08"
    },
    {
        "placa": "PXD5882",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1031.44"
    },
    {
        "placa": "BCH9517",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1135.61"
    },
    {
        "placa": "QPZ5133",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 575.06"
    },
    {
        "placa": "KRB7880",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1119.52"
    },
    {
        "placa": "QOJ3254",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 503.30"
    },
    {
        "placa": "OCV6548",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1182.25"
    },
    {
        "placa": "PPM7665",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1009.06"
    },
    {
        "placa": "ODR7766",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 891.18"
    },
    {
        "placa": "MSR0391",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1018.92"
    },
    {
        "placa": "PPU3769",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 189.91"
    },
    {
        "placa": "QUE5368",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 745.61"
    },
    {
        "placa": "EIF1513",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 323.52"
    },
    {
        "placa": "JMI3822",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 306.82"
    },
    {
        "placa": "MTV0562",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1175.96"
    },
    {
        "placa": "QQO4994",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 282.76"
    },
    {
        "placa": "MQV5571",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 478.68"
    },
    {
        "placa": "ODJ0355",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 682.20"
    },
    {
        "placa": "PPP8104",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1168.69"
    },
    {
        "placa": "MTW8186",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 296.65"
    },
    {
        "placa": "LRL5650",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 173.15"
    },
    {
        "placa": "MTB6924",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 973.65"
    },
    {
        "placa": "MSG6917",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 755.97"
    },
    {
        "placa": "LQH6516",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 621.29"
    },
    {
        "placa": "MRP3988",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 556.60"
    },
    {
        "placa": "PKH8725",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 237.74"
    },
    {
        "placa": "IGY3945",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 99.08"
    },
    {
        "placa": "HMZ1538",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 300.31"
    },
    {
        "placa": "MTX2227",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 43.39"
    },
    {
        "placa": "ODE3260",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 589.79"
    },
    {
        "placa": "PEC1230",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1160.02"
    },
    {
        "placa": "ODN5986",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 766.47"
    },
    {
        "placa": "ENC3810",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1186.09"
    },
    {
        "placa": "KQF8012",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1153.78"
    },
    {
        "placa": "MQQ5553",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 519.95"
    },
    {
        "placa": "LOL5949",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 140.80"
    },
    {
        "placa": "MTW0226",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 408.86"
    },
    {
        "placa": "PPH4574",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 373.66"
    },
    {
        "placa": "PPZ5659",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 873.24"
    },
    {
        "placa": "LQM6568",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1013.52"
    },
    {
        "placa": "OVE5365",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 460.57"
    },
    {
        "placa": "KVW1516",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 72.82"
    },
    {
        "placa": "HMT9147",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1186.46"
    },
    {
        "placa": "OYJ7861",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 680.23"
    },
    {
        "placa": "PPJ1029",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 719.52"
    },
    {
        "placa": "PPP1881",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 548.04"
    },
    {
        "placa": "PPM6755",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 90.71"
    },
    {
        "placa": "HNM8279",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 605.51"
    },
    {
        "placa": "MSV9304",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 96.00"
    },
    {
        "placa": "OVI1745",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 62.56"
    },
    {
        "placa": "LTZ5301",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 961.92"
    },
    {
        "placa": "ODN1777",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 139.94"
    },
    {
        "placa": "PPA9918",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 626.36"
    },
    {
        "placa": "ODE6789",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1057.97"
    },
    {
        "placa": "MSY2288",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 189.57"
    },
    {
        "placa": "MSY6522",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 359.02"
    },
    {
        "placa": "PPK5450",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 218.90"
    },
    {
        "placa": "MTV8795",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 182.95"
    },
    {
        "placa": "OVH1694",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1169.62"
    },
    {
        "placa": "MSC6969",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 60.79"
    },
    {
        "placa": "MSL0095",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 362.75"
    },
    {
        "placa": "ODL6484",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1144.81"
    },
    {
        "placa": "QQY3281",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 853.21"
    },
    {
        "placa": "PPI8523",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 453.07"
    },
    {
        "placa": "QRC1036",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 361.80"
    },
    {
        "placa": "OQT1172",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1000.29"
    },
    {
        "placa": "PPX0685",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 838.42"
    },
    {
        "placa": "QUF5789",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1070.06"
    },
    {
        "placa": "MTT9429",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 317.89"
    },
    {
        "placa": "LUH3760",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 299.54"
    },
    {
        "placa": "AYV6187",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 17.59"
    },
    {
        "placa": "EVG8074",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 344.87"
    },
    {
        "placa": "MRR2523",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 41.68"
    },
    {
        "placa": "MPI6793",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 575.87"
    },
    {
        "placa": "ODE2000",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 756.82"
    },
    {
        "placa": "OPR0041",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1005.91"
    },
    {
        "placa": "MTD5777",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 142.78"
    },
    {
        "placa": "LOT7559",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 499.08"
    },
    {
        "placa": "ODK7860",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 360.76"
    },
    {
        "placa": "OSS4409",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1186.74"
    },
    {
        "placa": "IUE7829",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 161.42"
    },
    {
        "placa": "LQH9876",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1146.30"
    },
    {
        "placa": "PPM3006",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 608.73"
    },
    {
        "placa": "KYR2071",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 519.10"
    },
    {
        "placa": "MSU6045",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 592.60"
    },
    {
        "placa": "MPP2619",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 879.02"
    },
    {
        "placa": "OVK1635",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 70.01"
    },
    {
        "placa": "MQM8267",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 326.70"
    },
    {
        "placa": "PPC6528",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 751.02"
    },
    {
        "placa": "ANJ1023",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 915.41"
    },
    {
        "placa": "OKJ0979",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 610.27"
    },
    {
        "placa": "JPY2048",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 843.27"
    },
    {
        "placa": "MRK8744",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 910.61"
    },
    {
        "placa": "HGQ8164",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 147.06"
    },
    {
        "placa": "MTT1750",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 782.05"
    },
    {
        "placa": "MQJ9338",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 513.25"
    },
    {
        "placa": "PPY3354",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 525.00"
    },
    {
        "placa": "NZS9628",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1050.89"
    },
    {
        "placa": "KVI5131",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1059.13"
    },
    {
        "placa": "MPR6555",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 358.53"
    },
    {
        "placa": "PPD1667",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 879.65"
    },
    {
        "placa": "MRP4490",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 747.70"
    },
    {
        "placa": "LOR8767",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 959.58"
    },
    {
        "placa": "KNQ0954",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1067.52"
    },
    {
        "placa": "AMY7325",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 34.21"
    },
    {
        "placa": "PWA6022",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 522.95"
    },
    {
        "placa": "MQB3076",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 101.70"
    },
    {
        "placa": "GVP2675",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 249.21"
    },
    {
        "placa": "PPS6712",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 735.32"
    },
    {
        "placa": "MTS3127",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 421.68"
    },
    {
        "placa": "MRB4275",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 692.97"
    },
    {
        "placa": "OVF9161",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 414.74"
    },
    {
        "placa": "MSK5805",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 341.83"
    },
    {
        "placa": "PPW2994",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 513.78"
    },
    {
        "placa": "OCZ2157",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 103.26"
    },
    {
        "placa": "MTW3134",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 272.76"
    },
    {
        "placa": "MSI8207",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1076.69"
    },
    {
        "placa": "OYJ1470",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 736.79"
    },
    {
        "placa": "OYD9607",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 16.11"
    },
    {
        "placa": "PPE0143",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 640.87"
    },
    {
        "placa": "ODI4731",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 790.77"
    },
    {
        "placa": "MTV9329",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1007.94"
    },
    {
        "placa": "PPY5459",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 222.77"
    },
    {
        "placa": "PXU7775",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 389.31"
    },
    {
        "placa": "LQP3298",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 703.46"
    },
    {
        "placa": "HXN0555",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 912.13"
    },
    {
        "placa": "ODP9719",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 952.97"
    },
    {
        "placa": "PLG8011",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1136.81"
    },
    {
        "placa": "MSX0755",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 763.51"
    },
    {
        "placa": "LRF1048",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 368.98"
    },
    {
        "placa": "MTH2345",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 840.80"
    },
    {
        "placa": "MSX4286",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 771.46"
    },
    {
        "placa": "MTS5282",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 265.64"
    },
    {
        "placa": "ODK1545",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1135.07"
    },
    {
        "placa": "OVL5278",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 9.52"
    },
    {
        "placa": "LQV7344",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 81.45"
    },
    {
        "placa": "NOD5387",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 37.98"
    },
    {
        "placa": "ODP6379",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1097.53"
    },
    {
        "placa": "PPO7765",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 372.15"
    },
    {
        "placa": "PPA3984",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 609.00"
    },
    {
        "placa": "DCD5637",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 532.15"
    },
    {
        "placa": "PVK1625",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1044.67"
    },
    {
        "placa": "MSI3444",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 40.05"
    },
    {
        "placa": "PPS1807",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 853.12"
    },
    {
        "placa": "PPZ9485",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 782.12"
    },
    {
        "placa": "OCZ5621",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 213.77"
    },
    {
        "placa": "PPB7254",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 162.21"
    },
    {
        "placa": "OVI9903",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1000.60"
    },
    {
        "placa": "KNZ6408",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 505.21"
    },
    {
        "placa": "QRB1831",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 9.41"
    },
    {
        "placa": "PPR6648",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 839.88"
    },
    {
        "placa": "QRB5872",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 636.78"
    },
    {
        "placa": "GWH3453",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 932.26"
    },
    {
        "placa": "HNK9935",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 781.49"
    },
    {
        "placa": "QNA0174",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1104.97"
    },
    {
        "placa": "MRX2138",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 650.85"
    },
    {
        "placa": "PYQ7502",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 628.03"
    },
    {
        "placa": "ODG6256",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1122.85"
    },
    {
        "placa": "ODC7888",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 572.02"
    },
    {
        "placa": "ODH6111",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 672.34"
    },
    {
        "placa": "AXZ5434",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 419.85"
    },
    {
        "placa": "MSS7130",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 83.95"
    },
    {
        "placa": "HJA9003",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1033.88"
    },
    {
        "placa": "OYH7658",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 196.66"
    },
    {
        "placa": "MRJ3434",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 578.92"
    },
    {
        "placa": "LOS0333",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 520.67"
    },
    {
        "placa": "OVH0023",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1135.13"
    },
    {
        "placa": "PPW3271",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 636.76"
    },
    {
        "placa": "MSZ2300",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 885.36"
    },
    {
        "placa": "QQO5014",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 608.72"
    },
    {
        "placa": "HDB9245",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 717.52"
    },
    {
        "placa": "MQN7966",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 929.39"
    },
    {
        "placa": "PPW2168",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 798.51"
    },
    {
        "placa": "ODR7678",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 992.38"
    },
    {
        "placa": "MQG0481",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1094.65"
    },
    {
        "placa": "OQF9803",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 58.94"
    },
    {
        "placa": "PPX9714",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 399.78"
    },
    {
        "placa": "OOX5557",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 996.75"
    },
    {
        "placa": "OYO5010",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 447.93"
    },
    {
        "placa": "PPJ6139",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 507.11"
    },
    {
        "placa": "OYG7855",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1180.25"
    },
    {
        "placa": "PPD0706",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 955.24"
    },
    {
        "placa": "ODI4419",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 341.38"
    },
    {
        "placa": "QRC7367",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 4.79"
    },
    {
        "placa": "MTX2278",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 440.02"
    },
    {
        "placa": "ODE8151",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 201.28"
    },
    {
        "placa": "MSD0588",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 773.46"
    },
    {
        "placa": "MTC9253",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 21.97"
    },
    {
        "placa": "PVY2016",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 573.92"
    },
    {
        "placa": "HEJ3855",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 579.50"
    },
    {
        "placa": "KVS9534",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 22.29"
    },
    {
        "placa": "OVJ1856",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 401.64"
    },
    {
        "placa": "OZN3816",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1034.14"
    },
    {
        "placa": "ODM5316",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1023.72"
    },
    {
        "placa": "OVO1820",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 156.06"
    },
    {
        "placa": "PWD8817",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1093.06"
    },
    {
        "placa": "NSO0791",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 766.97"
    },
    {
        "placa": "QUA4474",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 97.21"
    },
    {
        "placa": "QOX9943",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 92.20"
    },
    {
        "placa": "PPN5445",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 886.04"
    },
    {
        "placa": "OCW1462",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 904.85"
    },
    {
        "placa": "OVL7699",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 0.85"
    },
    {
        "placa": "PGY3439",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 506.83"
    },
    {
        "placa": "MTI4098",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 342.37"
    },
    {
        "placa": "ODJ8751",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 542.12"
    },
    {
        "placa": "OCW4796",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 4.98"
    },
    {
        "placa": "QQS1833",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1164.50"
    },
    {
        "placa": "MSW2688",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 429.51"
    },
    {
        "placa": "LOL1575",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 528.76"
    },
    {
        "placa": "ODD9240",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 869.21"
    },
    {
        "placa": "MSF8623",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 169.46"
    },
    {
        "placa": "MPK3952",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1072.63"
    },
    {
        "placa": "MSU5968",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 677.93"
    },
    {
        "placa": "OUW2684",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 39.02"
    },
    {
        "placa": "MQP8428",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 505.90"
    },
    {
        "placa": "ODC7533",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1077.28"
    },
    {
        "placa": "MTT5916",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 762.40"
    },
    {
        "placa": "BWE0715",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 812.12"
    },
    {
        "placa": "CVP8930",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 780.74"
    },
    {
        "placa": "OYK5541",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 730.57"
    },
    {
        "placa": "QPW7955",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 769.33"
    },
    {
        "placa": "PPW2262",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 494.93"
    },
    {
        "placa": "NYS3671",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 787.43"
    },
    {
        "placa": "ODM7844",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1030.90"
    },
    {
        "placa": "HBZ7660",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 839.19"
    },
    {
        "placa": "MSU6054",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 532.28"
    },
    {
        "placa": "IPR2535",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 708.67"
    },
    {
        "placa": "OLX8295",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 877.74"
    },
    {
        "placa": "QNV9350",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 875.42"
    },
    {
        "placa": "QNF1284",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 100.38"
    },
    {
        "placa": "OVF8538",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 560.30"
    },
    {
        "placa": "MQS8030",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 964.25"
    },
    {
        "placa": "MKI9203",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 63.39"
    },
    {
        "placa": "MQP6638",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 622.70"
    },
    {
        "placa": "MSR1128",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 218.76"
    },
    {
        "placa": "OYK3724",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 779.70"
    },
    {
        "placa": "LQD5360",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 552.49"
    },
    {
        "placa": "MTR7454",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1008.94"
    },
    {
        "placa": "MOX9885",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 601.40"
    },
    {
        "placa": "ODR4806",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 905.67"
    },
    {
        "placa": "OYD8919",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 294.80"
    },
    {
        "placa": "MOX7829",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 762.65"
    },
    {
        "placa": "ODA1127",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 906.25"
    },
    {
        "placa": "MCM0133",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 963.50"
    },
    {
        "placa": "PPC1037",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 161.30"
    },
    {
        "placa": "ODH7694",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 60.82"
    },
    {
        "placa": "QRB2791",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 695.96"
    },
    {
        "placa": "MSH0925",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 75.01"
    },
    {
        "placa": "QRB9435",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 734.95"
    },
    {
        "placa": "ODJ8902",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 906.59"
    },
    {
        "placa": "MTD6476",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 176.33"
    },
    {
        "placa": "ODE7801",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 251.70"
    },
    {
        "placa": "PXH8632",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1003.88"
    },
    {
        "placa": "PPN5664",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 684.46"
    },
    {
        "placa": "OVL9107",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 908.11"
    },
    {
        "placa": "QWW1324",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 313.04"
    },
    {
        "placa": "PPB0593",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 765.06"
    },
    {
        "placa": "PPN6498",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 851.60"
    },
    {
        "placa": "NSJ2438",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 956.65"
    },
    {
        "placa": "ODS3923",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 257.59"
    },
    {
        "placa": "PVS3541",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 284.81"
    },
    {
        "placa": "OVJ5663",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 122.40"
    },
    {
        "placa": "MTC9474",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 686.35"
    },
    {
        "placa": "OIF5165",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 511.92"
    },
    {
        "placa": "MTI4428",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 925.19"
    },
    {
        "placa": "JUM9980",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 684.52"
    },
    {
        "placa": "HKD2212",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 752.94"
    },
    {
        "placa": "QRC9718",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 91.47"
    },
    {
        "placa": "PPZ3367",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 156.57"
    },
    {
        "placa": "ODQ8681",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1016.44"
    },
    {
        "placa": "MSY4727",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 969.27"
    },
    {
        "placa": "PPY9517",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1178.96"
    },
    {
        "placa": "HNW2057",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 235.12"
    },
    {
        "placa": "ODN9474",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 11.70"
    },
    {
        "placa": "MTO8721",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 813.23"
    },
    {
        "placa": "MQV8494",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1027.81"
    },
    {
        "placa": "OWR4753",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 640.29"
    },
    {
        "placa": "NXL8285",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 213.28"
    },
    {
        "placa": "MPM0766",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1017.41"
    },
    {
        "placa": "QPR0978",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1115.74"
    },
    {
        "placa": "OVK2213",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 131.56"
    },
    {
        "placa": "MPT7518",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1018.18"
    },
    {
        "placa": "MTU9456",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 704.93"
    },
    {
        "placa": "KVI4844",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 415.76"
    },
    {
        "placa": "MQL4969",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1096.53"
    },
    {
        "placa": "PPD1718",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 683.91"
    },
    {
        "placa": "OMM9399",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 314.97"
    },
    {
        "placa": "ODR2164",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 735.52"
    },
    {
        "placa": "KYG8439",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1157.05"
    },
    {
        "placa": "MRD8585",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 390.25"
    },
    {
        "placa": "OVI8898",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 289.74"
    },
    {
        "placa": "MSW1316",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 152.59"
    },
    {
        "placa": "FGZ5317",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 118.32"
    },
    {
        "placa": "MTQ5795",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 65.75"
    },
    {
        "placa": "LQA1738",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1173.66"
    },
    {
        "placa": "QUZ5267",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 583.58"
    },
    {
        "placa": "MRS5571",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 219.60"
    },
    {
        "placa": "FLL7744",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 630.39"
    },
    {
        "placa": "JJU5239",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 671.86"
    },
    {
        "placa": "OYG5394",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 238.68"
    },
    {
        "placa": "PPD0143",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 522.08"
    },
    {
        "placa": "PPL7538",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 229.71"
    },
    {
        "placa": "QPW4094",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 556.08"
    },
    {
        "placa": "DLB4615",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 740.04"
    },
    {
        "placa": "OYD9503",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 218.15"
    },
    {
        "placa": "MQF4179",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1021.73"
    },
    {
        "placa": "HYZ6474",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 93.54"
    },
    {
        "placa": "LKW3018",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 0.81"
    },
    {
        "placa": "PPD1065",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1036.52"
    },
    {
        "placa": "MSO6822",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 251.78"
    },
    {
        "placa": "PPL8918",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 988.65"
    },
    {
        "placa": "QIV8920",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 513.20"
    },
    {
        "placa": "AZO0429",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 939.34"
    },
    {
        "placa": "PPD7090",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 549.09"
    },
    {
        "placa": "PPZ5339",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 615.17"
    },
    {
        "placa": "OQL2458",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 190.15"
    },
    {
        "placa": "QRB0697",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 843.07"
    },
    {
        "placa": "OKD8127",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1098.19"
    },
    {
        "placa": "PPR6922",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 703.20"
    },
    {
        "placa": "MRG5167",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 146.52"
    },
    {
        "placa": "MQU8874",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 410.84"
    },
    {
        "placa": "LCY6849",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 327.00"
    },
    {
        "placa": "KWC5510",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 768.17"
    },
    {
        "placa": "PPR9998",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1008.68"
    },
    {
        "placa": "OXH8910",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 40.60"
    },
    {
        "placa": "KQL7148",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 884.06"
    },
    {
        "placa": "PPN9051",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1125.69"
    },
    {
        "placa": "OVE7082",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 192.26"
    },
    {
        "placa": "PPH6309",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1007.10"
    },
    {
        "placa": "MTL9854",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 863.76"
    },
    {
        "placa": "PPL7391",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 698.36"
    },
    {
        "placa": "PPN7834",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 226.15"
    },
    {
        "placa": "ODT1522",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 233.04"
    },
    {
        "placa": "OYH0131",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 443.72"
    },
    {
        "placa": "ODI0246",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1173.35"
    },
    {
        "placa": "MQN9353",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 748.60"
    },
    {
        "placa": "ELM5697",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 833.91"
    },
    {
        "placa": "PPF0690",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 951.98"
    },
    {
        "placa": "ODG0508",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 866.91"
    },
    {
        "placa": "QUP3961",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 571.18"
    },
    {
        "placa": "LOK4280",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1044.04"
    },
    {
        "placa": "OLV9868",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 979.12"
    },
    {
        "placa": "OYH4401",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 18.57"
    },
    {
        "placa": "DBS2896",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 360.78"
    },
    {
        "placa": "MTD2910",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 665.37"
    },
    {
        "placa": "OYJ6986",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 216.37"
    },
    {
        "placa": "MSY1984",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 170.77"
    },
    {
        "placa": "JOV9159",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 411.34"
    },
    {
        "placa": "OVH0611",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 438.44"
    },
    {
        "placa": "PPQ7885",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 0.69"
    },
    {
        "placa": "PPK7779",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 310.27"
    },
    {
        "placa": "PVD7277",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 592.63"
    },
    {
        "placa": "PPF8791",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 763.58"
    },
    {
        "placa": "ODG7842",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 921.94"
    },
    {
        "placa": "MPX3238",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 284.83"
    },
    {
        "placa": "JQZ8180",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 712.58"
    },
    {
        "placa": "MRV5679",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 147.78"
    },
    {
        "placa": "PPH4480",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 939.68"
    },
    {
        "placa": "PPO0598",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 497.94"
    },
    {
        "placa": "ODC9587",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 761.87"
    },
    {
        "placa": "ODB1956",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 168.21"
    },
    {
        "placa": "PPZ5427",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 34.91"
    },
    {
        "placa": "PPW7527",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 186.13"
    },
    {
        "placa": "PPQ7791",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 385.23"
    },
    {
        "placa": "MSR6538",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 585.55"
    },
    {
        "placa": "PPB8254",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1037.80"
    },
    {
        "placa": "MSG1403",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 975.23"
    },
    {
        "placa": "OYK4261",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 749.35"
    },
    {
        "placa": "OVL9154",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 825.69"
    },
    {
        "placa": "PYM8647",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 350.18"
    },
    {
        "placa": "DQO0483",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 226.64"
    },
    {
        "placa": "MQL0663",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 674.42"
    },
    {
        "placa": "MQY8742",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 255.33"
    },
    {
        "placa": "MTW3853",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 412.36"
    },
    {
        "placa": "MPW5596",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 774.45"
    },
    {
        "placa": "OVH7763",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 376.88"
    },
    {
        "placa": "ODE0144",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 179.16"
    },
    {
        "placa": "PPO1501",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 75.34"
    },
    {
        "placa": "LSD6597",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 931.40"
    },
    {
        "placa": "ODF2480",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 658.02"
    },
    {
        "placa": "QNK1190",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 696.85"
    },
    {
        "placa": "PZL5312",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 705.28"
    },
    {
        "placa": "PPW2533",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 241.36"
    },
    {
        "placa": "ODQ3176",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 210.14"
    },
    {
        "placa": "MRP3429",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 433.04"
    },
    {
        "placa": "MTQ2864",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1152.54"
    },
    {
        "placa": "LOX2217",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 91.12"
    },
    {
        "placa": "PPE2584",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1027.56"
    },
    {
        "placa": "MTC5918",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 787.31"
    },
    {
        "placa": "MTP3636",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 68.89"
    },
    {
        "placa": "PUB0305",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 873.29"
    },
    {
        "placa": "HDR2378",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1178.16"
    },
    {
        "placa": "MSU0421",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 205.89"
    },
    {
        "placa": "OCV0179",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 209.86"
    },
    {
        "placa": "NWM4139",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1063.05"
    },
    {
        "placa": "PPS4485",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 916.12"
    },
    {
        "placa": "KWB7465",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 738.81"
    },
    {
        "placa": "PPQ9663",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 236.75"
    },
    {
        "placa": "MSE9837",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1081.97"
    },
    {
        "placa": "MTP7564",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 776.66"
    },
    {
        "placa": "PPA1050",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 579.94"
    },
    {
        "placa": "ODJ9872",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 881.34"
    },
    {
        "placa": "OPI9440",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 242.47"
    },
    {
        "placa": "ODS9035",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 666.32"
    },
    {
        "placa": "OCW3138",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 845.93"
    },
    {
        "placa": "ODI2320",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 247.64"
    },
    {
        "placa": "PVO6483",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 910.33"
    },
    {
        "placa": "MSA6746",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 750.63"
    },
    {
        "placa": "OMA0283",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 962.63"
    },
    {
        "placa": "ODF0494",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1185.92"
    },
    {
        "placa": "PPB6700",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 745.53"
    },
    {
        "placa": "ODK8819",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1173.18"
    },
    {
        "placa": "PPV7203",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 626.65"
    },
    {
        "placa": "MTB7434",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 334.73"
    },
    {
        "placa": "HGI3552",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 426.34"
    },
    {
        "placa": "DQC8568",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 670.41"
    },
    {
        "placa": "MTB2620",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1078.56"
    },
    {
        "placa": "ODE6505",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 755.79"
    },
    {
        "placa": "OZH5074",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 693.62"
    },
    {
        "placa": "MTR5212",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 629.01"
    },
    {
        "placa": "MRP7201",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 62.25"
    },
    {
        "placa": "MQI8528",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 710.17"
    },
    {
        "placa": "OYD4842",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 604.16"
    },
    {
        "placa": "MQK5949",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1072.79"
    },
    {
        "placa": "MQX1753",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 458.92"
    },
    {
        "placa": "LTI1936",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 401.64"
    },
    {
        "placa": "PPE6124",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 664.67"
    },
    {
        "placa": "MQO2575",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 594.96"
    },
    {
        "placa": "MSR1274",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 251.68"
    },
    {
        "placa": "FMW0839",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 604.72"
    },
    {
        "placa": "MTL0940",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 209.61"
    },
    {
        "placa": "OYJ3200",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 166.34"
    },
    {
        "placa": "MRX2256",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1033.75"
    },
    {
        "placa": "MTW5627",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 578.53"
    },
    {
        "placa": "OVL5755",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 137.20"
    },
    {
        "placa": "MQP3904",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 834.95"
    },
    {
        "placa": "KMN5130",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 503.58"
    },
    {
        "placa": "PPU5357",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1111.89"
    },
    {
        "placa": "MSL8048",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1065.41"
    },
    {
        "placa": "OYG2706",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1036.39"
    },
    {
        "placa": "OQG1369",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 665.84"
    },
    {
        "placa": "OVH8793",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1158.36"
    },
    {
        "placa": "ODE4740",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1146.63"
    },
    {
        "placa": "LKK5089",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 270.02"
    },
    {
        "placa": "MQZ0325",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 122.60"
    },
    {
        "placa": "PPG6004",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 843.11"
    },
    {
        "placa": "DNE4018",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 89.91"
    },
    {
        "placa": "QPL6050",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 614.20"
    },
    {
        "placa": "MRM0738",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 14.25"
    },
    {
        "placa": "ODA0782",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1078.10"
    },
    {
        "placa": "ODP9089",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 127.88"
    },
    {
        "placa": "MTB4601",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 792.58"
    },
    {
        "placa": "EEX3746",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1092.36"
    },
    {
        "placa": "PPN5781",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 415.68"
    },
    {
        "placa": "MSS2744",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 68.36"
    },
    {
        "placa": "BTR6222",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1157.74"
    },
    {
        "placa": "MPJ9282",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 259.17"
    },
    {
        "placa": "MQO7913",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 75.64"
    },
    {
        "placa": "PPA8042",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 936.97"
    },
    {
        "placa": "ODL9687",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 404.78"
    },
    {
        "placa": "ODH8800",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 130.75"
    },
    {
        "placa": "QPH1710",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1038.28"
    },
    {
        "placa": "LPO3003",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 350.25"
    },
    {
        "placa": "PPA7825",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1007.61"
    },
    {
        "placa": "HCQ5453",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 272.21"
    },
    {
        "placa": "OYD1691",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 909.22"
    },
    {
        "placa": "LPJ9270",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1019.26"
    },
    {
        "placa": "MSN9156",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 980.41"
    },
    {
        "placa": "MQR8242",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 804.94"
    },
    {
        "placa": "OVL3560",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1011.47"
    },
    {
        "placa": "PPO9492",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 392.20"
    },
    {
        "placa": "GSV3811",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 999.49"
    },
    {
        "placa": "QQH1292",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 116.03"
    },
    {
        "placa": "PPE7802",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 67.43"
    },
    {
        "placa": "QRB3288",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 405.05"
    },
    {
        "placa": "JSK7937",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 312.27"
    },
    {
        "placa": "MRS0633",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 839.28"
    },
    {
        "placa": "PPW8305",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 563.09"
    },
    {
        "placa": "EYL1133",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 600.18"
    },
    {
        "placa": "QRD1400",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 863.51"
    },
    {
        "placa": "ODG3184",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 140.18"
    },
    {
        "placa": "CVL7311",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 880.53"
    },
    {
        "placa": "OVF0286",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 64.41"
    },
    {
        "placa": "LUY4689",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 269.87"
    },
    {
        "placa": "QRD6890",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 637.32"
    },
    {
        "placa": "MTD8221",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 428.95"
    },
    {
        "placa": "MSR6079",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 342.55"
    },
    {
        "placa": "OQR1982",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 394.64"
    },
    {
        "placa": "ODP3128",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1178.24"
    },
    {
        "placa": "ODR7149",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 764.15"
    },
    {
        "placa": "MSI4228",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 660.54"
    },
    {
        "placa": "HLP4594",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 186.89"
    },
    {
        "placa": "MQO9036",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 100.39"
    },
    {
        "placa": "MSZ5769",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 630.61"
    },
    {
        "placa": "LYL9273",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 515.89"
    },
    {
        "placa": "OYH0751",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1109.25"
    },
    {
        "placa": "PPZ5666",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 738.60"
    },
    {
        "placa": "KNT0215",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 1029.99"
    },
    {
        "placa": "QRD6178",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 152.64"
    },
    {
        "placa": "PPG5817",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 589.95"
    },
    {
        "placa": "HKF8750",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 583.20"
    },
    {
        "placa": "ODL9922",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 184.28"
    },
    {
        "placa": "HLL2570",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 421.91"
    },
    {
        "placa": "MTS1910",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 778.74"
    },
    {
        "placa": "PWQ3538",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 293.49"
    },
    {
        "placa": "MSI1682",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 181.64"
    },
    {
        "placa": "MTI2576",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 884.42"
    },
    {
        "placa": "PPT5778",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1133.69"
    },
    {
        "placa": "ODL3330",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 518.86"
    },
    {
        "placa": "OWH8385",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 523.39"
    },
    {
        "placa": "MQB0140",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 714.91"
    },
    {
        "placa": "OYK5416",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 938.97"
    },
    {
        "placa": "MSN3015",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1180.02"
    },
    {
        "placa": "NTG9212",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 424.80"
    },
    {
        "placa": "MSC3276",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 792.32"
    },
    {
        "placa": "KRF5409",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 998.31"
    },
    {
        "placa": "FLD1488",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 668.84"
    },
    {
        "placa": "MSM0040",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 728.51"
    },
    {
        "placa": "PPH2633",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 233.58"
    },
    {
        "placa": "ABH2224",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 172.21"
    },
    {
        "placa": "OVE1383",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 799.32"
    },
    {
        "placa": "LPP5181",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1195.71"
    },
    {
        "placa": "ODF4930",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1070.46"
    },
    {
        "placa": "OVI2473",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 216.68"
    },
    {
        "placa": "MQS3434",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1017.81"
    },
    {
        "placa": "LSC6123",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 751.86"
    },
    {
        "placa": "GXU7640",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1130.33"
    },
    {
        "placa": "OVL7821",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 172.45"
    },
    {
        "placa": "OXH4580",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 59.27"
    },
    {
        "placa": "QUJ1102",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1172.56"
    },
    {
        "placa": "MSU5886",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 317.47"
    },
    {
        "placa": "MTO6374",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 8.13"
    },
    {
        "placa": "ERM3130",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 3.97"
    },
    {
        "placa": "MRS9832",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 83.52"
    },
    {
        "placa": "MSR6504",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 774.21"
    },
    {
        "placa": "ODC3575",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 740.76"
    },
    {
        "placa": "JFL3308",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 55.15"
    },
    {
        "placa": "MSL3447",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 280.76"
    },
    {
        "placa": "MTR4471",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 489.03"
    },
    {
        "placa": "OQG1325",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 831.41"
    },
    {
        "placa": "QRB7802",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 180.06"
    },
    {
        "placa": "LLD5377",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 178.70"
    },
    {
        "placa": "PPE4646",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 7.86"
    },
    {
        "placa": "PPA3996",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 508.45"
    },
    {
        "placa": "OYG9167",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 488.48"
    },
    {
        "placa": "HEO0696",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 138.35"
    },
    {
        "placa": "OYD0953",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 95.70"
    },
    {
        "placa": "PPM7441",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1183.89"
    },
    {
        "placa": "MSP4261",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 200.23"
    },
    {
        "placa": "OCZ5759",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 70.51"
    },
    {
        "placa": "HLX7525",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 376.55"
    },
    {
        "placa": "OCV8772",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 176.91"
    },
    {
        "placa": "MSV3053",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 246.20"
    },
    {
        "placa": "LLH1335",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1085.70"
    },
    {
        "placa": "ODJ7418",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 877.93"
    },
    {
        "placa": "MTX4929",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 217.27"
    },
    {
        "placa": "ODQ0904",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1019.40"
    },
    {
        "placa": "OCZ1037",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1078.12"
    },
    {
        "placa": "GNQ5800",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1141.73"
    },
    {
        "placa": "MRO8294",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 206.52"
    },
    {
        "placa": "APO0947",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 151.12"
    },
    {
        "placa": "KVE2984",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1199.42"
    },
    {
        "placa": "QUF5778",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 617.68"
    },
    {
        "placa": "QOW7372",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 701.93"
    },
    {
        "placa": "PPN0490",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 320.42"
    },
    {
        "placa": "PPE9423",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 256.36"
    },
    {
        "placa": "PPI9341",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 438.27"
    },
    {
        "placa": "MRG6192",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 391.81"
    },
    {
        "placa": "PPG2516",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 353.40"
    },
    {
        "placa": "ODO2347",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 339.21"
    },
    {
        "placa": "MRL0389",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 497.20"
    },
    {
        "placa": "OYK2732",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 50.65"
    },
    {
        "placa": "QWV4663",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1179.54"
    },
    {
        "placa": "ODJ0554",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 426.48"
    },
    {
        "placa": "PPR2984",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 306.99"
    },
    {
        "placa": "OUS1848",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 382.34"
    },
    {
        "placa": "OCX2709",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 8.64"
    },
    {
        "placa": "PPW2254",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 350.26"
    },
    {
        "placa": "MTQ5666",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 961.24"
    },
    {
        "placa": "KOX5667",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 352.62"
    },
    {
        "placa": "MSL0077",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 215.77"
    },
    {
        "placa": "FPQ0829",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 399.23"
    },
    {
        "placa": "PPK4616",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 349.66"
    },
    {
        "placa": "PPW9916",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 835.93"
    },
    {
        "placa": "HKU3355",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1183.18"
    },
    {
        "placa": "LSZ8546",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1174.68"
    },
    {
        "placa": "PPY4621",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 78.04"
    },
    {
        "placa": "PPU2348",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 54.56"
    },
    {
        "placa": "NQP2386",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 470.21"
    },
    {
        "placa": "CPR0890",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 576.16"
    },
    {
        "placa": "OQK0656",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 37.33"
    },
    {
        "placa": "ODT3334",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 6.19"
    },
    {
        "placa": "PPA8623",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1011.32"
    },
    {
        "placa": "ODO8745",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 305.86"
    },
    {
        "placa": "HEL5231",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1138.60"
    },
    {
        "placa": "OHX3757",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 636.08"
    },
    {
        "placa": "LSE4561",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 77.32"
    },
    {
        "placa": "MRZ5628",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 138.49"
    },
    {
        "placa": "QPN6140",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 31.36"
    },
    {
        "placa": "PPV6820",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 494.88"
    },
    {
        "placa": "OVK7215",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 144.28"
    },
    {
        "placa": "LQQ9882",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1049.06"
    },
    {
        "placa": "MRT4757",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 521.81"
    },
    {
        "placa": "FXY0555",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 612.81"
    },
    {
        "placa": "OYH4427",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 629.30"
    },
    {
        "placa": "OYG2595",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1128.36"
    },
    {
        "placa": "OVI8975",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 302.90"
    },
    {
        "placa": "ODS4263",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 152.64"
    },
    {
        "placa": "MTV7883",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 256.97"
    },
    {
        "placa": "OCW2267",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 355.68"
    },
    {
        "placa": "MST6645",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1196.40"
    },
    {
        "placa": "OYI2939",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 848.01"
    },
    {
        "placa": "ODR9030",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 661.11"
    },
    {
        "placa": "OWW4642",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 45.18"
    },
    {
        "placa": "HAQ9821",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 849.95"
    },
    {
        "placa": "MSG4458",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 742.71"
    },
    {
        "placa": "ODN4110",
        "ano": 2009,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 505.53"
    },
    {
        "placa": "KXM7479",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 152.94"
    },
    {
        "placa": "ODQ2390",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 302.33"
    },
    {
        "placa": "MQO9374",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 489.61"
    },
    {
        "placa": "PPN8958",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 335.53"
    },
    {
        "placa": "MTC2963",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 265.15"
    },
    {
        "placa": "MQL1804",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 340.88"
    },
    {
        "placa": "MQL2242",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 675.82"
    },
    {
        "placa": "PPI8748",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 829.04"
    },
    {
        "placa": "PPW2332",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 674.40"
    },
    {
        "placa": "QNL5207",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 1113.56"
    },
    {
        "placa": "MSH9419",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 264.20"
    },
    {
        "placa": "DQS5659",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 857.25"
    },
    {
        "placa": "MTG9614",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 396.37"
    },
    {
        "placa": "EUP5500",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 674.22"
    },
    {
        "placa": "ODQ1283",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 543.10"
    },
    {
        "placa": "HNY1980",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 515.04"
    },
    {
        "placa": "MPK5700",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 532.29"
    },
    {
        "placa": "QQE2608",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 250.48"
    },
    {
        "placa": "MQI4385",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 774.25"
    },
    {
        "placa": "LVC9418",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 178.57"
    },
    {
        "placa": "OYK1804",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 462.84"
    },
    {
        "placa": "MTT1087",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 350.39"
    },
    {
        "placa": "MTT3179",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 757.77"
    },
    {
        "placa": "QQF7969",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 722.66"
    },
    {
        "placa": "PPH0705",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 563.01"
    },
    {
        "placa": "MSY7148",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 144.02"
    },
    {
        "placa": "PPA4080",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 309.26"
    },
    {
        "placa": "OPY7839",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 25.02"
    },
    {
        "placa": "PPX8957",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 740.30"
    },
    {
        "placa": "MTX2321",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 161.07"
    },
    {
        "placa": "PPH0694",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 497.74"
    },
    {
        "placa": "PPF0655",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 5.98"
    },
    {
        "placa": "DWK3417",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 221.00"
    },
    {
        "placa": "PPA0518",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 256.73"
    },
    {
        "placa": "PPE8865",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 145.69"
    },
    {
        "placa": "MTV9714",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 829.27"
    },
    {
        "placa": "MSX3343",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 456.13"
    },
    {
        "placa": "MQR6973",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 472.74"
    },
    {
        "placa": "QJJ5784",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 826.52"
    },
    {
        "placa": "QUD0882",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1059.04"
    },
    {
        "placa": "LOG7438",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 52.20"
    },
    {
        "placa": "HOB5712",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1133.72"
    },
    {
        "placa": "KRF8880",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 302.20"
    },
    {
        "placa": "LSV0894",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 627.04"
    },
    {
        "placa": "PPW7551",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 457.77"
    },
    {
        "placa": "MPH3380",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 546.71"
    },
    {
        "placa": "QUI3394",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1089.78"
    },
    {
        "placa": "QWW3227",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1044.93"
    },
    {
        "placa": "QOC6984",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 726.74"
    },
    {
        "placa": "GWI1894",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 79.71"
    },
    {
        "placa": "MST3983",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 108.07"
    },
    {
        "placa": "PPW3856",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 189.27"
    },
    {
        "placa": "JQO8324",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1021.17"
    },
    {
        "placa": "MQX1387",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 467.99"
    },
    {
        "placa": "MTP0404",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1155.40"
    },
    {
        "placa": "JIC8378",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 1089.28"
    },
    {
        "placa": "KVY5653",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 387.04"
    },
    {
        "placa": "PPD1586",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 107.28"
    },
    {
        "placa": "OYJ1488",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 28.70"
    },
    {
        "placa": "MQG4984",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 459.90"
    },
    {
        "placa": "OCZ2526",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 939.14"
    },
    {
        "placa": "ODQ1747",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 717.69"
    },
    {
        "placa": "MTB4490",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 585.17"
    },
    {
        "placa": "CGS9378",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 562.23"
    },
    {
        "placa": "PPO5037",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 1188.09"
    },
    {
        "placa": "ODK0600",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 643.85"
    },
    {
        "placa": "MSF8112",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 691.27"
    },
    {
        "placa": "MTW6087",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 918.03"
    },
    {
        "placa": "QRC7572",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 335.65"
    },
    {
        "placa": "QRC6506",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 939.95"
    },
    {
        "placa": "OZF8163",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1185.02"
    },
    {
        "placa": "PPO9472",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 982.23"
    },
    {
        "placa": "OYJ8962",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1152.83"
    },
    {
        "placa": "PPS1972",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 394.72"
    },
    {
        "placa": "MTE7821",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 609.64"
    },
    {
        "placa": "PVT6143",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 889.62"
    },
    {
        "placa": "MTZ1099",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 487.96"
    },
    {
        "placa": "ODI4208",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 53.43"
    },
    {
        "placa": "EQO6813",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 678.73"
    },
    {
        "placa": "OQE9566",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 849.62"
    },
    {
        "placa": "QBW1218",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 668.01"
    },
    {
        "placa": "MYN5053",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 215.49"
    },
    {
        "placa": "GWI1094",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 976.86"
    },
    {
        "placa": "MRM9462",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 72.63"
    },
    {
        "placa": "MQK1036",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 256.94"
    },
    {
        "placa": "MQA5335",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1050.19"
    },
    {
        "placa": "MRZ8519",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 842.06"
    },
    {
        "placa": "PKZ5789",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 609.86"
    },
    {
        "placa": "PZP2893",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 118.01"
    },
    {
        "placa": "OQW4171",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 497.76"
    },
    {
        "placa": "MRJ7440",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 666.91"
    },
    {
        "placa": "LTK8343",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 20.05"
    },
    {
        "placa": "PPL4841",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1091.67"
    },
    {
        "placa": "JGJ2547",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1177.04"
    },
    {
        "placa": "MRF3420",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 911.31"
    },
    {
        "placa": "GMK5871",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 735.11"
    },
    {
        "placa": "ODH9507",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 469.14"
    },
    {
        "placa": "PPN4276",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 365.57"
    },
    {
        "placa": "OPW1941",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 168.63"
    },
    {
        "placa": "KVR5711",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 997.77"
    },
    {
        "placa": "MQJ1804",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 704.60"
    },
    {
        "placa": "KPH5146",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 694.51"
    },
    {
        "placa": "QIP2359",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 938.37"
    },
    {
        "placa": "QRB2990",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 557.35"
    },
    {
        "placa": "LRZ6528",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1133.38"
    },
    {
        "placa": "EAT3002",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 10.76"
    },
    {
        "placa": "QPQ7623",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 204.19"
    },
    {
        "placa": "MRW0862",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 511.30"
    },
    {
        "placa": "MRY2487",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 772.00"
    },
    {
        "placa": "MTY8669",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 780.31"
    },
    {
        "placa": "HNZ4414",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 710.25"
    },
    {
        "placa": "QNZ3913",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 387.28"
    },
    {
        "placa": "KYA2043",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 699.82"
    },
    {
        "placa": "HEL4180",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 790.39"
    },
    {
        "placa": "GSV6301",
        "ano": 2018,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 199.07"
    },
    {
        "placa": "MSE1441",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 942.82"
    },
    {
        "placa": "MSE5564",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1037.22"
    },
    {
        "placa": "MTT9964",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1062.94"
    },
    {
        "placa": "DHV2916",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 438.33"
    },
    {
        "placa": "MRT0071",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 443.31"
    },
    {
        "placa": "OVI4236",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 219.33"
    },
    {
        "placa": "MTY1461",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 544.48"
    },
    {
        "placa": "ODB8999",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 322.67"
    },
    {
        "placa": "OQN2320",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 897.75"
    },
    {
        "placa": "ODF9181",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 961.32"
    },
    {
        "placa": "QRB7636",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 137.99"
    },
    {
        "placa": "OVL5815",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 344.46"
    },
    {
        "placa": "FHP2402",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 596.81"
    },
    {
        "placa": "PPN4120",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 50.16"
    },
    {
        "placa": "ODC0749",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 879.80"
    },
    {
        "placa": "MTQ7754",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 197.50"
    },
    {
        "placa": "MQF1099",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 130.43"
    },
    {
        "placa": "GTQ9435",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 329.64"
    },
    {
        "placa": "MTW3833",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 352.27"
    },
    {
        "placa": "PPY2857",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1133.85"
    },
    {
        "placa": "JFK0596",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1.17"
    },
    {
        "placa": "PPX0709",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 459.93"
    },
    {
        "placa": "NEH2104",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 135.13"
    },
    {
        "placa": "ODT6147",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 845.33"
    },
    {
        "placa": "HHP2143",
        "ano": 2009,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 750.99"
    },
    {
        "placa": "QPQ2823",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 747.08"
    },
    {
        "placa": "PXO2177",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 110.57"
    },
    {
        "placa": "OYJ5374",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 959.72"
    },
    {
        "placa": "OYH6794",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 60.02"
    },
    {
        "placa": "BWE2212",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 224.73"
    },
    {
        "placa": "KZB2462",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 250.37"
    },
    {
        "placa": "PPC9747",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1075.14"
    },
    {
        "placa": "PPY0939",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 89.82"
    },
    {
        "placa": "OVE9192",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 191.77"
    },
    {
        "placa": "ODQ4950",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 537.99"
    },
    {
        "placa": "PPK6236",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 417.99"
    },
    {
        "placa": "MRZ1926",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 871.12"
    },
    {
        "placa": "LQO4887",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 424.70"
    },
    {
        "placa": "QQW3603",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1039.51"
    },
    {
        "placa": "OYF4483",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 585.16"
    },
    {
        "placa": "QRB0987",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 666.84"
    },
    {
        "placa": "PPN7877",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 117.71"
    },
    {
        "placa": "LQA9903",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 679.57"
    },
    {
        "placa": "PPQ2622",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 901.93"
    },
    {
        "placa": "PPT0211",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 340.02"
    },
    {
        "placa": "ODT6125",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1191.10"
    },
    {
        "placa": "PPQ4874",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 67.36"
    },
    {
        "placa": "NRW1717",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1009.01"
    },
    {
        "placa": "ODL9707",
        "ano": 2014,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 688.86"
    },
    {
        "placa": "GSP3362",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 529.53"
    },
    {
        "placa": "QUE4575",
        "ano": 2010,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 483.84"
    },
    {
        "placa": "PYR2725",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 577.86"
    },
    {
        "placa": "AZA5679",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1145.53"
    },
    {
        "placa": "LRS5078",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 675.02"
    },
    {
        "placa": "OVH5104",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 364.24"
    },
    {
        "placa": "EUB7872",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 495.95"
    },
    {
        "placa": "OVK3448",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 204.89"
    },
    {
        "placa": "MTS3197",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1002.16"
    },
    {
        "placa": "QRB0854",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 534.02"
    },
    {
        "placa": "MSM5854",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 881.43"
    },
    {
        "placa": "OYD8993",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 666.39"
    },
    {
        "placa": "PPX6383",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 589.22"
    },
    {
        "placa": "OYD0384",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 337.80"
    },
    {
        "placa": "MSU6706",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1046.18"
    },
    {
        "placa": "MRG7582",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 876.31"
    },
    {
        "placa": "PZD5476",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 504.15"
    },
    {
        "placa": "PPK7980",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 178.21"
    },
    {
        "placa": "PPU4426",
        "ano": 2022,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 630.19"
    },
    {
        "placa": "MSF4584",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 441.72"
    },
    {
        "placa": "LTD6965",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 193.51"
    },
    {
        "placa": "PPU5435",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 582.98"
    },
    {
        "placa": "MRH9491",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 30.26"
    },
    {
        "placa": "MTT4943",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 209.51"
    },
    {
        "placa": "OYI2958",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 687.81"
    },
    {
        "placa": "OYJ0040",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 932.74"
    },
    {
        "placa": "MRX0894",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 484.58"
    },
    {
        "placa": "QUW9326",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 263.59"
    },
    {
        "placa": "MTC9427",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1020.56"
    },
    {
        "placa": "NZJ1306",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 216.43"
    },
    {
        "placa": "PPT2998",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 1094.72"
    },
    {
        "placa": "ODO3356",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 336.57"
    },
    {
        "placa": "OYJ6020",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 426.30"
    },
    {
        "placa": "MTW7487",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 285.84"
    },
    {
        "placa": "OCY4344",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 393.43"
    },
    {
        "placa": "GVF5485",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 570.68"
    },
    {
        "placa": "OEL2755",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 50.62"
    },
    {
        "placa": "MQF3900",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 972.59"
    },
    {
        "placa": "OYK3665",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 195.30"
    },
    {
        "placa": "MPK8072",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1033.77"
    },
    {
        "placa": "OYE7272",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1002.12"
    },
    {
        "placa": "CRY7237",
        "ano": 2018,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 374.20"
    },
    {
        "placa": "ODI7793",
        "ano": 2008,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 257.38"
    },
    {
        "placa": "OVH4014",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 115.37"
    },
    {
        "placa": "QQV3330",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 658.67"
    },
    {
        "placa": "MSN9894",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1021.84"
    },
    {
        "placa": "QQQ1958",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 738.02"
    },
    {
        "placa": "OVJ9582",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 766.11"
    },
    {
        "placa": "MRM4027",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 179.38"
    },
    {
        "placa": "ODH7691",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 213.71"
    },
    {
        "placa": "PPO1497",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 1196.44"
    },
    {
        "placa": "QRC8129",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 221.15"
    },
    {
        "placa": "BEN1491",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1080.11"
    },
    {
        "placa": "PPW7015",
        "ano": 2013,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 675.66"
    },
    {
        "placa": "MTK4670",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1104.55"
    },
    {
        "placa": "ODD1478",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 511.30"
    },
    {
        "placa": "PPH6494",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 923.54"
    },
    {
        "placa": "ODB8786",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 0.63"
    },
    {
        "placa": "MRV0043",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 918.63"
    },
    {
        "placa": "HOA6280",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 816.16"
    },
    {
        "placa": "MQF1825",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1097.37"
    },
    {
        "placa": "MRU6965",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 444.55"
    },
    {
        "placa": "MRF2797",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 810.78"
    },
    {
        "placa": "MTN7357",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 926.87"
    },
    {
        "placa": "PPJ1901",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 81.31"
    },
    {
        "placa": "PPA0253",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1097.61"
    },
    {
        "placa": "MQD1850",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1100.89"
    },
    {
        "placa": "MRS9917",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 486.68"
    },
    {
        "placa": "MST3293",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 60.63"
    },
    {
        "placa": "EUG1885",
        "ano": 2006,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 820.75"
    },
    {
        "placa": "MTJ6615",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 818.57"
    },
    {
        "placa": "AYN2397",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 281.46"
    },
    {
        "placa": "OVF0071",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1127.69"
    },
    {
        "placa": "PWM5194",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 575.73"
    },
    {
        "placa": "QQU1133",
        "ano": 2017,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 515.50"
    },
    {
        "placa": "OCV5704",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 66.43"
    },
    {
        "placa": "HRM2277",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 6.90"
    },
    {
        "placa": "HEH9344",
        "ano": 2002,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1008.78"
    },
    {
        "placa": "PPX4026",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 935.16"
    },
    {
        "placa": "MRG0195",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1017.62"
    },
    {
        "placa": "MJV7748",
        "ano": 2010,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 749.64"
    },
    {
        "placa": "MQC2272",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 213.93"
    },
    {
        "placa": "PPU7654",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1197.95"
    },
    {
        "placa": "HMQ2767",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 376.67"
    },
    {
        "placa": "QUK6465",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 437.99"
    },
    {
        "placa": "MQN3586",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 484.64"
    },
    {
        "placa": "MSQ9904",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1070.00"
    },
    {
        "placa": "OMB5597",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 585.35"
    },
    {
        "placa": "LTL4663",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 569.79"
    },
    {
        "placa": "MSQ3105",
        "ano": 2002,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 525.30"
    },
    {
        "placa": "PZO6838",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 293.40"
    },
    {
        "placa": "PPW1880",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1199.89"
    },
    {
        "placa": "ODA9383",
        "ano": 2015,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 132.02"
    },
    {
        "placa": "ODF9179",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 224.02"
    },
    {
        "placa": "MRS7313",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 849.27"
    },
    {
        "placa": "MRN0186",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 206.77"
    },
    {
        "placa": "ODB2144",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 528.38"
    },
    {
        "placa": "PAR9259",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1187.59"
    },
    {
        "placa": "MSN0351",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1111.49"
    },
    {
        "placa": "MSP8728",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1122.94"
    },
    {
        "placa": "LWH5659",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 457.53"
    },
    {
        "placa": "OQL2352",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 310.50"
    },
    {
        "placa": "MBL4248",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 379.64"
    },
    {
        "placa": "QQZ6491",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 394.60"
    },
    {
        "placa": "PPD4235",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1058.98"
    },
    {
        "placa": "MJA9799",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 936.18"
    },
    {
        "placa": "CZA6440",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 667.29"
    },
    {
        "placa": "MSK6275",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 890.31"
    },
    {
        "placa": "MQT8892",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 451.59"
    },
    {
        "placa": "PPP7104",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 790.10"
    },
    {
        "placa": "OYD9025",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 612.43"
    },
    {
        "placa": "QQT8226",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 857.00"
    },
    {
        "placa": "MSJ8238",
        "ano": 2000,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 964.72"
    },
    {
        "placa": "MTF2414",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1130.44"
    },
    {
        "placa": "MSU7019",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 1189.41"
    },
    {
        "placa": "ODT7397",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 1061.32"
    },
    {
        "placa": "OYE0974",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 427.40"
    },
    {
        "placa": "QUK2971",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 870.22"
    },
    {
        "placa": "MRF3399",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 672.89"
    },
    {
        "placa": "QRD6784",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1156.75"
    },
    {
        "placa": "MTU6342",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 722.12"
    },
    {
        "placa": "OVH3889",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 926.18"
    },
    {
        "placa": "MTV2316",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 447.46"
    },
    {
        "placa": "PXO4810",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 233.47"
    },
    {
        "placa": "PPF0791",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 629.86"
    },
    {
        "placa": "MSM4982",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 966.16"
    },
    {
        "placa": "PPU6875",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 487.92"
    },
    {
        "placa": "PPP8686",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1195.20"
    },
    {
        "placa": "QWS7978",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 518.82"
    },
    {
        "placa": "MPF4284",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 716.68"
    },
    {
        "placa": "OVH2168",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1182.76"
    },
    {
        "placa": "OVE9064",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 145.26"
    },
    {
        "placa": "ODN9226",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1102.24"
    },
    {
        "placa": "PPJ7924",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 913.23"
    },
    {
        "placa": "MTS3698",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 908.89"
    },
    {
        "placa": "MRB8042",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 540.34"
    },
    {
        "placa": "MPK8041",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 902.76"
    },
    {
        "placa": "MPJ7405",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 1055.11"
    },
    {
        "placa": "PPE4786",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 441.78"
    },
    {
        "placa": "MQO1384",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 804.14"
    },
    {
        "placa": "JDG0242",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1034.50"
    },
    {
        "placa": "JNK9908",
        "ano": 2001,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 882.33"
    },
    {
        "placa": "PPH8232",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 310.16"
    },
    {
        "placa": "MSU2177",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 392.42"
    },
    {
        "placa": "MRL7543",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 20.39"
    },
    {
        "placa": "LLM1573",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1067.14"
    },
    {
        "placa": "KNN3997",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 73.55"
    },
    {
        "placa": "QUZ4957",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 565.13"
    },
    {
        "placa": "PPJ8278",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 481.26"
    },
    {
        "placa": "MTW3564",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 423.87"
    },
    {
        "placa": "HOI3150",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 525.37"
    },
    {
        "placa": "OPA3094",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 444.16"
    },
    {
        "placa": "QUX7702",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1008.70"
    },
    {
        "placa": "PPB7779",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 608.05"
    },
    {
        "placa": "QRB7701",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1168.29"
    },
    {
        "placa": "CMA9593",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 565.65"
    },
    {
        "placa": "MQO4828",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 178.93"
    },
    {
        "placa": "PPD6907",
        "ano": 2001,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 281.93"
    },
    {
        "placa": "OYI6048",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 998.71"
    },
    {
        "placa": "NJX7710",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 175.25"
    },
    {
        "placa": "OUV1240",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 420.69"
    },
    {
        "placa": "GXS6461",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 380.71"
    },
    {
        "placa": "PPH0690",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 857.76"
    },
    {
        "placa": "MTY4529",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 384.90"
    },
    {
        "placa": "OVL8652",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 284.70"
    },
    {
        "placa": "OYI4240",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1001.29"
    },
    {
        "placa": "ODC9360",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 649.50"
    },
    {
        "placa": "OCZ7125",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 553.62"
    },
    {
        "placa": "DWG2047",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 344.55"
    },
    {
        "placa": "OCX5436",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 562.27"
    },
    {
        "placa": "HAE8372",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 690.55"
    },
    {
        "placa": "OYG8202",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 542.31"
    },
    {
        "placa": "OVI2358",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1162.08"
    },
    {
        "placa": "KHI8394",
        "ano": 2010,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 767.25"
    },
    {
        "placa": "OVF2793",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 268.67"
    },
    {
        "placa": "LVD5420",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 815.24"
    },
    {
        "placa": "MQH4543",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 840.49"
    },
    {
        "placa": "PPM2800",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 905.28"
    },
    {
        "placa": "GYC7322",
        "ano": 2018,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 0.03"
    },
    {
        "placa": "QPB2262",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 628.89"
    },
    {
        "placa": "MRX6735",
        "ano": 2015,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 443.08"
    },
    {
        "placa": "MRV3523",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 520.52"
    },
    {
        "placa": "LOY7410",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 576.39"
    },
    {
        "placa": "PPG1492",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 988.35"
    },
    {
        "placa": "DQX5819",
        "ano": 2006,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 566.02"
    },
    {
        "placa": "OCV6449",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 832.59"
    },
    {
        "placa": "KQS4856",
        "ano": 2008,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 591.75"
    },
    {
        "placa": "ODO5821",
        "ano": 2021,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 317.18"
    },
    {
        "placa": "KOA8428",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 461.01"
    },
    {
        "placa": "JGG5012",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 573.92"
    },
    {
        "placa": "MRV1063",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 1055.95"
    },
    {
        "placa": "EKT9278",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 548.97"
    },
    {
        "placa": "QRD1312",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 138.61"
    },
    {
        "placa": "PXZ8503",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 701.74"
    },
    {
        "placa": "PPO8840",
        "ano": 2003,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 92.75"
    },
    {
        "placa": "MSJ4077",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1153.76"
    },
    {
        "placa": "MPE6414",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 785.14"
    },
    {
        "placa": "KZH5179",
        "ano": 2007,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 704.97"
    },
    {
        "placa": "MRP6098",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 549.51"
    },
    {
        "placa": "PPB7809",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 23.58"
    },
    {
        "placa": "QRB9354",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 892.68"
    },
    {
        "placa": "MSM5358",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 719.26"
    },
    {
        "placa": "MQO8460",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 1046.24"
    },
    {
        "placa": "MRU1092",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 372.38"
    },
    {
        "placa": "ODJ2443",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 921.41"
    },
    {
        "placa": "PPU1196",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1137.51"
    },
    {
        "placa": "ODT9634",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1103.43"
    },
    {
        "placa": "PPX7597",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 845.07"
    },
    {
        "placa": "PYY9680",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1176.93"
    },
    {
        "placa": "GOA0345",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 523.47"
    },
    {
        "placa": "OYD7019",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 959.02"
    },
    {
        "placa": "OVH0021",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 39.64"
    },
    {
        "placa": "QUK6991",
        "ano": 2012,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 545.40"
    },
    {
        "placa": "ODG4361",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 578.47"
    },
    {
        "placa": "KZZ0843",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 527.96"
    },
    {
        "placa": "PPX8156",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 896.21"
    },
    {
        "placa": "PPA0219",
        "ano": 2000,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 194.99"
    },
    {
        "placa": "OCX7458",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 582.88"
    },
    {
        "placa": "MTT4404",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 482.85"
    },
    {
        "placa": "QQL4824",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 629.18"
    },
    {
        "placa": "PPR6221",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 145.24"
    },
    {
        "placa": "ODB4407",
        "ano": 2012,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 61.10"
    },
    {
        "placa": "PPF4062",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1062.42"
    },
    {
        "placa": "EGK9741",
        "ano": 2013,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 646.70"
    },
    {
        "placa": "NJA5615",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 628.57"
    },
    {
        "placa": "JPK1756",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 564.45"
    },
    {
        "placa": "MQG1833",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 445.96"
    },
    {
        "placa": "OCV5772",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 796.63"
    },
    {
        "placa": "MSB7504",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 443.13"
    },
    {
        "placa": "MQP6065",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 265.09"
    },
    {
        "placa": "MSX4781",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 265.69"
    },
    {
        "placa": "KRF5242",
        "ano": 2009,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 724.93"
    },
    {
        "placa": "OVF0718",
        "ano": 2000,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 1044.52"
    },
    {
        "placa": "ODK8558",
        "ano": 2016,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 415.98"
    },
    {
        "placa": "PPW2469",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 710.02"
    },
    {
        "placa": "PPM9384",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 810.34"
    },
    {
        "placa": "QWT3896",
        "ano": 2014,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 161.41"
    },
    {
        "placa": "MQN4935",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 15.64"
    },
    {
        "placa": "MTE7551",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 53.21"
    },
    {
        "placa": "ODO9031",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 944.73"
    },
    {
        "placa": "MQU1198",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 249.91"
    },
    {
        "placa": "DTC3082",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 365.13"
    },
    {
        "placa": "QPL9796",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 385.21"
    },
    {
        "placa": "PPK6318",
        "ano": 2020,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 785.88"
    },
    {
        "placa": "ODH7515",
        "ano": 2011,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1026.80"
    },
    {
        "placa": "KZT4193",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 746.53"
    },
    {
        "placa": "QQW6897",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1184.24"
    },
    {
        "placa": "PUF5278",
        "ano": 2003,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 529.95"
    },
    {
        "placa": "MPN1441",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1124.84"
    },
    {
        "placa": "PPZ2450",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 661.56"
    },
    {
        "placa": "OCZ7241",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 783.65"
    },
    {
        "placa": "MSE4866",
        "ano": 2003,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 915.56"
    },
    {
        "placa": "KWK6703",
        "ano": 2019,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 883.83"
    },
    {
        "placa": "MSO4987",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 650.15"
    },
    {
        "placa": "PPK7690",
        "ano": 2002,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 815.09"
    },
    {
        "placa": "ODH7986",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1160.48"
    },
    {
        "placa": "OVP5329",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 392.44"
    },
    {
        "placa": "QRB7356",
        "ano": 2006,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1126.64"
    },
    {
        "placa": "PPD0608",
        "ano": 2009,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 343.49"
    },
    {
        "placa": "OYE7503",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 744.23"
    },
    {
        "placa": "OYJ8359",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 654.19"
    },
    {
        "placa": "PPY4412",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 406.86"
    },
    {
        "placa": "OVE4468",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 42.65"
    },
    {
        "placa": "QQM3759",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 216.47"
    },
    {
        "placa": "MTA1809",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 180.68"
    },
    {
        "placa": "NVR2465",
        "ano": 2001,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 4.00"
    },
    {
        "placa": "ODF3135",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 799.52"
    },
    {
        "placa": "OCX3331",
        "ano": 2015,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 405.58"
    },
    {
        "placa": "JVT2910",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 95.40"
    },
    {
        "placa": "PPW6134",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 642.99"
    },
    {
        "placa": "PXN6234",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 27.19"
    },
    {
        "placa": "QAG7665",
        "ano": 2012,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 263.28"
    },
    {
        "placa": "QRC9399",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 911.38"
    },
    {
        "placa": "PPU3886",
        "ano": 2020,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 806.63"
    },
    {
        "placa": "PPX5206",
        "ano": 2008,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 979.42"
    },
    {
        "placa": "OCW4185",
        "ano": 2021,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 319.90"
    },
    {
        "placa": "PPW7792",
        "ano": 2017,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 333.41"
    },
    {
        "placa": "ODL1281",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 792.66"
    },
    {
        "placa": "OYG3845",
        "ano": 2004,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 1085.71"
    },
    {
        "placa": "PPU9850",
        "ano": 2014,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 385.94"
    },
    {
        "placa": "PPB2722",
        "ano": 2015,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 357.43"
    },
    {
        "placa": "MQZ7504",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 75.41"
    },
    {
        "placa": "PPT2944",
        "ano": 2013,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 0,
        "debito": "R$ 204.50"
    },
    {
        "placa": "QRD0976",
        "ano": 2022,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 524.40"
    },
    {
        "placa": "QRB8790",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 1097.52"
    },
    {
        "placa": "PAR2765",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 355.30"
    },
    {
        "placa": "QOS4398",
        "ano": 2004,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 2,
        "debito": "R$ 737.09"
    },
    {
        "placa": "OVK0721",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 573.53"
    },
    {
        "placa": "MQU1348",
        "ano": 2012,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1074.89"
    },
    {
        "placa": "PPF8838",
        "ano": 2008,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 491.38"
    },
    {
        "placa": "MRE1721",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 61.98"
    },
    {
        "placa": "MOZ5302",
        "ano": 2001,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 513.83"
    },
    {
        "placa": "MSC6642",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 313.26"
    },
    {
        "placa": "DLR1298",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 2,
        "debito": "R$ 228.74"
    },
    {
        "placa": "MTV2007",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 532.54"
    },
    {
        "placa": "PPT7030",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 866.01"
    },
    {
        "placa": "MSO3703",
        "ano": 2004,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 337.18"
    },
    {
        "placa": "PPQ2283",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 384.97"
    },
    {
        "placa": "PPZ4128",
        "ano": 2017,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 1097.43"
    },
    {
        "placa": "PPT3062",
        "ano": 2021,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 798.44"
    },
    {
        "placa": "PPU9756",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 576.52"
    },
    {
        "placa": "HBZ5720",
        "ano": 2013,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1172.42"
    },
    {
        "placa": "PPB3578",
        "ano": 2007,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 342.64"
    },
    {
        "placa": "QQS0213",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 430.87"
    },
    {
        "placa": "KVV4055",
        "ano": 2022,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 1008.24"
    },
    {
        "placa": "AJS8928",
        "ano": 2008,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 5,
        "debito": "R$ 538.06"
    },
    {
        "placa": "PPO6441",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 520.69"
    },
    {
        "placa": "PPP7700",
        "ano": 2019,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 1123.01"
    },
    {
        "placa": "ODA7867",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 299.45"
    },
    {
        "placa": "PYC1933",
        "ano": 2017,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 77.64"
    },
    {
        "placa": "OVL8438",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 1095.72"
    },
    {
        "placa": "PPU0728",
        "ano": 2023,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 41.51"
    },
    {
        "placa": "PPI9364",
        "ano": 2019,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 381.39"
    },
    {
        "placa": "NRJ4919",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 121.31"
    },
    {
        "placa": "QQA0258",
        "ano": 2018,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 870.26"
    },
    {
        "placa": "BAO4362",
        "ano": 2007,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 1019.46"
    },
    {
        "placa": "OVI9623",
        "ano": 2009,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 472.64"
    },
    {
        "placa": "QRB1285",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 978.47"
    },
    {
        "placa": "PPU9784",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 616.96"
    },
    {
        "placa": "LLZ8954",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 231.08"
    },
    {
        "placa": "QNS5281",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 965.62"
    },
    {
        "placa": "KNP9048",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 155.06"
    },
    {
        "placa": "OVL5924",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1002.61"
    },
    {
        "placa": "ERX6004",
        "ano": 2024,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 414.00"
    },
    {
        "placa": "PPQ6562",
        "ano": 2004,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 200.17"
    },
    {
        "placa": "ODI4446",
        "ano": 2011,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 104.10"
    },
    {
        "placa": "MPD8424",
        "ano": 2020,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 1112.50"
    },
    {
        "placa": "PPH0712",
        "ano": 2022,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 260.02"
    },
    {
        "placa": "KRO2873",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 1,
        "debito": "R$ 384.11"
    },
    {
        "placa": "OYG2401",
        "ano": 2002,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 2,
        "debito": "R$ 537.76"
    },
    {
        "placa": "MUK6869",
        "ano": 2019,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 831.10"
    },
    {
        "placa": "ODT8713",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 37.85"
    },
    {
        "placa": "ODK1696",
        "ano": 2010,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 1158.42"
    },
    {
        "placa": "QWW1321",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 718.43"
    },
    {
        "placa": "MTD6812",
        "ano": 2000,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 957.84"
    },
    {
        "placa": "MRT3077",
        "ano": 2024,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 847.94"
    },
    {
        "placa": "ODP1471",
        "ano": 2016,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 51.10"
    },
    {
        "placa": "LOY6261",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 925.60"
    },
    {
        "placa": "OYE0934",
        "ano": 2024,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 1,
        "debito": "R$ 439.73"
    },
    {
        "placa": "PPZ9253",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 696.14"
    },
    {
        "placa": "MTK4892",
        "ano": 2004,
        "cor": "Azul",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 321.32"
    },
    {
        "placa": "PWJ6866",
        "ano": 2005,
        "cor": "Vermelho",
        "modelo": "Celta",
        "multas": 3,
        "debito": "R$ 1045.15"
    },
    {
        "placa": "MQF8976",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 423.42"
    },
    {
        "placa": "OYF2053",
        "ano": 2020,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 922.15"
    },
    {
        "placa": "PPM2393",
        "ano": 2007,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 250.82"
    },
    {
        "placa": "OVL3574",
        "ano": 2016,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 793.11"
    },
    {
        "placa": "PPZ5100",
        "ano": 2012,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 838.80"
    },
    {
        "placa": "MSG6735",
        "ano": 2003,
        "cor": "Branco",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 889.34"
    },
    {
        "placa": "QUI1709",
        "ano": 2016,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 563.67"
    },
    {
        "placa": "PPC2675",
        "ano": 2007,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 5,
        "debito": "R$ 632.75"
    },
    {
        "placa": "ODC9088",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 513.37"
    },
    {
        "placa": "ODT2061",
        "ano": 2005,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 1012.59"
    },
    {
        "placa": "PPZ8837",
        "ano": 2011,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 3,
        "debito": "R$ 1121.79"
    },
    {
        "placa": "PPS0435",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 3,
        "debito": "R$ 585.74"
    },
    {
        "placa": "MQW7902",
        "ano": 2011,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 405.19"
    },
    {
        "placa": "PPT4802",
        "ano": 2010,
        "cor": "Preto",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 375.67"
    },
    {
        "placa": "LTX4485",
        "ano": 2017,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 275.13"
    },
    {
        "placa": "MNY9771",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Fiat Palio",
        "multas": 5,
        "debito": "R$ 1023.09"
    },
    {
        "placa": "OLD1501",
        "ano": 2014,
        "cor": "Vermelho",
        "modelo": "Gol",
        "multas": 0,
        "debito": "R$ 323.92"
    },
    {
        "placa": "MQX4784",
        "ano": 2014,
        "cor": "Preto",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 1107.62"
    },
    {
        "placa": "HAY5895",
        "ano": 2023,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 2,
        "debito": "R$ 296.13"
    },
    {
        "placa": "MSN1856",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 541.12"
    },
    {
        "placa": "GWV3995",
        "ano": 2023,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 188.07"
    },
    {
        "placa": "PPT6997",
        "ano": 2018,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 1,
        "debito": "R$ 552.57"
    },
    {
        "placa": "JMI9709",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 122.94"
    },
    {
        "placa": "QOV4888",
        "ano": 2002,
        "cor": "Vermelho",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 99.55"
    },
    {
        "placa": "MQY8942",
        "ano": 2019,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 875.61"
    },
    {
        "placa": "QUS8043",
        "ano": 2013,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 252.52"
    },
    {
        "placa": "MTU2844",
        "ano": 2006,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 0,
        "debito": "R$ 1048.36"
    },
    {
        "placa": "OVF0618",
        "ano": 2005,
        "cor": "Prata",
        "modelo": "Fiat Palio",
        "multas": 2,
        "debito": "R$ 762.60"
    },
    {
        "placa": "PPU5870",
        "ano": 2022,
        "cor": "Azul",
        "modelo": "Fiat Palio",
        "multas": 4,
        "debito": "R$ 513.55"
    },
    {
        "placa": "QPT6935",
        "ano": 2023,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 739.33"
    },
    {
        "placa": "PUU8574",
        "ano": 2021,
        "cor": "Preto",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 349.65"
    },
    {
        "placa": "AQK5490",
        "ano": 2023,
        "cor": "Branco",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 43.96"
    },
    {
        "placa": "PPG4660",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Toyota Corolla",
        "multas": 1,
        "debito": "R$ 534.22"
    },
    {
        "placa": "FIM1755",
        "ano": 2000,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 5,
        "debito": "R$ 137.88"
    },
    {
        "placa": "HGI0984",
        "ano": 2024,
        "cor": "Azul",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 317.21"
    },
    {
        "placa": "MPQ4004",
        "ano": 2020,
        "cor": "Branco",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 1134.03"
    },
    {
        "placa": "OVK2611",
        "ano": 2001,
        "cor": "Preto",
        "modelo": "Gol",
        "multas": 1,
        "debito": "R$ 855.31"
    },
    {
        "placa": "MTP8313",
        "ano": 2015,
        "cor": "Branco",
        "modelo": "Toyota Corolla",
        "multas": 4,
        "debito": "R$ 1129.90"
    },
    {
        "placa": "LPN5716",
        "ano": 2003,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 794.93"
    },
    {
        "placa": "PPL6292",
        "ano": 2005,
        "cor": "Azul",
        "modelo": "Gol",
        "multas": 5,
        "debito": "R$ 165.22"
    },
    {
        "placa": "MQH2874",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Gol",
        "multas": 4,
        "debito": "R$ 216.04"
    },
    {
        "placa": "PPQ7420",
        "ano": 2016,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 4,
        "debito": "R$ 457.91"
    },
    {
        "placa": "MPK8098",
        "ano": 2024,
        "cor": "Prata",
        "modelo": "Honda Civic",
        "multas": 0,
        "debito": "R$ 1111.07"
    },
    {
        "placa": "LMA1638",
        "ano": 2005,
        "cor": "Branco",
        "modelo": "Celta",
        "multas": 0,
        "debito": "R$ 412.15"
    },
    {
        "placa": "OYH7391",
        "ano": 2021,
        "cor": "Prata",
        "modelo": "Celta",
        "multas": 4,
        "debito": "R$ 502.39"
    },
    {
        "placa": "PPR8152",
        "ano": 2006,
        "cor": "Azul",
        "modelo": "Honda Civic",
        "multas": 3,
        "debito": "R$ 196.44"
    },
    {
        "placa": "DOM8908",
        "ano": 2011,
        "cor": "Vermelho",
        "modelo": "Toyota Corolla",
        "multas": 3,
        "debito": "R$ 531.90"
    }
];

module.exports = veiculos;
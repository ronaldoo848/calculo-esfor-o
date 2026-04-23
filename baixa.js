// baixa.js - Dados de Baixa Tensão

// TABELA: Estruturas de Baixa Tensão
// Usamos 'var' para permitir redefinição caso dados.js já tenha declarado a variável vazia
var tabelaEstruturas = [
  {
    "formacao": "3x1x35+35",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "3x1x35+35",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "3x1x35+35",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "3x1x35+35",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "3x1x35+35",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "3x1x35+35",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "3x1x70+70",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 245
  },
  {
    "formacao": "3x1x70+70",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 245
  },
  {
    "formacao": "3x1x70+70",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 245
  },
  {
    "formacao": "3x1x70+70",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 245
  },
  {
    "formacao": "3x1x70+70",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 245
  },
  {
    "formacao": "3x1x70+70",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 245
  },
  {
    "formacao": "3x1x120+70",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 381
  },
  {
    "formacao": "3x1x120+70",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 381
  },
  {
    "formacao": "3x1x120+70",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 381
  },
  {
    "formacao": "3x1x120+70",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 381
  },
  {
    "formacao": "3x1x120+70",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 381
  },
  {
    "formacao": "3x1x120+70",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 381
  },
  {
    "formacao": "3x1x185+120",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 703
  },
  {
    "formacao": "3x1x185+120",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 636
  },
  {
    "formacao": "3x1x185+120",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 582
  },
  {
    "formacao": "3x1x185+120",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 804
  },
  {
    "formacao": "3x1x185+120",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 728
  },
  {
    "formacao": "3x1x185+120",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 665
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 152
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x25+25",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 144
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "2x1x35+35",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 155
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 132
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 125
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 121
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 173
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 165
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 238
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 220
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 208
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 181
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 169
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 162
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 234
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 217
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 205
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 278
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 265
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 249
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 133
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 126
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 122
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 187
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 175
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 167
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 241
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 223
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 211
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 183
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 171
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 164
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 237
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 220
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 208
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 291
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 269
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 252
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 137
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 129
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 125
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 192
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 179
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 171
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 248
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 229
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 217
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 188
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 176
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 168
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 244
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 226
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 213
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 300
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 276
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 259
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 140
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 132
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 128
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 197
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 184
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 175
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 255
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 235
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 222
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 193
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 180
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 172
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 250
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 232
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 219
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 308
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 283
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 266
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 145
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 137
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 132
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 205
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 191
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 181
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 265
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 244
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 230
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 201
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 187
  },
  {
    "formacao": "1#4(4)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 178
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 260
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 241
  },
  {
    "formacao": "2#4(4)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 227
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 320
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 295
  },
  {
    "formacao": "3#4(4)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 276
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 145
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 218
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 290
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 265
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 244
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 230
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 346
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 318
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 297
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 428
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 392
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 364
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 145
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 218
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 290
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 253
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 233
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 220
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 330
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 303
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 284
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 407
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 373
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 348
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 145
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 218
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 290
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 257
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 238
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 224
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 336
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 309
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 289
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 415
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 381
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 354
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 145
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 218
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 290
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 262
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 242
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 228
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 343
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 315
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 295
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 424
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 388
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 361
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 145
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 131
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 218
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 196
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 290
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 261
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 267
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 247
  },
  {
    "formacao": "1#2(2)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 232
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 349
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 321
  },
  {
    "formacao": "2#2(2)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 300
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 432
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 395
  },
  {
    "formacao": "3#2(2)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 368
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 205
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 308
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 410
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 344
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 317
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 296
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 466
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 426
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 396
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 588
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 536
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 30,
    "condicao": "Com Controle",
    "esforco": 496
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 205
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 308
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 410
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 321
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 295
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 276
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 432
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 396
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 368
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 544
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 496
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 40,
    "condicao": "Com Controle",
    "esforco": 460
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 205
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 308
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 410
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 317
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 292
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 273
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 426
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 390
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 363
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 535
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 489
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 50,
    "condicao": "Com Controle",
    "esforco": 453
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 205
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 308
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 410
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 320
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 295
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 276
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 430
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 394
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 366
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 540
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 493
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 60,
    "condicao": "Com Controle",
    "esforco": 457
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 205
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 185
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 308
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 278
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 410
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Normal",
    "esforco": 370
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 320
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 295
  },
  {
    "formacao": "1#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 276
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 430
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 394
  },
  {
    "formacao": "2#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 366
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 540
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 493
  },
  {
    "formacao": "3#1/0(1/0)CA",
    "poste": "Poste 12m",
    "vao": 80,
    "condicao": "Com Controle",
    "esforco": 457
  },
  {
    "formacao": "3#4/0(1/0)CA",
    "poste": "Poste 10m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 789
  },
  {
    "formacao": "3#4/0(1/0)CA",
    "poste": "Poste 11m",
    "vao": 30,
    "condicao": "Normal",
    "esforco": 711
  },
  {
    "formacao": "3#4/0(1/0)CA",
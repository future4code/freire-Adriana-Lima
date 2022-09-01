# EXERCÍCIO 1

 A. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

 Resposta: 
 - O comando VARCHAR(255) só aceita strings com até 255 caracteres.
 - O comando DATE é usado para colocarmos a data.
 - O comando VARCHAR(6) só aceita strings com até 6 caracteres.
 ---------------------------------------------------------
 B. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

 Resposta:
 - SHOW DATABASES: Retorna o comando onde é listado todos os bancos de dados até mesmo os utilizados pelo MYSQL.
 - SHOW TABLES: Acessa as tabelas do banco de dados desejado.
 ---------------------------------------------------------
 C. O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.

 Resposta:
 DESCRIBE Actor: Com ele é possível visualizar as colunas, os tipos de dados de cada coluna e os índices definidos para uma tabela, com exceção dos índices que são criados automaticamente para atributos que fazem parte de uma de integridades referênciais.

# exercício 2

 A. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

 Resposta: 
 - Código deu erro. Campo 'gender' não tem um valor padrão de 0,469 seg.
 - Corrigi o erro acrescentando o "gender".
 --------------------------------------------------------
 B.
 Resposta: 
 - Código deu erro. Campo 'gender' não tem um valor padrão de 0,766 seg.
 -  Corrigi o erro acrescentando o "gender".
 - Não posso criar ID igual para elementos diferentes.
 --------------------------------------------------------
 C.
 Resposta:
 - Código deu erro. A contagem de colunas não corresponde com aqunatidade de linha.
 - Corrigi os erros, e agora está correspondendo.
 --------------------------------------------------------
 D. 
 Resposta:
 - Código deu erro. O campo 'name' não possui um valor padrão 0,188 seg.
 -  1 linha(s) afetada(s) 0,156 segundos
 --------------------------------------------------------
 E.
 Resposta:
 - Código deu erro. Valor de data incorreto : '1950' para a coluna 'birth_date' na linha 1 0,156 seg.
 - Estava faltando as aspas no "birth_date".
 --------------------------------------------------------
 F.
 Resposta:
 - Inseri mais dois atores.
 
# Exercício 3

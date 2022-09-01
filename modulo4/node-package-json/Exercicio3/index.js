
const tarefa = ["limpar a casa", "ir ao dentista"]

const novaTarefa = process.argv[2]
tarefa.push(novaTarefa)

console.table(tarefa)

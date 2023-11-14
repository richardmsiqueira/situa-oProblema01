export const getAllStudents = (req, res) => {
    return res.status(200).send({ message: "Todos os alunos via controller" })
}

export const getStudentById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Aluno com ID ${id} via controller` })
}

export const createStudent = (req, res) => {
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados inválids" })
    }
    return res.status(201).send({ message: "Rota POST alunos via controller" })
}

export const updateStudent = (req, res) => {
    const { id } = req.params
    const { nome, email, idade } = req.body

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados inválids" })
    }
    return res.status(200).send({ message: `Rota PUT aluno com ID ${id} via controller` })
}

export const deleteStudent = (req, res) => {
    const { id } = req.params

    return res.status(200).send({ message: `Rota DELETE aluno com ID ${id} via controller`})
}
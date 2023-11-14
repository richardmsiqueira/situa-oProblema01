import { Router } from "express";
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../controllers/students.controllers.js";

const rotasAlunos = Router();

rotasAlunos.get("/", getAllStudents);

rotasAlunos.get("/:id", getStudentById);

rotasAlunos.post("/", createStudent);

rotasAlunos.put("/:id", updateStudent);

rotasAlunos.delete("/:id", deleteStudent);

export default rotasAlunos;
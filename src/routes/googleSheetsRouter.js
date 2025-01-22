import express from "express";

import GoogleSheetsController from "../controllers/GoogleSheetsController.js";

const router = express.Router();

// Rotas de acesso
router.get("/sheets/metaDados", GoogleSheetsController.getMetaDados);
router.get("/sheets/paginaInfo/:pagina", GoogleSheetsController.getPagina);

export default router;
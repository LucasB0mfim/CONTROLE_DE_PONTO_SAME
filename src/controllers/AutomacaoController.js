import AutomacaoRepository from '../repositories/AutomacaoRepository.js';

class AutomacaoController {
    constructor() {
        this.repository = AutomacaoRepository;
        // Fazendo o bind do método ao contexto da classe
        this.processarArquivo = this.processarArquivo.bind(this);
    }

    async processarArquivo(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: "Nenhum arquivo foi enviado"
                });
            }

            const buffer = req.file.buffer;
            const resultado = await this.repository.index(buffer);

            return res.status(200).json({
                success: true,
                message: "Arquivo processado com sucesso",
                data: resultado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Erro ao processar o arquivo",
                error: error.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            await AutomacaoRepository.update();
            console.log('Planilha carregada.');
            return res.status(200).json({ message: 'Planilha carregada.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({error});
        }
    }
}

export default new AutomacaoController();
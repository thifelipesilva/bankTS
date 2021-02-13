import { NegociacaoControllers } from './controllers/NegociacaoControllers';

const controller = new NegociacaoControllers();

$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importarDados.bind(controller));
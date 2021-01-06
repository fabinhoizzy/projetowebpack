import $ from 'jquery';
import './css/teste.scss';
import FeedImg from './images/camera.png';
import Botao from './components/botao/index.js';

$(function(){
    
    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert("Clicou!");
    });

    $('.area').html( botao.render() );

});
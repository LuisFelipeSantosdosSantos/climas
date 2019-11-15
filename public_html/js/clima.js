function getClima(){
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=dcab964509725e6c8006a4be046c54ea',
        dataType: 'json',
        success: function (data) {
            
            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);
            
            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(2).split('.');
            $('#temperatura').html(tempFormatada+"º");
            
            $('#umidade').html(data.main.humidity+"% ");
            
            $('#tempMax').html(data.main.temp_max+"º ");
            
            $('#tempMin').html(data.main.temp_min+"º ");
            
            $('#pressao').html(data.main.pressure+"hPa ");
            
            $('#velocidade').html(data.wind.speed+"km/h ");
           
            
            var dataAmanhecer= new Date(data.sys.sunrise*1000);
            var descDataAmanhecer=
                    dataAmanhecer.getHours()+':'+dataAmanhecer.getMinutes();
            $('#nascer').html(descDataAmanhecer);
            
            var dataPorDoSol= new Date (data.sys.sunset*1000);
            var descDataPorDoSol = dataPorDoSol.getHours()+':'+dataPorDoSol.getMinutes();
            $('#por').html(descDataPorDoSol);
            
            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icone/'+icone+'.png';
            $('#icone').attr('src', caminhoIcone);
            
        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}
function traduzirDescricao(descricao) {
    
    descricaoTraduzida = "";
    
    if(descricao == "clear sky"){
        
        descricaoTraduzida = "céu limpo";
    }else if (descricao == "few clouds"){
        
        descricaoTraduzida = "Poucas nuvens";
    }else if (descricao == "scattered clouds"){
        
        descricaoTraduzida = "nuvens dispersas";
    }else if (descricao == "broken clouds"){
        
        descricaoTraduzida = "nuvens quebradas";
    }else if (descricao == "shower rain"){
        
        descricaoTraduzida = "chuva de banho";
    }else if (descricao == "shower rain"){
        
        descricaoTraduzida = "chuva";       
    }else if (descricao == "thunderstorm"){
        
        descricaoTraduzida = "trovoada";        
    }else if (descricao == "snow"){
        
        descricaoTraduzida = "neve";        
    }else if (descricao == "mist"){
        
        descricaoTraduzida = "névoa";
    }
}


window.onload = function () {
    getClima();
};



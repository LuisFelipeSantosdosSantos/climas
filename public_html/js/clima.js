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
            
            $('#nascer').html(data.sys.sunrise);
            
            $('#por').html(data.sys.sunset);
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



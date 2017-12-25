$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'artigos.json',
        dataType: 'json',
        success: function (e) {
            for (var i = 0; i < e.length; i++) {
                var endereco = e[i].endereco;
                var background = e[i].background;
                var capa = e[i].capa;
                var titulo = e[i].titulo;
                var descricao = e[i].descricao;
                var tecnologias = e[i].tecnologias;

                $(".row").append(
                    "<article class=\"col-lg-4 col-md-6 \">" +
                    "<a href=\""+ endereco +"\"><div style=\"background: "+ background +";\" class=\"capa\"><span>"+ capa +"</span></div></a>" +
                    "<div class=\"artigo-descricao\">" +
                    "<div class=\"titulo\">"+ titulo +"</div>" +
                    "<div class=\"desc\">"+ descricao +"</div>" +
                    "<div class=\"tecnologias\">"+ tecnologias +"</div>" +
                    "</div>" +
                    "</article>"
                )

            }            
        }
    })
});
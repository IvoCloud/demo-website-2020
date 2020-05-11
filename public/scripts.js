$(document).ready(function(){
    $("#btn-add").click(function(){
        $.ajax({
            url:'/admin/add-product',
            type:'POST',
            dataType:'text',
            data:{
                title: $('#title').val(),
                quantity: $('#quantity').val(),
                price: $('#price').val(),
                description: $('#description').val(),
            }
        });
        $('.products__ul').append(
            `<li class="product">`+
            `<h2 class="product--name">`+$('#title').val()+`</h2>`+
            `<img class="product--image" src="../testImg.webp">`+
            `<p class="product--price">Цена</p>`+
            `<p class="product--price--val">`+$('#price').val()+`$</p>`+
            `<p class="product--quantity">Количество</p>`+
            `<p class="product--quantity--val">`+$('#quantity').val()+`</p>`+
            `<p class="product--description">Описание</p>`+
            `<p class="product--description--val">`+$('#description').val()+`</p>`+
            `</li>`
        );
    });
});
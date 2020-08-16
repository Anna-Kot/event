const getS = selector => document.querySelector(selector);

// стилізація кнопки edit. Після її натиску відкривається поле textarea з кнопками add i save. Присвоюємо значення поля з текстом у textarea
getS('.btn_edit').onclick =function() {
    getS('.btn_edit').style.backgroundColor = "rgb(206, 146, 17)"
    getS('.btn_edit').style.boxShadow = "0 0 3px 2px rgb(248, 223, 140)"
    getS('.btn_style').style.boxShadow = "none"
    getS('.edit_block').classList.add('show');
    getS('.style_block').classList.remove('show');
    getS('.edit_area').value = getS('.top_block').innerHTML;
}
getS('.btn_edit').onmouseup =function() {
    getS('.btn_edit').style.backgroundColor = "rgb(240, 178, 45)"
}
getS('.edit_area').onclick = function() {
    getS('.btn_edit').style.boxShadow = "none"
}

//При натиску на кнопку sаve додаємо зміни з textarea у основне поле для відображення
getS('.btn_save').onclick = function() {
    getS('.btn_edit').style.boxShadow = "none"
    getS('.edit_block').classList.remove('show');
    getS('.top_block').innerHTML = getS('.edit_area').value
}

// Стилізація кнопки style при натиску. При натиску на кнопку style відкривається вікно зі стилізацією основного вікна
getS('.btn_style').onclick = function() {
    getS('.btn_edit').style.boxShadow = "none"
    getS('.btn_style').style.boxShadow = "0 0 3px 2px rgb(99, 214, 235)"
    getS('.style_block').classList.add('show');
    getS('.edit_block').classList.remove('show');
    getS('.btn_style').style.backgroundColor = "rgb(21, 124, 143)";
}
getS('.btn_style').onmouseup =function() {
    getS('.btn_style').style.backgroundColor = "rgb(25, 147, 168)"
}

// Зміна розміру шрифту в основному блоці через застосування функції onclick
function fontSize() {
    getS('.top_block').style.fontSize = event.target.value
}

//Присвоюємо значення шрифта до основного блоку
let fF = getS('#fontFamily');
fF.onchange = function() {
   getS('.top_block').style.fontFamily = this.value 
}

//При натиску на кнопку Color of Text відкривається блок з кольорами. (задаємо колір тексту основного блоку)
getS('.btn_text_color').onclick = function() {
    getS('.colors').classList.remove('hide')
    for(i=0; i<getS('.colors').children.length; i++) {
        getS('.colors').children[i].onclick = function() {
            getS('.top_block').style.color = this.style.backgroundColor
            if(getS('.color_box').onclick){
                getS('.colors').classList.add('hide')   
                //Якщо колір вибрано, то блок зникає
            }
        }
    }
}
//аналогічна дія до попередньої частини коду, але з кнопкою Background color (задаємо колір фону до основого блоку)
getS('.btn_bg_color').onclick = function() {
    getS('.colors').classList.remove('hide')
    for(i=0; i<getS('.colors').children.length; i++) {
        getS('.colors').children[i].onclick = function() {
            getS('.top_block').style.backgroundColor = this.style.backgroundColor
            if(getS('.color_box').onclick){
                getS('.colors').classList.add('hide')   
            }
        }
    }
}

// start function bold and cursive 
getS('.check_1').onclick = function() {
    if(event.target.checked) {
        getS('.top_block').classList.add('bold');
    }
    else {
        getS('.top_block').classList.remove('bold');
    }
}
getS('.check_2').onclick = function() {
    if(event.target.checked) {
        getS('.top_block').classList.add('cursive');
    }
    else {
        getS('.top_block').classList.remove('cursive');
    }
}


//При натиску на кнопку add відкривається наступний блок, а попереній приховуємо. 
getS('.btn_add').onclick = function() {
    getS('.btn_edit').style.boxShadow = "none"
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
    if(getS('#choose_1').checked || getS('#choose_2').checked){
        getS('#choose_1').checked = false;
        getS('#choose_2').checked =false
        getS('.create_list').classList.add('hide')
        getS('.create_table').classList.add('hide') 
    }
}
//сheck table or list
getS('#choose_2').onclick = function() {
    getS('.create_table').classList.add('hide')
    getS('.create_list').classList.remove('hide')
}
getS('#choose_1').onclick = function() {
    getS('.create_list').classList.add('hide')
    getS('.create_table').classList.remove('hide')
}

// open list form. Додаємо ul та li елементи
const list = document.forms['form_list']
getS('.btn_create_list').onclick = function() {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit_area').value += `<ul style="list-style-type: ${typeLi}; margin-left: 25px">`;
    for(let i=0; i<countLi; i++) {
        getS('.edit_area').value += `<li> item ${i+1}</li>`; 
    }
    getS('.edit_area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    //приховуємо блок table і відкриваємо попередні блоки для корегування
}

// open table form. Додоємо елементи table
const table = document.forms['form_table']
getS('.btn_create_table').onclick = function() {
    console.log(table)
    const count_tr = table.count_TR.value;
    const count_td = table.count_TD.value;
    const width_td = table.width_TD.value;
    const height_td =table.height_TD.value;
    const width_border =table.width_bor.value;
    const type_border =table.type_border.value;
    const color_border = table.color_border.value;
    getS('.edit_area').value += `<table style="border-collapse: collapse">`
    for(let i=0; i<count_tr; i++){
        getS('.edit_area').value += `<tr>`;
        for(let j=0; j<count_td; j++){
            getS('.edit_area').value += `<td style="border-style: ${type_border}; border-width: ${width_border}px; border-color: ${color_border}; width: ${width_td}px; height: ${height_td}px">TD</td>`; 
            //стилізація table відповідно до даних
        }
        getS('.edit_area').value += '</td>';
    }
    getS('.edit_area').value += '</table>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}
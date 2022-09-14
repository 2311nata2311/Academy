window.onload = function () {
    let c = {'BTC':'21000', 'USD':'1'}; // Встановлюємо курс валют

    let val = document.getElementById('val'); 
    let currency1 = document.getElementById('cur1'); 
    let currency2 = document.getElementById('cur2'); 
    let result = document.getElementsByClassName('convert_result')[0]; 
    function summ() { 
        let z = 0;
        if(currency1.value === currency2.value){ // Якщо обидва значення дорівнюють
            result.innerText = val.value; 
        } else {
            if(currency1.value != 'USD'){ // Якщо не дорівнюють USD, то
                z = val.value*c[currency1.value]; // Переводимо суму в USD
                result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Ділимо на курс і округляємо до сотих
            } else { // Если не равны
                result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Помножуємо на курс і округляємо до сотих
            }
        }
    }
    val.oninput = function () { // При введенні даних у поле викликаємо функцію
        summ();
    };
    currency1.onchange = function () { 
        summ();
    };
    currency2.onchange = function () { 
        summ();
    }
}

<div class="convert_block_item">
    <input type="number" id="val" placeholder="введіть суму..."/>
    <select id="cur1">
        <option>USD</option>
        
    </select>
</div>
<div class="convert_block_item">
    <div class="convert_result">= 00,000</div>
    <select id="cur2">
        <option>BTC</option>
    </select>
</div>


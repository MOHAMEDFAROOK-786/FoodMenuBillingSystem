

let menu = [];
function saveMenu(){
    localStorage.setItem('menu', JSON.stringify(menu));
}

function renderItem(item, index){
    const itemview = document.getElementById('itemView');
    itemview.innerHTML += `<div class="item" onclick="bill(${index})" data-index="${index}"><h3>${item.name}</h3><p>Price: $${item.price}</p><div> <button class="edit-btn" onclick="updateItem(${index})">Edit</button> <button class="edit-btn" onclick="deleteItem(${index})">Delete</button></div></div>`;
}

function updateItem(index){
    const item = menu[index];
    if(!item) return;
    const newName = prompt('Update name:', item.name);
    const newPrice = prompt('Update price:', item.price);
    if(newName !== null && newName.trim() !== '') item.name = newName.trim();
    if(newPrice !== null && newPrice.trim() !== '') item.price = newPrice.trim();
    saveMenu();
    loadMenu();
}

function deleteItem(index){
    if(!confirm('Delete this item?')) return;
    menu.splice(index, 1);
    saveMenu();
    loadMenu();
}

function loadMenu(){
    const stored = localStorage.getItem('menu');
    if(stored){
        try{
            menu = JSON.parse(stored);
        }catch(e){
            menu = [];
        }
    }
    const itemview = document.getElementById('itemView');
    if(itemview) itemview.innerHTML = '';
    menu.forEach((it, idx) => renderItem(it, idx));
}

function addItem(){
    const name = document.getElementById('foodname').value.trim();
    const price = document.getElementById('foodrate').value.trim();
    if(!name) return;
    const item = { name, price };
    menu.push(item);
    saveMenu();
    renderItem(item, menu.length - 1);
    document.getElementById('foodname').value = '';
    document.getElementById('foodrate').value = '';
    
}
let cart = [];
function bill(index){
    const item = menu[index];
    cart.push(item.price);
    
    const billview = document.getElementById('billView');
    billview.innerHTML += `<div class="item" data-index="${index}"><h3>${item.name}</h3><p>Price: $${item.price}</p><p>Quantity:</p><input type="number" min="1" value="1" id="quantity-${index}"> <button class="edit-butt" onclick="deleteItem(${index})">remove</button></div>`;
}
function totalBill(){
    let total = 0;
    cart.forEach((price, idx) => {
        console.log(idx)
        const quantityInput = document.getElementById(`quantity-${idx}`);
        const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
        console.log(quantity)
        total += parseFloat(price) * quantity;
    });
    document.getElementById('showBill').innerHTML = `Total Bill Amount (including all taxes): $${total.toFixed(2)}`;
}
function deleteItem(index){
    if(!confirm('Delete this item from bill?')) return;
    const billview = document.getElementById('billView');
    const itemDiv = billview.querySelector(`.item[data-index="${index}"]`);
    if(itemDiv){
        billview.removeChild(itemDiv);
    }
}
const date=new Date();
const day=date.toLocaleDateString();
const time=date.toLocaleTimeString();

function buildBill(){
    const billview = document.getElementById('billView');
    const items = billview ? Array.from(billview.querySelectorAll('.item')) : [];
    let total = 0;
    let text = 'Bill\n-------------------------\n';
    text+='FOOD COURT RESTARURNT\n'
    text+=`date :${day}  time :${time}\n`;
     text += '-------------------------\n';
    items.forEach((div) => {
        const nameEl = div.querySelector('h3');
        const priceEl = div.querySelectorAll('p')[0];
        const qtyInput = div.querySelector('input[type="number"]');
        if(!nameEl || !priceEl) return;
        const name = nameEl.innerText.trim();
        const price = parseFloat((priceEl.innerText||'').replace(/[^0-9.]/g,'')) || 0;
        const qty = qtyInput ? (parseInt(qtyInput.value) || 1) : 1;
        const lineTotal = price * qty;
        total += lineTotal;
        text += `${name} - $${price.toFixed(2)} x ${qty} = $${lineTotal.toFixed(2)}\n`;
    });
    text += '-------------------------\n';
    text += `Total: $${total.toFixed(2)}\n`;
    return { text, total };
}

function downloadBill(){
    const result = buildBill();
    const blob = new Blob([result.text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const now = new Date();
    const filename = `bill-${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}_${now.getHours()}${now.getMinutes()}.txt`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}



loadMenu();
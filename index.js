let inputElement = document.getElementById("text");
let inputElement2 = document.getElementById("num");
let total = document.querySelector("#total")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem = item => {
    this.items.push(item);
  }

  removeItem = nome => {
    this.items.splice(nome,1)
  }

  billTotal = () => {
    
      let arr = this.items.map((item)=>{
      let preco = parseInt(item.price,10)
      return preco
    })
    if (arr != ''){
    let total = arr.reduce((total,proximo) => total + proximo );
    return total;
  }
    else return ('R$ ' + 0);
  }

  render = () => {
    //UNFINISHED
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';

    this.items.map((item,index) => {
     

      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      foodName.innerHTML = item.name;
      foodPrice.innerHTML = 'R$ ' + item.price;

      let deletar = document.createElement('a');
      deletar.setAttribute('href','#');
      deletar.setAttribute('style','text-decoration:none');
  
      let posicao = index;
      deletar.setAttribute('onclick','delBill(' + posicao + ')');
      let linkText = document.createTextNode('X');

      deletar.appendChild(linkText);
      row.appendChild(foodName);
      row.appendChild(foodPrice);
      row.appendChild(deletar);
      billContainer.appendChild(row);
    })
  }
}


var bill = new Bill();

function init() {
  bill.render();
  total.innerHTML = 0;
  document.getElementsByTagName('body')[0].style.display = 'flex';
   if(bill.items == ''){
  alert("comanda vazia!");
  }
}

function printBill() {
  window.print();
  bill.items.splice(0, bill.items.length);
  total.innerHTML =  'R$ 0,00';
  bill.render();
}

function addBill(){
    let Texto = inputElement.value;
    let valor = inputElement2.value;
    if ((inputElement2.value && inputElement.value) != ''){
      
      bill.addItem(new Item(Texto, valor));
      bill.render();
      document.getElementsByTagName('body')[0].style.display = 'flex';
      inputElement2.value = '';
      inputElement.value = '';
    }
  else{
  alert("Adicione o nome e o valor");
  return
}
    total.innerHTML = ('R$ '+bill.billTotal());
    bill.render();
}

function delBill( posicao ){
    bill.removeItem(posicao);
    total.innerHTML = ('R$ '+bill.billTotal());
    bill.render();
    if(bill.items == ''){
      alert("comanda vazia!");
      }
  }
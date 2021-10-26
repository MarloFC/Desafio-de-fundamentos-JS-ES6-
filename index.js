let inputElement = document.getElementById("text");
let inputElement2 = document.getElementById("num");
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
    //TODO
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
   // if(bill.items == ''){
  //     alert("comanda vazia!");
  //     }
  document.getElementsByTagName('body')[0].style.display = 'flex';
}

function printBill() {
  window.print();
  bill.items.splice(0, bill.items.length);
  console.log( bill.items);
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
}

function delBill( posicao ){
    bill.removeItem(posicao);
    bill.render();
  }
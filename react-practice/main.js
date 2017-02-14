import React from 'react';
import ReactDOM from 'react-dom';

// Это уже более сложный пример, в котором мы показываем
// как компоненты могут взаимодействовать друг с другом.

var ServiceChooser = React.createClass({
  getInitialState: function(){
    return { total: 0 };
  },
  addTotal: function( price ){
    this.setState( { total: this.state.total + price } );
  },
  render: function() {
    var self = this;
    var services = this.props.items.map(function(s,i){
      // Создадим новый экземпляр компонента Service для 
    // каждого элемента массива. Обратите внимание,
    // что мы передаем функцию self.addTotal в компонент.
      return <Service name={s.name} key={i} price={s.price} active={s.active} addTotal={self.addTotal} />;
    });

    return <div>
          <h1>Наши услуги</h1>         
          <div id="services">
            {services}
            <p id="total">Итого <b>${this.state.total.toFixed(2)}</b></p>
          </div>
        </div>;
  }
});

var Service = React.createClass({
  getInitialState: function(){
    return { active: false };
  },
  clickHandler: function (){
    var active = !this.state.active;
    this.setState({ active: active });
    
    // Ставим в известность ServiceChooser, 
    // вызывая метод addTotal
    this.props.addTotal( active ? this.props.price : -this.props.price );
  },
  render: function(){
    return <p className={this.state.active ? 'active' : ''} onClick={this.clickHandler}>
         {this.props.name} <b>${this.props.price.toFixed(2)}</b>
         </p>;
  }
});

var services = [
  { name: 'Веб-разработка', price: 300 },
  { name: 'Дизайн', price: 400 },
  { name: 'Интеграция', price: 250 },
  { name: 'Обучение', price: 220 }
];

// Отображаем ServiceChooser и передаем
// ему массив с перечнем услуг
ReactDOM.render(
  <ServiceChooser items={ services } />,
  document.getElementById("sample")
);

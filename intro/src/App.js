import { Container } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Row ,Col} from 'reactstrap';
import React ,{ Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import Form1 from "./Form1";
import Form2 from "./Form2";


export default class App extends Component{
   state = {currentCategory:"",products:[],cart:[]}

   componentDidMount(){
    this.getProducts();
  }

  changeCategory= (category)=>{
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  }

  getProducts=(categoryId)=>{

    let url="http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
  }

  addToCart= (product)=>{
    let newCart=this.state.cart;
     var addedItem=newCart.find(c=>c.product.id===product.id);
     if(addedItem){
      addedItem.quantity +=1;
     }
     else{
      newCart.push({product:product,quantity:1}); 
     }
  
    this.setState({cart:newCart});
    alertify.success(product.productName + " added to cart",2);
}

removeFromCart = product => {
  let newCart = this.state.cart.filter(c => c.product.id !== product.id);
  this.setState({ cart: newCart });
  alertify.error(product.productName + " removed from cart",2);
  
};

  render(){ 
    var categoryInfo={title:"Category List"};
    var productInfo={title:"Product List"};

    return (
      <div >
        <Container>
          
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
          
          <Row>
            <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
             <Col xs="9">
             <Routes>
    <Route
      path="/"
      element={
        <ProductList
          products={this.state.products}
          addToCart={this.addToCart}
          currentCategory={this.state.currentCategory}
          info={productInfo}
        />
      }
    />
    <Route
      path="/cart"
      element={
        <CartList
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />
      }
    />
    <Route path="/form1" element={<Form1/>}/>
    <Route path="/form2" element={<Form2/>}/>
   
    <Route path="*" element={<NotFound />} />
  </Routes>
             
             </Col>
            
          </Row>
        </Container>
  
  
  
      </div>
    );

  }

}



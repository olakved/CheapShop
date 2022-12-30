import styled from "styled-components";

export const ProductStyle = styled.div`
width: 100%;
/* background-color:lightgray; */
padding: 15px;

.productContainer{
  margin-top: 100px;
}

.productCategory{
    height:40px;
    padding:5px;
    text-align: center;
    margin: 0px 150px 0px;
    background-color:lightgray;
    font-size:12px;
    background-color:rgb(56,1,56);
    color: white;

}

.productWrap{
    width:100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  gap: 20px;
  border-radius: 12px;
  /* background-color: rgb(56,1,56); */
}

.productCard{
    background-color: white;
    width: 300px;
    overflow: hidden;
    /* background: transparent; */
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
  transition: transform .2s;
}

.ProductcardActive {
  height: 450px;
  background: transparent;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
}

.productCard:hover{
  transform: scale(1.02);
}

.productAvatar{
   width: 100%;
    height:200px;
}

.productBox{   
    padding: 10px;
}

.productDetailsA{
    
}

.productTitle{
    text-align: center;
    font-size: 18px;
    margin-bottom:10px;
    color:rgb(56,1,56);
  
}

.productPriceRate{
    display: flex;
    justify-content: space-between;
    font-size:15px;
}

.cartItems{
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.cartItems button{
  width: 40%;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    background-color:rgb(56,1,56);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 15px;
}

.productDetailsB{
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top:5px;
}

.productDetailsB p{
    text-align: center;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    color: lightgray;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}


.productMoreDetails{
  padding: 10px;
  font-size: 12px;
}

.productMoreDetails{
  border-top: 1px solid rgba(60, 64, 67, 0.3);
  margin-top: 2px;
}
`
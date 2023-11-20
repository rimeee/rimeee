let link = "https://reqres.in/api/products/10";
let xhr = new XMLHttpRequest();

xhr.open("get", link, true); //get방식은 보안에 취약함
xhr.send();
console.log(xhr);

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let product = JSON.parse(xhr.responseText);
    let result = document.querySelector("#result");
    result.innerText = `상품명: ${product.data.name} 생산년도: ${product.data.year}.`;
  }
};

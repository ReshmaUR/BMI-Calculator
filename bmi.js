function calculate(){

  //for getting values that enter in the input field
  var w = document.getElementById("weight").value;
  var h = document.getElementById("height").value;

  //for storing bmi value
  var result = parseFloat(w/(h*h));

  //for displaying the health condition
  // var remark = document.querySelector("#remark");
  var remark = document.getElementById("remark");

  //setting the bmi value to three decimal places
  var result2 = result.toFixed(3);

  //for displaying the bmi value
  // var ins = document.querySelector("#comment");
  var ins = document.getElementById("comment");
  ins.innerHTML="BMI of the user is "+result2+"kg/m2";
  
  //for under weight
  if(result2<18.5){
    remark.innerHTML = "OH..HO...YOU ARE UNDER WEIGHT!!!";
    document.getElementById("image").src="https://thumbs.dreamstime.com/z/cartoon-underweight-woman-vector-skinny-65835946.jpg";
    ins.style.color = "red";
  }
  //for healthy weight
  if(result2>18.5&&result2<24.9){
    remark.innerHTML = "HEY..YOU HAVE PERFECTLY HEALTHY WEIGHT...";
    document.getElementById("image").src="https://tse3.mm.bing.net/th?id=OIP.XAM7OB8T4zmRgJDEzdqFWwHaHa&pid=Api&P=0&w=300&h=300";
    ins.style.color = "green";
  }
  //for over weight
  if(result2>25&&result2<29.9){
    remark.innerHTML = "OH..NO...YOU HAVE OVER WEIGHT!!!";
    document.getElementById("image").src="https://tse4.mm.bing.net/th?id=OIP.juCIJxUTIZZrNw2yjENrDwHaHk&pid=Api&P=0&w=300&h=300";
    ins.style.color = "red";
  }
  //for obese case
  if(result2>29.9){
    remark.innerHTML = "OMG!!! YOU HAVE EXCESSIVE BODY FAT...";
    document.getElementById("image").src="http://www.easycure4u.com/wp-content/uploads/2017/11/Harmful-Effects-of-Being-Overweight-1024x683.jpg";
    ins.style.color = "red";
  }
}



<!-- <?php
// session_start();
// require_once("php\CreateDb.php");
// require_once("php\component.php");

// $db=new CreateDb("Productdb","Producttb");

// if(isset($_POST['remove'])){
  
//   if (!empty($_SESSION['cart'])) {
//     foreach ($_SESSION['cart'] as $key => $value) {
//         if (isset($value['product_id']) && $value['product_id'] == $_GET['id']) {
//             unset($_SESSION['cart'][$key]);
//             echo "<script>alert('Product has been removed.')</script>";
//             echo "<script>window.location='cart.php'</script>";
//         }
//     }
//   } else {
//     echo "<h5 style='font-size:2rem;'>Cart is Empty</h5>";
//   }
// }


?> -->




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cars website</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
    />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div style="height:30vh;">
      <?php //require_once("php\header.php")?> 
    </div>
  <div class="container-fluid">
  <div class= "row px-5">
    <div class="col-md-7">
      <div class="shopping-cart">
        <h6 style="font-size:3rem; font-weight:bold;">My Cart</h6>
        <hr>
       <?php
    //    $total=0;
    //    if(isset($_SESSION['cart'])){
    //     $product_id=array_column($_SESSION['cart'],'product_id');
    //    $result=$db->getData();
    //    while($row=mysqli_fetch_assoc($result)){
    //     foreach($product_id as $id){
    //       if($row['id']==$id){
    //         cartElement($row['product_image'],$row['product_name'],$row['product_price'],$row['id']);
    //         $total=$total+(int)$row['product_price'];
    //       }
    //     }
    //    }
    //    }else{
    //     echo"<h5 style='font-size:2rem;'>Cart is Empty</h5>";
    //    }
       ?>
      </div>
    </div>
    <div class="col-md-4 offset-md-1 border rounded mt-5 bg-white h-25">
      <div class="pt-4">
        <h6 style='font-size:2rem;'>PRICE DETAILS<h6>
          <hr>
          <div class="row price-details">
            <div class="col-md-6">
              <?php
            //   if(isset($_SESSION['cart'])){
            //     $count=count($_SESSION['cart']);
            //     echo"<h6 style='font-size:1rem;'>Price($count items)</h6>";
            //   }else{
            //     echo"<h6 style='font-size:1rem;'>Price(0 items)</h6>";
            //   }
              ?>
              <h6 style='font-size:2rem;'>Total Amount:</h6>
            </div>
            <div class="col-md-6">
              <h6 style='font-size:2rem; padding-top: 1.7rem;'>$<?php //echo $total;?></h6>
            </div>

          </div>
      </div>
    </div>
  </div>
  </div>









  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  <script src="js.js"></script>
  </body>
</html>
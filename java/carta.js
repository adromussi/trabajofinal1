const carta = () =>{
    console.log("carta");
    document.getElementById("confirmacionId").style.display = "none";
    $("#container").append(
        `<div class="row">
        <div class="col-lg-6">
          <div>
            <img src="../imagenes/bx6.jpg" class="fotos4" alt="imagen bx">
            
            <button id="cocina" type="submit" class="btn btn-outline-danger" >
            COCINA
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            <img src="../imagenes/diag.jpg" class="fotos4" alt="imagen diag">
            
            <button id="combos" type="submit" class="btn btn-outline-danger" >
           COMBOS
            </button>
          </div>
          </div>
          </div> `
    )

}
$(document).ready(function(){
  console.log('ready')

  $(".input").click( function(){
    $(this).val("")
  })
})

var myStack = new StackDataStructure();


$(".button-add").click(function(){
  if(myStack.canPush == false ){
    $(".rows").prepend("<div class='stack-rows row-0'> Stack Overflow </div>")
    $(this).addClass("blocked")
  } else {
    $(".row-8").remove();
    $(".button-take").removeClass(".blocked");
    myStack.push($(".input-element").val())
    console.log(myStack.stackControl);
    if ($('.input-element').val() != ""){
      $(".stack:empty").last().text($(".input-element").val()).addClass("active")
    }
  }
})


$(".button-take").click(function(){
  if(myStack.isEmpty() ==true ){
    $("<div class='stack row-9'>Stack Underflow</div>").appendTo(".rows");
    $(this).addClass (".blocked")
    myStack.pop()
    console.log(myStack.stackControl)
    $(".stack").not(":empty").first().text("").removeClass("active");
  }
})
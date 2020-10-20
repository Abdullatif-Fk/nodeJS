
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  //console.log(process.argv)
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var checked=[false,true ];
var arraycommad=['hello','quit','exit','list','add','remove'];
var arrayCommExpli=['if I write "hello x", the answer should be "hello x!" ','quit from program',
  'exit from program','list all tasks','add a new task',
  '"remove" : remove last task   "remove 2" : remove second task'];
var arrayTask=["scan","print"];
var task="";
function onDataReceived(text) {
  var input=text;
  input =input.trim();
  input=input.split();
  //console.log(text);
  var patt = new RegExp("hello");
  var helpp = new RegExp("help");
  var listt = new RegExp("list");
  var addd = new RegExp("add");
  var removee = new RegExp("remove");
  var editt = new RegExp("edit");
  var editt = new RegExp("edit");




  
 if (text === 'quit\n' ||text === 'exit\n') {
    quit();
  }
  else if( patt.test(input)){
    hello(input);
  }else if(text==='name'){
    name();
  }else if (helpp.test(input)){
    help();   
  }else if (listt.test(input)){
    list();
  }else if (addd.test(input)){
    add(input);
  }else if (removee.test(input)){
    remove(input);
  }else if (editt.test(input)){
    edit(input);
  }
  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello( input){
  console.log(input+"!");
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!');
  process.exit();
}

function name(){
  console.log('Type your name: ');
}
/**
 * lists all the possible commands
 *
 * @returns {void}
 */
function help(){

  console.log("All the possible commands :\n");
  for (let i in arraycommad){
    console.log(arraycommad[i]+"   ------"+arrayCommExpli[i]+"\n");
  }
}

function list(){
  for (let i in arrayTask){
    if(checked[i]===false){
      console.log(i+"-"+"[ ]"+"   "+arrayTask[i]+"\n");
    }else{
      console.log(i+"-"+"[✔]"+"   "+arrayTask[i]+"\n");

    }
    
  }

}

function add(input){
 // input=input.trim();
  if(input[0]==="add"){
    console.log("error : you should type like 'add nameOfTask'")
  }else{
    var command=input[0].split(" ");
    arrayTask.push(command[1]);
    //arrayCommExpli.push("");
    
  }

}
function remove(input){
  if (input[0]==="remove"){
    arrayTask.pop();
    //arrayCommExpli.pop();
    console.log("The last task is removed.")
  }
  else{
    var command=input[0].split(" ");
   
   var pos=parseInt(command[1]);
    if(pos<arrayTask.length){
      if(Number.isInteger(parseInt(command[1]))){
      // console.log("hhhhhhhhhhhhhhh")
       
      // console.log(pos);
       arrayTask.splice(pos,1);
       //arrayCommExpli.splice(pos,1);
     }
     else{
     console.log("you should type like this 'remove 3'")
     }
    }
    else {
      console.log("this task does not exist!!!")
    }



  }

}

function edit(input){
  
  var inpuSplit=input[0].split(" ");
  //console.log(inpuSplit);
  if(inpuSplit.length==1){
    if(input[0]==="edit"){
      console.log('You should type like : "edit new-text" OR "edit 2 new-text"');
    }
    
  }else if(inpuSplit.length>1){
    
      
      
    var editpos=parseInt(inpuSplit[1]);
    
    if(inpuSplit[0]==="edit"&& Number.isInteger(editpos)){
      for (let i=2 ;i<inpuSplit.length;i++){
        task=task.concat(" "+inpuSplit[i]);
        //console.log(task);
      }

      arrayTask.splice(editpos,1,task);
      //arrayCommExpli.splice(editpos,1,task);

    }
    
    
    else if(inpuSplit[0]==="edit"){
      //console.log("hello edit")
      for (let i=1 ;i<inpuSplit.length;i++){
        task=task.concat(" "+inpuSplit[i]);
        //console.log(task);
      }
      
      arrayTask.pop();
      //arrayCommExpli.pop();
      arrayTask.push(task);
      //arrayCommExpli.push("");

    }
    

  }



}

// The following line starts the application
startApp("Abdullatif Fkheir")

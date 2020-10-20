
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

var arraycommad=['hello','quit','exit','list'];
var arrayCommExpli=['if I write "hello x", the answer should be "hello x!" ','quit from program',
  'exit from program','list all tasks'];
function onDataReceived(text) {
  var input=text;
  input =input.trim();
  input=input.split();
  //console.log(text);
  var patt = new RegExp("hello");
  var helpp = new RegExp("help");
  var listt = new RegExp("list");
  var addd = new RegExp("add");

  
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
  for (let i in arraycommad){
    console.log(i+"      "+arraycommad[i]+"\n");
  }

}

function add(input){
 // input=input.trim();
  if(input[0]==="add"){
    console.log("error : you should type like 'add nameOfTask'")
  }else{
    var command=input[0].split(" ");
    arraycommad.push(command[1]);
    arrayCommExpli.push("");
    
  }

}

// The following line starts the application
startApp("Abdullatif Fkheir")

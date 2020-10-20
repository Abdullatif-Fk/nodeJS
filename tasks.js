
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
function onDataReceived(text) {
  var input=text;
  input =input.trim();
  input=input.split();
  console.log(text);
  var patt = new RegExp("hello");
  var res = patt.test(input); 
 if (text === 'quit\n' ||text === 'exit\n') {
    quit();
  }
  else if(res){
    hello(input);
  }else if(text==='name\n'){
    name();
  }else if (text ==='help\n'){
    help();   
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
  
 // console.log("hi");
 //textt=textt.trim();
 //textt=textt.split();
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
  var arraycommad=['hello','quit','exit'];
  var arrayCommExpli=['if I write "hello x", the answer should be "hello x!" ','quit from program',
  'exit from program'];
  console.log("All the possible commands :\n");
  for (let i in arraycommad){
    console.log(arraycommad[i]+"   ------"+arrayCommExpli[i]+"\n");
  }
}

// The following line starts the application
startApp("Abdullatif Fkheir")

use std::env; //rust stdlib function to get command line args
use std::fs; //rust file library
use std::process::Command; //library to run processes in rust

fn main(){
    
    //save the command line argument
    let cli_input: Vec<String> = env::args().collect(); 

    //create a variable for the file path and save the first command line argument into it
    let filepath = &cli_input[1]; 

    //take the contents of the file and save into a single string
    let data = fs::read_to_string(filepath).expect("Unable to read file");

    //now, chop this string into a vector at every newline since the URLS are newline delimited
    let urls: Vec<&str> = data.split('\n').collect();
    
    //debug code to print the url we saved from the command line
    println!("URL passed in from the command line: {:?}", urls); 

    //this runs "git clone" with the last .arg as the URL
    let _git_clone_command = Command::new("git").arg("clone").arg(&urls[1]).output();
    

}

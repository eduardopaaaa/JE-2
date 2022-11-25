


	//importing the essential java libraries
	import java.io.*;
	//for encoding and decoding between the UNICODE and given charset
	import java.nio.charset.StandardCharsets;
	//class declaration
	class Main
	{
	//defining a static method named is_happy_number()
	public static int is_happy_number(int nmr1){
	//variable declaration and initialization
	int remdr = 0, sum = 0;
	
	//calculation of  the sum of squares of digits
	while(nmr1 > 0){
	//finding the remainder 
	remdr = nmr1%10;
	//compute the sum
	sum = sum + (remdr*remdr);
	nmr1 = nmr1/10;
	}
	//returning the sum
	return sum;
	}
	
	//defining the main method 
	public static void main(String[] args) {
	//for reading the inputs
	InputStreamReader reader=new InputStreamReader(System.in,StandardCharsets.UTF_8);
	BufferedReader in= new BufferedReader(reader);
	
	int user_input=0;
	String line=new String();
	//Exception handling
	
	//try block
	try {
	line=in.readLine();}
	//catch block 
	catch (IOException epx) {
	
	epx.printStackTrace();}
	//try block
	try {
	//storing the input 
	user_input=Integer.parseInt(line);}
	//catch block
	catch(Exception epx) {
	//display the number 
	System.out.println("Number not entered");
	}
	int f_result = user_input;
	//if result is equal to zero
	if(f_result==0) {
	//print zero
	System.out.println(0);
	}
	else {
	//while result is not equal to both 1 and 4
	while(f_result != 1 && f_result != 4){
	//call the method named is_happy_number()
	f_result = is_happy_number(f_result);
	}
	}
	//if the result is 1
	if(f_result == 1)
	//display the output
	System.out.println(1);
	//else if result is equal to 4
	else if(f_result == 4)
	//display the output
	System.out.println(0);}
	}




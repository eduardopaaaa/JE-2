
import java.io.BufferedReader;

import java.io.IOException;

import java.io.InputStreamReader;

import java.nio.charset.StandardCharsets;

public class sumnum {

/**

* Iterate through each line of input.

*/

public static void main(String[] args) throws IOException {

InputStreamReader reader = new InputStreamReader(System.in, StandardCharsets.UTF_8);

BufferedReader in = new BufferedReader(reader);

String line;

while ((line = in.readLine()) != null) {

int n = Integer.parseInt(line);

int sum = 0;

for(int i = 1 ; i<=n ; ++i) {

if(i%5!=0 && i%7!=0) {

sum = sum + i;

}

}

System.out.println("Sum is: " + sum);

}

}

}

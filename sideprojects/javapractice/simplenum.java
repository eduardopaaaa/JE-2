import java.util.Scanner;

public class simplenum {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
			System.out.println("Enter max count");
				int i=scanner.nextInt();
					for (int a=1;a<=i;a++) {
						System.out.println("Num Count:" + a);
					}

	}

}

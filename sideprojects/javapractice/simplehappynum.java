import java.util.HashSet;

public class simplehappynum {

	public boolean isHappy(int n) {
		HashSet<Integer> seen = new HashSet<>();
		while (n !=1) { 
			int current = n;
			int sum = 0;
			while(current !=0) {
				sum += (current % 10) * (current % 10);
				current /=10;
			}
			if (seen.contains(sum)) {
				return false;
				
			}
			seen.add(sum);
			n = sum;
		}
		return true;
	}
}

public class App {
	public static void main(String[] args) throws Exception {
		Analysis analysis = new Analysis();
		int[] data = { 1, 2, 3, 4, 5, 2 };
		analysis.Load(data);
		analysis.Describe();
	}
}

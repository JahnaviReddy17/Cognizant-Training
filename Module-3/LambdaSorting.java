import java.util.*;

public class LambdaSorting {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("zebra");
        list.add("apple");
        list.add("mango");

        Collections.sort(list, (a, b) -> a.compareTo(b));

        for (String s : list) {
            System.out.println(s);
        }
    }
}
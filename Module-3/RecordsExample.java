import java.util.*;
import java.util.stream.*;

record Person(String name, int age) {}

public class RecordsExample {
    public static void main(String[] args) {
        List<Person> list = Arrays.asList(
            new Person("A", 20),
            new Person("B", 15),
            new Person("C", 25)
        );

        list.stream().filter(p -> p.age() > 18).forEach(System.out::println);
    }
}
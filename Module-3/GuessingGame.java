import java.util.Scanner;
import java.util.Random;

class GuessingGame {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        int number = random.nextInt(100) + 1;
        int guess;

        do {

            System.out.print("Guess the number: ");
            guess = sc.nextInt();

            if (guess > number) {
                System.out.println("Too High");
            }
            else if (guess < number) {
                System.out.println("Too Low");
            }
            else {
                System.out.println("Correct Guess!");
            }

        } while (guess != number);
    }
}
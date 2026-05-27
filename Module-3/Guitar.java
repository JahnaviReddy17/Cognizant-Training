interface Playable {

    void play();
}

class Guitar implements Playable {

    public void play() {

        System.out.println("Playing Guitar");
    }

    public static void main(String[] args) {

        Guitar g = new Guitar();

        g.play();
    }
}
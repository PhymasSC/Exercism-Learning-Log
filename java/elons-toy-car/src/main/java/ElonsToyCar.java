public class ElonsToyCar {
    private int distanceTravelled = 0;
    private int batteryPercentage = 100;

    public static ElonsToyCar buy() {
        return new ElonsToyCar();
    }

    public String distanceDisplay() {
        return String.format("Driven %s meters", this.distanceTravelled);
    }

    public String batteryDisplay() {
        return batteryPercentage > 0 ? String.format("Battery at %s%%", this.batteryPercentage) : "Battery empty";
    }

    public void drive() {
        if (batteryPercentage > 0) {
            this.distanceTravelled += 20;
            this.batteryPercentage -= 1;
        }
    }
}

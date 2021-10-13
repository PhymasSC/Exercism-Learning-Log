public class CarsAssemble {
    private static final double NUMBER_OF_CARS_PRODUCED_PER_HOUR = 221.0;
    private static double successRate;

    public double productionRatePerHour(int speed) {
        switch(speed){
            case 5,6,7,8 -> successRate = .9;
            case 9 -> successRate = .8;
            case 10 -> successRate = .77;
            default -> successRate = 1.00;
        }
        return NUMBER_OF_CARS_PRODUCED_PER_HOUR * speed * successRate;
    }

    public int workingItemsPerMinute(int speed) {
        return (int) (productionRatePerHour(speed) / 60);
    }
}

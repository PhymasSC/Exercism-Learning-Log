public class Lasagna {
    private static final int EXPECTED_OVEN_TIME_IN_MIN = 40;
    private static final int PREPARATION_TIME_OF_LASAGNA_IN_MIN = 2;

    public int expectedMinutesInOven() {
        return EXPECTED_OVEN_TIME_IN_MIN;
    }

    public int remainingMinutesInOven(int actualMinutes) {
        return this.expectedMinutesInOven() - actualMinutes;
    }

    public int preparationTimeInMinutes(int numberOfLayersOfLasagna) {
        return numberOfLayersOfLasagna * PREPARATION_TIME_OF_LASAGNA_IN_MIN;
    }

    public int totalTimeInMinutes(int numberOfLayersOfLasagna, int minutesOfLasagnaInOven){
        return preparationTimeInMinutes(numberOfLayersOfLasagna) + minutesOfLasagnaInOven;
    }
}

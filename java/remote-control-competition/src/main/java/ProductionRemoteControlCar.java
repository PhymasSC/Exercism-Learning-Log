
class ProductionRemoteControlCar implements RemoteControlCar, Comparable<ProductionRemoteControlCar> {

    private int distanceTravelled;
    private int victoriesAmount;

    public ProductionRemoteControlCar() {
        this.distanceTravelled = 0;
    }

    @Override
    public void drive() {
        this.distanceTravelled += 10;
    }

    @Override
    public int getDistanceTravelled() {
        return this.distanceTravelled;
    }

    public int getNumberOfVictories() {
        return this.victoriesAmount;
    }

    public void setNumberOfVictories(int numberofVictories) {
        this.victoriesAmount = numberofVictories;
    }

    @Override
    public int compareTo(ProductionRemoteControlCar car) {
        return this.victoriesAmount - car.victoriesAmount;
    }
}

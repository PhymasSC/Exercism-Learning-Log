class NeedForSpeed {
    private int battery;
    private int speed;
    private int batteryDrain;
    private int distance;

    public NeedForSpeed(int speed, int batteryDrain) {
        this.battery = 100;
        this.distance = 0;
        this.speed = speed;
        this.batteryDrain = batteryDrain;
    }

    public boolean batteryDrained() {
        return this.getBattery() < batteryDrain;
    }

    public int distanceDriven() {
        return this.distance;
    }

    public void drive() {
        if( this.getBattery() <= 0) return;
        this.distance += this.getSpeed();
        this.battery -= this.getBatteryDrain();
    }

    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50, 4);
    }

    public int getSpeed() {
        return speed;
    }

    public int getBatteryDrain() {
        return batteryDrain;
    }

    public int getBattery() {
        return battery;
    }
}

class RaceTrack {

    private int distance;

    public RaceTrack(int distance) {
        this.distance = distance;
    }

    public boolean carCanFinish(NeedForSpeed car) {
        return (100 / car.getBatteryDrain()) * car.getSpeed() >= this.distance;
    }
}

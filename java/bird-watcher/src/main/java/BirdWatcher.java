
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return this.birdsPerDay;
    }

    public int getToday() {
        if(this.birdsPerDay.length == 0) return 0;
        return this.birdsPerDay[this.birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        ++ this.birdsPerDay[this.birdsPerDay.length - 1];
    }

    public boolean hasDayWithoutBirds() {
        for(var numberOfBirds: this.birdsPerDay)
            if(numberOfBirds == 0) return true;
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int counter = 0;
        if(numberOfDays > this.birdsPerDay.length) 
            numberOfDays = this.birdsPerDay.length;
        while(numberOfDays > 0){
            counter += this.birdsPerDay[--numberOfDays];
        }
        return counter;
    }

    public int getBusyDays() {
        int counter = 0;
        for(var numberOfBirds: this.birdsPerDay)
            if(numberOfBirds >= 5) ++counter;
        return counter;
    }
}

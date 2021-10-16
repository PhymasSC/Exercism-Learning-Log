
import java.util.ArrayList;
import java.util.List;

public class TestTrack {

    public static void race(RemoteControlCar car) {
        car.drive();
    }

    public static List<ProductionRemoteControlCar> getRankedCars(ProductionRemoteControlCar prc1,
            ProductionRemoteControlCar prc2) {
        List<ProductionRemoteControlCar> ranking = new ArrayList<>();
        ranking.add(prc1.compareTo(prc2) < 0 ? prc1 : prc2);
        ranking.add(prc1.compareTo(prc2) >= 0 ? prc1 : prc2);
        return ranking;
    }
}

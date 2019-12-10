@isTest
public class TestVIPController {
    
    @isTest
    public static void testReadOpps() {
        insert new Account(Name='Test Account', AnnualRevenue=50001);
        List<string> result = VIPController.readVips();
        System.assert(!result.isEmpty());
    }
}
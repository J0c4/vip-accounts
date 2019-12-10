public with sharing class VIPController {
	
    @AuraEnabled
    public static List<string> readVips()
    {
        List<string> accsInfo = new List<string>();
        for (account acc: [SELECT Name, AnnualRevenue FROM Account WHERE vip__c=true])
        {
            accsInfo.add('Account: ' + acc.Name + ' Annual Revenue: ' + acc.AnnualRevenue);
        }
        return accsInfo;
    }
}
'use strict';

const rp = require('request-promise');

async function main() {
  let options;
  let result;
  let directoryID;
  let EASID;

  /*
    Create a new directory
    POST /directory/new/
    STEP1: apply and obtain a new directory ID
  */
  console.log('Step1:Create a new directory');
  try {
    options = {
      method: 'POST',
      uri: 'https://dxdl.deepq.com:5000/directory/new/',
      form: {}
    };
    //rp(options).then(function(message){console.log(message)})
    var new_directory = await rp(options);
    console.log(new_directory);
  } catch (error) {
    console.log(error.message);
  }

  
  /*
    Register a user (provider)
    POST /user/register/
    STEP2: apply an user account on the new directory
           enter the directory ID from STEP1, user type, user-specified ID and password
  */
  console.log('Step2:Register a provider');
  try {
    options = {
      method: 'POST',
      uri: 'https://dxdl.deepq.com:5000/user/register',
      form: {
	   //directoryID:'0x7b17439303Deb7c8Dca9aC6e1BB515dA6ad1244c',
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
	   userType:'provider',
	   userID:'11111',
	   password:'11111'
      }
    };
    //rp(options).then(function(message){console.log(message)})
    var rig_provider = await rp(options);
    console.log(rig_provider);
  } catch (error) { 
    console.log(error.message);
  }
    
  /*
    Register a user (consumer)
    POST /user/register/
    STEP3: apply an user account on the new directory
           enter the directory ID from STEP1, user type, user-specified ID and password
  */
  console.log('Step3:Register a consumer');
  try {
    options = {
      method: 'POST',
      uri: 'https://dxdl.deepq.com:5000/user/register',
      form: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
	   userType:'consumer',
	   userID:'22222',
	   password:'22222'
      }
    };
    //rp(options).then(function(message){console.log(message)})
    var rig_consumer = await rp(options);
    console.log(rig_consumer);
  } catch (error) {
    console.log(error.message);
  }


  /*
    Create a new data entry by a provider
    POST /entry/create/
    STEP4: create a new data entry
           enter the directory ID from STEP1, the provider ID and password from STEP2
           data entry = data owner, data description, data certificate, data access path,
                        offer price and data entry due date
  */
  console.log('Step4:Create a new data entry by a provider');
  try {
    options = {
      method: 'POST',
      uri: 'https://dxdl.deepq.com:5000/entry/create',
      form: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
	   userID:'11111',
	   password:'11111',
	   offerPrice:'100000',
	   dueDate:'1556640000',
	   dataCertificate:'yes123',
	   dataOwner:'123',
	   dataDescription:'qqqq',
	   dataAccessPath:'/ffff'
      }
    };
    var new_data = await rp(options);
    console.log(new_data);
  } catch (error) {
    console.log(error.message);
  }


  /*
    Deploy a new EAS for a provider and a consumer by the service
    POST /eas/deploy/
    STEP5: deploy a new EAS and returned an EAS ID
           enter the directory ID from STEP1 and the consumer ID from STEP2
           EAS = data entry fields + 
                 data certificate, data expiration date, provider agreement and consumer agreement
  */
  console.log('Step5:Deploy a new EAS for a provider and a consumer by the service');
  try {
    options = {
      method: 'POST',
      uri: 'https://dxdl.deepq.com:5000/eas/deploy',
      form: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
	   userID:'22222',
	   dataCertificate:'yes123',
	   expirationDate:'1556640000',
	   providerAgreement:'yes11111',
	   consumerAgreement:'yes11111',
      }
    };
    var new_EAS = await rp(options);
    console.log(new_EAS);
  } catch (error) {
    console.log(error.message);
  };
  
  /*
    Revoke an EAS by a user (provider or consumer)
    POST /eas/revoke/
    STEP6: revoke a new EAS
           enter the directory ID from STEP1, user type, user (provider or consumer) ID and password from STEP2 or STEP3
           EASID = the EAS ID returned from STEP5
  */
  console.log('Step6:Revoke an EAS by a user (provider or consumer)');
  try {
    options = {
      method: 'POST',
      uri: 'https://dxdl.deepq.com:5000/eas/revoke',
      form: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
	   userType:'provider',
	   userID:'11111',
	   password:'11111',
	   EASID: JSON.parse(new_EAS)["result"]["EASID"],
      }
    };
    var revoke_eas = await rp(options);
    console.log(revoke_eas);
  } catch (error) {
    console.log(error.message);
  }

  /*
    Retrieve a data entry in a directory by entry index
    GET /entry/index/
    STEP7: retrieve a data entry by entry index
           enter the directory ID from STEP1 and an entry index (start from 0)
  */
  console.log('Step7:Retrieve a data entry in a directory by entry index');
  try {
    options = {
      method: 'GET',
      uri: 'https://dxdl.deepq.com:5000/entry/index',
      qs: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
           index:'0'
      }
    };
    var get_index = await rp(options);
    console.log(get_index);
  } catch (error) {
    console.log(error.message);
  };


  /*
    Retrieve a data entry in a directory by data certificate
    GET /entry/dctf/
    STEP8: retrieve a data entry by data certificate
           enter the directory ID from STEP1 and a data certificate
  */  
  console.log('Step8:Retrieve a data entry in a directory by data certificate');
  try {
    options = {
      method: 'GET',
      uri: 'https://dxdl.deepq.com:5000/entry/dctf',
      qs: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
	   dataCertificate:'yes123'
      }
    };
    //rp(options).then(function(message){console.log(message)})
    var get_dctf = await rp(options);
    console.log(get_dctf);
  } catch (error) {
    console.log(error.message);
  };
  

  /*
    Retrieve data entry count in a directory
    GET /entry/count/
    STEP9: retrieve data entry count in a directory
           enter the directory ID from STEP1
  */ 
  console.log('Step9:Retrieve data entry count in a directory');
  try {
    options = {
      method: 'GET',
      uri: 'https://dxdl.deepq.com:5000/entry/count',
      qs: {
	   directoryID: JSON.parse(new_directory)["result"]["directoryID"],
      }
    };
    var count = await rp(options);
    console.log(count);
  } catch (error) {
    console.log(error.message);
  }


  /*
    Retrieve EAS information by an EAS ID
    GET /eas/sid/
    STEP10: retrieve EAS information by an EAS ID
            enter the EAS ID from STEP5
            If the the API /eas/revoke/ is called --> isValid=false
            If the the API /eas/revoke/ is not called --> isValid=true
  */ 
  console.log('Step10:Retrieve EAS information by an EAS ID');
  try {
    options = {
      method: 'GET',
      uri: 'https://dxdl.deepq.com:5000/eas/sid',
      qs: {
	   EASID: JSON.parse(new_EAS)["result"]["EASID"],
      }
    };
    var eas_info = await rp(options);
    console.log(eas_info);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = main;
if (!module.parent)
    main();

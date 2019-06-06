import requests

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step1:Create a new directory')
url = 'https://dxdl.deepq.com:5000/directory/new/'
data = ''
new_directory = requests.post(url, data=data)
print(new_directory.json())

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step2:Register a provider')
url = 'https://dxdl.deepq.com:5000/user/register'
data ={'directoryID': new_directory.json()["result"]["directoryID"],
       'userType': 'provider',
       'userID': '11111',
       'password': '11111'}
rig_provider = requests.post(url, data=data)
print(rig_provider.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step3:Register a consumer')
url = 'https://dxdl.deepq.com:5000/user/register'
data = {'directoryID': new_directory.json()["result"]["directoryID"],
        'userType': 'consumer',
        'userID': '22222',
        'password': '22222'}
rig_consumer = requests.post(url, data=data)
print(rig_consumer.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step4:Create a new data entry by a provider')
url = 'https://dxdl.deepq.com:5000/entry/create'
data = {'directoryID': new_directory.json()["result"]["directoryID"],
        'userID': '11111',
        'password': '11111',
        'offerPrice': '100000',
        'dueDate': '1556640000',
        'dataCertificate': 'yes123',
        'dataOwner': '123',
        'dataDescription': 'qqqq',
        'dataAccessPath': '/ffff'}
new_data = requests.post(url, data=data)
print(new_data.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step5:Deploy a new EAS for a provider and a consumer by the service')
url = 'https://dxdl.deepq.com:5000/eas/deploy'
data = {'directoryID':new_directory.json()["result"]["directoryID"],
        'userID':'22222',
        'dataCertificate':'yes123',
        'expirationDate':'1556640000',
        'providerAgreement':'yes11111',
        'consumerAgreement':'yes11111',}
new_EAS = requests.post(url, data=data)
print(new_EAS.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step6:Revoke an EAS by a user (provider or consumer)')
url = 'https://dxdl.deepq.com:5000/eas/revoke'
data = {'directoryID': new_directory.json()["result"]["directoryID"],
        'userType':'provider',
        'userID':'11111',
        'password':'11111',
        'EASID': new_EAS.json()["result"]["EASID"]}
revoke_eas = requests.post(url, data=data)
print(revoke_eas.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step7:Retrieve a data entry in a directory by entry index')
url = 'https://dxdl.deepq.com:5000/entry/index'
params = {'directoryID': new_directory.json()["result"]["directoryID"],
          'index':'0'}
get_index = requests.get(url, params=params)
print(get_index.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step8:Retrieve a data entry in a directory by data certificate')
url = 'https://dxdl.deepq.com:5000/entry/dctf'
params = {'directoryID': new_directory.json()["result"]["directoryID"],
          'dataCertificate':'yes123'}
get_dctf = requests.get(url, params=params)
print(get_dctf.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step9:Retrieve data entry count in a directory')
url = 'https://dxdl.deepq.com:5000/entry/count'
params = {'directoryID': new_directory.json()["result"]["directoryID"]}
count = requests.get(url, params=params)
print(count.json())


print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print('Step10:Retrieve EAS information by an EAS ID')
url = 'https://dxdl.deepq.com:5000/eas/sid'
params = {'EASID': new_EAS.json()["result"]["EASID"]}
eas_info = requests.get(url, params=params)
print(eas_info.json())

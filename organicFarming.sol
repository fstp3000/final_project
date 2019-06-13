pragma solidity ^0.5.1;

contract organicFarming {

  struct Farm {
      string location;
  }
  
  struct Plant {
      string plantName;
      uint ORGLevel;
      address buyer, seller;
      uint256 sellBy; //YYMMDD
  }
  
  struct Record {
      uint plant_id;
      uint timestamp; // block#
      uint ORGLevel;
  }
  
    Plant[] plants;
    Record[] records;

    mapping(address => Farm) ownerToFarm;
    mapping(uint => uint[]) plant_idToRecordiD;
    mapping(uint => address)plant_idToOwner;
    mapping(address => uint[])OwnerToRecordIds;
   /*-------------------------------------------------*/ 
   //  setFarm -> setPlant -> Record -> Record ->... //
   /*-------------------------------------------------*/ 
   
  function setFarm(string memory _location) public {
      ownerToFarm[msg.sender].location = _location;
  }
 
  function setPlant(string memory _plantName, uint _ORGLevel) public returns(uint) {
      Plant newPlant = Plant(_plantName,_ORGLevel, msg.sender);
      uint plant_id = plants.push(newPlant)-1; //starting status of plant
      plant_idToOwner[plant_id] = msg.sender;
      return plant_id;
  }
  
    function record(uint _plant_id,uint _ORGLevel) public returns(uint) {
      require(msg.sender == plant_idToOwner[_plant_id]);
      Farm memory farm =ownerToFarm[msg.sender];
      require(_plant_id < plants.length, "plant_id does not exist");
      require(farm.exists, "Farm has not been set");
      
      uint record_id = records.push(Record( _plant_id, block.number, _ORGLevel)) - 1;
      OwnerToRecordIds[msg.sender].push(record_id);
     
      
 
      return record_id;
     // _;
  }
  
  function getFarm()public view returns(string memory) {
      require(ownerToFarm[msg.sender].exists,"Farm has not been set");
      Farm memory farm =ownerToFarm[msg.sender];
      return (farm.location);
  }
  
  function getPlantById(uint _plant_id)public view returns( string memory, uint, address) {
      require(_plant_id<plants.length,"Plant does not exists");
      Plant memory plant = plants[_plant_id];
      return(plant.plantName,plant.ORGLevel,plant.farmOwner);
      /*  struct Plant{
      string plantName;
      uint ORGLevel;
      address farmOwner;//?*/
  }
  
  function getRecordByRecordId(uint _record_id)public view returns(uint,uint,uint){
      require(_record_id < records.length, "Record does not exist");
      Record memory record = records[_record_id];
      return(record.plant_id,record.timestamp,record.ORGLevel);
  }
  
  function getRecordIdByPlantId(uint _plant_id)public view returns(uint[] memory){
      require(_plant_id<plants.length,"Plant_id does not exists");
      return plant_idToRecordiD[_plant_id];
  }
  
  function getRecordId() public view returns(uint[] memory){
      require(ownerToFarm[msg.sender].location.length != 0,"Farm has not been set");
      return OwnerToRecordIds[msg.sender];
  }
  
}

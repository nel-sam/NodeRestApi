# NodeRestApi
A very very simple sample project to serve as an example of a RESTful API written in Node.js with Express. The API is currently hosted on Amazon Web Services (AWS) using BeanStalk.

### Retreive all devices currently on the server ###
  GET: http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices


### Retreive a specific device currently on the server ###
  GET: http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices/<id>
  
  Parameters:
    * id  [int] the ID of the device you wish to retreive 

  Example request: http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices/2


### Create a new device [currently broken] ###
  POST: http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices

  Request body (JSON): 
    * id              [int]     The dew device's ID (must not already exist)
    * name            [string]  The devices name
    * yearPurchased   [int]     The year in which the device was purchased

    Example request body: ``` {"id":3,"name":"Smart Watch","yearPurchased":2017} ```


### Delete an existing device ###
  DELETE
  http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices/<id>
  Parameters:
    * id  [int] the ID of the device you wish to delete 
  Example request: http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices/3

### Update a device [currently broken] ###
  POST
  http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices/<id>
  Parameters: id  [int] the ID of the device you wish to retreive 

  Request body (JSON): 
    * id              [int]     The dew device's ID (must not already exist)
    * name            [string]  The devices name
    * yearPurchased   [int]     The year in which the device was purchased

    Example request: http://noderestapidemo-env.mcusxpdd2n.us-west-1.elasticbeanstalk.com/Devices/3

    Example request body: ``` {"id":3,"name":"Smart Watch","yearPurchased":2017} ```

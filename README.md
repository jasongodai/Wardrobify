# Wardrobify

Team:
Jason Dai - Shoes
Esther Kim - Hats

## Design

## Shoes microservice: Jason Dai

The models written in the shoes microservice and wardrobe microservice are used to represent data in a database, and are integrated with Django's ORM system.

We built a Bin Value Object model because we wanted this to be immutable as its purpose was to referenced and not change or alter the database.

The Shoe model has a foreign key to the BinVO model, which creates a one to many relationship between bins and shoes. This means that a bin can have multiple shoes but a shoe can only belong to one bin.

Inside poller.py, the code relates to the models in that it uses the BinVO model to create and update the records in the datbase based on data retrieved from the wardrobe microservice by polling the data every 60 seconds. This integration of the wardrobe microservice and BinVO model allows the application to keep the data up to date with the wardrobe microservice.

## Hats microservice: Esther Kim

In the Hats microservice, we built a Hat model entity so that it can be uniquely identified within this microservice's specific database. Within the Hat model, we added the location as a foreign key as there can be many hats within one location. We also built a Location Value Object because we wanted this model to be immutable and fungible, as it is meant to be reference data and does not play an active role in the evolution of data in our system.

We integrated the wardrobe microservice by creating a poller that requests data from the wardrobe API port periodically to update our own LocationVO database in order to not alter wardrobe API's Location data.

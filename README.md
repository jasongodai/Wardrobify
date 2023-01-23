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

Explain your models and integration with the wardrobe
microservice, here.

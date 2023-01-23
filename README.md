# Wardrobify

Team:

* Person 1 - Which microservice?
Jason Dai - Shoes
* Person 2 - Which microservice?
Esther Kim - Hats

## Design

## Shoes microservice: Jason Dai

Explain your models and integration with the wardrobe
microservice, here.


## Hats microservice: Esther Kim

In the Hats microservice, we built a Hat model entity so that it can be uniquely identified within this microservice's specific database. Within the Hat model, we added the location as a foreign key as there can be many hats within one location. We also built a Location Value Object because we wanted this model to be immutable and fungible, as it is meant to be reference data and does not play an active role in the evolution of data in our system.

We integrated the wardrobe microservice by creating a poller that requests data from the wardrobe API port periodically to update our own LocationVO database in order to not alter wardrobe API's Location data.

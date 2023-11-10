import { client } from "@/sanity/lib/client"

const fetchServices = async () => {
  const services = await client.fetch(
    '*[_type == "services"]',
    {},
    {
      cache: 'no-cache',
    }
    
    );
  console.log('Fetching services', services);
  return services;
}


 async function  Counter() {
 const services = await fetchServices();
  return (
    <div>
    <h1>Data from Sanity</h1>
   {
    services.map((service)=>{
      return (
        <>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <p>{service._updatedAt}</p>
        {/* <img src={service.mainImage.asset._ref} width={200} alt={service.mainImage.alt} /> */}
        <hr />
        </>
      )
    })
   }
      
    </div>
  )
}
export default Counter
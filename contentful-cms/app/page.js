import client from "@/lib/contentfulClient"

const fetchServices = async () => {
  let responce = await client.getEntries({content_type: "services"})
 
  const services = responce.items.map((item) => {
    return{
      title: item.fields.title,
      description: item.fields.description,
      image: item.fields.image.fields.file.url,
    }
  })
  return services
}
export default async function Home() {
  const services = await fetchServices()
  console.log("fetchServices",services);
  return (
   <div>
   <h1>Home Services</h1>

   {
    services.map((service, i) => {
      return(
        <div key={i}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <img src={service.image} style={{width:"200px"}} />
          <hr />
        </div>
      )
    })
   }
   </div>

  )
}

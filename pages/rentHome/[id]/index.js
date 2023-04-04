import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import PropertyDetails from "../../../components/PropertyDetails"
import Contact from "../../../components/Contact"

export default function detailsPage({property}) {


  return (property &&
    <>
      <Navbar showAuth={true} black={true}/>
       <PropertyDetails details={property}/>
      <Footer />
      <Contact />
    </>
  )
}



export async function getStaticPaths() {

  const res = await fetch("https://us-real-estate.p.rapidapi.com/for-rent?city=LasVegas&state_code=NV", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEW_KEY,
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
  })

  const properties = await res.json();
  if(properties.status !== 200) return { paths: [], fallback: "blocking" }

  if(!properties.data.results) return { paths: [], fallback: "blocking" }

  if(properties.status === 200) {
  const paths = properties.data.results.map(property => ({
    params: { id: property.property_id.toString() },
  }))

  return { paths, fallback: "blocking" }
}
}


export async function getStaticProps({ params }) {

  let property = '';
  let error = '';

  try {
    const res = await fetch(`https://us-real-estate.p.rapidapi.com/property-detail?property_id=${params.id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEW_KEY,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    })
    const data  = await res.json();
    if (data.status === 200) {
      property = data
    }else {
      error = 'Could not fetch data'
    }
  } catch (err) {
    error = err.message;
    console.log(err);
  }


  return {
    props: { property, error}
  };
}


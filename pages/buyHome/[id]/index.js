import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import PropertyDetails from "../../../components/PropertyDetails"

export default function index({property}) {


  return (property &&
    <>
      <Navbar showAuth={true} black={true}/>
       <PropertyDetails details={property}/>
      <Footer />
    </>
  )
}



export async function getStaticPaths() {
  const paths = [{params: {id: "1"}}, {params: {id: "2"}}, {params: {id: "3"}}]

  return { paths, fallback: true }
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
  }


  return {
    props: { property, error}
  };
}


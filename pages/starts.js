function Page({ stars }) {
    return <div>Next stars: {stars.label}</div>
  }
  
  Page.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/dataCharts')
    const json = await res.json()
    return { stars: json }
  }
  
  export default Page
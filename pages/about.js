import Head from "next/head";

const about = () => {
  return (
     <div>
         <Head>
           <title>About</title>
           <link rel="icon" href="/vercel.svg"/>
         </Head>
         <p className="greenColor bigText">About Page</p>

         <style jsx>{`
          .greenColor {
            color:green;
          }

          .bigText {
            font-size: 150px
          }
         `}</style>
  </div>
  )
  
};

export default about;

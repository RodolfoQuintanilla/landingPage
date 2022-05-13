import oculus from '../img/image-interactive.jpg';

const Foto1 = () => {
   return (
      <article className="foto1">
         <section className="foto1__section">
            <img src={oculus} alt="aaaa" className="foto1__img" />
         </section>


         <section className="foto1__container">
            <h1 className="foto1 __titulo">The leader in interactive VR</h1>
            <p className="foto1__parrafo">
               Founded in 2011, Loopstudios has been producing world-class virtual reality
               projects for some of the best companies around the globe. Our award-winning
               creations have transformed businesses through digital experiences that bind
               to their brand.
            </p>

         </section>
      </article>
   );
};

export default Foto1;
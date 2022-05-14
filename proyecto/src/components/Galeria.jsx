

const Galeria = () => {
   return (
      <article className="galeria">
         <section className="galeria__titulo">
            <h2 className="galeria__h2">
               OUR CREATIONS
            </h2>
            <button className="galeria__botones">Click</button>
         </section>

         <section className="galeria__container">
            <div className="galeria__img1 galeria__tajeta">
               <h2>depp earth</h2>
            </div>
            <div className="galeria__img2 galeria__tajeta">
               <h2>night arcade</h2>
            </div>
            <div className="galeria__img3 galeria__tajeta">
               <h2>soccer team vr</h2>
            </div>
            <div className="galeria__img4 galeria__tajeta">
               <h2>the grid</h2>
            </div>
         </section>
         <section className="galeria__container2">
            <div className="galeria__img5 galeria__tajeta">
               <h2>from up above vr</h2>
            </div>
            <div className="galeria__img6 galeria__tajeta">
               <h2>pocket borealis</h2>
            </div>
            <div className="galeria__img7 galeria__tajeta">
               <h2>the curiosity</h2>
            </div>
            <div className="galeria__img8 galeria__tajeta">
               <h2>make it fisheye</h2>
            </div>
         </section>
      </article>
   );
};

export default Galeria;